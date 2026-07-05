<script lang="ts">
	import PickerField from '$lib/components/ui/PickerField.svelte';
	import { SORT_OPTIONS, type GameLibraryFilters } from '$lib/games/constants';

	let { filters }: { filters: GameLibraryFilters } = $props();

	let sort = $state('');
	let form: HTMLFormElement | undefined = $state();

	$effect(() => {
		sort = filters.sort;
	});

	const sortOptions = SORT_OPTIONS.map((option) => ({
		value: option.value,
		label: option.label
	}));
</script>

<form method="GET" action="/games" class="toolbar card" bind:this={form}>
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

	<div class="search-wrap">
		<label class="sr-only" for="desktop-search">Search games</label>
		<div class="search-field">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
				<path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
			<input
				id="desktop-search"
				name="q"
				type="search"
				placeholder="Search by title, theme, publisher…"
				value={filters.q}
			/>
		</div>
	</div>

	<div class="sort-wrap">
		<PickerField
			id="desktop-sort"
			name="sort"
			label="Sort"
			placeholder="Title (A–Z)"
			bind:value={sort}
			options={sortOptions}
			compact
			onselect={() => form?.requestSubmit()}
		/>
	</div>

	<button type="submit" class="btn btn-sm">Search</button>
</form>

<style>
	.toolbar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		padding: 0.85rem;
		margin-bottom: 1.5rem;
		align-items: center;
	}

	.search-wrap {
		flex: 1 1 14rem;
	}

	.search-field {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0 0.85rem;
		min-height: 2.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg-elevated);
		color: var(--color-text-muted);
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.search-field:focus-within {
		border-color: var(--color-primary-light);
		box-shadow: 0 0 0 3px rgba(85, 139, 110, 0.18);
	}

	.search-field input {
		flex: 1;
		min-width: 0;
		border: 0;
		background: transparent;
		font: inherit;
		font-size: 0.9375rem;
		padding: 0.55rem 0;
		color: var(--color-text);
	}

	.search-field input:focus {
		outline: none;
	}

	.sort-wrap {
		flex: 0 1 13rem;
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
		.toolbar {
			display: none;
		}
	}
</style>
