export const GAMES_PAGE_SIZE = 15;

export type GameSort =
	| 'title-asc'
	| 'title-desc'
	| 'year-desc'
	| 'year-asc'
	| 'newest'
	| 'oldest';

export const SORT_OPTIONS: { value: GameSort; label: string }[] = [
	{ value: 'title-asc', label: 'Title (A–Z)' },
	{ value: 'title-desc', label: 'Title (Z–A)' },
	{ value: 'year-desc', label: 'Year (newest)' },
	{ value: 'year-asc', label: 'Year (oldest)' },
	{ value: 'newest', label: 'Recently added' },
	{ value: 'oldest', label: 'Earliest added' }
];

export type GameLibraryFilters = {
	q: string;
	country: string;
	theme: string;
	publisher: string;
	yearMin: string;
	yearMax: string;
	collection: string;
	sort: GameSort;
	page: number;
};

export type GameListItem = {
	id: string;
	title: string;
	slug: string;
	year: number | null;
	country: string | null;
	theme: string | null;
	publisher: string | null;
	cover_photo_url: string | null;
};

export type GameLibraryFacets = {
	countries: string[];
	themes: string[];
	publishers: string[];
};

const DEFAULT_SORT: GameSort = 'title-asc';

/** Escape user input for PostgREST ilike patterns. */
export function escapeIlike(value: string): string {
	return value.replace(/[%_\\]/g, '\\$&');
}

export function parseGameLibraryFilters(searchParams: URLSearchParams): GameLibraryFilters {
	let sortParam = searchParams.get('sort') ?? '';
	if (sortParam === 'latest') sortParam = 'newest';

	const sort = SORT_OPTIONS.some((o) => o.value === sortParam) ? (sortParam as GameSort) : DEFAULT_SORT;
	const page = Math.max(1, Number.parseInt(searchParams.get('page') ?? '1', 10) || 1);

	return {
		q: searchParams.get('q')?.trim() ?? '',
		country: searchParams.get('country') ?? '',
		theme: searchParams.get('theme') ?? '',
		publisher: searchParams.get('publisher') ?? '',
		yearMin: searchParams.get('year_min') ?? '',
		yearMax: searchParams.get('year_max') ?? '',
		collection: searchParams.get('collection') ?? '',
		sort,
		page
	};
}

export function filtersToSearchParams(
	filters: GameLibraryFilters,
	overrides: Partial<GameLibraryFilters> = {}
) {
	const merged = { ...filters, ...overrides };
	const params = new URLSearchParams();

	if (merged.q) params.set('q', merged.q);
	if (merged.country) params.set('country', merged.country);
	if (merged.theme) params.set('theme', merged.theme);
	if (merged.publisher) params.set('publisher', merged.publisher);
	if (merged.yearMin) params.set('year_min', merged.yearMin);
	if (merged.yearMax) params.set('year_max', merged.yearMax);
	if (merged.collection) params.set('collection', merged.collection);
	if (merged.sort !== DEFAULT_SORT) params.set('sort', merged.sort);
	if (merged.page > 1) params.set('page', String(merged.page));

	return params;
}

export function buildGamesLibraryHref(
	filters: GameLibraryFilters,
	overrides: Partial<GameLibraryFilters> = {}
): string {
	const query = filtersToSearchParams(filters, overrides).toString();
	return query ? `/games?${query}` : '/games';
}
