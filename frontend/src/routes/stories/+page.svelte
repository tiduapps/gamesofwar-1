<script lang="ts">
	import StoryListCard from '$lib/components/stories/StoryListCard.svelte';

	let { data } = $props();

	const storyCount = $derived(data.stories.length);
	const chapterCount = $derived(
		data.stories.reduce((sum, story) => sum + story.chapters.length, 0)
	);
</script>

<svelte:head>
	<title>Stories — Games of War</title>
	<meta
		name="description"
		content="Explore centuries of warfare through narrative stories and the games that were played while those wars unfolded."
	/>
</svelte:head>

<section class="stories-page">
	<header class="stories-hero">
		<div class="container stories-hero-inner">
			<span class="section-eyebrow">1663 — Present Day</span>
			<h1>Stories</h1>
			<p class="hero-lead">
				Follow the arc of wartime games from the 17th Century Franco-Spanish War to the fall of the
				Berlin Wall — each story illuminates a chapter of history through the games of its time.
			</p>
			<dl class="hero-stats">
				<div>
					<dt>Stories</dt>
					<dd>{storyCount}</dd>
				</div>
				{#if chapterCount > 0}
					<div>
						<dt>Chapters</dt>
						<dd>{chapterCount}</dd>
					</div>
				{/if}
			</dl>
		</div>
	</header>

	<div class="container stories-content">
		<ol class="story-timeline">
			{#each data.stories as story, index (story.slug)}
				<li>
					<StoryListCard {story} {index} />
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.stories-page {
		padding-bottom: 3.5rem;
	}

	.stories-hero {
		padding: 2.5rem 0 2rem;
		margin-bottom: 1.5rem;
		background:
			linear-gradient(180deg, rgba(220, 232, 220, 0.55) 0%, transparent 100%),
			var(--color-bg);
		border-bottom: 1px solid var(--color-border);
	}

	.stories-hero-inner {
		max-width: 44rem;
	}

	.stories-hero h1 {
		margin: 0 0 0.85rem;
		font-family: var(--font-serif);
		font-size: clamp(2.25rem, 5vw, 3rem);
		font-weight: 700;
		line-height: 1.1;
		color: var(--color-primary-dark);
	}

	.hero-lead {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-text-muted);
		max-width: 40rem;
	}

	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin: 1.75rem 0 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-border);
	}

	.hero-stats div {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.hero-stats dt {
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
	}

	.hero-stats dd {
		margin: 0;
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.stories-content {
		max-width: 52rem;
	}

	.story-timeline {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.story-timeline > li {
		margin: 0;
	}
</style>
