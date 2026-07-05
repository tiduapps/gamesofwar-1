<script lang="ts">
	import GameCommentForm from '$lib/components/games/GameCommentForm.svelte';
	import { gameCoverUrl } from '$lib/images';
	import type { GameCommentPublic } from '$lib/types/database';
	import type { Game } from '$lib/types/database';
	import type { ActionData } from './$types';

	let {
		data,
		form
	}: {
		data: {
			game: Game;
			comments: GameCommentPublic[];
			supabaseReady: boolean;
		};
		form: ActionData;
	} = $props();

	const coverSrc = $derived(gameCoverUrl(data.game.cover_photo_url));
	const meta = $derived(
		[data.game.year, data.game.country, data.game.publisher].filter(Boolean).join(' · ')
	);

	function formatDate(iso: string) {
		return new Date(iso).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.game.title} — Games of War</title>
	{#if data.game.description}
		<meta name="description" content={data.game.description.slice(0, 160)} />
	{/if}
</svelte:head>

<article class="game-detail">
	<div class="container">
		<nav class="breadcrumb">
			<a href="/games">← Game Library</a>
		</nav>

		<header class="detail-header">
			<div class="cover-panel card">
				{#if coverSrc}
					<img src={coverSrc} alt="" class="cover-image" />
				{:else}
					<div class="cover-placeholder skeleton" aria-hidden="true"></div>
				{/if}
			</div>

			<div class="detail-meta">
				<h1>{data.game.title}</h1>
				{#if meta}
					<p class="meta-line">{meta}</p>
				{/if}
				{#if data.game.theme}
					<p class="theme-line"><strong>Theme:</strong> {data.game.theme}</p>
				{/if}
			</div>
		</header>

		{#if data.game.description}
			<section class="detail-section card prose">
				<h2>About this game</h2>
				<p>{data.game.description}</p>
			</section>
		{/if}

		{#if data.game.mechanism || data.game.rules}
			<div class="detail-grid">
				{#if data.game.mechanism}
					<section class="detail-section card prose">
						<h2>Mechanism</h2>
						<p>{data.game.mechanism}</p>
					</section>
				{/if}
				{#if data.game.rules}
					<section class="detail-section card prose">
						<h2>Rules</h2>
						<p>{data.game.rules}</p>
					</section>
				{/if}
			</div>
		{/if}

		{#if data.game.photo_urls.length > 0}
			<section class="detail-section">
				<h2>More photos</h2>
				<div class="photo-grid">
					{#each data.game.photo_urls as photo (photo)}
						<div class="photo-card card">
							<img src={gameCoverUrl(photo) ?? photo} alt="" loading="lazy" />
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<section class="comments-section" id="comments">
			<h2>Comments</h2>

			{#if data.comments.length > 0}
				<ul class="comment-list">
					{#each data.comments as comment (comment.id)}
						<li class="comment card">
							<header>
								<strong>{comment.author_name}</strong>
								<time datetime={comment.created_at}>{formatDate(comment.created_at)}</time>
							</header>
							<p>{comment.body}</p>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="comments-empty">No comments yet. Be the first to share your thoughts.</p>
			{/if}

			<GameCommentForm {form} supabaseReady={data.supabaseReady} />
		</section>
	</div>
</article>

<style>
	.game-detail {
		padding: 1.5rem 0 3.5rem;
	}

	.breadcrumb {
		margin-bottom: 1.25rem;
	}

	.breadcrumb a {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.detail-header {
		display: grid;
		grid-template-columns: minmax(200px, 280px) 1fr;
		gap: 1.5rem;
		align-items: start;
		margin-bottom: 1.5rem;
	}

	.cover-panel {
		overflow: hidden;
		padding: 0;
	}

	.cover-image {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		display: block;
	}

	.cover-placeholder {
		width: 100%;
		aspect-ratio: 1;
	}

	.detail-meta h1 {
		margin: 0 0 0.5rem;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.meta-line {
		margin: 0 0 0.5rem;
		color: var(--color-text-muted);
		font-weight: 600;
	}

	.theme-line {
		margin: 0;
		color: var(--color-text);
	}

	.detail-section {
		padding: 1.25rem 1.5rem;
		margin-bottom: 1rem;
	}

	.detail-section h2 {
		margin: 0 0 0.75rem;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.detail-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.photo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 0.75rem;
	}

	.photo-card {
		overflow: hidden;
		padding: 0;
	}

	.photo-card img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		display: block;
	}

	.comments-section {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.comments-section > h2 {
		margin: 0 0 1rem;
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.comment-list {
		list-style: none;
		margin: 0 0 1.5rem;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.comment {
		padding: 1rem 1.15rem;
	}

	.comment header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.5rem 1rem;
		margin-bottom: 0.5rem;
	}

	.comment header strong {
		color: var(--color-primary-dark);
	}

	.comment time {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.comment p {
		margin: 0;
		line-height: 1.55;
		white-space: pre-wrap;
	}

	.comments-empty {
		margin: 0 0 1.25rem;
		color: var(--color-text-muted);
	}

	@media (max-width: 720px) {
		.detail-header {
			grid-template-columns: 1fr;
		}

		.cover-panel {
			max-width: 280px;
		}

		.detail-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
