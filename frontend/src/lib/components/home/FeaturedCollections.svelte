<script lang="ts">
	import type { FeaturedCollection } from '$lib/types/database';

	let { collections }: { collections: FeaturedCollection[] } = $props();

	const sorted = $derived([...collections].sort((a, b) => a.sort_order - b.sort_order));
</script>

{#if sorted.length > 0}
	<div class="featured-bar">
		<div class="container featured-inner">
			<span class="featured-label">Featured</span>
			<div class="featured-links">
				{#each sorted as collection}
					<a href={collection.href} class="collection-chip card-hover">
						{collection.title}
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path
								d="M6 4l4 4-4 4"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.featured-bar {
		padding: 1rem 0 0;
	}

	.featured-inner {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.featured-label {
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-muted);
		flex-shrink: 0;
	}

	.featured-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.collection-chip {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.5rem 1rem;
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-full);
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-primary-dark);
		box-shadow: var(--shadow-xs);
		transition:
			transform var(--transition-base),
			box-shadow var(--transition-base),
			border-color var(--transition-base);
	}

	.collection-chip:hover {
		border-color: var(--color-primary-light);
		color: var(--color-primary);
	}

	.collection-chip svg {
		opacity: 0.5;
		transition: transform var(--transition-fast);
	}

	.collection-chip:hover svg {
		transform: translateX(2px);
		opacity: 1;
	}
</style>
