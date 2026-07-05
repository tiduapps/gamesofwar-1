import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import { fetchPendingGameComments } from '$lib/games/detail';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.supabase) {
		return { comments: [], supabaseReady: false };
	}

	if (!(await requireAdmin(locals.supabase))) {
		throw redirect(303, adminLoginUrl('/admin/comments'));
	}

	const comments = await fetchPendingGameComments(locals.supabase);

	return { comments, supabaseReady: true };
};

export const actions: Actions = {
	approve: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) {
			return fail(403, { error: 'Not authorized' });
		}

		const id = String((await request.formData()).get('id') ?? '');
		const { error } = await locals.supabase.rpc('approve_game_comment', { comment_id: id });

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/comments');
	},

	reject: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) {
			return fail(403, { error: 'Not authorized' });
		}

		const formData = await request.formData();
		const id = String(formData.get('id') ?? '');
		const note = String(formData.get('note') ?? '').trim() || null;

		const { error } = await locals.supabase.rpc('reject_game_comment', {
			comment_id: id,
			note
		});

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/comments');
	}
};
