-- Games of War: initial database schema

-- ---------------------------------------------------------------------------
-- Games (migrated from Wix collection)
-- ---------------------------------------------------------------------------
CREATE TABLE public.games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wix_id UUID UNIQUE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  year INTEGER,
  country TEXT,
  publisher TEXT,
  description TEXT,
  mechanism TEXT,
  rules TEXT,
  theme TEXT,
  cover_photo_url TEXT,
  photo_urls TEXT[] NOT NULL DEFAULT '{}',
  legacy_numeric_id INTEGER,
  owner_id UUID,
  wix_created_at TIMESTAMPTZ,
  wix_updated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX games_title_idx ON public.games (title);
CREATE INDEX games_year_idx ON public.games (year);
CREATE INDEX games_theme_idx ON public.games (theme);

-- ---------------------------------------------------------------------------
-- Homepage featured collection links (e.g. Don Cermak Collection)
-- ---------------------------------------------------------------------------
CREATE TABLE public.featured_collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  href TEXT NOT NULL,
  position TEXT NOT NULL CHECK (position IN ('left', 'right')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX featured_collections_active_sort_idx
  ON public.featured_collections (is_active, sort_order);

-- ---------------------------------------------------------------------------
-- Homepage announcements ("Did you know?" section)
-- ---------------------------------------------------------------------------
CREATE TABLE public.announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fact TEXT NOT NULL,
  game_id UUID REFERENCES public.games (id) ON DELETE SET NULL,
  button_label TEXT NOT NULL DEFAULT 'See Game',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX announcements_active_sort_idx
  ON public.announcements (is_active, sort_order);

-- ---------------------------------------------------------------------------
-- Visitor game submissions (pending admin review)
-- ---------------------------------------------------------------------------
CREATE TABLE public.game_submissions (
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

CREATE INDEX game_submissions_status_idx ON public.game_submissions (status);
CREATE INDEX game_submissions_created_at_idx ON public.game_submissions (created_at DESC);

-- ---------------------------------------------------------------------------
-- Admin access (linked to Supabase Auth users)
-- ---------------------------------------------------------------------------
CREATE TABLE public.admin_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  is_admin BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- updated_at trigger
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER games_updated_at
  BEFORE UPDATE ON public.games
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER featured_collections_updated_at
  BEFORE UPDATE ON public.featured_collections
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER announcements_updated_at
  BEFORE UPDATE ON public.announcements
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER game_submissions_updated_at
  BEFORE UPDATE ON public.game_submissions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.featured_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_profiles
    WHERE user_id = auth.uid()
      AND is_admin = true
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Public read access
CREATE POLICY "games_public_read"
  ON public.games FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "featured_collections_public_read"
  ON public.featured_collections FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "announcements_public_read"
  ON public.announcements FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Visitors may submit games for review; they cannot read or modify submissions.
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

-- Admin full access
CREATE POLICY "games_admin_all"
  ON public.games FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "featured_collections_admin_all"
  ON public.featured_collections FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "announcements_admin_all"
  ON public.announcements FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "game_submissions_admin_all"
  ON public.game_submissions FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "admin_profiles_self_read"
  ON public.admin_profiles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "admin_profiles_admin_manage"
  ON public.admin_profiles FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ---------------------------------------------------------------------------
-- Admin workflow: approve / reject game submissions
-- ---------------------------------------------------------------------------
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
    title,
    slug,
    year,
    country,
    publisher,
    description,
    mechanism,
    rules,
    theme,
    cover_photo_url,
    photo_urls
  ) VALUES (
    submission.title,
    new_slug,
    submission.year,
    submission.country,
    submission.publisher,
    submission.description,
    submission.mechanism,
    submission.rules,
    submission.theme,
    submission.cover_photo_url,
    submission.photo_urls
  )
  RETURNING id INTO new_game_id;

  UPDATE public.game_submissions
  SET
    status = 'approved',
    approved_game_id = new_game_id,
    reviewed_by = auth.uid(),
    reviewed_at = now()
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
  SET
    status = 'rejected',
    admin_notes = note,
    reviewed_by = auth.uid(),
    reviewed_at = now()
  WHERE id = submission_id
    AND status = 'pending';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Pending submission not found';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.approve_game_submission(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.reject_game_submission(UUID, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.approve_game_submission(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.reject_game_submission(UUID, TEXT) TO authenticated;
