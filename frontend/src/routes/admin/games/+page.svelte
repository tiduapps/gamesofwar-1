<script lang="ts">
	import { gameCoverUrl } from '$lib/images';

	let { data } = $props();

	const totalPages = $derived(Math.max(1, Math.ceil(data.total / data.pageSize)));
</script>

<svelte:head>
	<title>Games library — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<h1>Games library</h1>
	<p class="subtitle">Search and edit game details, covers, and photos.</p>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Supabase is not configured.</p>
{:else}
	<form method="GET" class="search-form card">
		<input
			type="search"
			name="q"
			value={data.q}
			placeholder="Search by title or publisher…"
			aria-label="Search games"
		/>
		<button type="submit" class="btn btn-sm">Search</button>
		{#if data.q}
			<a href="/admin/games" class="btn btn-secondary btn-sm">Clear</a>
		{/if}
	</form>

	{#if data.games.length === 0}
		<p class="admin-empty">No games found.</p>
	{:else}
		<ul class="game-list">
			{#each data.games as game (game.id)}
				<li>
					<a href="/admin/games/{game.slug}" class="game-row card">
						{#if game.cover_photo_url}
							<img src={gameCoverUrl(game.cover_photo_url) ?? game.cover_photo_url} alt="" class="thumb" />
						{:else}
							<span class="thumb placeholder" aria-hidden="true"></span>
						{/if}
						<span class="info">
							<strong>{game.title}</strong>
							<span class="meta">
								{#if game.year}{game.year}{/if}
								{#if game.country}
									{#if game.year} · {/if}{game.country}
								{/if}
							</span>
						</span>
						<span class="edit">Edit →</span>
					</a>
				</li>
			{/each}
		</ul>

		{#if totalPages > 1}
			<nav class="pager" aria-label="Pagination">
				{#if data.page > 1}
					<a href="/admin/games?q={encodeURIComponent(data.q)}&page={data.page - 1}" class="btn btn-secondary btn-sm">
						Previous
					</a>
				{/if}
				<span class="page-meta">Page {data.page} of {totalPages}</span>
				{#if data.page < totalPages}
					<a href="/admin/games?q={encodeURIComponent(data.q)}&page={data.page + 1}" class="btn btn-secondary btn-sm">
						Next
					</a>
				{/if}
			</nav>
		{/if}
	{/if}
{/if}

<style>
	.search-form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.search-form input {
		flex: 1 1 14rem;
		font: inherit;
		padding: 0.55rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
	}

	.game-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.game-row {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		padding: 0.75rem 1rem;
		text-decoration: none;
		color: inherit;
		transition:
			transform var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.game-row:hover {
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	.thumb {
		width: 3rem;
		height: 3rem;
		object-fit: cover;
		border-radius: var(--radius-sm);
		flex-shrink: 0;
		background: var(--color-bg-muted);
	}

	.thumb.placeholder {
		display: block;
	}

	.info {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.info strong {
		font-size: 0.9375rem;
		color: var(--color-primary-dark);
	}

	.meta {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.edit {
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-primary);
		flex-shrink: 0;
	}

	.pager {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1.25rem;
	}

	.page-meta {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}
</style>
