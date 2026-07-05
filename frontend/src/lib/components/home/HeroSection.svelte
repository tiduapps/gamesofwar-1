<script lang="ts">
	import SiteLogo from '$lib/components/layout/SiteLogo.svelte';
	import type { FeaturedCollection } from '$lib/types/database';

	let { featured = [] }: { featured?: FeaturedCollection[] } = $props();

	const HERO_COVER_URL =
		'https://hnllhksxjgzgmgkadpgb.supabase.co/storage/v1/object/public/games/assets/cover_image.png';

	const featuredSorted = $derived([...featured].sort((a, b) => a.sort_order - b.sort_order));
</script>

<section class="hero" aria-label="Games of War">
	<div class="hero-canvas">
		<div class="hero-media" aria-hidden="true">
			<img
				src={HERO_COVER_URL}
				alt=""
				width="925"
				height="755"
				fetchpriority="high"
				decoding="async"
			/>
		</div>
		<div class="hero-overlay" aria-hidden="true"></div>

		<div class="container hero-inner">
		<div class="hero-copy">
			<span class="hero-eyebrow">1663 — Present Day</span>
			<SiteLogo href={null} variant="hero-cover" />
			<p class="hero-tagline">
				Board and card games that were played while bullets flew — telling stories about the wars of
				their times.
			</p>
			<div class="hero-actions">
				<a href="/games" class="btn">Browse collection</a>
				<a href="/games/add" class="btn btn-ghost">Contribute a game</a>
			</div>
		</div>

		<dl class="hero-stats" aria-label="Collection highlights">
			<div>
				<dt>Games</dt>
				<dd>500+</dd>
			</div>
			<div>
				<dt>Countries</dt>
				<dd>20+</dd>
			</div>
			<div>
				<dt>Years</dt>
				<dd>360</dd>
			</div>
		</dl>
		</div>
	</div>

	{#if featuredSorted.length > 0}
		<div class="container featured-strip">
			<div class="featured-card">
				<span class="featured-label">Featured</span>
				<div class="featured-links">
					{#each featuredSorted as collection}
						<a href={collection.href} class="featured-link">
							{collection.title}
							<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
</section>

<style>
	.hero {
		position: relative;
		margin-top: calc(-1 * var(--header-height));
		padding-top: var(--header-height);
	}

	.hero-canvas {
		position: relative;
		display: grid;
		width: 100%;
		height: 95vh;
	}

	.hero-canvas > .hero-media,
	.hero-canvas > .hero-overlay,
	.hero-canvas > .hero-inner {
		grid-area: 1 / 1;
	}

	.hero-media img {
		display: block;
		width: 100%;
		height: 95vh;
	}

	.hero-overlay {
		z-index: 1;
		align-self: stretch;
		background:
			linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.45) 30%, transparent 58%),
			linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.5) 36%, rgba(0, 0, 0, 0.1) 62%, transparent 100%),
			linear-gradient(0deg, rgba(232, 240, 232, 0.92) 0%, transparent 18%);
	}

	.hero-inner {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-self: end;
		align-items: end;
		padding: 2rem 0 5rem;
		box-sizing: border-box;
	}

	.hero-copy {
		max-width: 36rem;
		color: white;
	}

	.hero-eyebrow {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.72);
	}

	.hero-tagline {
		margin: 0 0 1.75rem;
		max-width: 32rem;
		font-size: clamp(1rem, 1.8vw, 1.125rem);
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.88);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.hero-stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(4.5rem, 1fr));
		gap: 0.65rem;
		margin: 0;
		padding: 1rem 1.1rem;
		border-radius: var(--radius-md);
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.18);
		backdrop-filter: blur(10px);
	}

	.hero-stats div {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		text-align: center;
	}

	.hero-stats dt {
		font-size: 0.625rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgba(255, 255, 255, 0.62);
	}

	.hero-stats dd {
		margin: 0;
		font-size: 1.35rem;
		font-weight: 800;
		color: white;
		letter-spacing: -0.02em;
	}

	.featured-strip {
		position: relative;
		z-index: 3;
		margin-top: -2rem;
		margin-bottom: 2rem;
	}

	.featured-card {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.85rem 1.25rem;
		padding: 1rem 1.25rem;
		border-radius: var(--radius-md);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-md);
	}

	.featured-label {
		font-size: 0.6875rem;
		font-weight: 800;
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

	.featured-link {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0.45rem 0.9rem;
		border-radius: var(--radius-full);
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary-dark);
		text-decoration: none;
		transition:
			border-color var(--transition-fast),
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.featured-link:hover {
		border-color: var(--color-primary-light);
		color: var(--color-primary);
		transform: translateY(-1px);
	}

	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
			align-items: end;
			padding: 1.5rem 0 5rem;
		}

		.hero-stats {
			width: fit-content;
		}
	}

	@media (max-width: 640px) {
		.hero-inner {
			padding: 1.25rem 0 5rem;
		}

		.hero-copy {
			text-align: left;
		}

		.hero-stats {
			width: 100%;
		}

		.featured-card {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
