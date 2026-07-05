<script lang="ts">
	import GameImageManager from '$lib/components/admin/GameImageManager.svelte';
	import type { ActionData } from './$types';
	import type { Game } from '$lib/types/database';

	let {
		data,
		form
	}: {
		data: { game: Game; supabaseReady: boolean };
		form: ActionData;
	} = $props();
</script>

<svelte:head>
	<title>Edit {data.game.title} — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<a href="/admin/games" class="back-link">← Games library</a>
	<h1>{data.game.title}</h1>
	<p class="subtitle">
		<a href="/games/{data.game.slug}" target="_blank" rel="noopener noreferrer">View public page ↗</a>
	</p>
</header>

{#if form?.error}
	<p class="form-error" role="alert">{form.error}</p>
{/if}

<div class="edit-layout">
	<form method="POST" action="?/updateGame" class="details-form card">
		<h2>Game details</h2>

		<label>
			Title
			<input type="text" name="title" value={data.game.title} required />
		</label>

		<div class="row">
			<label>
				Year
				<input type="number" name="year" value={data.game.year ?? ''} />
			</label>
			<label>
				Country
				<input type="text" name="country" value={data.game.country ?? ''} />
			</label>
		</div>

		<label>
			Publisher
			<input type="text" name="publisher" value={data.game.publisher ?? ''} />
		</label>

		<label>
			Theme
			<input type="text" name="theme" value={data.game.theme ?? ''} />
		</label>

		<label>
			Mechanism
			<input type="text" name="mechanism" value={data.game.mechanism ?? ''} />
		</label>

		<label>
			Description
			<textarea name="description" rows="6">{data.game.description ?? ''}</textarea>
		</label>

		<label>
			Rules
			<textarea name="rules" rows="6">{data.game.rules ?? ''}</textarea>
		</label>

		<button type="submit" class="btn btn-sm">Save details</button>
	</form>

	<GameImageManager
		gameId={data.game.id}
		coverPhotoUrl={data.game.cover_photo_url}
		photoUrls={data.game.photo_urls}
	/>
</div>

<style>
	.back-link {
		display: inline-block;
		margin-bottom: 0.65rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.subtitle a {
		color: var(--color-primary);
		font-weight: 600;
		text-decoration: none;
	}

	.subtitle a:hover {
		text-decoration: underline;
	}

	.edit-layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1rem;
		align-items: start;
	}

	.details-form {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.details-form h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.details-form label {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 700;
	}

	.details-form input,
	.details-form textarea {
		font: inherit;
		font-weight: 400;
		padding: 0.55rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
	}

	.details-form textarea {
		resize: vertical;
		line-height: 1.5;
	}

	.row {
		display: grid;
		grid-template-columns: 8rem 1fr;
		gap: 1rem;
	}

	@media (max-width: 900px) {
		.edit-layout {
			grid-template-columns: 1fr;
		}

		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
