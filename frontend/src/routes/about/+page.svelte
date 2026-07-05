<script lang="ts">
	import { aboutAuthor, aboutHighlights, aboutParagraphs } from '$lib/data/about-content';
</script>

<svelte:head>
	<title>About — Games of War</title>
	<meta
		name="description"
		content="The story behind Games of War — a history of centuries of warfare as seen through board and card games, from David Stewart-Patterson."
	/>
</svelte:head>

<section class="about-page">
	<div class="hero">
		<div class="container hero-inner">
			<span class="section-eyebrow">Games of War</span>
			<h1>About the site</h1>
			<p class="hero-lead">
				A history of centuries of warfare as seen through the games people played while those
				wars unfolded.
			</p>
		</div>
	</div>

	<div class="container content-grid">
		<article class="about-article card">
			<div class="prose">
				{#each aboutParagraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<aside class="signature">
				<p class="signature-name">{aboutAuthor.name}</p>
				<p class="signature-location">{aboutAuthor.location}</p>
			</aside>
		</article>

		<aside class="sidebar">
			<div class="stats-card card">
				<h2>By the numbers</h2>
				<ul class="stats-list">
					{#each aboutHighlights as stat}
						<li>
							<span class="stat-value">{stat.value}</span>
							<span class="stat-label">{stat.label}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="actions-card card">
				<h2>Explore</h2>
				<p>Browse the library, read the stories, or see who helped make this site possible.</p>
				<div class="action-buttons">
					<a href="/games" class="btn">Browse games</a>
					<a href="/acknowledgements" class="btn btn-secondary">Acknowledgements</a>
				</div>
			</div>
		</aside>
	</div>
</section>

<style>
	.about-page {
		padding-bottom: 3.5rem;
	}

	.hero {
		padding: 2.5rem 0 2rem;
		background: linear-gradient(
			180deg,
			rgba(220, 232, 220, 0.65) 0%,
			transparent 100%
		);
	}

	.hero-inner {
		max-width: 46rem;
	}

	.hero-inner h1 {
		margin: 0.35rem 0 0.75rem;
		font-family: var(--font-serif);
		font-size: clamp(2.25rem, 5vw, 3.25rem);
		font-weight: 700;
		color: var(--color-primary-dark);
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.hero-lead {
		margin: 0;
		font-size: 1.125rem;
		line-height: 1.65;
		color: var(--color-text-muted);
		max-width: 42rem;
	}

	.content-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(16rem, 22rem);
		gap: 1.25rem;
		align-items: start;
	}

	.about-article {
		padding: 1.75rem 1.85rem;
	}

	.about-article .prose {
		font-size: 1.0625rem;
	}

	.signature {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.signature-name {
		margin: 0;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-primary-dark);
	}

	.signature-location {
		margin: 0.25rem 0 0;
		font-size: 0.9375rem;
		color: var(--color-text-muted);
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: sticky;
		top: calc(var(--header-height) + 1rem);
	}

	.stats-card,
	.actions-card {
		padding: 1.35rem;
	}

	.stats-card h2,
	.actions-card h2 {
		margin: 0 0 1rem;
		font-size: 0.8125rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-primary);
	}

	.stats-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.stats-list li {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.stat-value {
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.stat-label {
		font-size: 0.8125rem;
		line-height: 1.45;
		color: var(--color-text-muted);
	}

	.actions-card p {
		margin: 0 0 1.15rem;
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.action-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.action-buttons .btn {
		width: 100%;
	}

	@media (max-width: 900px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.sidebar {
			position: static;
		}
	}

	@media (max-width: 600px) {
		.about-article {
			padding: 1.25rem;
		}
	}
</style>
