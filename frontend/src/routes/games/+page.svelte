<script lang="ts">
	import GameCard from '$lib/components/games/GameCard.svelte';
	import GameCardSkeleton from '$lib/components/games/GameCardSkeleton.svelte';
	import GameLibraryDesktopToolbar from '$lib/components/games/GameLibraryDesktopToolbar.svelte';
	import GameLibraryFilters from '$lib/components/games/GameLibraryFilters.svelte';
	import GameLibraryMobileBar from '$lib/components/games/GameLibraryMobileBar.svelte';
	import Pagination from '$lib/components/games/Pagination.svelte';
	import { GAMES_PAGE_SIZE } from '$lib/games/constants';
	import { navigating } from '$app/state';

	let { data } = $props();

	const isFetching = $derived(navigating.to?.url.pathname === '/games');

	const showingFrom = $derived(
		data.total === 0 ? 0 : (data.filters.page - 1) * data.pageSize + 1
	);
	const showingTo = $derived(Math.min(data.filters.page * data.pageSize, data.total));

	const collectionLabel = $derived(
		data.filters.collection === 'don-cermak'
			? 'Don Cermak Collection'
			: data.filters.collection
				? data.filters.collection
				: null
	);
</script>

<svelte:head>
	<title>Game Library — Games of War</title>
	<meta
		name="description"
		content="Browse the world's largest library of board and card games about war, from 1663 to the present day."
	/>
</svelte:head>

<section class="library-page">
	<div class="container">
		<header class="library-header">
			<div>
				<span class="section-eyebrow">Explore the collection</span>
				<h1>Game Library</h1>
				<p class="subtitle" class:loading={isFetching}>
					{#if isFetching}
						<span class="status-pulse">Loading games…</span>
					{:else if data.supabaseReady}
						{#if data.total > 0}
							Showing {showingFrom}–{showingTo} of {data.total} games
							{#if collectionLabel}
								· <strong>{collectionLabel}</strong>
							{/if}
						{:else}
							No games match your search.
						{/if}
					{:else}
						Connect Supabase to browse the collection.
					{/if}
				</p>
			</div>
		</header>

		<GameLibraryMobileBar filters={data.filters} facets={data.facets} total={data.total} />

		<GameLibraryDesktopToolbar filters={data.filters} />

		<div class="library-layout">
			<GameLibraryFilters filters={data.filters} facets={data.facets} />

			<div class="results" class:is-loading={isFetching}>
				{#if isFetching}
					<div class="games-grid" aria-busy="true" aria-label="Loading games">
						{#each Array(GAMES_PAGE_SIZE) as _, i (i)}
							<GameCardSkeleton />
						{/each}
					</div>
				{:else if !data.supabaseReady}
					<div class="empty-state card">
						<p>Supabase is not configured. Add your credentials to <code>frontend/.env</code>.</p>
					</div>
				{:else if data.games.length === 0}
					<div class="empty-state card">
						<p>No games found. Try adjusting your search or filters.</p>
						<a href="/games" class="btn btn-secondary">Clear filters</a>
					</div>
				{:else}
					<div class="games-grid">
						{#each data.games as game (game.id)}
							<GameCard {game} />
						{/each}
					</div>

					<Pagination
						filters={data.filters}
						page={data.filters.page}
						totalPages={data.totalPages}
					/>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.library-page {
		padding: 2rem 0 3.5rem;
	}

	.library-header {
		margin-bottom: 1.5rem;
	}

	.library-header h1 {
		margin: 0 0 0.5rem;
		font-size: clamp(2rem, 4vw, 2.75rem);
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.subtitle {
		margin: 0;
		color: var(--color-text-muted);
		font-size: 1rem;
	}

	.library-layout {
		display: grid;
		grid-template-columns: 260px 1fr;
		gap: 1.5rem;
		align-items: start;
	}

	.games-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		align-items: start;
	}

	.subtitle.loading {
		color: var(--color-primary);
	}

	.status-pulse {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-weight: 600;
	}

	.results.is-loading {
		pointer-events: none;
	}

	.empty-state {
		padding: 2.5rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.empty-state p {
		margin: 0;
		color: var(--color-text-muted);
	}

	@media (max-width: 900px) {
		.library-page {
			padding: 1rem 0 2.5rem;
		}

		.library-header {
			margin-bottom: 0.75rem;
		}

		.library-header h1 {
			font-size: 1.65rem;
		}

		.subtitle {
			font-size: 0.8125rem;
		}

		.library-layout {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}

		.games-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.65rem;
		}
	}
</style>
