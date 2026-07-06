<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Dashboard — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<h1>Dashboard</h1>
	<p class="subtitle">Manage games, announcements, submissions, and comments.</p>
	<a href="/admin/guide" class="guide-link">New here? Read the admin guide →</a>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Configure Supabase in <code>frontend/.env</code> first.</p>
{:else}
	<div class="dash-grid">
		<a href="/admin/games" class="dash-card card">
			<h2>Games library</h2>
			<p class="count">{data.gameCount}</p>
			<p class="hint">Edit game details, covers, and gallery photos.</p>
		</a>

		<a href="/admin/announcements" class="dash-card card">
			<h2>Announcements</h2>
			<p class="count">{data.activeAnnouncements} active</p>
			<p class="hint">Edit “Did you know?” facts on the homepage.</p>
		</a>

		<a href="/admin/comments" class="dash-card card">
			<h2>Comments</h2>
			<p class="count">{data.pendingComments} pending</p>
			<p class="hint">Approve visitor comments on game pages.</p>
		</a>

		<a href="/admin/submissions" class="dash-card card">
			<h2>Game submissions</h2>
			<p class="count">{data.pendingSubmissions} pending</p>
			<p class="hint">Review games submitted via Add a Game.</p>
		</a>
	</div>
{/if}

<style>
	.dash-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: 1rem;
	}

	.dash-card {
		padding: 1.35rem;
		text-decoration: none;
		color: inherit;
		transition:
			transform var(--transition-base),
			box-shadow var(--transition-base);
	}

	.dash-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.dash-card h2 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.count {
		margin: 0 0 0.35rem;
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--color-primary);
	}

	.hint {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.guide-link {
		display: inline-block;
		margin-top: 0.85rem;
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
	}

	.guide-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		.dash-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
