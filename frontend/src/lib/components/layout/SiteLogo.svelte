<script lang="ts">
	let {
		href = '/',
		variant = 'header',
		class: className = ''
	}: {
		href?: string | null;
		variant?: 'header' | 'footer' | 'hero' | 'hero-cover' | 'admin' | 'card';
		class?: string;
	} = $props();
</script>

{#if href}
	<a {href} class="site-logo {variant} {className}">GAMES OF WAR</a>
{:else if variant === 'hero' || variant === 'hero-cover'}
	<h1 class="site-logo {variant} {className}">GAMES OF WAR</h1>
{:else}
	<span class="site-logo {variant} {className}">GAMES OF WAR</span>
{/if}

<style>
	.site-logo {
		display: inline-block;
		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 0.9375rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-decoration: none;
		line-height: 1.1;
		white-space: nowrap;
	}

	.site-logo.header,
	.site-logo.footer,
	.site-logo.admin {
		color: white;
	}

	.site-logo.header:hover {
		color: rgba(255, 255, 255, 0.92);
	}

	.site-logo.footer {
		font-size: 1rem;
		letter-spacing: 0.12em;
	}

	.site-logo.hero {
		margin: 0 0 1.25rem;
		font-size: clamp(2.5rem, 6vw, 3.75rem);
		letter-spacing: 0.08em;
		color: var(--color-text);
	}

	.site-logo.hero-cover {
		margin: 0 0 1rem;
		font-size: clamp(2rem, 4.5vw, 3rem);
		letter-spacing: 0.12em;
		color: white;
	}

	.site-logo.admin {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
	}

	.site-logo.card {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		color: var(--color-primary-dark);
	}

	.site-logo.card:hover {
		color: var(--color-primary);
	}

	@media (max-width: 480px) {
		.site-logo.header {
			font-size: 0.75rem;
			letter-spacing: 0.1em;
		}
	}
</style>
