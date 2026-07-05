<script lang="ts">
	import { gameCoverUrl } from '$lib/images';
	import type { GameListItem } from '$lib/games/constants';

	let { game }: { game: GameListItem } = $props();

	let imageLoaded = $state(false);
	let imageError = $state(false);
	let imgEl: HTMLImageElement | undefined = $state();

	const coverSrc = $derived(gameCoverUrl(game.cover_photo_url));
	const meta = $derived([game.year, game.country].filter(Boolean).join(' · '));
	const hasCoverUrl = $derived(Boolean(coverSrc));
	const showSkeleton = $derived(!imageLoaded || imageError || !hasCoverUrl);
	const showFallbackIcon = $derived(imageError || !hasCoverUrl);

	function markLoadedIfReady(img: HTMLImageElement | undefined) {
		if (img?.complete && img.naturalWidth > 0) {
			imageLoaded = true;
			imageError = false;
		}
	}

	function onImageLoad() {
		imageLoaded = true;
		imageError = false;
	}

	function onImageError() {
		imageError = true;
		imageLoaded = false;
	}

	$effect(() => {
		coverSrc;
		imageLoaded = false;
		imageError = false;
	});

	$effect(() => {
		markLoadedIfReady(imgEl);
	});
</script>

<a href="/games/{game.slug}" class="game-card card-hover">
	<div class="cover-wrap">
		{#if showSkeleton}
			<div
				class="cover-shimmer skeleton"
				class:static={showFallbackIcon}
				aria-hidden="true"
			>
				{#if showFallbackIcon}
					<div class="cover-fallback" title="Cover unavailable">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<rect
								x="3"
								y="5"
								width="18"
								height="14"
								rx="2"
								stroke="currentColor"
								stroke-width="1.5"
							/>
							<circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
							<path
								d="M3 16l4.5-4.5 3 3L14 11l7 7"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				{/if}
			</div>
		{/if}

		{#if hasCoverUrl && !imageError}
			<img
				bind:this={imgEl}
				src={coverSrc}
				alt=""
				loading="lazy"
				decoding="async"
				class:loaded={imageLoaded}
				onload={onImageLoad}
				onerror={onImageError}
			/>
		{/if}
	</div>
	<div class="card-footer">
		<h3>{game.title}</h3>
		{#if meta}
			<p>{meta}</p>
		{/if}
	</div>
</a>

<style>
	.game-card {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		align-self: start;
		background: var(--color-primary-dark);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		transition:
			transform var(--transition-base),
			box-shadow var(--transition-base),
			border-color var(--transition-base);
	}

	.game-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
		border-color: rgba(255, 255, 255, 0.14);
	}

	.cover-wrap {
		position: relative;
		aspect-ratio: 1;
		flex-shrink: 0;
		line-height: 0;
		font-size: 0;
		background: #e8e8e8;
		overflow: hidden;
	}

	.cover-shimmer {
		position: absolute;
		inset: 0;
		z-index: 1;
	}

	.cover-shimmer.static {
		animation: none;
		background: #e8e8e8;
	}

	.cover-fallback {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #b8b8b8;
	}

	.cover-wrap img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 0;
		transform: scale(1);
		transition:
			opacity var(--transition-base),
			transform var(--transition-base);
	}

	.cover-wrap img.loaded {
		opacity: 1;
		z-index: 2;
	}

	.game-card:hover .cover-wrap img.loaded {
		transform: scale(1.04);
	}

	.card-footer {
		background: var(--color-primary-dark);
		color: white;
		padding: 0.65rem 0.75rem;
		min-height: 3.75rem;
	}

	.card-footer h3 {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 1.35;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-footer p {
		margin: 0.25rem 0 0;
		font-size: 0.75rem;
		opacity: 0.75;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
