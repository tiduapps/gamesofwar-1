<script lang="ts">
	import { compressImageFile } from '$lib/images/compress-client';

	export type DraftPhoto = {
		id: string;
		file: File;
		previewUrl: string;
	};

	let {
		photos = $bindable([]),
		coverPhotoId = $bindable<string | null>(null)
	}: {
		photos?: DraftPhoto[];
		coverPhotoId?: string | null;
	} = $props();

	let uploading = $state(false);
	let fileInput: HTMLInputElement | undefined = $state();

	const coverUrl = $derived(
		coverPhotoId ? (photos.find((photo) => photo.id === coverPhotoId)?.previewUrl ?? null) : null
	);

	function revokePreview(photo: DraftPhoto) {
		URL.revokeObjectURL(photo.previewUrl);
	}

	async function addPhotos(fileList: FileList | null) {
		if (!fileList || fileList.length === 0) return;

		uploading = true;
		try {
			for (const file of Array.from(fileList)) {
				let processed = file;
				try {
					processed = await compressImageFile(file);
				} catch {
					if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
						alert('Please choose PNG, JPEG, or WebP images.');
						continue;
					}
				}

				const id = crypto.randomUUID();
				photos = [
					...photos,
					{
						id,
						file: processed,
						previewUrl: URL.createObjectURL(processed)
					}
				];

				if (!coverPhotoId) {
					coverPhotoId = id;
				}
			}
		} finally {
			uploading = false;
			if (fileInput) fileInput.value = '';
		}
	}

	function removePhoto(id: string) {
		const photo = photos.find((item) => item.id === id);
		if (!photo) return;
		if (!confirm('Remove this photo?')) return;

		revokePreview(photo);
		photos = photos.filter((item) => item.id !== id);

		if (coverPhotoId === id) {
			coverPhotoId = photos[0]?.id ?? null;
		}
	}

	function movePhoto(id: string, direction: 'up' | 'down') {
		const index = photos.findIndex((item) => item.id === id);
		if (index < 0) return;

		const swapIndex = direction === 'up' ? index - 1 : index + 1;
		if (swapIndex < 0 || swapIndex >= photos.length) return;

		const next = [...photos];
		[next[index], next[swapIndex]] = [next[swapIndex], next[index]];
		photos = next;
	}
</script>

<section class="images-panel card">
	<h2>Photos</h2>
	<p class="hint">Add box art, boards, or components. Images are resized to 800px wide before upload.</p>

	{#if coverUrl}
		<div class="cover-block">
			<p class="label">Cover preview</p>
			<img src={coverUrl} alt="Selected cover" class="cover-img" />
		</div>
	{:else}
		<p class="empty">No photos yet — add at least one if you can.</p>
	{/if}

	<div class="upload-form">
		<label class="file-label">
			Add photos
			<input
				bind:this={fileInput}
				type="file"
				accept="image/*"
				multiple
				disabled={uploading}
				onchange={(event) => addPhotos(event.currentTarget.files)}
			/>
		</label>
		{#if uploading}
			<span class="uploading-label">Processing…</span>
		{/if}
	</div>

	{#if photos.length > 0}
		<ul class="photo-list">
			{#each photos as photo, index (photo.id)}
				<li class="photo-row">
					<img src={photo.previewUrl} alt="" class="thumb" />
					<div class="photo-actions">
						{#if coverPhotoId !== photo.id}
							<button type="button" class="btn btn-secondary btn-sm" onclick={() => (coverPhotoId = photo.id)}>
								Set cover
							</button>
						{:else}
							<span class="cover-badge">Cover</span>
						{/if}
						<button
							type="button"
							class="icon-btn"
							disabled={index === 0}
							aria-label="Move up"
							onclick={() => movePhoto(photo.id, 'up')}
						>
							↑
						</button>
						<button
							type="button"
							class="icon-btn"
							disabled={index >= photos.length - 1}
							aria-label="Move down"
							onclick={() => movePhoto(photo.id, 'down')}
						>
							↓
						</button>
						<button
							type="button"
							class="icon-btn danger"
							aria-label="Remove"
							onclick={() => removePhoto(photo.id)}
						>
							×
						</button>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.images-panel {
		padding: 1.25rem;
		overflow: visible;
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
		flex-direction: column;
		align-items: stretch;
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
	}

	.file-label input[type='file'] {
		display: block;
		width: 100%;
		max-width: 100%;
		font: inherit;
		padding: 0.4rem 0;
		min-height: 2.5rem;
	}

	.uploading-label {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
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
