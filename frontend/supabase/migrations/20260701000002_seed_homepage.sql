-- Seed homepage content matching the existing Wix site

INSERT INTO public.featured_collections (title, href, position, sort_order) VALUES
  ('Don Cermak Collection', '/games?collection=don-cermak', 'left', 1),
  ('Latest Additions', '/games?sort=latest', 'right', 1);

INSERT INTO public.announcements (fact, button_label, sort_order) VALUES
  (
    'In October 1917 British pilots invented their own war game.',
    'See Game',
    1
  ),
  (
    'By November 1917 German troops started playing a new game about the Battle of Tannenberg.',
    'See Game',
    2
  ),
  (
    'As soon as Japan had taken the Chinese city of Lüshun (Port Arthur) in January 1895 a parlor game about the siege hit the market.',
    'See Game',
    3
  ),
  (
    'In 1790 a game was published about a 1783 treaty ending the American War of Independence.',
    'See Game',
    4
  );
