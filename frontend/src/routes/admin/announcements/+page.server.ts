import { fail, redirect } from '@sveltejs/kit';
import { adminLoginUrl, requireAdmin } from '$lib/admin/auth';
import type { Announcement } from '$lib/types/database';
import type { Actions, PageServerLoad } from './$types';

type GameOption = { id: string; title: string; slug: string };

function mapAnnouncement(row: {
	id: string;
	fact: string;
	game_id: string | null;
	button_label: string;
	sort_order: number;
	is_active: boolean;
	games: { slug: string; title: string } | { slug: string; title: string }[] | null;
}): Announcement {
	return {
		id: row.id,
		fact: row.fact,
		game_id: row.game_id,
		button_label: row.button_label,
		sort_order: row.sort_order,
		is_active: row.is_active,
		games: Array.isArray(row.games) ? (row.games[0] ?? null) : row.games
	};
}

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.supabase) {
		return { announcements: [] as Announcement[], games: [] as GameOption[], supabaseReady: false };
	}

	if (!(await requireAdmin(locals.supabase))) {
		throw redirect(303, adminLoginUrl('/admin/announcements'));
	}

	const supabase = locals.supabase;

	const [announcementsRes, gamesRes] = await Promise.all([
		supabase
			.from('announcements')
			.select('id, fact, game_id, button_label, sort_order, is_active, games(slug, title)')
			.eq('placement', 'homepage')
			.order('sort_order'),
		supabase.from('games').select('id, title, slug').order('title')
	]);

	if (announcementsRes.error) {
		console.error(announcementsRes.error);
	}

	return {
		announcements: (announcementsRes.data ?? []).map(mapAnnouncement),
		games: gamesRes.data ?? [],
		supabaseReady: true
	};
};

function parseAnnouncementFields(formData: FormData) {
	const fact = String(formData.get('fact') ?? '').trim();
	const buttonLabel = String(formData.get('button_label') ?? '').trim() || 'See Game';
	const gameIdRaw = String(formData.get('game_id') ?? '').trim();
	const gameId = gameIdRaw || null;
	const sortOrder = Number(formData.get('sort_order') ?? 0);
	const isActive = formData.get('is_active') === 'on';

	if (!fact) {
		return { error: 'Fact text is required.' as const };
	}

	if (!Number.isFinite(sortOrder)) {
		return { error: 'Sort order must be a number.' as const };
	}

	return {
		fact,
		button_label: buttonLabel,
		game_id: gameId,
		sort_order: Math.round(sortOrder),
		is_active: isActive
	};
}

export const actions: Actions = {
	create: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) {
			return fail(403, { error: 'Not authorized' });
		}

		const fields = parseAnnouncementFields(await request.formData());
		if ('error' in fields) {
			return fail(400, { error: fields.error });
		}

		const { error } = await locals.supabase.from('announcements').insert({ ...fields, placement: 'homepage' });

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/announcements');
	},

	update: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) {
			return fail(403, { error: 'Not authorized' });
		}

		const formData = await request.formData();
		const id = String(formData.get('id') ?? '').trim();
		if (!id) {
			return fail(400, { error: 'Missing announcement id.' });
		}

		const fields = parseAnnouncementFields(formData);
		if ('error' in fields) {
			return fail(400, { error: fields.error });
		}

		const { error } = await locals.supabase.from('announcements').update(fields).eq('id', id);

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/announcements');
	},

	delete: async ({ request, locals }) => {
		if (!locals.supabase || !(await requireAdmin(locals.supabase))) {
			return fail(403, { error: 'Not authorized' });
		}

		const id = String((await request.formData()).get('id') ?? '').trim();
		if (!id) {
			return fail(400, { error: 'Missing announcement id.' });
		}

		const { error } = await locals.supabase.from('announcements').delete().eq('id', id);

		if (error) {
			return fail(500, { error: error.message });
		}

		throw redirect(303, '/admin/announcements');
	}
};
