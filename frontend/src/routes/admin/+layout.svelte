<script lang="ts">
	import { navigating, page } from '$app/state';
	import AdminSavingOverlay from '$lib/components/admin/AdminSavingOverlay.svelte';
	import AdminShell from '$lib/components/admin/AdminShell.svelte';

	let { data, children } = $props();

	const isSaving = $derived(
		navigating.to !== null && page.url.pathname.startsWith('/admin')
	);

	const savingMessage = $derived(
		page.url.pathname === '/admin/login' ? 'Signing in…' : 'Saving…'
	);
</script>

{#if isSaving}
	<AdminSavingOverlay message={savingMessage} />
{/if}

{#if data.isLoginPage}
	{@render children()}
{:else}
	<AdminShell
		isAdmin={data.isAdmin}
		userEmail={data.userEmail}
		pendingComments={data.pendingComments}
		pendingSubmissions={data.pendingSubmissions}
	>
		{@render children()}
	</AdminShell>
{/if}

<style>
	:global(.admin-page-header) {
		margin-bottom: 1.5rem;
	}

	:global(.admin-page-header h1) {
		margin: 0.35rem 0 0.5rem;
		font-size: 1.75rem;
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	:global(.admin-page-header .subtitle) {
		margin: 0;
		color: var(--color-text-muted);
		font-size: 0.9375rem;
	}

	:global(.admin-empty) {
		padding: 2rem;
		text-align: center;
		color: var(--color-text-muted);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
	}

	:global(.admin-review-list) {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.admin-review-card) {
		padding: 1.25rem;
	}

	:global(.admin-review-actions) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
	}

	:global(.admin-reject-form) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		flex: 1;
	}

	:global(.admin-reject-note) {
		flex: 1 1 12rem;
		font: inherit;
		padding: 0.45rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
	}
</style>
