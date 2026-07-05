<script lang="ts">
	import type { Announcement } from '$lib/types/database';

	let { data }: { data: { announcements: Announcement[] } } = $props();

	function displayTitle(item: Announcement) {
		return item.headline?.trim() || item.fact;
	}
</script>

<svelte:head>
	<title>News and Events — Games of War</title>
	<meta
		name="description"
		content="News and events from Games of War — exhibition updates, auction results, and new additions to the library."
	/>
</svelte:head>

<section class="news-page">
	<div class="container-narrow">
		<header class="page-header">
			<h1>News and Events</h1>
			<p class="intro">
				Here you will find regular updates on events of interest, results of notable auctions and new
				additions to the website.
			</p>
		</header>

		{#if data.announcements.length === 0}
			<p class="empty">No news items at the moment. Check back soon.</p>
		{:else}
			<ul class="news-list">
				{#each data.announcements as item (item.id)}
					<li class="news-card">
						{#if item.eyebrow}
							<p class="news-eyebrow">{item.eyebrow}</p>
						{/if}

						<h2 class="news-title">{displayTitle(item)}</h2>

						{#if item.date_range}
							<p class="news-date">{item.date_range}</p>
						{/if}

						{#if item.location_name}
							<p class="news-location">{item.location_name}</p>
						{/if}

						{#if item.location_address}
							<p class="news-location">{item.location_address}</p>
						{/if}

						{#if item.link_url && item.link_label}
							{#if item.link_intro}
								<p class="news-link-intro">{item.link_intro}</p>
							{/if}
							<a href={item.link_url} class="news-link" target="_blank" rel="noopener noreferrer">
								{item.link_label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="news-footer">
			<a href="/games?sort=latest" class="btn btn-secondary acquisitions-btn">New Acquisitions &gt;</a>
		</div>
	</div>
</section>

<style>
	.news-page {
		padding: 2.5rem 0 3.5rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.page-header h1 {
		margin: 0 0 1rem;
		font-size: clamp(2rem, 4.5vw, 2.75rem);
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.intro {
		margin: 0 auto;
		max-width: 42rem;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-text);
	}

	.empty {
		margin: 0 0 2rem;
		text-align: center;
		color: var(--color-text-muted);
	}

	.news-list {
		list-style: none;
		margin: 0 0 2.5rem;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.news-card {
		padding: 2rem 1.75rem;
		background: #d9d9d9;
		text-align: center;
		color: var(--color-primary-dark);
	}

	.news-eyebrow {
		margin: 0 0 0.75rem;
		font-family: var(--font-serif);
		font-size: 1.125rem;
		font-style: italic;
		font-weight: 400;
	}

	.news-title {
		margin: 0 0 0.85rem;
		font-size: 1.125rem;
		font-weight: 800;
		line-height: 1.45;
	}

	.news-date {
		margin: 0 0 1rem;
		font-size: 1.0625rem;
		font-weight: 800;
		line-height: 1.5;
	}

	.news-location {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.55;
	}

	.news-link-intro {
		margin: 1.25rem 0 0.35rem;
		font-size: 1.0625rem;
		line-height: 1.55;
	}

	.news-link {
		display: inline-block;
		margin-top: 0.15rem;
		font-size: 1.0625rem;
		font-weight: 700;
		color: var(--color-primary-dark);
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.news-link:hover {
		color: var(--color-primary);
	}

	.news-footer {
		display: flex;
		justify-content: center;
	}

	.acquisitions-btn {
		min-width: 12rem;
		border-radius: var(--radius-sm);
		font-weight: 700;
	}
</style>
