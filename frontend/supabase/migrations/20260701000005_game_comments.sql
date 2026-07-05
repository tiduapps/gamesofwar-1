-- Visitor comments on games (moderated before public display)

CREATE TABLE public.game_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES public.games (id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes TEXT,
  reviewed_by UUID REFERENCES auth.users (id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT game_comments_pending_review_fields CHECK (
    status <> 'pending'
    OR (reviewed_by IS NULL AND reviewed_at IS NULL AND admin_notes IS NULL)
  ),
  CONSTRAINT game_comments_author_name_len CHECK (char_length(trim(author_name)) >= 1),
  CONSTRAINT game_comments_author_email_len CHECK (char_length(trim(author_email)) >= 3),
  CONSTRAINT game_comments_body_len CHECK (char_length(trim(body)) >= 3)
);

CREATE INDEX game_comments_game_id_idx ON public.game_comments (game_id);
CREATE INDEX game_comments_status_idx ON public.game_comments (status);
CREATE INDEX game_comments_created_at_idx ON public.game_comments (created_at DESC);
CREATE INDEX game_comments_game_approved_idx
  ON public.game_comments (game_id, created_at)
  WHERE status = 'approved';

CREATE TRIGGER game_comments_updated_at
  BEFORE UPDATE ON public.game_comments
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.game_comments ENABLE ROW LEVEL SECURITY;

-- Public: read approved comments only (email never selected in app queries)
CREATE POLICY "game_comments_public_read_approved"
  ON public.game_comments FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

-- Public: submit pending comments
CREATE POLICY "game_comments_public_insert"
  ON public.game_comments FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'pending'
    AND reviewed_by IS NULL
    AND reviewed_at IS NULL
    AND admin_notes IS NULL
    AND char_length(trim(author_name)) >= 1
    AND char_length(trim(author_email)) >= 3
    AND char_length(trim(body)) >= 3
    AND game_id IS NOT NULL
  );

-- Admin: full access
CREATE POLICY "game_comments_admin_all"
  ON public.game_comments FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE OR REPLACE FUNCTION public.approve_game_comment(comment_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  UPDATE public.game_comments
  SET
    status = 'approved',
    reviewed_by = auth.uid(),
    reviewed_at = now()
  WHERE id = comment_id
    AND status = 'pending';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Pending comment not found';
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION public.reject_game_comment(
  comment_id UUID,
  note TEXT DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  UPDATE public.game_comments
  SET
    status = 'rejected',
    admin_notes = note,
    reviewed_by = auth.uid(),
    reviewed_at = now()
  WHERE id = comment_id
    AND status = 'pending';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Pending comment not found';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.approve_game_comment(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.reject_game_comment(UUID, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.approve_game_comment(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.reject_game_comment(UUID, TEXT) TO authenticated;
