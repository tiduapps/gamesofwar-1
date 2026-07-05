<script lang="ts">
	import SiteLogo from '$lib/components/layout/SiteLogo.svelte';
	import type { ActionData } from './$types';

	let { data, form }: { data: { redirect: string }; form: ActionData } = $props();

	let showPassword = $state(false);
</script>

<svelte:head>
	<title>Sign in — Games of War Admin</title>
</svelte:head>

<div class="login-shell">
	<div class="login-card">
		<a href="/" class="back-link">← Back to site</a>

		<div class="login-brand">
			<SiteLogo href="/" variant="card" />
			<h1>Admin sign in</h1>
		</div>

		{#if form?.error}
			<p class="error-banner" role="alert">{form.error}</p>
		{/if}

		<form method="POST" class="login-form">
			<input type="hidden" name="redirect" value={data.redirect} />

			<label>
				Email
				<input
					name="email"
					type="email"
					autocomplete="email"
					required
					placeholder="you@example.com"
					value={form?.email ?? ''}
				/>
			</label>

			<label>
				Password
				<span class="password-field">
					<input
						name="password"
						type={showPassword ? 'text' : 'password'}
						autocomplete="current-password"
						required
						placeholder="••••••••"
					/>
					<button
						type="button"
						class="password-toggle"
						aria-label={showPassword ? 'Hide password' : 'Show password'}
						aria-pressed={showPassword}
						onclick={() => (showPassword = !showPassword)}
					>
						{#if showPassword}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M3 3l18 18M10.58 10.58A2 2 0 0012 15a2 2 0 001.42-3.42M9.88 4.24A10.94 10.94 0 0112 4c5 0 9.27 3.11 11 7.5a11.8 11.8 0 01-2.08 3.5M6.61 6.61A11.8 11.8 0 001 11.5C2.73 15.89 7 19 12 19a10.9 10.9 0 004.12-.8"
									stroke="currentColor"
									stroke-width="1.75"
									stroke-linecap="round"
								/>
							</svg>
						{:else}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
									stroke="currentColor"
									stroke-width="1.75"
								/>
								<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.75" />
							</svg>
						{/if}
					</button>
				</span>
			</label>

			<button type="submit" class="btn">Sign in</button>
		</form>
	</div>
</div>

<style>
	.login-shell {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
		background:
			radial-gradient(ellipse 70% 50% at 50% -10%, rgba(85, 139, 110, 0.2), transparent),
			var(--color-bg);
	}

	.login-card {
		width: min(100%, 24rem);
		padding: 1.75rem;
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-md);
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1.25rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.login-brand {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.login-brand h1 {
		margin: 0;
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.error-banner {
		margin: 0 0 1rem;
		padding: 0.75rem 0.85rem;
		border-radius: var(--radius-sm);
		background: #fdecea;
		border: 1px solid #f5c2c0;
		color: #922b21;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.login-form label {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-text);
	}

	.login-form input {
		font: inherit;
		font-size: 1rem;
		padding: 0.7rem 0.85rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
		color: var(--color-text);
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.password-field {
		position: relative;
		display: block;
	}

	.password-field input {
		width: 100%;
		padding-right: 2.75rem;
	}

	.password-toggle {
		position: absolute;
		top: 50%;
		right: 0.35rem;
		transform: translateY(-50%);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border: 0;
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--color-text-muted);
		cursor: pointer;
	}

	.password-toggle:hover {
		color: var(--color-primary);
		background: var(--color-bg-muted);
	}

	.login-form input:focus {
		outline: none;
		border-color: var(--color-primary-light);
		box-shadow: 0 0 0 3px rgba(85, 139, 110, 0.18);
	}

	.login-form .btn {
		width: 100%;
		min-height: 2.75rem;
		margin-top: 0.25rem;
	}
</style>
