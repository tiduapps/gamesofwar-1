<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '$lib/styles/theme.css';
	import { page } from '$app/stores';

	let { children } = $props();

	const isAdminRoute = $derived($page.url.pathname.startsWith('/admin'));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-shell" class:admin-route={isAdminRoute} class:home-page={$page.url.pathname === '/'}>
	{#if !isAdminRoute}
		<Header currentPath={$page.url.pathname} />
	{/if}
	<main>{@render children()}</main>
	{#if !isAdminRoute}
		<Footer />
	{/if}
</div>

<style>
	.page-shell.home-page main {
		margin-top: 0;
	}

	.page-shell.admin-route main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
