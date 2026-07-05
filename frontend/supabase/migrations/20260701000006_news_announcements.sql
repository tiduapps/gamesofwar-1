-- Extend announcements for homepage "Did you know?" and News & Events page content

ALTER TABLE public.announcements
  ADD COLUMN IF NOT EXISTS placement TEXT NOT NULL DEFAULT 'homepage'
    CHECK (placement IN ('homepage', 'news')),
  ADD COLUMN IF NOT EXISTS eyebrow TEXT,
  ADD COLUMN IF NOT EXISTS headline TEXT,
  ADD COLUMN IF NOT EXISTS date_range TEXT,
  ADD COLUMN IF NOT EXISTS location_name TEXT,
  ADD COLUMN IF NOT EXISTS location_address TEXT,
  ADD COLUMN IF NOT EXISTS link_intro TEXT,
  ADD COLUMN IF NOT EXISTS link_url TEXT,
  ADD COLUMN IF NOT EXISTS link_label TEXT;

CREATE INDEX IF NOT EXISTS announcements_placement_active_sort_idx
  ON public.announcements (placement, is_active, sort_order);

INSERT INTO public.announcements (
  placement,
  eyebrow,
  headline,
  fact,
  date_range,
  location_name,
  location_address,
  link_intro,
  link_url,
  link_label,
  button_label,
  sort_order,
  is_active
)
SELECT
  'news',
  'War Games',
  'Exhibition at the Canadian War Museum',
  'Exhibition at the Canadian War Museum',
  'June 9, 2023 - December 31, 2023',
  'Lieutenant-Colonel John McCrae Gallery',
  '1 Vimy Place, Ottawa, ON K1A 0M8',
  'For more information or to buy tickets, visit the Canadian War Museum site at:',
  'https://www.warmuseum.ca/war/games/exhibitions/war-games/',
  'War Games | Canadian War Museum',
  'See Game',
  1,
  true
WHERE NOT EXISTS (
  SELECT 1 FROM public.announcements WHERE placement = 'news'
);
