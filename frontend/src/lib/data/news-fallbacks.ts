import type { Announcement } from '$lib/types/database';

export const fallbackNewsAnnouncements: Announcement[] = [
	{
		id: 'fallback-news-1',
		placement: 'news',
		eyebrow: 'War Games',
		headline: 'Exhibition at the Canadian War Museum',
		fact: 'Exhibition at the Canadian War Museum',
		game_id: null,
		button_label: 'See Game',
		sort_order: 1,
		is_active: true,
		date_range: 'June 9, 2023 - December 31, 2023',
		location_name: 'Lieutenant-Colonel John McCrae Gallery',
		location_address: '1 Vimy Place, Ottawa, ON K1A 0M8',
		link_intro:
			'For more information or to buy tickets, visit the Canadian War Museum site at:',
		link_url: 'https://www.warmuseum.ca/war/games/exhibitions/war-games/',
		link_label: 'War Games | Canadian War Museum'
	}
];
