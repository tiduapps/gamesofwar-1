<script lang="ts">
	import SiteLogo from '$lib/components/layout/SiteLogo.svelte';
	import { page } from '$app/state';

	let {
		isAdmin,
		userEmail,
		pendingComments = 0,
		pendingSubmissions = 0,
		children
	}: {
		isAdmin: boolean;
		userEmail: string | null;
		pendingComments?: number;
		pendingSubmissions?: number;
		children: import('svelte').Snippet;
	} = $props();

	let mobileOpen = $state(false);

	const pathname = $derived(page.url.pathname);

	const navItems = $derived([
		{ href: '/admin', label: 'Dashboard', exact: true },
		{ href: '/admin/guide', label: 'Guide' },
		{ href: '/admin/games', label: 'Games' },
		{ href: '/admin/announcements', label: 'Announcements' },
		{ href: '/admin/comments', label: 'Comments', badge: pendingComments },
		{ href: '/admin/submissions', label: 'Submissions', badge: pendingSubmissions }
	]);

	function isActive(href: string, exact = false) {
		if (exact) return pathname === href;
		return pathname === href || pathname.startsWith(`${href}/`);
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<div class="admin-app">
	{#if mobileOpen}
		<button type="button" class="sidebar-backdrop" aria-label="Close menu" onclick={closeMobile}></button>
	{/if}

	<aside class="admin-sidebar" class:open={mobileOpen}>
		<div class="sidebar-head">
			<a href="/admin" class="sidebar-brand" onclick={closeMobile}>
				<span class="brand-stack">
					<SiteLogo href={null} variant="admin" />
					<span class="brand-sub">Admin</span>
				</span>
			</a>
		</div>

		{#if isAdmin}
			<nav class="sidebar-nav" aria-label="Admin navigation">
				{#each navItems as item}
					<a
						href={item.href}
						class="nav-link"
						class:active={isActive(item.href, item.exact)}
						onclick={closeMobile}
					>
						<span>{item.label}</span>
						{#if item.badge && item.badge > 0}
							<span class="nav-badge">{item.badge}</span>
						{/if}
					</a>
				{/each}
			</nav>
		{/if}

		<div class="sidebar-foot">
			<a href="/" class="foot-link" onclick={closeMobile}>← View site</a>
			{#if isAdmin && userEmail}
				<p class="user-email">{userEmail}</p>
				<form method="POST" action="/admin/logout">
					<button type="submit" class="sign-out-btn">Sign out</button>
				</form>
			{:else}
				<a href="/admin/login" class="sign-in-link" onclick={closeMobile}>Sign in</a>
			{/if}
		</div>
	</aside>

	<div class="admin-main">
		<header class="admin-mobile-bar">
			<button
				type="button"
				class="menu-btn"
				aria-expanded={mobileOpen}
				aria-label="Open menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<span class="mobile-title">Admin</span>
			{#if isAdmin && userEmail}
				<span class="mobile-user">{userEmail.split('@')[0]}</span>
			{/if}
		</header>

		<div class="admin-content">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.admin-app {
		display: flex;
		min-height: 100vh;
		background: var(--color-bg);
	}

	.admin-sidebar {
		width: 15.5rem;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		background: linear-gradient(180deg, var(--color-primary-dark) 0%, #264a32 100%);
		color: white;
		border-right: 1px solid rgba(255, 255, 255, 0.08);
	}

	.sidebar-head {
		padding: 1.25rem 1rem 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.sidebar-brand {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.brand-stack {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.brand-sub {
		display: block;
		font-size: 0.6875rem;
		font-weight: 600;
		opacity: 0.65;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.sidebar-nav {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem 0.75rem;
	}

	.nav-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		padding: 0.65rem 0.85rem;
		border-radius: var(--radius-sm);
		font-size: 0.9375rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.82);
		text-decoration: none;
		transition: background var(--transition-fast);
	}

	.nav-link:hover {
		background: rgba(255, 255, 255, 0.08);
		color: white;
	}

	.nav-link.active {
		background: rgba(255, 255, 255, 0.14);
		color: white;
	}

	.nav-badge {
		min-width: 1.35rem;
		padding: 0.1rem 0.4rem;
		border-radius: var(--radius-full);
		background: var(--color-bg);
		color: var(--color-primary-dark);
		font-size: 0.6875rem;
		font-weight: 800;
		text-align: center;
	}

	.sidebar-foot {
		padding: 1rem 0.75rem 1.25rem;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.foot-link {
		font-size: 0.8125rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.75);
		text-decoration: none;
		padding: 0 0.85rem;
	}

	.foot-link:hover {
		color: white;
	}

	.user-email {
		margin: 0;
		padding: 0 0.85rem;
		font-size: 0.75rem;
		opacity: 0.6;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.sign-out-btn,
	.sign-in-link {
		display: block;
		width: 100%;
		padding: 0.55rem 0.85rem;
		border-radius: var(--radius-sm);
		font: inherit;
		font-size: 0.8125rem;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
	}

	.sign-out-btn {
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.08);
		color: white;
	}

	.sign-out-btn:hover {
		background: rgba(255, 255, 255, 0.14);
	}

	.sign-in-link {
		background: var(--color-bg);
		color: var(--color-primary-dark);
	}

	.admin-main {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
	}

	.admin-mobile-bar {
		display: none;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		background: var(--color-primary-dark);
		color: white;
	}

	.menu-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4px;
		width: 2.25rem;
		height: 2.25rem;
		padding: 0;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-sm);
		background: transparent;
		cursor: pointer;
	}

	.menu-btn span {
		display: block;
		width: 1rem;
		height: 2px;
		margin-inline: auto;
		background: white;
		border-radius: 1px;
	}

	.mobile-title {
		font-weight: 800;
		font-size: 0.9375rem;
	}

	.mobile-user {
		margin-left: auto;
		font-size: 0.8125rem;
		opacity: 0.75;
	}

	.admin-content {
		flex: 1;
		width: min(100%, 56rem);
		margin-inline: auto;
		padding: 2rem 1.5rem 3rem;
	}

	.sidebar-backdrop {
		display: none;
	}

	@media (max-width: 768px) {
		.admin-sidebar {
			position: fixed;
			inset: 0 auto 0 0;
			z-index: 120;
			transform: translateX(-100%);
			transition: transform var(--transition-base);
		}

		.admin-sidebar.open {
			transform: translateX(0);
		}

		.sidebar-backdrop {
			display: block;
			position: fixed;
			inset: 0;
			z-index: 110;
			border: 0;
			background: rgba(47, 82, 57, 0.45);
			cursor: pointer;
		}

		.admin-mobile-bar {
			display: flex;
		}

		.admin-content {
			padding: 1.25rem 1rem 2.5rem;
		}
	}
</style>
