<script lang="ts">
	import PickerField from '$lib/components/ui/PickerField.svelte';
	import type { GameLibraryFacets, GameLibraryFilters } from '$lib/games/constants';

	let {
		filters,
		facets,
		idPrefix = ''
	}: {
		filters: GameLibraryFilters;
		facets: GameLibraryFacets;
		idPrefix?: string;
	} = $props();

	const pid = (name: string) => `${idPrefix}${name}`;

	let country = $state('');
	let theme = $state('');
	let publisher = $state('');

	$effect(() => {
		country = filters.country;
		theme = filters.theme;
		publisher = filters.publisher;
	});

	const countryOptions = $derived(facets.countries.map((value) => ({ value, label: value })));
	const themeOptions = $derived(facets.themes.map((value) => ({ value, label: value })));
	const publisherOptions = $derived(facets.publishers.map((value) => ({ value, label: value })));
</script>

<PickerField
	id={pid('country')}
	name="country"
	label="Country"
	placeholder="All countries"
	bind:value={country}
	options={countryOptions}
	searchable
/>

<PickerField
	id={pid('theme')}
	name="theme"
	label="Theme"
	placeholder="All themes"
	bind:value={theme}
	options={themeOptions}
	searchable
/>

<PickerField
	id={pid('publisher')}
	name="publisher"
	label="Publisher"
	placeholder="All publishers"
	bind:value={publisher}
	options={publisherOptions}
	searchable
/>

<div class="filter-row">
	<div class="filter-group">
		<label for={pid('year_min')}>Year from</label>
		<input
			id={pid('year_min')}
			name="year_min"
			type="number"
			inputmode="numeric"
			min="1600"
			max="2100"
			placeholder="1663"
			value={filters.yearMin}
		/>
	</div>
	<div class="filter-group">
		<label for={pid('year_max')}>Year to</label>
		<input
			id={pid('year_max')}
			name="year_max"
			type="number"
			inputmode="numeric"
			min="1600"
			max="2100"
			placeholder="2026"
			value={filters.yearMax}
		/>
	</div>
</div>

<style>
	.filter-group {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		min-width: 0;
	}

	.filter-group label {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.filter-group input {
		width: 100%;
		min-height: 2.5rem;
		font: inherit;
		font-size: 0.9375rem;
		padding: 0.55rem 0.75rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg-elevated);
		color: var(--color-text);
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.filter-group input:focus {
		outline: none;
		border-color: var(--color-primary-light);
		box-shadow: 0 0 0 3px rgba(85, 139, 110, 0.18);
	}

	.filter-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.65rem;
	}

	@media (max-width: 480px) {
		.filter-row {
			grid-template-columns: 1fr;
		}
	}
</style>
