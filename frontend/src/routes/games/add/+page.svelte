<script lang="ts">
	import { enhance } from '$app/forms';
	import SubmissionPhotoManager, {
		type DraftPhoto
	} from '$lib/components/games/SubmissionPhotoManager.svelte';
	import type { ActionData, PageData } from './$types';

	let {
		data,
		form
	}: {
		data: PageData;
		form: ActionData;
	} = $props();

	let photos = $state<DraftPhoto[]>([]);
	let coverPhotoId = $state<string | null>(null);
	let submitting = $state(false);

	const fields = $derived(form?.fields ?? null);
	const errors = $derived((form?.errors ?? {}) as Record<string, string>);
</script>

<svelte:head>
	<title>Add a Game — Games of War</title>
</svelte:head>

<section class="submit-page">
	<div class="container submit-container">
		<div class="page-header">
			{#if data.isAdmin}
				<a href="/admin/games" class="back-link">← Games library</a>
			{/if}
			<span class="section-eyebrow">{data.isAdmin ? 'Admin' : 'Contribute'}</span>
			<h1>Add a Game</h1>
			<p class="intro">
				{#if data.isAdmin}
					Share a war-themed board or card game with the collection. As an admin you can publish
					immediately or submit for the usual review queue.
				{:else}
					Share a war-themed board or card game with the collection. Submissions are reviewed by our
					team before appearing on the site.
				{/if}
			</p>
		</div>

		{#if form?.success}
			<div class="success-banner card" role="status">
				<div class="success-icon" aria-hidden="true">✓</div>
				<div>
					<p class="success-title">Submission received!</p>
					<p class="success-text">
						Thank you — we'll review your game and be in touch if we need anything.
					</p>
				</div>
			</div>
		{:else}
			<form
				method="POST"
				enctype="multipart/form-data"
				class="submit-form-wrap"
				use:enhance={() => {
					submitting = true;
					return async ({ formData, update }) => {
						formData.delete('images');
						for (const photo of photos) {
							formData.append('images', photo.file);
						}

						const coverIndex = coverPhotoId
							? photos.findIndex((photo) => photo.id === coverPhotoId)
							: 0;
						formData.set('cover_index', String(Math.max(0, coverIndex)));

						try {
							await update();
						} finally {
							submitting = false;
						}
					};
				}}
			>
				{#if errors.form}
					<p class="form-error form-error-banner" role="alert">{errors.form}</p>
				{/if}

				<div class="submit-layout">
					<div class="submit-form form-card">
					{#if data.isAdmin}
						<div class="admin-banner card">
							<p class="admin-banner-title">Admin options</p>
							<label class="checkbox">
								<input type="checkbox" name="publish_immediately" />
								Publish immediately to the public catalog (skip review queue)
							</label>
						</div>
					{/if}

					<fieldset>
						<legend>Game details</legend>

						<label>
							Title <span class="required">*</span>
							<input name="title" type="text" required value={fields?.title ?? ''} />
							{#if errors.title}<span class="field-error">{errors.title}</span>{/if}
						</label>

						<div class="row">
							<label>
								Year
								<input
									name="year"
									type="text"
									inputmode="numeric"
									placeholder="1942"
									value={fields?.year ?? ''}
								/>
								{#if errors.year}<span class="field-error">{errors.year}</span>{/if}
							</label>

							<label>
								Country
								<input name="country" type="text" value={fields?.country ?? ''} />
							</label>
						</div>

						<label>
							Publisher
							<input name="publisher" type="text" value={fields?.publisher ?? ''} />
						</label>

						<label>
							Theme
							<input
								name="theme"
								type="text"
								placeholder="WWII Air, Morale, etc."
								value={fields?.theme ?? ''}
							/>
						</label>

						<label>
							Description
							<textarea name="description" rows="4">{fields?.description ?? ''}</textarea>
						</label>

						<label>
							Mechanism
							<input name="mechanism" type="text" value={fields?.mechanism ?? ''} />
						</label>

						<label>
							Rules summary
							<textarea name="rules" rows="4">{fields?.rules ?? ''}</textarea>
						</label>
					</fieldset>

					<fieldset>
						<legend>{data.isAdmin ? 'Contact (optional for admin publish)' : 'Your contact info'}</legend>

						<label>
							Your name
							<input name="submitter_name" type="text" value={fields?.submitter_name ?? ''} />
						</label>

						<label>
							Email {#if !data.isAdmin}<span class="required">*</span>{/if}
							<input
								name="submitter_email"
								type="email"
								required={!data.isAdmin}
								autocomplete="email"
								value={fields?.submitter_email ?? data.userEmail ?? ''}
							/>
							{#if errors.submitter_email}<span class="field-error">{errors.submitter_email}</span
								>{/if}
						</label>

						<label>
							Additional notes
							<textarea name="submitter_notes" rows="3">{fields?.submitter_notes ?? ''}</textarea>
						</label>
					</fieldset>
					</div>

					<div class="photos-column">
						<SubmissionPhotoManager bind:photos bind:coverPhotoId />
					</div>
				</div>

				<button type="submit" class="btn submit-btn" disabled={submitting}>
					{submitting ? 'Submitting…' : data.isAdmin ? 'Save game' : 'Submit for review'}
				</button>
			</form>
		{/if}
	</div>
</section>

<style>
	.submit-page {
		padding: 3rem 0 4rem;
	}

	.page-header {
		margin-bottom: 2rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	h1 {
		margin: 0 0 0.75rem;
		font-size: clamp(2rem, 4vw, 2.75rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	.intro {
		margin: 0;
		color: var(--color-text-muted);
		line-height: 1.65;
		font-size: 1.0625rem;
		max-width: 62ch;
	}

	.submit-container {
		max-width: 960px;
	}

	.submit-form-wrap {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.submit-layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.25rem;
		align-items: start;
	}

	.submit-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		min-width: 0;
	}

	.photos-column {
		min-width: 0;
		overflow: visible;
	}

	.form-error-banner {
		margin: 0;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.submit-btn {
		align-self: flex-start;
		padding: 0.85rem 2rem;
	}

	.admin-banner {
		padding: 1rem 1.15rem;
		border-color: var(--color-primary-light);
		background: rgba(85, 139, 110, 0.08);
	}

	.admin-banner-title {
		margin: 0 0 0.5rem;
		font-size: 0.8125rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-primary-dark);
	}

	.checkbox {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.success-banner {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		padding: 1.75rem;
		border-color: var(--color-primary-light);
	}

	.success-icon {
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--radius-full);
		background: var(--color-accent-soft);
		color: var(--color-primary-dark);
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1rem;
	}

	.success-title {
		margin: 0 0 0.35rem;
		font-weight: 700;
		font-size: 1.0625rem;
		color: var(--color-text);
	}

	.success-text {
		margin: 0;
		color: var(--color-text-muted);
		line-height: 1.6;
	}

	@media (min-width: 900px) {
		.submit-layout {
			grid-template-columns: minmax(0, 1fr) minmax(280px, 340px);
		}

		.photos-column {
			position: sticky;
			top: calc(var(--header-height) + 1rem);
		}
	}

	@media (max-width: 560px) {
		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
