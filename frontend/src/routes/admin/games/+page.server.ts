import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import { escapeIlike } from '$lib/games/constants';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { PageServerLoad } from './$types';

const PAGE_SIZE = 30;

export const load: PageServerLoad = async ({ cookies, url }) => {
	if (!isSupabaseConfigured()) {
		return { games: [], q: '', supabaseReady: false, total: 0, page: 1, pageSize: PAGE_SIZE };
	}

	if (!(await requireAdmin(cookies))) {
		throw redirect(303, adminLoginUrl('/admin/games'));
	}

	const q = url.searchParams.get('q')?.trim() ?? '';
	const page = Math.max(1, Number.parseInt(url.searchParams.get('page') ?? '1', 10) || 1);
	const from = (page - 1) * PAGE_SIZE;
	const to = from + PAGE_SIZE - 1;

	const supabase = createSupabaseServerClient(cookies);
	let query = supabase
		.from('games')
		.select('id, title, slug, year, country, cover_photo_url', { count: 'exact' })
		.order('title');

	if (q) {
		const term = escapeIlike(q);
		query = query.or(`title.ilike.%${term}%,publisher.ilike.%${term}%`);
	}

	const { data, count, error } = await query.range(from, to);

	if (error) {
		console.error(error);
	}

	return {
		games: data ?? [],
		q,
		page,
		total: count ?? 0,
		pageSize: PAGE_SIZE,
		supabaseReady: true
	};
};
