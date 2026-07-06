<script lang="ts">
	import type { StoryContent } from '$lib/data/stories';
	import StoryChapterList from '$lib/components/stories/StoryChapterList.svelte';
	import GameCard from '$lib/components/games/GameCard.svelte';

	let {
		content,
		parentStory = null,
		chapters = [],
		prevStory,
		nextStory,
		games = []
	}: {
		content: StoryContent;
		parentStory?: { title: string; slug: string } | null;
		chapters?: Array<{ title: string; slug: string }>;
		prevStory: { title: string; slug: string } | null;
		nextStory: { title: string; slug: string } | null;
		games?: Array<{
			id: string;
			title: string;
			slug: string;
			year: number | null;
			country: string | null;
			publisher: string | null;
			cover_photo_url: string | null;
			description: string | null;
		}>;
	} = $props();

	const isChapter = $derived(parentStory !== null);
</script>

<article class="story-article">
	<header class="story-hero">
		<div class="container story-hero-inner">
			<nav class="breadcrumbs" aria-label="Breadcrumb">
				<a href="/stories">All stories</a>
				{#if parentStory}
					<span class="sep" aria-hidden="true">/</span>
					<a href="/stories/{parentStory.slug}">{parentStory.title}</a>
				{/if}
			</nav>
			<span class="section-eyebrow">{isChapter ? 'Chapter' : 'Story'}</span>
			<h1>{content.title}</h1>

			{#if content.subtitle}
				<p class="story-subtitle">{content.subtitle}</p>
			{/if}

			{#if content.epigraph}
				<blockquote class="epigraph">
					<p>“{content.epigraph.quote}”</p>
					<cite>{content.epigraph.attribution}</cite>
				</blockquote>
			{/if}
		</div>
	</header>

	<div class="container">
		<div class="article-body">
			{#each content.blocks as block (block)}
				{#if block.type === 'paragraph'}
					<p class="prose-para">{block.text}</p>
				{:else if block.type === 'list'}
					<ul class="prose-list">
						{#each block.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				{:else if block.type === 'figure'}
					<figure class="story-figure align-{block.align}">
						<div class="figure-frame">
							<img src={block.figure.src} alt={block.figure.alt} loading="lazy" />
						</div>
						{#if block.figure.caption}
							<figcaption>{block.figure.caption}</figcaption>
						{/if}
					</figure>
				{:else if block.type === 'figure-stack'}
					<div class="figure-stack align-{block.align}">
						{#each block.figures as figure (figure.src)}
							<figure class="stack-item">
								<div class="figure-frame">
									<img src={figure.src} alt={figure.alt} loading="lazy" />
								</div>
								{#if figure.caption}
									<figcaption>{figure.caption}</figcaption>
								{/if}
							</figure>
						{/each}
					</div>
				{/if}
			{/each}
		</div>

		{#if games.length > 0}
			<section class="linked-games" aria-labelledby="linked-games-heading">
				<div class="linked-games-header">
					<span class="section-eyebrow">From the collection</span>
					<h2 id="linked-games-heading">Games in this story</h2>
				</div>
				<ul class="games-grid">
					{#each games as game (game.id)}
						<li>
							<GameCard game={{ ...game, theme: null }} />
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if chapters.length > 0}
			<StoryChapterList {chapters} parentTitle={content.title} />
		{/if}

		{#if prevStory || nextStory}
			<nav class="chapter-nav" aria-label="Story navigation">
				{#if prevStory}
					<a href="/stories/{prevStory.slug}" class="chapter-link prev">
						<span class="chapter-label">{isChapter && prevStory.slug === parentStory?.slug ? 'Story' : 'Previous'}</span>
						<span class="chapter-title">{prevStory.title}</span>
					</a>
				{:else}
					<span></span>
				{/if}

				{#if nextStory}
					<a href="/stories/{nextStory.slug}" class="chapter-link next">
						<span class="chapter-label">
							{chapters.length > 0 && nextStory.slug === chapters[0]?.slug
								? 'First chapter'
								: isChapter && chapters.length === 0
									? 'Next story'
									: 'Next chapter'}
						</span>
						<span class="chapter-title">{nextStory.title}</span>
					</a>
				{/if}
			</nav>
		{/if}
	</div>
</article>

<style>
	.story-article {
		padding-bottom: 4rem;
	}

	.story-hero {
		padding: 2rem 0 2.5rem;
		margin-bottom: 0.5rem;
		background:
			linear-gradient(180deg, rgba(220, 232, 220, 0.55) 0%, transparent 100%),
			var(--color-bg);
		border-bottom: 1px solid var(--color-border);
	}

	.story-hero-inner {
		max-width: 42rem;
		margin-inline: auto;
		text-align: center;
	}

	.breadcrumbs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		margin-bottom: 1.25rem;
		font-size: 0.8125rem;
		font-weight: 600;
	}

	.breadcrumbs a {
		color: var(--color-primary);
		text-decoration: none;
	}

	.breadcrumbs a:hover {
		text-decoration: underline;
	}

	.breadcrumbs .sep {
		color: var(--color-text-muted);
	}

	.story-hero h1 {
		margin: 0 0 0.65rem;
		font-family: var(--font-serif);
		font-size: clamp(2.25rem, 5vw, 3.25rem);
		font-weight: 700;
		line-height: 1.1;
		color: var(--color-primary-dark);
	}

	.story-subtitle {
		margin: 0 0 1.5rem;
		font-family: var(--font-serif);
		font-size: clamp(1.15rem, 2.5vw, 1.45rem);
		font-weight: 700;
		font-style: italic;
		color: var(--color-primary);
	}

	.epigraph {
		margin: 0;
		padding: 0;
		border: none;
	}

	.epigraph p {
		margin: 0 0 0.75rem;
		font-family: var(--font-serif);
		font-size: clamp(1.05rem, 2.2vw, 1.25rem);
		font-style: italic;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.epigraph cite {
		display: block;
		font-family: var(--font-sans);
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		color: var(--color-primary);
	}

	.article-body {
		max-width: 42rem;
		margin-inline: auto;
		padding: 2rem 0 1rem;
	}

	.article-body::after {
		content: '';
		display: table;
		clear: both;
	}

	.prose-para {
		margin: 0 0 1.35rem;
		font-family: var(--font-serif);
		font-size: 1.0625rem;
		line-height: 1.78;
		color: var(--color-text);
	}

	.prose-para:first-of-type::first-letter {
		font-size: 3.25rem;
		font-weight: 700;
		line-height: 0.85;
		float: left;
		margin: 0.08em 0.12em 0 0;
		color: var(--color-primary-dark);
	}

	.prose-list {
		margin: 0 0 1.35rem 1.1rem;
		padding: 0;
		font-family: var(--font-serif);
		font-size: 1.0625rem;
		line-height: 1.65;
		color: var(--color-text);
	}

	.prose-list li {
		margin-bottom: 0.45rem;
		padding-left: 0.25rem;
	}

	.prose-list li::marker {
		color: var(--color-primary);
	}

	.story-figure {
		margin: 0 0 1.5rem;
		max-width: min(100%, 16.5rem);
	}

	.story-figure.align-right {
		float: right;
		margin-left: 1.75rem;
		margin-right: 0;
	}

	.story-figure.align-left {
		float: left;
		margin-right: 1.75rem;
		margin-left: 0;
	}

	.story-figure.align-center {
		float: none;
		max-width: 28rem;
		margin-inline: auto;
	}

	.figure-stack {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: min(100%, 15.5rem);
		margin-bottom: 1.5rem;
	}

	.figure-stack.align-right {
		float: right;
		margin-left: 1.75rem;
	}

	.figure-stack.align-left {
		float: left;
		margin-right: 1.75rem;
	}

	.stack-item {
		margin: 0;
	}

	.figure-frame {
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-sm);
	}

	.figure-frame img {
		width: 100%;
		height: auto;
		display: block;
	}

	figcaption {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.4;
		color: var(--color-text-muted);
		text-align: center;
	}

	.linked-games {
		max-width: 52rem;
		margin: 3rem auto 0;
		padding-top: 2.5rem;
		border-top: 1px solid var(--color-border);
	}

	.linked-games-header {
		margin-bottom: 1.25rem;
	}

	.linked-games-header h2 {
		margin: 0.35rem 0 0;
		font-family: var(--font-serif);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-primary-dark);
	}

	.games-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10.5rem, 1fr));
		gap: 1rem;
	}

	.chapter-nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		max-width: 42rem;
		margin: 3rem auto 0;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}

	.chapter-link {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding: 1.15rem 1.25rem;
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

	.chapter-link:hover {
		border-color: var(--color-primary-light);
		box-shadow: var(--shadow-sm);
		transform: translateY(-1px);
	}

	.chapter-link.next {
		text-align: right;
		grid-column: 2;
	}

	.chapter-label {
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
	}

	.chapter-title {
		font-family: var(--font-serif);
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--color-primary-dark);
		line-height: 1.3;
	}

	@media (max-width: 720px) {
		.story-hero-inner {
			text-align: left;
		}

		.story-figure,
		.figure-stack {
			float: none !important;
			max-width: 100%;
			margin-inline: 0;
		}

		.prose-para:first-of-type::first-letter {
			font-size: 2.75rem;
		}

		.games-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.chapter-nav {
			grid-template-columns: 1fr;
		}

		.chapter-link.next {
			grid-column: 1;
			text-align: left;
		}
	}
</style>
