<script lang="ts">
	import type { StoryNav } from '$lib/data/stories';

	let {
		chapters,
		parentTitle
	}: {
		chapters: StoryNav[];
		parentTitle: string;
	} = $props();
</script>

<section class="chapter-list" aria-labelledby="chapters-heading">
	<div class="chapter-list-header">
		<span class="section-eyebrow">In this story</span>
		<h2 id="chapters-heading">Chapters of {parentTitle}</h2>
	</div>

	<ol class="chapters">
		{#each chapters as chapter, index (chapter.slug)}
			<li>
				<a href="/stories/{chapter.slug}" class="chapter-link">
					<span class="chapter-num">{index + 1}</span>
					<span class="chapter-title">{chapter.title}</span>
					<span class="chapter-arrow" aria-hidden="true">→</span>
				</a>
			</li>
		{/each}
	</ol>
</section>

<style>
	.chapter-list {
		max-width: 42rem;
		margin: 3rem auto 0;
		padding-top: 2.5rem;
		border-top: 1px solid var(--color-border);
	}

	.chapter-list-header {
		margin-bottom: 1.15rem;
	}

	.chapter-list-header h2 {
		margin: 0;
		font-family: var(--font-serif);
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--color-primary-dark);
	}

	.chapters {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.chapter-link {
		display: grid;
		grid-template-columns: 2rem 1fr auto;
		align-items: center;
		gap: 0.85rem;
		padding: 0.85rem 1rem;
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

	.chapter-num {
		font-size: 0.75rem;
		font-weight: 800;
		color: var(--color-primary);
		text-align: center;
	}

	.chapter-title {
		font-family: var(--font-serif);
		font-size: 1rem;
		font-weight: 700;
		color: var(--color-primary-dark);
		line-height: 1.3;
	}

	.chapter-arrow {
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--color-primary);
	}
</style>
