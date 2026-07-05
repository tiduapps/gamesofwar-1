import type { SupabaseClient } from '@supabase/supabase-js';
import {
	GAMES_PAGE_SIZE,
	type GameLibraryFacets,
	type GameLibraryFilters,
	type GameListItem,
	type GameSort,
	escapeIlike
} from './constants';

const LIST_COLUMNS =
	'id, title, slug, year, country, theme, publisher, cover_photo_url, created_at';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GamesQuery = any;

function applyFilters(query: GamesQuery, filters: GameLibraryFilters) {
	let q = query;

	if (filters.q) {
		const term = escapeIlike(filters.q);
		q = q.or(
			`title.ilike.%${term}%,description.ilike.%${term}%,publisher.ilike.%${term}%,theme.ilike.%${term}%`
		);
	}

	if (filters.country) q = q.eq('country', filters.country);
	if (filters.theme) q = q.eq('theme', filters.theme);
	if (filters.publisher) q = q.eq('publisher', filters.publisher);

	if (filters.yearMin) {
		const yearMin = Number.parseInt(filters.yearMin, 10);
		if (Number.isFinite(yearMin)) q = q.gte('year', yearMin);
	}

	if (filters.yearMax) {
		const yearMax = Number.parseInt(filters.yearMax, 10);
		if (Number.isFinite(yearMax)) q = q.lte('year', yearMax);
	}

	if (filters.collection === 'don-cermak') {
		q = q.ilike('description', '%Dan Cermak Collection%');
	}

	return q;
}

function applySort(query: GamesQuery, sort: GameSort) {
	switch (sort) {
		case 'title-desc':
			return query.order('title', { ascending: false });
		case 'year-desc':
			return query
				.order('year', { ascending: false, nullsFirst: false })
				.order('title', { ascending: true });
		case 'year-asc':
			return query
				.order('year', { ascending: true, nullsFirst: false })
				.order('title', { ascending: true });
		case 'newest':
			return query.order('created_at', { ascending: false }).order('title', { ascending: true });
		case 'oldest':
			return query.order('created_at', { ascending: true }).order('title', { ascending: true });
		default:
			return query.order('title', { ascending: true });
	}
}

export async function fetchGameLibraryPage(supabase: SupabaseClient, filters: GameLibraryFilters) {
	const from = (filters.page - 1) * GAMES_PAGE_SIZE;
	const to = from + GAMES_PAGE_SIZE - 1;

	let query = supabase.from('games').select(LIST_COLUMNS, { count: 'exact' });
	query = applyFilters(query, filters);
	query = applySort(query, filters.sort);
	query = query.range(from, to);

	const { data, error, count } = await query;

	if (error) {
		throw new Error(error.message);
	}

	const games: GameListItem[] = (data ?? []).map((row) => ({
		id: row.id,
		title: row.title,
		slug: row.slug,
		year: row.year,
		country: row.country,
		theme: row.theme,
		publisher: row.publisher,
		cover_photo_url: row.cover_photo_url
	}));

	return {
		games,
		total: count ?? 0,
		totalPages: Math.max(1, Math.ceil((count ?? 0) / GAMES_PAGE_SIZE))
	};
}

export async function fetchGameLibraryFacets(supabase: SupabaseClient): Promise<GameLibraryFacets> {
	const { data, error } = await supabase.from('games').select('country, theme, publisher');

	if (error) {
		return { countries: [], themes: [], publishers: [] };
	}

	const unique = (values: (string | null | undefined)[]) =>
		[...new Set(values.filter((v): v is string => Boolean(v?.trim())))].sort((a, b) =>
			a.localeCompare(b)
		);

	return {
		countries: unique(data?.map((r) => r.country) ?? []),
		themes: unique(data?.map((r) => r.theme) ?? []),
		publishers: unique(data?.map((r) => r.publisher) ?? [])
	};
}
