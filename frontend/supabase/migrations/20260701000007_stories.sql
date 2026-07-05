-- Stories hierarchy (eras → chapters) and linked games

CREATE TABLE public.stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID REFERENCES public.stories (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX stories_parent_sort_idx ON public.stories (parent_id, sort_order);
CREATE INDEX stories_active_sort_idx ON public.stories (is_active, sort_order);

CREATE TABLE public.story_games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID NOT NULL REFERENCES public.stories (id) ON DELETE CASCADE,
  game_id UUID NOT NULL REFERENCES public.games (id) ON DELETE CASCADE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (story_id, game_id)
);

CREATE INDEX story_games_story_sort_idx ON public.story_games (story_id, sort_order);

CREATE TRIGGER stories_updated_at
  BEFORE UPDATE ON public.stories
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.unique_story_slug(base_title TEXT)
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
    base_slug := 'story';
  END IF;
  candidate := base_slug;

  WHILE EXISTS (SELECT 1 FROM public.stories WHERE slug = candidate) LOOP
    suffix := suffix + 1;
    candidate := base_slug || '-' || suffix::TEXT;
  END LOOP;

  RETURN candidate;
END;
$$;

ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.story_games ENABLE ROW LEVEL SECURITY;

CREATE POLICY "stories_public_read"
  ON public.stories FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "story_games_public_read"
  ON public.story_games FOR SELECT
  TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.stories s
      WHERE s.id = story_id AND s.is_active = true
    )
  );

CREATE POLICY "stories_admin_all"
  ON public.stories FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "story_games_admin_all"
  ON public.story_games FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Seed story structure from the original site navigation
DO $$
DECLARE
  great_game_id UUID;
  age_empires_id UUID;
  ww1_id UUID;
  peace_id UUID;
  ww2_id UUID;
BEGIN
  IF EXISTS (SELECT 1 FROM public.stories LIMIT 1) THEN
    RETURN;
  END IF;

  INSERT INTO public.stories (title, slug, sort_order)
  VALUES ('The Great Game', 'the-great-game', 10)
  RETURNING id INTO great_game_id;

  INSERT INTO public.stories (parent_id, title, slug, sort_order) VALUES
    (great_game_id, 'Combined Aims', 'combined-aims', 10),
    (great_game_id, 'Recruiting for War', 'recruiting-for-war', 20),
    (great_game_id, 'Enthusiasm for War', 'enthusiasm-for-war', 30),
    (great_game_id, 'Sinews of War', 'sinews-of-war', 40),
    (great_game_id, 'War and Remembrance', 'war-and-remembrance', 50);

  INSERT INTO public.stories (title, slug, sort_order)
  VALUES ('The Age of Empires', 'the-age-of-empires', 20)
  RETURNING id INTO age_empires_id;

  INSERT INTO public.stories (parent_id, title, slug, sort_order) VALUES
    (age_empires_id, 'The Napoleonic Era', 'the-napoleonic-era', 10),
    (age_empires_id, 'The Victorian Era', 'the-victorian-era', 20),
    (age_empires_id, 'The American Civil War', 'the-american-civil-war', 30),
    (age_empires_id, 'The Franco-Prussian War', 'the-franco-prussian-war', 40),
    (age_empires_id, 'The Boer Wars', 'the-boer-wars', 50),
    (age_empires_id, 'The Spanish-American War', 'the-spanish-american-war', 60),
    (age_empires_id, 'The Russo-Japanese War', 'the-russo-japanese-war', 70),
    (age_empires_id, 'The Path to Global War', 'the-path-to-global-war', 80);

  INSERT INTO public.stories (title, slug, sort_order)
  VALUES ('World War I', 'world-war-i', 30)
  RETURNING id INTO ww1_id;

  INSERT INTO public.stories (parent_id, title, slug, sort_order) VALUES
    (ww1_id, 'War in the Trenches', 'war-in-the-trenches', 10),
    (ww1_id, 'War at Sea', 'war-at-sea', 20),
    (ww1_id, 'War in the Air', 'war-in-the-air', 30),
    (ww1_id, 'The Big Picture', 'the-big-picture', 40);

  INSERT INTO public.stories (title, slug, sort_order)
  VALUES ('Peace for a Time', 'peace-for-a-time', 40)
  RETURNING id INTO peace_id;

  INSERT INTO public.stories (parent_id, title, slug, sort_order) VALUES
    (peace_id, 'Inventing for War', 'inventing-for-war', 10),
    (peace_id, 'Preventing War', 'preventing-war', 20),
    (peace_id, 'Preparing for War', 'preparing-for-war', 30),
    (peace_id, 'Roads to War', 'roads-to-war', 40);

  INSERT INTO public.stories (title, slug, sort_order)
  VALUES ('World War II', 'world-war-ii', 50)
  RETURNING id INTO ww2_id;

  INSERT INTO public.stories (parent_id, title, slug, sort_order) VALUES
    (ww2_id, 'Blitzkrieg', 'blitzkrieg', 10),
    (ww2_id, 'Battle of Britain', 'battle-of-britain', 20),
    (ww2_id, 'Battle of the Atlantic', 'battle-of-the-atlantic', 30),
    (ww2_id, 'Bombing the Reich', 'bombing-the-reich', 40);
END $$;
