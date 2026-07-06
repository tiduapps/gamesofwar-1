<script lang="ts">
	import { enhance } from '$app/forms';
	import { gameCoverUrl } from '$lib/images';
	import { compressFormImage } from '$lib/images/compress-client';

	let {
		gameId,
		coverPhotoUrl,
		photoUrls
	}: {
		gameId: string;
		coverPhotoUrl: string | null;
		photoUrls: string[];
	} = $props();

	let uploading = $state(false);

	const galleryUrls = $derived(
		coverPhotoUrl && !photoUrls.includes(coverPhotoUrl)
			? [coverPhotoUrl, ...photoUrls]
			: photoUrls
	);
</script>

<section class="images-panel card">
	<h2>Photos</h2>
	<p class="hint">Uploads are resized to 800px wide (PNG, JPEG, or WebP).</p>

	{#if coverPhotoUrl}
		<div class="cover-block">
			<p class="label">Cover</p>
			<img src={gameCoverUrl(coverPhotoUrl) ?? coverPhotoUrl} alt="Current cover" class="cover-img" />
		</div>
	{:else}
		<p class="empty">No cover set.</p>
	{/if}

	<form
		method="POST"
		action="?/uploadImage"
		enctype="multipart/form-data"
		class="upload-form"
		use:enhance={() => {
			uploading = true;
			return async ({ formData, update }) => {
				try {
					await compressFormImage(formData, 'image');
				} catch (error) {
					const file = formData.get('image');
					const canUploadOriginal =
						file instanceof File &&
						file.size > 0 &&
						['image/png', 'image/jpeg', 'image/webp'].includes(file.type);

					if (!canUploadOriginal) {
						const message =
							error instanceof Error ? error.message : 'Could not process that image.';
						alert(message);
						uploading = false;
						return;
					}
				}

				try {
					await update();
				} finally {
					uploading = false;
				}
			};
		}}
	>
		<input type="hidden" name="game_id" value={gameId} />
		<label class="file-label">
			Add photo
			<input type="file" name="image" accept="image/*" required disabled={uploading} />
		</label>
		<label class="checkbox">
			<input type="checkbox" name="set_cover" />
			Set as cover
		</label>
		<button type="submit" class="btn btn-sm" disabled={uploading}>
			{uploading ? 'Uploading…' : 'Upload photo'}
		</button>
	</form>

	{#if galleryUrls.length > 0}
		<ul class="photo-list">
			{#each galleryUrls as photo, index (photo)}
				<li class="photo-row">
					<img src={gameCoverUrl(photo) ?? photo} alt="" class="thumb" />
					<div class="photo-actions">
						{#if coverPhotoUrl !== photo}
							<form method="POST" action="?/setCover">
								<input type="hidden" name="photo_url" value={photo} />
								<button type="submit" class="btn btn-secondary btn-sm">Set cover</button>
							</form>
						{:else}
							<span class="cover-badge">Cover</span>
						{/if}
						<form method="POST" action="?/movePhoto">
							<input type="hidden" name="photo_url" value={photo} />
							<input type="hidden" name="direction" value="up" />
							<button type="submit" class="icon-btn" disabled={index === 0} aria-label="Move up">↑</button>
						</form>
						<form method="POST" action="?/movePhoto">
							<input type="hidden" name="photo_url" value={photo} />
							<input type="hidden" name="direction" value="down" />
							<button
								type="submit"
								class="icon-btn"
								disabled={index >= galleryUrls.length - 1}
								aria-label="Move down"
							>
								↓
							</button>
						</form>
						<form
							method="POST"
							action="?/removePhoto"
							onsubmit={(e) => {
								if (!confirm('Remove this photo from the game?')) e.preventDefault();
							}}
						>
							<input type="hidden" name="photo_url" value={photo} />
							<button type="submit" class="icon-btn danger" aria-label="Remove">×</button>
						</form>
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="empty">No gallery photos yet.</p>
	{/if}
</section>

<style>
	.images-panel {
		padding: 1.25rem;
	}

	.images-panel h2 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.hint {
		margin: 0 0 1rem;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.label {
		margin: 0 0 0.35rem;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.cover-block {
		margin-bottom: 1rem;
	}

	.cover-img {
		max-width: min(100%, 16rem);
		border-radius: var(--radius-sm);
		border: 1px solid var(--color-border);
	}

	.upload-form {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.65rem;
		margin-bottom: 1.25rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--color-border);
		overflow: visible;
	}

	.file-label {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 700;
		flex: 1 1 100%;
	}

	.file-label input[type='file'] {
		display: block;
		width: 100%;
		max-width: 100%;
		font: inherit;
		padding: 0.4rem 0;
		min-height: 2.5rem;
	}

	.checkbox {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 600;
	}

	.empty {
		margin: 0 0 1rem;
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.photo-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.photo-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		padding: 0.65rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
	}

	.thumb {
		width: 4.5rem;
		height: 4.5rem;
		object-fit: cover;
		border-radius: var(--radius-sm);
		background: var(--color-bg-muted);
	}

	.photo-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem;
		flex: 1;
	}

	.cover-badge {
		padding: 0.25rem 0.55rem;
		border-radius: var(--radius-full);
		background: rgba(85, 139, 110, 0.18);
		color: var(--color-primary-dark);
		font-size: 0.6875rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.icon-btn {
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg-elevated);
		cursor: pointer;
	}

	.icon-btn:disabled {
		opacity: 0.35;
		cursor: not-allowed;
	}

	.icon-btn.danger {
		color: #922b21;
	}
</style>
