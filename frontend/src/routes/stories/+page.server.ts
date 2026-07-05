import { buildStoryList } from '$lib/stories/admin';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { StoryWithGames } from '$lib/types/database';
import type { PageServerLoad } from './$types';

const storySelect = `
  id, title, slug, sort_order, is_active,
  story_games (
    id, story_id, game_id, sort_order,
    games ( id, title, slug, year, cover_photo_url )
  )
`;

export const load: PageServerLoad = async ({ cookies }) => {
	if (!isSupabaseConfigured()) {
		return { stories: [] as StoryWithGames[] };
	}

	const supabase = createSupabaseServerClient(cookies);
	const { data, error } = await supabase
		.from('stories')
		.select(storySelect)
		.eq('is_active', true)
		.order('sort_order');

	if (error) {
		console.error(error);
		return { stories: [] as StoryWithGames[] };
	}

	return { stories: buildStoryList(data ?? []) };
};
