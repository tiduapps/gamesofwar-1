-- Migration for databases created with did_you_know_items table name

DO $$
BEGIN
  IF to_regclass('public.did_you_know_items') IS NOT NULL
     AND to_regclass('public.announcements') IS NULL THEN
    ALTER TABLE public.did_you_know_items RENAME TO announcements;
    ALTER INDEX IF EXISTS did_you_know_items_active_sort_idx RENAME TO announcements_active_sort_idx;
    ALTER TRIGGER did_you_know_items_updated_at ON public.announcements
      RENAME TO announcements_updated_at;
  END IF;
END $$;

-- game_submissions (skip if already present from updated initial migration)
CREATE TABLE IF NOT EXISTS public.game_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  year INTEGER,
  country TEXT,
  publisher TEXT,
  description TEXT,
  mechanism TEXT,
  rules TEXT,
  theme TEXT,
  cover_photo_url TEXT,
  photo_urls TEXT[] NOT NULL DEFAULT '{}',
  submitter_name TEXT,
  submitter_email TEXT NOT NULL,
  submitter_notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes TEXT,
  reviewed_by UUID REFERENCES auth.users (id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  approved_game_id UUID REFERENCES public.games (id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT game_submissions_pending_review_fields CHECK (
    status <> 'pending'
    OR (reviewed_by IS NULL AND reviewed_at IS NULL AND approved_game_id IS NULL)
  )
);

CREATE INDEX IF NOT EXISTS game_submissions_status_idx ON public.game_submissions (status);
CREATE INDEX IF NOT EXISTS game_submissions_created_at_idx ON public.game_submissions (created_at DESC);

DROP TRIGGER IF EXISTS game_submissions_updated_at ON public.game_submissions;
CREATE TRIGGER game_submissions_updated_at
  BEFORE UPDATE ON public.game_submissions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.game_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "did_you_know_public_read" ON public.announcements;
DROP POLICY IF EXISTS "announcements_public_read" ON public.announcements;
CREATE POLICY "announcements_public_read"
  ON public.announcements FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

DROP POLICY IF EXISTS "did_you_know_admin_all" ON public.announcements;
DROP POLICY IF EXISTS "announcements_admin_all" ON public.announcements;
CREATE POLICY "announcements_admin_all"
  ON public.announcements FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "game_submissions_public_insert" ON public.game_submissions;
CREATE POLICY "game_submissions_public_insert"
  ON public.game_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'pending'
    AND reviewed_by IS NULL
    AND reviewed_at IS NULL
    AND approved_game_id IS NULL
    AND admin_notes IS NULL
    AND char_length(trim(title)) > 0
    AND char_length(trim(submitter_email)) > 0
  );

DROP POLICY IF EXISTS "game_submissions_admin_all" ON public.game_submissions;
CREATE POLICY "game_submissions_admin_all"
  ON public.game_submissions FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Admin workflow functions (idempotent)
CREATE OR REPLACE FUNCTION public.slugify_title(input TEXT)
RETURNS TEXT
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT trim(both '-' from lower(regexp_replace(regexp_replace(input, '[^a-zA-Z0-9]+', '-', 'g'), '-+', '-', 'g')));
$$;

CREATE OR REPLACE FUNCTION public.unique_game_slug(base_title TEXT)
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  base_slug TEXT;
  candidate TEXT;
  suffix INTEGER := 0;
BEGIN
  base_slug := public.slugify_title(base_title);
  IF base_slug = '' THEN
    base_slug := 'game';
  END IF;
  candidate := base_slug;

  WHILE EXISTS (SELECT 1 FROM public.games WHERE slug = candidate) LOOP
    suffix := suffix + 1;
    candidate := base_slug || '-' || suffix::TEXT;
  END LOOP;

  RETURN candidate;
END;
$$;

CREATE OR REPLACE FUNCTION public.approve_game_submission(submission_id UUID)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  submission public.game_submissions%ROWTYPE;
  new_game_id UUID;
  new_slug TEXT;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  SELECT * INTO submission
  FROM public.game_submissions
  WHERE id = submission_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Submission not found';
  END IF;

  IF submission.status <> 'pending' THEN
    RAISE EXCEPTION 'Submission already reviewed';
  END IF;

  new_slug := public.unique_game_slug(submission.title);

  INSERT INTO public.games (
    title, slug, year, country, publisher, description,
    mechanism, rules, theme, cover_photo_url, photo_urls
  ) VALUES (
    submission.title, new_slug, submission.year, submission.country,
    submission.publisher, submission.description, submission.mechanism,
    submission.rules, submission.theme, submission.cover_photo_url,
    submission.photo_urls
  )
  RETURNING id INTO new_game_id;

  UPDATE public.game_submissions
  SET status = 'approved', approved_game_id = new_game_id,
      reviewed_by = auth.uid(), reviewed_at = now()
  WHERE id = submission_id;

  RETURN new_game_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.reject_game_submission(
  submission_id UUID,
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

  UPDATE public.game_submissions
  SET status = 'rejected', admin_notes = note,
      reviewed_by = auth.uid(), reviewed_at = now()
  WHERE id = submission_id AND status = 'pending';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Pending submission not found';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.approve_game_submission(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.reject_game_submission(UUID, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.approve_game_submission(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.reject_game_submission(UUID, TEXT) TO authenticated;
