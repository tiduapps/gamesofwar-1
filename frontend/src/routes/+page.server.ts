import {
	fallbackAnnouncements,
	fallbackFeaturedCollections
} from '$lib/data/homepage-fallbacks';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';
import type { Announcement, FeaturedCollection } from '$lib/types/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	if (!isSupabaseConfigured()) {
		return {
			featuredCollections: fallbackFeaturedCollections,
			announcements: fallbackAnnouncements,
			usingFallbackData: true
		};
	}

	const supabase = createSupabaseServerClient(cookies);

	const [collectionsResult, announcementsResult] = await Promise.all([
		supabase
			.from('featured_collections')
			.select('id, title, href, position, sort_order, is_active')
			.eq('is_active', true)
			.order('sort_order'),
		supabase
			.from('announcements')
			.select('id, fact, game_id, button_label, sort_order, is_active, games(slug, title)')
			.eq('placement', 'homepage')
			.eq('is_active', true)
			.order('sort_order')
	]);

	const featuredCollections: FeaturedCollection[] =
		collectionsResult.data?.length ? collectionsResult.data : fallbackFeaturedCollections;

	const announcements: Announcement[] = announcementsResult.data?.length
		? announcementsResult.data.map((row) => ({
				id: row.id,
				fact: row.fact,
				game_id: row.game_id,
				button_label: row.button_label,
				sort_order: row.sort_order,
				is_active: row.is_active,
				games: Array.isArray(row.games) ? (row.games[0] ?? null) : row.games
			}))
		: fallbackAnnouncements;

	return {
		featuredCollections,
		announcements,
		usingFallbackData: false
	};
};
