<script lang="ts">
	import GameCard from '$lib/components/games/GameCard.svelte';

	let {
		data
	}: {
		data: {
			story: { id: string; title: string; slug: string };
			gameCount: number;
			prevStory: { title: string; slug: string } | null;
			nextStory: { title: string; slug: string } | null;
			games: Array<{
				id: string;
				title: string;
				slug: string;
				year: number | null;
				country: string | null;
				publisher: string | null;
				cover_photo_url: string | null;
				description: string | null;
			}>;
		};
	} = $props();
</script>

<svelte:head>
	<title>{data.story.title} — Stories — Games of War</title>
	<meta
		name="description"
		content="Games linked to the story “{data.story.title}” in the Games of War collection."
	/>
</svelte:head>

<section class="story-detail">
	<header class="story-hero">
		<div class="container story-hero-inner">
			<a href="/stories" class="back-link">← All stories</a>
			<span class="section-eyebrow">Story</span>
			<h1>{data.story.title}</h1>
			<p class="story-subtitle">
				{data.gameCount} {data.gameCount === 1 ? 'game' : 'games'} in this chapter
			</p>
		</div>
	</header>

	<div class="container story-body">
		{#if data.games.length === 0}
			<div class="empty card">
				<p>No games linked to this story yet.</p>
				<a href="/stories" class="btn btn-secondary btn-sm">Browse all stories</a>
			</div>
		{:else}
			<ul class="games-grid">
				{#each data.games as game (game.id)}
					<li>
						<GameCard game={{ ...game, theme: null }} />
					</li>
				{/each}
			</ul>
		{/if}

		{#if data.prevStory || data.nextStory}
			<nav class="story-pager" aria-label="Story navigation">
				{#if data.prevStory}
					<a href="/stories/{data.prevStory.slug}" class="pager-link prev">
						<span class="pager-label">Previous</span>
						<span class="pager-title">{data.prevStory.title}</span>
					</a>
				{:else}
					<span></span>
				{/if}

				{#if data.nextStory}
					<a href="/stories/{data.nextStory.slug}" class="pager-link next">
						<span class="pager-label">Next</span>
						<span class="pager-title">{data.nextStory.title}</span>
					</a>
				{/if}
			</nav>
		{/if}
	</div>
</section>

<style>
	.story-detail {
		padding-bottom: 3.5rem;
	}

	.story-hero {
		padding: 2rem 0 1.75rem;
		margin-bottom: 1.5rem;
		background:
			linear-gradient(180deg, rgba(220, 232, 220, 0.5) 0%, transparent 100%),
			var(--color-bg);
		border-bottom: 1px solid var(--color-border);
	}

	.story-hero-inner {
		max-width: 44rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.story-hero h1 {
		margin: 0 0 0.5rem;
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4.5vw, 2.75rem);
		font-weight: 700;
		line-height: 1.12;
		color: var(--color-primary-dark);
	}

	.story-subtitle {
		margin: 0;
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2.5rem 1.5rem;
		text-align: center;
		color: var(--color-text-muted);
	}

	.empty p {
		margin: 0;
	}

	.games-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10.5rem, 1fr));
		gap: 1rem;
	}

	.story-pager {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}

	.pager-link {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem 1.15rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		text-decoration: none;
		color: inherit;
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast),
			transform var(--transition-fast);
	}

	.pager-link:hover {
		border-color: var(--color-primary-light);
		box-shadow: var(--shadow-sm);
		transform: translateY(-1px);
	}

	.pager-link.next {
		text-align: right;
		grid-column: 2;
	}

	.pager-label {
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
	}

	.pager-title {
		font-family: var(--font-serif);
		font-size: 1rem;
		font-weight: 700;
		color: var(--color-primary-dark);
		line-height: 1.3;
	}

	@media (max-width: 720px) {
		.games-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.story-pager {
			grid-template-columns: 1fr;
		}

		.pager-link.next {
			grid-column: 1;
			text-align: left;
		}
	}
</style>
