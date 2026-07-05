import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	if (!isSupabaseConfigured()) {
		return { submissions: [], supabaseReady: false };
	}

	if (!(await requireAdmin(cookies))) {
		throw redirect(303, adminLoginUrl('/admin/submissions'));
	}

	const supabase = createSupabaseServerClient(cookies);
	const { data, error } = await supabase
		.from('game_submissions')
		.select('*')
		.eq('status', 'pending')
		.order('created_at', { ascending: true });

	if (error) {
		return { submissions: [], supabaseReady: true };
	}

	return { submissions: data ?? [], supabaseReady: true };
};

export const actions: Actions = {
	approve: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) {
			return fail(403, { error: 'Not authorized' });
		}

		const supabase = createSupabaseServerClient(cookies);
		const id = String((await request.formData()).get('id') ?? '');
		const { data, error } = await supabase.rpc('approve_game_submission', {
			submission_id: id
		});

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, `/admin/submissions?approved=${data ?? ''}`);
	},

	reject: async ({ request, cookies }) => {
		if (!(await requireAdmin(cookies))) {
			return fail(403, { error: 'Not authorized' });
		}

		const supabase = createSupabaseServerClient(cookies);
		const formData = await request.formData();
		const id = String(formData.get('id') ?? '');
		const note = String(formData.get('note') ?? '').trim() || null;

		const { error } = await supabase.rpc('reject_game_submission', {
			submission_id: id,
			note
		});

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/submissions');
	}
};
