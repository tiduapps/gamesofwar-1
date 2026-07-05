import { fallbackNewsAnnouncements } from '$lib/data/news-fallbacks';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { Announcement } from '$lib/types/database';
import type { PageServerLoad } from './$types';

const newsSelect =
	'id, placement, fact, game_id, button_label, sort_order, is_active, eyebrow, headline, date_range, location_name, location_address, link_intro, link_url, link_label';

function mapNewsAnnouncement(row: {
	id: string;
	placement: string;
	fact: string;
	game_id: string | null;
	button_label: string;
	sort_order: number;
	is_active: boolean;
	eyebrow: string | null;
	headline: string | null;
	date_range: string | null;
	location_name: string | null;
	location_address: string | null;
	link_intro: string | null;
	link_url: string | null;
	link_label: string | null;
}): Announcement {
	return {
		id: row.id,
		placement: 'news',
		fact: row.fact,
		game_id: row.game_id,
		button_label: row.button_label,
		sort_order: row.sort_order,
		is_active: row.is_active,
		eyebrow: row.eyebrow,
		headline: row.headline,
		date_range: row.date_range,
		location_name: row.location_name,
		location_address: row.location_address,
		link_intro: row.link_intro,
		link_url: row.link_url,
		link_label: row.link_label
	};
}

export const load: PageServerLoad = async ({ cookies }) => {
	if (!isSupabaseConfigured()) {
		return { announcements: fallbackNewsAnnouncements, usingFallbackData: true };
	}

	const supabase = createSupabaseServerClient(cookies);
	const { data, error } = await supabase
		.from('announcements')
		.select(newsSelect)
		.eq('placement', 'news')
		.eq('is_active', true)
		.order('sort_order');

	if (error) {
		console.error(error);
		return { announcements: fallbackNewsAnnouncements, usingFallbackData: true };
	}

	const announcements: Announcement[] = data?.length
		? data.map(mapNewsAnnouncement)
		: fallbackNewsAnnouncements;

	return { announcements, usingFallbackData: false };
};
