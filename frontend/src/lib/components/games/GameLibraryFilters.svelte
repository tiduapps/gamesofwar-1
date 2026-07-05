<script lang="ts">
	import GameLibraryFilterFields from '$lib/components/games/GameLibraryFilterFields.svelte';
	import { getActiveFilters } from '$lib/games/active-filters';
	import type { GameLibraryFacets, GameLibraryFilters } from '$lib/games/constants';

	let {
		filters,
		facets
	}: {
		filters: GameLibraryFilters;
		facets: GameLibraryFacets;
	} = $props();

	const activeFilterCount = $derived(getActiveFilters(filters).length);
</script>

<aside class="filters-panel card">
	<div class="filters-header">
		<h2>Filter</h2>
		{#if activeFilterCount > 0}
			<span class="badge">{activeFilterCount}</span>
		{/if}
	</div>

	<form method="GET" action="/games" class="filters-form">
		<input type="hidden" name="q" value={filters.q} />
		<input type="hidden" name="sort" value={filters.sort} />

		{#if filters.collection}
			<input type="hidden" name="collection" value={filters.collection} />
		{/if}

		<GameLibraryFilterFields {filters} {facets} />

		<div class="filter-actions">
			<button type="submit" class="btn btn-sm">Apply filters</button>
			<a href="/games" class="clear-link">Clear all</a>
		</div>
	</form>
</aside>

<style>
	.filters-panel {
		padding: 1.25rem;
		align-self: start;
		position: sticky;
		top: calc(var(--header-height) + 1rem);
	}

	.filters-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.filters-header h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.badge {
		background: var(--color-primary);
		color: white;
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 0.15rem 0.45rem;
		border-radius: var(--radius-full);
		min-width: 1.25rem;
		text-align: center;
	}

	.filters-form {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.filter-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding-top: 0.25rem;
	}

	.clear-link {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.clear-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		.filters-panel {
			display: none;
		}
	}
</style>
