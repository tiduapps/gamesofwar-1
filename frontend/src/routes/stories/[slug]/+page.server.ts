import { error } from '@sveltejs/kit';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { PageServerLoad } from './$types';

type LinkedGame = {
	id: string;
	title: string;
	slug: string;
	year: number | null;
	country: string | null;
	publisher: string | null;
	cover_photo_url: string | null;
	description: string | null;
};

type StoryNav = { title: string; slug: string };

export const load: PageServerLoad = async ({ params, cookies }) => {
	if (!isSupabaseConfigured()) {
		throw error(404, 'Story not found');
	}

	const supabase = createSupabaseServerClient(cookies);

	const { data: story, error: storyError } = await supabase
		.from('stories')
		.select('id, title, slug, sort_order, is_active')
		.eq('slug', params.slug)
		.eq('is_active', true)
		.maybeSingle();

	if (storyError || !story) {
		throw error(404, 'Story not found');
	}

	const { data: allStories } = await supabase
		.from('stories')
		.select('title, slug, sort_order')
		.eq('is_active', true)
		.order('sort_order');

	const storyIndex = (allStories ?? []).findIndex((row) => row.slug === story.slug);
	const prevStory: StoryNav | null =
		storyIndex > 0
			? {
					title: allStories![storyIndex - 1].title,
					slug: allStories![storyIndex - 1].slug
				}
			: null;
	const nextStory: StoryNav | null =
		storyIndex >= 0 && storyIndex < (allStories?.length ?? 0) - 1
			? {
					title: allStories![storyIndex + 1].title,
					slug: allStories![storyIndex + 1].slug
				}
			: null;

	const { data: games, error: gamesError } = await supabase
		.from('story_games')
		.select(
			'id, sort_order, games(id, title, slug, year, country, publisher, cover_photo_url, description)'
		)
		.eq('story_id', story.id)
		.order('sort_order');

	if (gamesError) {
		console.error(gamesError);
	}

	return {
		story: {
			id: story.id,
			title: story.title,
			slug: story.slug
		},
		gameCount: (games ?? []).length,
		prevStory,
		nextStory,
		games: (games ?? [])
			.map((row) => {
				const game = Array.isArray(row.games) ? row.games[0] : row.games;
				return game
					? ({
							id: game.id,
							title: game.title,
							slug: game.slug,
							year: game.year,
							country: game.country,
							publisher: game.publisher,
							cover_photo_url: game.cover_photo_url,
							description: game.description
						} satisfies LinkedGame)
					: null;
			})
			.filter((game): game is LinkedGame => game !== null)
	};
};
