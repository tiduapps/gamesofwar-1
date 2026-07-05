<script lang="ts">
	import PickerField from '$lib/components/ui/PickerField.svelte';
	import type { ActionData } from './$types';
	import type { Announcement } from '$lib/types/database';

	let {
		data,
		form
	}: {
		data: {
			announcements: Announcement[];
			games: Array<{ id: string; title: string; slug: string }>;
			supabaseReady: boolean;
		};
		form: ActionData;
	} = $props();

	let showNewForm = $state(false);
	let newGameId = $state('');
	let gameIdsByAnnouncement = $state<Record<string, string>>({});

	const gameOptions = $derived(data.games.map((game) => ({ value: game.id, label: game.title })));

	$effect.pre(() => {
		gameIdsByAnnouncement = Object.fromEntries(
			data.announcements.map((announcement) => [announcement.id, announcement.game_id ?? ''])
		);
	});

	function gameLabel(gameId: string | null) {
		if (!gameId) return 'None (links to games library)';
		return data.games.find((g) => g.id === gameId)?.title ?? 'Unknown game';
	}
</script>

<svelte:head>
	<title>Announcements — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<div class="header-row">
		<div>
			<h1>Homepage announcements</h1>
			<p class="subtitle">Manage the “Did you know?” facts shown on the homepage.</p>
		</div>
		<button type="button" class="btn btn-sm" onclick={() => (showNewForm = !showNewForm)}>
			{showNewForm ? 'Cancel' : '+ New announcement'}
		</button>
	</div>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Supabase is not configured.</p>
{:else}
	{#if form?.error}
		<p class="form-error" role="alert">{form.error}</p>
	{/if}

	{#if showNewForm}
		<section class="new-card card">
			<h2>Add announcement</h2>
			<form method="POST" action="?/create" class="announcement-form">
				<label>
					Fact
					<textarea name="fact" rows="3" required placeholder="Enter a historical tidbit…"></textarea>
				</label>

				<div class="form-row">
					<label>
						Button label
						<input type="text" name="button_label" value="See Game" />
					</label>

					<label>
						Sort order
						<input
							type="number"
							name="sort_order"
							value={(data.announcements.length + 1) * 10}
							min="0"
							step="1"
						/>
					</label>
				</div>

				<PickerField
					name="game_id"
					label="Linked game (optional)"
					bind:value={newGameId}
					options={gameOptions}
					placeholder="None — link to games library"
					searchable
				/>

				<label class="checkbox-label">
					<input type="checkbox" name="is_active" checked />
					Active on homepage
				</label>

				<button type="submit" class="btn btn-sm">Create announcement</button>
			</form>
		</section>
	{/if}

	{#if data.announcements.length === 0}
		<p class="admin-empty">No announcements yet. Add one to populate the homepage section.</p>
	{:else}
		<ul class="admin-review-list">
			{#each data.announcements as announcement (announcement.id)}
				<li class="admin-review-card card" class:inactive={!announcement.is_active}>
					<div class="item-head">
						<span class="status-pill" class:live={announcement.is_active}>
							{announcement.is_active ? 'Active' : 'Hidden'}
						</span>
						<span class="meta">Order {announcement.sort_order}</span>
						{#if announcement.games}
							<a href="/games/{announcement.games.slug}" class="game-link">{announcement.games.title}</a>
						{:else}
							<span class="meta">{gameLabel(announcement.game_id)}</span>
						{/if}
					</div>

					<form method="POST" action="?/update" class="announcement-form">
						<input type="hidden" name="id" value={announcement.id} />

						<label>
							Fact
							<textarea name="fact" rows="3" required>{announcement.fact}</textarea>
						</label>

						<div class="form-row">
							<label>
								Button label
								<input type="text" name="button_label" value={announcement.button_label} />
							</label>

							<label>
								Sort order
								<input
									type="number"
									name="sort_order"
									value={announcement.sort_order}
									min="0"
									step="1"
								/>
							</label>
						</div>

						<PickerField
							name="game_id"
							label="Linked game (optional)"
							bind:value={gameIdsByAnnouncement[announcement.id]}
							options={gameOptions}
							placeholder="None — link to games library"
							searchable
						/>

						<label class="checkbox-label">
							<input type="checkbox" name="is_active" checked={announcement.is_active} />
							Active on homepage
						</label>

						<button type="submit" class="btn btn-sm">Save changes</button>
					</form>

					<form
						method="POST"
						action="?/delete"
						class="delete-form"
						onsubmit={(e) => {
							if (!confirm('Delete this announcement? This cannot be undone.')) {
								e.preventDefault();
							}
						}}
					>
						<input type="hidden" name="id" value={announcement.id} />
						<button type="submit" class="btn btn-secondary btn-sm">Delete</button>
					</form>
				</li>
			{/each}
		</ul>
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

	.new-card {
		padding: 1.25rem;
		margin-bottom: 1rem;
	}

	.new-card h2 {
		margin: 0 0 1rem;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.announcement-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.announcement-form label {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text);
	}

	.announcement-form textarea,
	.announcement-form input[type='text'],
	.announcement-form input[type='number'] {
		font: inherit;
		font-weight: 400;
		padding: 0.55rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
		color: var(--color-text);
	}

	.announcement-form textarea {
		resize: vertical;
		min-height: 4.5rem;
		line-height: 1.5;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 8rem;
		gap: 1rem;
	}

	.checkbox-label {
		flex-direction: row !important;
		align-items: center;
		gap: 0.5rem !important;
		font-weight: 600 !important;
	}

	.checkbox-label input {
		width: 1rem;
		height: 1rem;
		accent-color: var(--color-primary);
	}

	.item-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem 1rem;
		margin-bottom: 1rem;
	}

	.status-pill {
		padding: 0.15rem 0.55rem;
		border-radius: var(--radius-full);
		font-size: 0.6875rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		background: var(--color-bg-muted);
		color: var(--color-text-muted);
	}

	.status-pill.live {
		background: rgba(85, 139, 110, 0.18);
		color: var(--color-primary-dark);
	}

	.meta {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.game-link {
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
	}

	.game-link:hover {
		text-decoration: underline;
	}

	.inactive {
		opacity: 0.82;
	}

	.delete-form {
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--color-border);
	}

	@media (max-width: 600px) {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>
