<script lang="ts">
	import GameLibraryFilterFields from '$lib/components/games/GameLibraryFilterFields.svelte';
	import { clearFilterHref, getActiveFilters } from '$lib/games/active-filters';
	import {
		SORT_OPTIONS,
		buildGamesLibraryHref,
		type GameLibraryFacets,
		type GameLibraryFilters
	} from '$lib/games/constants';

	let {
		filters,
		facets,
		total
	}: {
		filters: GameLibraryFilters;
		facets: GameLibraryFacets;
		total: number;
	} = $props();

	const activeFilters = $derived(getActiveFilters(filters));
	const activeFilterCount = $derived(activeFilters.length);
	const currentSortLabel = $derived(
		SORT_OPTIONS.find((option) => option.value === filters.sort)?.label ?? 'Sort'
	);

	let activeSheet = $state<'filters' | 'sort' | null>(null);

	function openSheet(sheet: 'filters' | 'sort') {
		activeSheet = sheet;
	}

	function closeSheet() {
		activeSheet = null;
	}

	function onSheetKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeSheet();
	}

	function onSheetApply() {
		closeSheet();
	}

	$effect(() => {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = activeSheet ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={onSheetKeydown} />

<div class="mobile-bar card">
	<form method="GET" action="/games" class="search-form">
		{#if filters.collection}
			<input type="hidden" name="collection" value={filters.collection} />
		{/if}
		{#if filters.country}
			<input type="hidden" name="country" value={filters.country} />
		{/if}
		{#if filters.theme}
			<input type="hidden" name="theme" value={filters.theme} />
		{/if}
		{#if filters.publisher}
			<input type="hidden" name="publisher" value={filters.publisher} />
		{/if}
		{#if filters.yearMin}
			<input type="hidden" name="year_min" value={filters.yearMin} />
		{/if}
		{#if filters.yearMax}
			<input type="hidden" name="year_max" value={filters.yearMax} />
		{/if}
		<input type="hidden" name="sort" value={filters.sort} />

		<div class="search-row">
			<label class="sr-only" for="mobile-search">Search games</label>
			<input
				id="mobile-search"
				name="q"
				type="search"
				placeholder="Search games…"
				value={filters.q}
			/>
			<button type="submit" class="search-btn" aria-label="Search">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
					<path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		</div>
	</form>

	<div class="controls-row">
		<button type="button" class="control-btn" onclick={() => openSheet('filters')}>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M4 6h16M7 12h10M10 18h4"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			Filters
			{#if activeFilterCount > 0}
				<span class="badge">{activeFilterCount}</span>
			{/if}
		</button>

		<button type="button" class="control-btn sort-btn" onclick={() => openSheet('sort')}>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M7 4v16M7 4l-3 3M7 4l3 3M17 20V4M17 20l-3-3M17 20l3-3"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span class="sort-label">{currentSortLabel}</span>
		</button>
	</div>

	{#if activeFilterCount > 0}
		<div class="chips-row">
			{#each activeFilters as filter (filter.key)}
				<a href={clearFilterHref(filters, filter.key)} class="chip">
					{filter.label}
					<span aria-hidden="true">×</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

{#if activeSheet === 'filters'}
	<div class="sheet-root" role="presentation">
		<button type="button" class="sheet-backdrop" aria-label="Close filters" onclick={closeSheet}></button>

		<div
			class="sheet-panel"
			role="dialog"
			aria-modal="true"
			aria-labelledby="filter-sheet-title"
		>
			<div class="sheet-handle" aria-hidden="true"></div>

			<header class="sheet-header">
				<h2 id="filter-sheet-title">Filters</h2>
				<button type="button" class="sheet-close" aria-label="Close" onclick={closeSheet}>×</button>
			</header>

			<form method="GET" action="/games" class="sheet-form" onsubmit={onSheetApply}>
				<input type="hidden" name="q" value={filters.q} />
				<input type="hidden" name="sort" value={filters.sort} />
				{#if filters.collection}
					<input type="hidden" name="collection" value={filters.collection} />
				{/if}

				<div class="sheet-fields">
					<GameLibraryFilterFields {filters} {facets} idPrefix="sheet-" />
				</div>

				<footer class="sheet-footer">
					<a href="/games" class="clear-btn">Clear all</a>
					<button type="submit" class="btn">
						Show {total > 0 ? total : ''} games
					</button>
				</footer>
			</form>
		</div>
	</div>
{:else if activeSheet === 'sort'}
	<div class="sheet-root" role="presentation">
		<button type="button" class="sheet-backdrop" aria-label="Close sort" onclick={closeSheet}></button>

		<div
			class="sheet-panel sheet-panel-compact"
			role="dialog"
			aria-modal="true"
			aria-labelledby="sort-sheet-title"
		>
			<div class="sheet-handle" aria-hidden="true"></div>

			<header class="sheet-header">
				<h2 id="sort-sheet-title">Sort by</h2>
				<button type="button" class="sheet-close" aria-label="Close" onclick={closeSheet}>×</button>
			</header>

			<div class="sort-options" role="listbox" aria-label="Sort options">
				{#each SORT_OPTIONS as option (option.value)}
					<a
						href={buildGamesLibraryHref(filters, { sort: option.value, page: 1 })}
						class="sort-option"
						class:selected={filters.sort === option.value}
						role="option"
						aria-selected={filters.sort === option.value}
						onclick={closeSheet}
					>
						<span>{option.label}</span>
						{#if filters.sort === option.value}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M5 12l5 5L20 7"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.mobile-bar {
		display: none;
		padding: 0.65rem;
		gap: 0.6rem;
	}

	.search-form {
		margin: 0;
	}

	.search-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.2rem 0.2rem 0.2rem 0.75rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg-elevated);
	}

	.search-row input {
		flex: 1;
		min-width: 0;
		border: 0;
		background: transparent;
		font: inherit;
		font-size: 1rem;
		padding: 0.55rem 0;
		color: var(--color-text);
	}

	.search-row input:focus {
		outline: none;
	}

	.search-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 0;
		border-radius: var(--radius-sm);
		background: var(--color-primary);
		color: white;
		flex-shrink: 0;
		cursor: pointer;
	}

	.controls-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}

	.control-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		min-height: 2.5rem;
		padding: 0 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg-elevated);
		font: inherit;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary-dark);
		cursor: pointer;
		min-width: 0;
	}

	.sort-btn {
		overflow: hidden;
	}

	.sort-label {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.badge {
		background: var(--color-primary);
		color: white;
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 0.1rem 0.4rem;
		border-radius: var(--radius-full);
		min-width: 1.1rem;
		text-align: center;
	}

	.chips-row {
		display: flex;
		gap: 0.4rem;
		overflow-x: auto;
		padding-bottom: 0.1rem;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
	}

	.chips-row::-webkit-scrollbar {
		display: none;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		flex-shrink: 0;
		padding: 0.3rem 0.6rem;
		border-radius: var(--radius-full);
		background: var(--color-bg-muted);
		color: var(--color-primary-dark);
		font-size: 0.75rem;
		font-weight: 600;
		text-decoration: none;
	}

	.chip span {
		opacity: 0.6;
		font-size: 0.95rem;
		line-height: 1;
	}

	.sheet-root {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.sheet-backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgba(47, 82, 57, 0.45);
		cursor: pointer;
	}

	.sheet-panel {
		position: relative;
		display: flex;
		flex-direction: column;
		max-height: min(88vh, 720px);
		background: var(--color-bg-elevated);
		border-radius: var(--radius-lg) var(--radius-lg) 0 0;
		box-shadow: var(--shadow-lg);
		animation: slide-up 0.28s cubic-bezier(0.32, 0.72, 0, 1);
	}

	@keyframes slide-up {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	.sheet-handle {
		width: 2.5rem;
		height: 0.25rem;
		margin: 0.65rem auto 0;
		border-radius: var(--radius-full);
		background: var(--color-border-strong);
	}

	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.25rem 0.5rem;
	}

	.sheet-header h2 {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.sheet-close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border: 0;
		border-radius: var(--radius-full);
		background: var(--color-bg-muted);
		font-size: 1.35rem;
		line-height: 1;
		color: var(--color-text-muted);
		cursor: pointer;
	}

	.sheet-form {
		display: flex;
		flex-direction: column;
		min-height: 0;
		flex: 1;
	}

	.sheet-fields {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		padding: 0.5rem 1.25rem 1rem;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	.sheet-panel-compact {
		max-height: none;
		padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));
	}

	.sort-options {
		display: flex;
		flex-direction: column;
		padding: 0.25rem 0.75rem 0.5rem;
	}

	.sort-option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.9rem 0.75rem;
		border-radius: var(--radius-sm);
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--color-text);
		text-decoration: none;
		transition: background var(--transition-fast);
	}

	.sort-option:hover {
		background: var(--color-bg-muted);
	}

	.sort-option.selected {
		background: var(--color-bg-muted);
		color: var(--color-primary-dark);
	}

	.sort-option svg {
		flex-shrink: 0;
		color: var(--color-primary);
	}

	.sheet-footer {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.85rem 1.25rem calc(0.85rem + env(safe-area-inset-bottom));
		border-top: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
	}

	.clear-btn {
		flex-shrink: 0;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
		padding: 0.5rem;
	}

	.sheet-footer .btn {
		flex: 1;
		min-height: 2.75rem;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 900px) {
		.mobile-bar {
			display: flex;
			flex-direction: column;
			margin-bottom: 0.75rem;
		}
	}
</style>
