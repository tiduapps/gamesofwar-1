<script lang="ts">
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	const fields = $derived(form?.fields ?? null);
	const errors = $derived((form?.errors ?? {}) as Record<string, string>);
</script>

<svelte:head>
	<title>Add a Game — Games of War</title>
</svelte:head>

<section class="submit-page">
	<div class="container-narrow">
		<div class="page-header">
			<span class="section-eyebrow">Contribute</span>
			<h1>Add a Game</h1>
			<p class="intro">
				Share a war-themed board or card game with the collection. Submissions are reviewed by our
				team before appearing on the site.
			</p>
		</div>

		{#if form?.success}
			<div class="success-banner card" role="status">
				<div class="success-icon" aria-hidden="true">✓</div>
				<div>
					<p class="success-title">Submission received!</p>
					<p class="success-text">Thank you — we'll review your game and be in touch if we need anything.</p>
				</div>
			</div>
		{:else}
			<form method="POST" class="submit-form form-card">
				{#if errors.form}
					<p class="form-error" role="alert">{errors.form}</p>
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
							<input name="year" type="text" inputmode="numeric" placeholder="1942" value={fields?.year ?? ''} />
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
						<input name="theme" type="text" placeholder="WWII Air, Morale, etc." value={fields?.theme ?? ''} />
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
					<legend>Your contact info</legend>

					<label>
						Your name
						<input name="submitter_name" type="text" value={fields?.submitter_name ?? ''} />
					</label>

					<label>
						Email <span class="required">*</span>
						<input
							name="submitter_email"
							type="email"
							required
							autocomplete="email"
							value={fields?.submitter_email ?? ''}
						/>
						{#if errors.submitter_email}<span class="field-error">{errors.submitter_email}</span>{/if}
					</label>

					<label>
						Additional notes
						<textarea name="submitter_notes" rows="3">{fields?.submitter_notes ?? ''}</textarea>
					</label>
				</fieldset>

				<button type="submit" class="btn submit-btn">Submit for review</button>
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
		max-width: 48ch;
	}

	.submit-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
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

	@media (max-width: 560px) {
		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
