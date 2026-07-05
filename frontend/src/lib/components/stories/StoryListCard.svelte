<script lang="ts">
	import { gameCoverUrl } from '$lib/images';
	import type { StoryWithGames } from '$lib/types/database';

	let {
		story,
		index
	}: {
		story: StoryWithGames;
		index: number;
	} = $props();

	const gameCount = $derived(story.games.filter((link) => link.game).length);
	const previewGames = $derived(
		story.games
			.filter((link) => link.game)
			.slice(0, 4)
			.map((link) => link.game!)
	);
</script>

<a href="/stories/{story.slug}" class="story-card card card-hover">
	<div class="story-index" aria-hidden="true">
		<span class="index-num">{String(index + 1).padStart(2, '0')}</span>
		<span class="index-line"></span>
	</div>

	<div class="story-body">
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
			{gameCount} {gameCount === 1 ? 'game' : 'games'} in this story
		</p>

		{#if previewGames.length > 0}
			<ul class="preview-covers" aria-label="Preview games">
				{#each previewGames as game (game.id)}
					<li>
						{#if gameCoverUrl(game.cover_photo_url)}
							<img src={gameCoverUrl(game.cover_photo_url)} alt="" loading="lazy" />
						{:else}
							<span class="cover-placeholder" aria-hidden="true"></span>
						{/if}
					</li>
				{/each}
				{#if gameCount > previewGames.length}
					<li class="more-covers">+{gameCount - previewGames.length}</li>
				{/if}
			</ul>
		{/if}
	</div>
</a>

<style>
	.story-card {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		gap: 1.25rem;
		padding: 1.35rem 1.5rem;
		text-decoration: none;
		color: inherit;
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

	.story-card:hover .story-arrow {
		opacity: 1;
		transform: translateX(0);
	}

	.story-meta {
		margin: 0.4rem 0 0.85rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	.preview-covers {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.preview-covers li {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: var(--radius-sm);
		overflow: hidden;
		border: 1px solid var(--color-border);
		background: var(--color-bg-muted);
	}

	.preview-covers img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.cover-placeholder {
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, var(--color-bg-muted), var(--color-border));
	}

	.more-covers {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.6875rem;
		font-weight: 800;
		color: var(--color-primary-dark);
		background: var(--color-bg);
	}

	@media (max-width: 560px) {
		.story-card {
			grid-template-columns: 2.5rem 1fr;
			gap: 0.85rem;
			padding: 1.1rem 1.15rem;
		}

		.story-arrow {
			opacity: 1;
			transform: none;
		}
	}
</style>
