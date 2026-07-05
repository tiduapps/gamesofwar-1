import type { Story, StoryGameLink, StoryWithGames } from '$lib/types/database';

type StoryRow = Story & {
	story_games: Array<
		StoryGameLink & {
			games:
				| { id: string; title: string; slug: string; year: number | null }
				| { id: string; title: string; slug: string; year: number | null }[]
				| null;
		}
	>;
};

function normalizeGame(
	games: StoryRow['story_games'][number]['games']
): StoryWithGames['games'][number]['game'] {
	if (!games) return null;
	const game = Array.isArray(games) ? games[0] : games;
	return game ?? null;
}

export function buildStoryList(rows: StoryRow[]): StoryWithGames[] {
	return [...rows]
		.sort((a, b) => a.sort_order - b.sort_order)
		.map((row) => ({
			id: row.id,
			title: row.title,
			slug: row.slug,
			sort_order: row.sort_order,
			is_active: row.is_active,
			games: [...(row.story_games ?? [])]
				.sort((a, b) => a.sort_order - b.sort_order)
				.map((link) => ({
					id: link.id,
					story_id: link.story_id,
					game_id: link.game_id,
					sort_order: link.sort_order,
					game: normalizeGame(link.games)
				}))
		}));
}

export async function swapStoryOrder(
	supabase: import('@supabase/supabase-js').SupabaseClient,
	storyId: string,
	direction: 'up' | 'down'
) {
	const { data: siblings, error: siblingsError } = await supabase
		.from('stories')
		.select('id, sort_order')
		.order('sort_order');

	if (siblingsError || !siblings) {
		return { error: siblingsError?.message ?? 'Could not load stories.' };
	}

	const index = siblings.findIndex((s) => s.id === storyId);
	if (index < 0) {
		return { error: 'Story not found.' };
	}

	const swapIndex = direction === 'up' ? index - 1 : index + 1;
	if (swapIndex < 0 || swapIndex >= siblings.length) {
		return { ok: true };
	}

	const story = siblings[index];
	const other = siblings[swapIndex];
	const updates = [
		supabase.from('stories').update({ sort_order: other.sort_order }).eq('id', story.id),
		supabase.from('stories').update({ sort_order: story.sort_order }).eq('id', other.id)
	];

	const results = await Promise.all(updates);
	const failed = results.find((result) => result.error);
	if (failed?.error) {
		return { error: failed.error.message };
	}

	return { ok: true };
}

export async function swapStoryGameOrder(
	supabase: import('@supabase/supabase-js').SupabaseClient,
	linkId: string,
	direction: 'up' | 'down'
) {
	const { data: link, error: linkError } = await supabase
		.from('story_games')
		.select('id, story_id, sort_order')
		.eq('id', linkId)
		.single();

	if (linkError || !link) {
		return { error: linkError?.message ?? 'Game link not found.' };
	}

	const { data: siblings, error: siblingsError } = await supabase
		.from('story_games')
		.select('id, sort_order')
		.eq('story_id', link.story_id)
		.order('sort_order');

	if (siblingsError || !siblings) {
		return { error: siblingsError?.message ?? 'Could not load linked games.' };
	}

	const index = siblings.findIndex((s) => s.id === linkId);
	const swapIndex = direction === 'up' ? index - 1 : index + 1;
	if (index < 0 || swapIndex < 0 || swapIndex >= siblings.length) {
		return { ok: true };
	}

	const other = siblings[swapIndex];
	const updates = [
		supabase.from('story_games').update({ sort_order: other.sort_order }).eq('id', link.id),
		supabase.from('story_games').update({ sort_order: link.sort_order }).eq('id', other.id)
	];

	const results = await Promise.all(updates);
	const failed = results.find((result) => result.error);
	if (failed?.error) {
		return { error: failed.error.message };
	}

	return { ok: true };
}

export async function nextStorySortOrder(supabase: import('@supabase/supabase-js').SupabaseClient) {
	const { data } = await supabase
		.from('stories')
		.select('sort_order')
		.order('sort_order', { ascending: false })
		.limit(1);

	return (data?.[0]?.sort_order ?? 0) + 10;
}

export async function nextStoryGameSortOrder(
	supabase: import('@supabase/supabase-js').SupabaseClient,
	storyId: string
) {
	const { data } = await supabase
		.from('story_games')
		.select('sort_order')
		.eq('story_id', storyId)
		.order('sort_order', { ascending: false })
		.limit(1);

	return (data?.[0]?.sort_order ?? 0) + 10;
}
