import { getAdminAuth } from '$lib/admin/auth';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const isLoginPage = url.pathname === '/admin/login';

	if (!isSupabaseConfigured()) {
		return {
			isAdmin: false,
			userEmail: null,
			isLoginPage,
			supabaseReady: false,
			pendingComments: 0,
			pendingSubmissions: 0
		};
	}

	const { user, isAdmin } = await getAdminAuth(cookies);

	let pendingComments = 0;
	let pendingSubmissions = 0;

	if (isAdmin && !isLoginPage) {
		const supabase = createSupabaseServerClient(cookies);
		const [commentsRes, submissionsRes] = await Promise.all([
			supabase.from('game_comments').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
			supabase
				.from('game_submissions')
				.select('id', { count: 'exact', head: true })
				.eq('status', 'pending')
		]);
		pendingComments = commentsRes.count ?? 0;
		pendingSubmissions = submissionsRes.count ?? 0;
	}

	return {
		isAdmin,
		userEmail: user?.email ?? null,
		isLoginPage,
		supabaseReady: true,
		pendingComments,
		pendingSubmissions
	};
};
