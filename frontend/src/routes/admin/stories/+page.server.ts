import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import {
	buildStoryList,
	nextStoryGameSortOrder,
	nextStorySortOrder,
	swapStoryGameOrder,
	swapStoryOrder
} from '$lib/stories/admin';
import type { StoryWithGames } from '$lib/types/database';
import type { Actions, PageServerLoad } from './$types';

const storySelect = `
  id, title, slug, sort_order, is_active,
  story_games (
    id, story_id, game_id, sort_order,
    games ( id, title, slug, year )
  )
`;

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.supabase) {
		return { stories: [] as StoryWithGames[], games: [], supabaseReady: false, storyCount: 0 };
	}

	if (!(await requireAdmin(locals.supabase))) {
		throw redirect(303, adminLoginUrl('/admin/stories'));
	}

	const supabase = locals.supabase;

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
	createStory: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const title = String((await request.formData()).get('title') ?? '').trim();
		if (!title) return fail(400, { error: 'Story title is required.' });

		const supabase = locals.supabase;
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

	updateStory: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const id = String(formData.get('id') ?? '').trim();
		const title = String(formData.get('title') ?? '').trim();
		const isActive = formData.get('is_active') === 'on';

		if (!id || !title) return fail(400, { error: 'Story id and title are required.' });

		const { error } = await locals.supabase.from('stories').update({ title, is_active: isActive }).eq('id', id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	deleteStory: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const id = String((await request.formData()).get('id') ?? '').trim();
		if (!id) return fail(400, { error: 'Missing story id.' });

		const { error } = await locals.supabase.from('stories').delete().eq('id', id);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	moveStory: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const id = String(formData.get('id') ?? '').trim();
		const direction = String(formData.get('direction') ?? '') === 'down' ? 'down' : 'up';

		if (!id) return fail(400, { error: 'Missing story id.' });

		const result = await swapStoryOrder(locals.supabase, id, direction);
		if (result.error) return fail(500, { error: result.error });

		throw redirect(303, '/admin/stories');
	},

	addGame: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const storyId = String(formData.get('story_id') ?? '').trim();
		const gameId = String(formData.get('game_id') ?? '').trim();

		if (!storyId || !gameId) return fail(400, { error: 'Story and game are required.' });

		const sortOrder = await nextStoryGameSortOrder(locals.supabase, storyId);
		const { error } = await locals.supabase.from('story_games').insert({
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

	removeGame: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const linkId = String((await request.formData()).get('link_id') ?? '').trim();
		if (!linkId) return fail(400, { error: 'Missing game link id.' });

		const { error } = await locals.supabase.from('story_games').delete().eq('id', linkId);

		if (error) return fail(500, { error: error.message });
		throw redirect(303, '/admin/stories');
	},

	moveGame: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) return fail(403, { error: 'Not authorized' });

		const formData = await request.formData();
		const linkId = String(formData.get('link_id') ?? '').trim();
		const direction = String(formData.get('direction') ?? '') === 'down' ? 'down' : 'up';

		if (!linkId) return fail(400, { error: 'Missing game link id.' });

		const result = await swapStoryGameOrder(locals.supabase, linkId, direction);
		if (result.error) return fail(500, { error: result.error });

		throw redirect(303, '/admin/stories');
	}
};
