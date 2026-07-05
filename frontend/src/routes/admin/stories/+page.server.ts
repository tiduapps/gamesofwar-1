import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import {
	buildStoryList,
	nextStoryGameSortOrder,
	nextStorySortOrder,
	swapStoryGameOrder,
	swapStoryOrder
} from '$lib/stories/admin';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { StoryWithGames } from '$lib/types/database';
import type { Actions, PageServerLoad } from './$types';

const storySelect = `
  id, title, slug, sort_order, is_active,
  story_games (
    id, story_id, game_id, sort_order,
    games ( id, title, slug, year )
  )
`;

export const load: PageServerLoad = async ({ cookies }) => {
	if (!isSupabaseConfigured()) {
		return { stories: [] as StoryWithGames[], games: [], supabaseReady: false, storyCount: 0 };
	}

	if (!(await requireAdmin(cookies))) {
		throw redirect(303, adminLoginUrl('/admin/stories'));
	}

	const supabase = createSupabaseServerClient(cookies);

	const [storiesRes, gamesRes, countRes] = await Promise.all([
		supabase.from('stories').select(storySelect).order('sort_order'),
		supabase.from('games').select('id, title, slug, year').order('title'),
		supabase.from('stories').select('id', { count: 'exact', head: true })
	]);

	if (storiesRes.error) {
		console.error(storiesRes.error);
	}

	return {
		stories: buildStoryList(storiesRes.data ?? []),
		games: gamesRes.data ?? [],
		supabaseReady: true,
		storyCount: countRes.count ?? 0
	};
};

export const actions: Actions = {
	createStory: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const title = String((await request.formData()).get('title') ?? '').trim();
		if (!title) return fail(400, { error: 'Story title is required.' });

		const supabase = createSupabaseServerClient(cookies);
		const { data: slug, error: slugError } = await supabase.rpc('unique_story_slug', {
			base_title: title
		});

		if (slugError || !slug) {
			return fail(500, { error: slugError?.message ?? 'Could not generate slug.' });
		}

		const sortOrder = await nextStorySortOrder(supabase);
		const { error } = await supabase.from('stories').insert({ title, slug, sort_order: sortOrder });

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	updateStory: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const id = String(formData.get('id') ?? '').trim();
		const title = String(formData.get('title') ?? '').trim();
		const isActive = formData.get('is_active') === 'on';

		if (!id || !title) return fail(400, { error: 'Story id and title are required.' });

		const supabase = createSupabaseServerClient(cookies);
		const { error } = await supabase.from('stories').update({ title, is_active: isActive }).eq('id', id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	deleteStory: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const id = String((await request.formData()).get('id') ?? '').trim();
		if (!id) return fail(400, { error: 'Missing story id.' });

		const supabase = createSupabaseServerClient(cookies);
		const { error } = await supabase.from('stories').delete().eq('id', id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	moveStory: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const id = String(formData.get('id') ?? '').trim();
		const direction = String(formData.get('direction') ?? '') === 'down' ? 'down' : 'up';

		if (!id) return fail(400, { error: 'Missing story id.' });

		const supabase = createSupabaseServerClient(cookies);
		const result = await swapStoryOrder(supabase, id, direction);
		if (result.error) return fail(500, { error: result.error });

		throw redirect(303, '/admin/stories');
	},

	addGame: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const storyId = String(formData.get('story_id') ?? '').trim();
		const gameId = String(formData.get('game_id') ?? '').trim();

		if (!storyId || !gameId) return fail(400, { error: 'Story and game are required.' });

		const supabase = createSupabaseServerClient(cookies);
		const sortOrder = await nextStoryGameSortOrder(supabase, storyId);
		const { error } = await supabase.from('story_games').insert({
			story_id: storyId,
			game_id: gameId,
			sort_order: sortOrder
		});

		if (error) {
			if (error.code === '23505') {
				return fail(400, { error: 'That game is already in this story.' });
			}
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/stories');
	},

	removeGame: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const linkId = String((await request.formData()).get('link_id') ?? '').trim();
		if (!linkId) return fail(400, { error: 'Missing game link id.' });

		const supabase = createSupabaseServerClient(cookies);
		const { error } = await supabase.from('story_games').delete().eq('id', linkId);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	moveGame: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const linkId = String(formData.get('link_id') ?? '').trim();
		const direction = String(formData.get('direction') ?? '') === 'down' ? 'down' : 'up';

		if (!linkId) return fail(400, { error: 'Missing game link id.' });

		const supabase = createSupabaseServerClient(cookies);
		const result = await swapStoryGameOrder(supabase, linkId, direction);
		if (result.error) return fail(500, { error: result.error });

		throw redirect(303, '/admin/stories');
	}
};
