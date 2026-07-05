import { redirect } from '@sveltejs/kit';
import { adminLoginUrl, getAdminAuth } from '$lib/admin/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.supabase) {
		return {
			supabaseReady: false,
			pendingComments: 0,
			pendingSubmissions: 0,
			activeAnnouncements: 0,
			storyCount: 0,
			gameCount: 0
		};
	}

	const supabase = locals.supabase;
	const { isAdmin } = await getAdminAuth(supabase);
	if (!isAdmin) {
		throw redirect(303, adminLoginUrl('/admin'));
	}

	const [commentsRes, submissionsRes, announcementsRes, storiesRes, gamesRes] = await Promise.all([
		supabase.from('game_comments').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
		supabase.from('game_submissions').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
		supabase.from('announcements').select('id', { count: 'exact', head: true }).eq('is_active', true),
		supabase.from('stories').select('id', { count: 'exact', head: true }),
		supabase.from('games').select('id', { count: 'exact', head: true })
	]);

	return {
		supabaseReady: true,
		pendingComments: commentsRes.count ?? 0,
		pendingSubmissions: submissionsRes.count ?? 0,
		activeAnnouncements: announcementsRes.count ?? 0,
		storyCount: storiesRes.count ?? 0,
		gameCount: gamesRes.count ?? 0
	};
};
