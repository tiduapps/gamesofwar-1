<script lang="ts">
	import type { Announcement } from '$lib/types/database';

	let { items }: { items: Announcement[] } = $props();

	function gameHref(item: Announcement): string {
		if (item.games?.slug) {
			return `/games/${item.games.slug}`;
		}
		return '/games';
	}
</script>

<section class="did-you-know">
	<div class="container">
		<div class="section-header">
			<span class="section-eyebrow">Historical tidbits</span>
			<h2 class="section-title">Did you know?</h2>
			<p class="section-subtitle">
				Fascinating facts from the world of war-themed games — each one a window into history.
			</p>
		</div>

		<ul class="facts-grid">
			{#each items as item, i}
				<li class="fact-card card card-hover">
					<span class="fact-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<p class="fact">{item.fact}</p>
					<a href={gameHref(item)} class="fact-link">
						{item.button_label}
						<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path
								d="M3 8h10M9 4l4 4-4 4"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.did-you-know {
		padding: 4rem 0;
		background: linear-gradient(180deg, transparent, rgba(220, 232, 220, 0.6) 50%, transparent);
	}

	.section-header {
		margin-bottom: 2.5rem;
	}

	.facts-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.fact-card {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		padding: 1.5rem;
		position: relative;
	}

	.fact-number {
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--color-primary-light);
		opacity: 0.7;
	}

	.fact {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.65;
		color: var(--color-text);
		flex: 1;
	}

	.fact-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		transition: gap var(--transition-fast);
	}

	.fact-link:hover {
		gap: 0.55rem;
		color: var(--color-primary-dark);
	}

	@media (max-width: 720px) {
		.facts-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
