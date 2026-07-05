<script lang="ts">
	import PickerField from '$lib/components/ui/PickerField.svelte';
	import type { StoryWithGames } from '$lib/types/database';

	let {
		story,
		gameOptions,
		siblingCount,
		siblingIndex
	}: {
		story: StoryWithGames;
		gameOptions: Array<{ value: string; label: string }>;
		siblingCount: number;
		siblingIndex: number;
	} = $props();

	let newGameId = $state('');
</script>

<article class="story-card card">
	<header class="story-head">
		<form method="POST" action="?/updateStory" class="title-form">
			<input type="hidden" name="id" value={story.id} />
			<input type="text" name="title" value={story.title} required class="title-input" />
			<label class="active-toggle">
				<input type="checkbox" name="is_active" checked={story.is_active} />
				Active
			</label>
			<button type="submit" class="btn btn-sm">Save</button>
		</form>

		<div class="story-actions">
			<form method="POST" action="?/moveStory">
				<input type="hidden" name="id" value={story.id} />
				<input type="hidden" name="direction" value="up" />
				<button type="submit" class="icon-btn" disabled={siblingIndex === 0} aria-label="Move story up">
					↑
				</button>
			</form>
			<form method="POST" action="?/moveStory">
				<input type="hidden" name="id" value={story.id} />
				<input type="hidden" name="direction" value="down" />
				<button
					type="submit"
					class="icon-btn"
					disabled={siblingIndex >= siblingCount - 1}
					aria-label="Move story down"
				>
					↓
				</button>
			</form>
			<form
				method="POST"
				action="?/deleteStory"
				onsubmit={(e) => {
					if (!confirm(`Delete “${story.title}”?`)) e.preventDefault();
				}}
			>
				<input type="hidden" name="id" value={story.id} />
				<button type="submit" class="icon-btn danger" aria-label="Delete story">×</button>
			</form>
		</div>
	</header>

	<p class="story-meta">
		<span class="slug">/stories/{story.slug}</span>
		<span>{story.games.length} games</span>
	</p>

	<section class="games-panel">
		<h3>Games in this story</h3>

		{#if story.games.length === 0}
			<p class="empty-games">No games linked yet.</p>
		{:else}
			<ul class="game-list">
				{#each story.games as link, gameIndex (link.id)}
					<li class="game-row">
						<div class="game-info">
							{#if link.game}
								<a href="/games/{link.game.slug}" class="game-title">{link.game.title}</a>
								{#if link.game.year}
									<span class="game-year">{link.game.year}</span>
								{/if}
							{:else}
								<span class="game-title missing">Missing game</span>
							{/if}
						</div>
						<div class="game-actions">
							<form method="POST" action="?/moveGame">
								<input type="hidden" name="link_id" value={link.id} />
								<input type="hidden" name="direction" value="up" />
								<button type="submit" class="icon-btn" disabled={gameIndex === 0} aria-label="Move game up">
									↑
								</button>
							</form>
							<form method="POST" action="?/moveGame">
								<input type="hidden" name="link_id" value={link.id} />
								<input type="hidden" name="direction" value="down" />
								<button
									type="submit"
									class="icon-btn"
									disabled={gameIndex >= story.games.length - 1}
									aria-label="Move game down"
								>
									↓
								</button>
							</form>
							<form method="POST" action="?/removeGame">
								<input type="hidden" name="link_id" value={link.id} />
								<button type="submit" class="icon-btn danger" aria-label="Remove game">×</button>
							</form>
						</div>
					</li>
				{/each}
			</ul>
		{/if}

		<form method="POST" action="?/addGame" class="add-game-form">
			<input type="hidden" name="story_id" value={story.id} />
			<PickerField
				name="game_id"
				label="Add game"
				bind:value={newGameId}
				options={gameOptions}
				placeholder="Search games…"
				searchable
			/>
			<button type="submit" class="btn btn-sm" disabled={!newGameId}>Add game</button>
		</form>
	</section>
</article>

<style>
	.story-card {
		padding: 1.25rem;
	}

	.story-head {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.title-form {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		flex: 1;
		min-width: min(100%, 20rem);
	}

	.title-input {
		flex: 1 1 12rem;
		min-width: 10rem;
		font: inherit;
		font-weight: 700;
		padding: 0.5rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
		color: var(--color-primary-dark);
	}

	.active-toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	.story-actions,
	.game-actions {
		display: flex;
		gap: 0.25rem;
	}

	.icon-btn {
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
		color: var(--color-text);
		font-size: 0.875rem;
		cursor: pointer;
	}

	.icon-btn:disabled {
		opacity: 0.35;
		cursor: not-allowed;
	}

	.icon-btn.danger {
		color: #922b21;
	}

	.story-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		margin: 0.5rem 0 1rem;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.slug {
		font-family: ui-monospace, monospace;
	}

	.games-panel {
		padding-top: 0.85rem;
		border-top: 1px solid var(--color-border);
	}

	.games-panel h3 {
		margin: 0 0 0.75rem;
		font-size: 0.8125rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-primary);
	}

	.empty-games {
		margin: 0 0 0.75rem;
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.game-list {
		list-style: none;
		margin: 0 0 0.85rem;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.game-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.55rem 0.65rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
	}

	.game-info {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 0.65rem;
		min-width: 0;
	}

	.game-title {
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.game-title:hover {
		text-decoration: underline;
	}

	.game-title.missing {
		color: var(--color-text-muted);
	}

	.game-year {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.add-game-form {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.65rem;
		align-items: end;
	}

	@media (max-width: 720px) {
		.add-game-form {
			grid-template-columns: 1fr;
		}
	}
</style>
