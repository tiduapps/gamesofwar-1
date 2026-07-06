<script lang="ts">
	import type { StoryWithChapters } from '$lib/data/stories';

	let {
		story,
		index
	}: {
		story: StoryWithChapters;
		index: number;
	} = $props();

	let expanded = $state(false);

	const chaptersId = $derived(`chapters-${story.slug}`);
</script>

<div class="story-group card">
	<div class="story-card">
		<div class="story-index" aria-hidden="true">
			<span class="index-num">{String(index + 1).padStart(2, '0')}</span>
			<span class="index-line"></span>
		</div>

		<div class="story-body">
			<a href="/stories/{story.slug}" class="story-main">
				<div class="story-head">
					<h2>{story.title}</h2>
					<span class="story-arrow" aria-hidden="true">
						<svg width="18" height="18" viewBox="0 0 16 16" fill="none">
							<path
								d="M3 8h10M9 4l4 4-4 4"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</div>

				<p class="story-meta">
					{#if story.chapters.length > 0}
						{story.chapters.length} chapters
					{:else if story.kind === 'hub'}
						Collection of articles
					{:else}
						Read story
					{/if}
				</p>

				{#if story.description}
					<p class="story-description">{story.description}</p>
				{/if}
			</a>

			{#if story.chapters.length > 0}
				<button
					type="button"
					class="chapter-toggle"
					aria-expanded={expanded}
					aria-controls={chaptersId}
					onclick={() => (expanded = !expanded)}
				>
					<span class="toggle-chevron" class:open={expanded} aria-hidden="true">
						<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
							<path
								d="M4 6l4 4 4-4"
								stroke="currentColor"
								stroke-width="1.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					{expanded ? 'Hide chapters' : 'Show chapters'}
				</button>
			{/if}
		</div>
	</div>

	{#if story.chapters.length > 0 && expanded}
		<ol id={chaptersId} class="chapter-list" aria-label="Chapters in {story.title}">
			{#each story.chapters as chapter, chapterIndex (chapter.slug)}
				<li>
					<a href="/stories/{chapter.slug}" class="chapter-link">
						<span class="chapter-num">{chapterIndex + 1}</span>
						<span class="chapter-title">{chapter.title}</span>
					</a>
				</li>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.story-group {
		display: flex;
		flex-direction: column;
		gap: 0;
		overflow: hidden;
	}

	.story-card {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		gap: 1.25rem;
		padding: 1.35rem 1.5rem;
	}

	.story-index {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.65rem;
		padding-top: 0.15rem;
	}

	.index-num {
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		color: var(--color-primary);
	}

	.index-line {
		flex: 1;
		width: 2px;
		min-height: 2rem;
		border-radius: 1px;
		background: linear-gradient(180deg, var(--color-primary-light), transparent);
	}

	.story-body {
		min-width: 0;
	}

	.story-main {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.story-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.story-head h2 {
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(1.2rem, 2.5vw, 1.45rem);
		font-weight: 700;
		line-height: 1.25;
		color: var(--color-primary-dark);
	}

	.story-arrow {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: var(--radius-full);
		color: var(--color-primary);
		background: var(--color-bg-muted);
		opacity: 0;
		transform: translateX(-4px);
		transition:
			opacity var(--transition-fast),
			transform var(--transition-fast),
			background var(--transition-fast);
	}

	.story-main:hover .story-arrow {
		opacity: 1;
		transform: translateX(0);
	}

	.story-meta {
		margin: 0.4rem 0 0;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	.story-description {
		margin: 0.55rem 0 0;
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--color-text);
	}

	.chapter-toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: 0.75rem;
		padding: 0.35rem 0.65rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-full);
		background: var(--color-bg-muted);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--color-primary-dark);
		cursor: pointer;
		transition:
			background var(--transition-fast),
			border-color var(--transition-fast);
	}

	.chapter-toggle:hover {
		background: var(--color-bg);
		border-color: var(--color-primary-light);
	}

	.toggle-chevron {
		display: flex;
		transition: transform var(--transition-fast);
	}

	.toggle-chevron.open {
		transform: rotate(180deg);
	}

	.chapter-list {
		list-style: none;
		margin: 0;
		padding: 0 1.5rem 1rem 4.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		border-top: 1px solid var(--color-border);
		padding-top: 0.75rem;
	}

	.chapter-link {
		display: grid;
		grid-template-columns: 1.75rem 1fr;
		align-items: baseline;
		gap: 0.65rem;
		padding: 0.55rem 0.85rem;
		border-radius: var(--radius-sm);
		text-decoration: none;
		color: inherit;
		transition: background var(--transition-fast);
	}

	.chapter-link:hover {
		background: var(--color-bg-muted);
	}

	.chapter-num {
		font-size: 0.6875rem;
		font-weight: 800;
		color: var(--color-text-muted);
	}

	.chapter-title {
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--color-primary-dark);
		line-height: 1.35;
	}

	@media (max-width: 560px) {
		.story-card {
			grid-template-columns: 2.5rem 1fr;
			gap: 0.85rem;
			padding: 1.1rem 1.15rem;
		}

		.chapter-list {
			padding-left: 3.35rem;
			padding-right: 1.15rem;
		}

		.story-arrow {
			opacity: 1;
			transform: none;
		}
	}
</style>
