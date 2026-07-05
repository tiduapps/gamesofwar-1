<script lang="ts">
	import SiteLogo from '$lib/components/layout/SiteLogo.svelte';

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Stories', href: '/stories' },
		{ label: 'Games', href: '/games' },
		{ label: 'News & Events', href: '/news' },
		{ label: 'Community', href: '/community' },
		{ label: 'About', href: '/about' }
	];

	let { currentPath = '/' }: { currentPath?: string } = $props();
	let menuOpen = $state(false);

	const isHome = $derived(currentPath === '/');

	function isActive(href: string): boolean {
		if (href === '/') return currentPath === '/';
		return currentPath.startsWith(href);
	}
</script>

<header class="site-header" class:overlay={isHome}>
	<div class="header-inner container">
		<div class="logo">
			<SiteLogo variant="header" />
		</div>

		<button
			class="menu-toggle"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="main-nav"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="sr-only">Toggle menu</span>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>

		<nav id="main-nav" class:open={menuOpen} aria-label="Main navigation">
			<ul>
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class:active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
							onclick={() => (menuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
			<a href="/games/add" class="nav-cta" onclick={() => (menuOpen = false)}>
				Add a Game
			</a>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: linear-gradient(180deg, var(--color-primary) 0%, #386549 100%);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: var(--shadow-sm);
	}

	.site-header.overlay {
		background: rgba(20, 38, 28, 0.55);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: none;
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: var(--header-height);
		gap: 1.5rem;
	}

	.logo {
		flex-shrink: 0;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	nav ul {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: block;
		padding: 0.5rem 0.85rem;
		border-radius: var(--radius-full);
		font-size: 0.875rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.85);
		transition:
			color var(--transition-fast),
			background var(--transition-fast);
	}

	nav a:hover {
		color: white;
		background: rgba(255, 255, 255, 0.12);
	}

	nav a.active {
		color: var(--color-primary-dark);
		background: var(--color-bg);
		font-weight: 600;
	}

	.nav-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		border-radius: var(--radius-full);
		font-size: 0.8125rem;
		font-weight: 600;
		white-space: nowrap;
		text-decoration: none;
		background: var(--color-bg);
		color: var(--color-primary-dark);
		box-shadow: var(--shadow-xs);
		transition:
			background var(--transition-fast),
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.nav-cta:hover {
		background: #ffffff;
		color: var(--color-primary-dark);
		transform: translateY(-1px);
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: var(--radius-sm);
		background: rgba(255, 255, 255, 0.08);
	}

	.bar {
		display: block;
		width: 1.1rem;
		height: 2px;
		margin-inline: auto;
		background: white;
		border-radius: 1px;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 860px) {
		.menu-toggle {
			display: flex;
		}

		nav {
			position: absolute;
			top: var(--header-height);
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: 1rem 1.25rem 1.25rem;
			background: linear-gradient(180deg, #386549 0%, var(--color-primary-dark) 100%);
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
			box-shadow: var(--shadow-md);
			opacity: 0;
			visibility: hidden;
			transform: translateY(-8px);
			transition:
				opacity var(--transition-base),
				transform var(--transition-base),
				visibility var(--transition-base);
		}

		nav.open {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}

		nav ul {
			flex-direction: column;
			align-items: stretch;
			gap: 0.25rem;
		}

		nav a {
			padding: 0.75rem 1rem;
		}

		.nav-cta {
			margin-top: 0.75rem;
			justify-content: center;
		}
	}
</style>
