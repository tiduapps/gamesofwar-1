import {
	buildGamesLibraryHref,
	type GameLibraryFilters
} from './constants';

export type ActiveFilter = { key: string; label: string };

export function getActiveFilters(filters: GameLibraryFilters): ActiveFilter[] {
	return [
		filters.collection === 'don-cermak'
			? { key: 'collection', label: 'Don Cermak Collection' }
			: filters.collection
				? { key: 'collection', label: filters.collection }
				: null,
		filters.country ? { key: 'country', label: filters.country } : null,
		filters.theme ? { key: 'theme', label: filters.theme } : null,
		filters.publisher ? { key: 'publisher', label: filters.publisher } : null,
		filters.yearMin || filters.yearMax
			? {
					key: 'year',
					label: [filters.yearMin, filters.yearMax].filter(Boolean).join('–')
				}
			: null
	].filter((item): item is ActiveFilter => Boolean(item));
}

export function clearFilterHref(filters: GameLibraryFilters, key: string): string {
	const overrides: Partial<GameLibraryFilters> = { page: 1 };
	if (key === 'country') overrides.country = '';
	if (key === 'theme') overrides.theme = '';
	if (key === 'publisher') overrides.publisher = '';
	if (key === 'collection') overrides.collection = '';
	if (key === 'year') {
		overrides.yearMin = '';
		overrides.yearMax = '';
	}
	return buildGamesLibraryHref(filters, overrides);
}
