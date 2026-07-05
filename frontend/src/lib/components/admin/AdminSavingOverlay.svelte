<script lang="ts">
	let { message = 'Saving…' }: { message?: string } = $props();
</script>

<div class="saving-overlay" role="status" aria-live="polite" aria-busy="true">
	<div class="saving-card">
		<span class="spinner" aria-hidden="true"></span>
		<p>{message}</p>
	</div>
</div>

<style>
	.saving-overlay {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(47, 82, 57, 0.35);
		backdrop-filter: blur(2px);
	}

	.saving-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.85rem;
		padding: 1.5rem 2rem;
		border-radius: var(--radius-md);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-lg);
		min-width: 11rem;
	}

	.spinner {
		width: 2rem;
		height: 2rem;
		border: 3px solid var(--color-bg-muted);
		border-top-color: var(--color-primary);
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
	}

	.saving-card p {
		margin: 0;
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--color-primary-dark);
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
