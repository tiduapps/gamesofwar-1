<script lang="ts">
	import StoryCard from '$lib/components/admin/StoryCard.svelte';
	import type { ActionData } from './$types';
	import type { StoryWithGames } from '$lib/types/database';

	let {
		data,
		form
	}: {
		data: {
			stories: StoryWithGames[];
			games: Array<{ id: string; title: string; slug: string; year: number | null }>;
			supabaseReady: boolean;
			storyCount: number;
		};
		form: ActionData;
	} = $props();

	let showNewStory = $state(false);

	const gameOptions = $derived(
		data.games.map((game) => ({
			value: game.id,
			label: game.year ? `${game.title} (${game.year})` : game.title
		}))
	);
</script>

<svelte:head>
	<title>Stories — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<div class="header-row">
		<div>
			<h1>Stories</h1>
			<p class="subtitle">
				Create stories, add games to each one, and reorder both with the arrow buttons.
			</p>
		</div>
		<button type="button" class="btn btn-sm" onclick={() => (showNewStory = !showNewStory)}>
			{showNewStory ? 'Cancel' : '+ New story'}
		</button>
	</div>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Supabase is not configured.</p>
{:else}
	{#if form?.error}
		<p class="form-error" role="alert">{form.error}</p>
	{/if}

	{#if showNewStory}
		<section class="new-story card">
			<form method="POST" action="?/createStory" class="new-story-form">
				<input type="text" name="title" placeholder="Story title" required />
				<button type="submit" class="btn btn-sm">Create story</button>
			</form>
		</section>
	{/if}

	{#if data.stories.length === 0}
		<p class="admin-empty">No stories yet. Create one, then add games from the library.</p>
	{:else}
		<div class="story-board">
			{#each data.stories as story, index (story.id)}
				<StoryCard
					{story}
					{gameOptions}
					siblingCount={data.stories.length}
					siblingIndex={index}
				/>
			{/each}
		</div>
	{/if}
{/if}

<style>
	.header-row {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.new-story {
		padding: 1.25rem;
		margin-bottom: 1rem;
	}

	.new-story-form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.new-story-form input {
		flex: 1 1 14rem;
		font: inherit;
		padding: 0.55rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
	}

	.story-board {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
