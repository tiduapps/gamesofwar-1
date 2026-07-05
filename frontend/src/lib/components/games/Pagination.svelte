<script lang="ts">
	import { buildGamesLibraryHref, type GameLibraryFilters } from '$lib/games/constants';

	let {
		filters,
		page,
		totalPages
	}: {
		filters: GameLibraryFilters;
		page: number;
		totalPages: number;
	} = $props();

	const pages = $derived(buildPageList(page, totalPages));

	function buildPageList(current: number, total: number): (number | 'ellipsis')[] {
		if (total <= 7) {
			return Array.from({ length: total }, (_, i) => i + 1);
		}

		const items: (number | 'ellipsis')[] = [1];

		if (current > 3) items.push('ellipsis');

		const start = Math.max(2, current - 1);
		const end = Math.min(total - 1, current + 1);

		for (let i = start; i <= end; i++) {
			items.push(i);
		}

		if (current < total - 2) items.push('ellipsis');

		items.push(total);
		return items;
	}
</script>

{#if totalPages > 1}
	<nav class="pagination" aria-label="Game library pages">
		{#if page > 1}
			<a
				href={buildGamesLibraryHref(filters, { page: page - 1 })}
				class="page-btn"
				aria-label="Previous page"
			>
				← Prev
			</a>
		{:else}
			<span class="page-btn disabled">← Prev</span>
		{/if}

		<div class="page-numbers">
			{#each pages as item}
				{#if item === 'ellipsis'}
					<span class="ellipsis">…</span>
				{:else if item === page}
					<span class="page-num current" aria-current="page">{item}</span>
				{:else}
					<a href={buildGamesLibraryHref(filters, { page: item })} class="page-num">{item}</a>
				{/if}
			{/each}
		</div>

		{#if page < totalPages}
			<a
				href={buildGamesLibraryHref(filters, { page: page + 1 })}
				class="page-btn"
				aria-label="Next page"
			>
				Next →
			</a>
		{:else}
			<span class="page-btn disabled">Next →</span>
		{/if}
	</nav>
{/if}

<style>
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		padding: 2rem 0 0.5rem;
	}

	.page-numbers {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.page-btn,
	.page-num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.5rem;
		height: 2.5rem;
		padding: 0 0.65rem;
		border-radius: var(--radius-sm);
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		color: var(--color-text);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		transition:
			background var(--transition-fast),
			border-color var(--transition-fast);
	}

	.page-btn:hover,
	.page-num:hover {
		background: var(--color-bg-muted);
		border-color: var(--color-border-strong);
	}

	.page-btn.disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.page-num.current {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
	}

	.ellipsis {
		padding: 0 0.25rem;
		color: var(--color-text-muted);
	}
</style>
