import { redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.supabase) {
		return { supabaseReady: false };
	}

	if (!(await requireAdmin(locals.supabase))) {
		throw redirect(303, adminLoginUrl('/admin/guide'));
	}

	return { supabaseReady: true };
};
