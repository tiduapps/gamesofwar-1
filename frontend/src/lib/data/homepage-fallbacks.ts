import type { Announcement, FeaturedCollection } from '$lib/types/database';

export const fallbackFeaturedCollections: FeaturedCollection[] = [
	{
		id: 'fallback-left',
		title: 'Don Cermak Collection',
		href: '/games?collection=don-cermak',
		position: 'left',
		sort_order: 1,
		is_active: true
	},
	{
		id: 'fallback-right',
		title: 'Latest Additions',
		href: '/games?sort=latest',
		position: 'right',
		sort_order: 1,
		is_active: true
	}
];

export const fallbackAnnouncements: Announcement[] = [
	{
		id: 'fallback-1',
		fact: 'In October 1917 British pilots invented their own war game.',
		game_id: null,
		button_label: 'See Game',
		sort_order: 1,
		is_active: true
	},
	{
		id: 'fallback-2',
		fact: 'By November 1917 German troops started playing a new game about the Battle of Tannenberg.',
		game_id: null,
		button_label: 'See Game',
		sort_order: 2,
		is_active: true
	},
	{
		id: 'fallback-3',
		fact: 'As soon as Japan had taken the Chinese city of Lüshun (Port Arthur) in January 1895 a parlor game about the siege hit the market.',
		game_id: null,
		button_label: 'See Game',
		sort_order: 3,
		is_active: true
	},
	{
		id: 'fallback-4',
		fact: 'In 1790 a game was published about a 1783 treaty ending the American War of Independence.',
		game_id: null,
		button_label: 'See Game',
		sort_order: 4,
		is_active: true
	}
];
