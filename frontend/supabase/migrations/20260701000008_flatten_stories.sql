-- Flatten stories: one level only (story → linked games)

UPDATE public.stories AS s
SET
  sort_order = sub.new_sort,
  parent_id = NULL
FROM (
  SELECT
    stories.id,
    (ROW_NUMBER() OVER (
      ORDER BY
        COALESCE(p.sort_order, stories.sort_order),
        CASE WHEN stories.parent_id IS NULL THEN 0 ELSE 1 END,
        stories.sort_order
    )) * 10 AS new_sort
  FROM public.stories
  LEFT JOIN public.stories AS p ON stories.parent_id = p.id
) AS sub
WHERE s.id = sub.id;

ALTER TABLE public.stories DROP COLUMN IF EXISTS parent_id;
DROP INDEX IF EXISTS stories_parent_sort_idx;

CREATE INDEX IF NOT EXISTS stories_sort_idx ON public.stories (sort_order);
