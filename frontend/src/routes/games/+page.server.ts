import type { PageServerLoad } from './$types';
import { GAMES_PAGE_SIZE, parseGameLibraryFilters } from '$lib/games/constants';
import { fetchGameLibraryFacets, fetchGameLibraryPage } from '$lib/games/query';
import { createSupabaseServerClient, isSupabaseConfigured } from '$lib/supabase/server';

export const load: PageServerLoad = async ({ url, cookies }) => {
	const filters = parseGameLibraryFilters(url.searchParams);

	if (!isSupabaseConfigured()) {
		return {
			games: [],
			filters,
			facets: { countries: [], themes: [], publishers: [] },
			total: 0,
			totalPages: 1,
			pageSize: GAMES_PAGE_SIZE,
			supabaseReady: false
		};
	}

	const supabase = createSupabaseServerClient(cookies);

	const [pageResult, facets] = await Promise.all([
		fetchGameLibraryPage(supabase, filters),
		fetchGameLibraryFacets(supabase)
	]);

	const safePage = Math.min(filters.page, pageResult.totalPages);
	if (safePage !== filters.page && pageResult.total > 0) {
		const adjusted = { ...filters, page: safePage };
		const retry = await fetchGameLibraryPage(supabase, adjusted);
		return {
			games: retry.games,
			filters: adjusted,
			facets,
			total: retry.total,
			totalPages: retry.totalPages,
			pageSize: GAMES_PAGE_SIZE,
			supabaseReady: true
		};
	}

	return {
		games: pageResult.games,
		filters,
		facets,
		total: pageResult.total,
		totalPages: pageResult.totalPages,
		pageSize: GAMES_PAGE_SIZE,
		supabaseReady: true
	};
};
