<script lang="ts">
	let {
		form,
		supabaseReady
	}: {
		form: {
			success?: boolean;
			errors?: Record<string, string> | null;
			fields?: { author_name: string; author_email: string; body: string } | null;
		} | null;
		supabaseReady: boolean;
	} = $props();

	const fields = $derived(form?.fields ?? null);
	const errors = $derived((form?.errors ?? {}) as Record<string, string>);
</script>

<div class="comment-form-wrap">
	<h3>Leave a comment</h3>
	<p class="form-note">
		Comments are reviewed before they appear. Please include your name and email so we can follow
		up if needed.
	</p>

	{#if form?.success}
		<div class="success-banner" role="status">
			<p><strong>Thank you!</strong> Your comment has been submitted and will appear after review.</p>
		</div>
	{:else if !supabaseReady}
		<p class="form-error">Comments are unavailable until Supabase is configured.</p>
	{:else}
		<form method="POST" action="?/comment" class="comment-form form-card">
			{#if errors.form}
				<p class="form-error" role="alert">{errors.form}</p>
			{/if}

			<div class="form-row">
				<div class="field">
					<label for="comment-author-name">Your name <span class="required" aria-hidden="true">*</span></label>
					<input
						id="comment-author-name"
						name="author_name"
						type="text"
						required
						autocomplete="name"
						value={fields?.author_name ?? ''}
					/>
					{#if errors.author_name}
						<span class="field-error" role="alert">{errors.author_name}</span>
					{/if}
				</div>

				<div class="field">
					<label for="comment-author-email">Email <span class="required" aria-hidden="true">*</span></label>
					<input
						id="comment-author-email"
						name="author_email"
						type="email"
						autocomplete="email"
						required
						value={fields?.author_email ?? ''}
					/>
					{#if errors.author_email}
						<span class="field-error" role="alert">{errors.author_email}</span>
					{/if}
				</div>
			</div>

			<div class="field">
				<label for="comment-body">Comment <span class="required" aria-hidden="true">*</span></label>
				<textarea
					id="comment-body"
					name="body"
					rows="4"
					required
					placeholder="Share your thoughts about this game…"
				>{fields?.body ?? ''}</textarea>
				{#if errors.body}
					<span class="field-error" role="alert">{errors.body}</span>
				{/if}
			</div>

			<div class="form-actions">
				<button type="submit" class="btn">Post comment</button>
			</div>
		</form>
	{/if}
</div>

<style>
	.comment-form-wrap {
		margin-top: 0.5rem;
	}

	.comment-form-wrap h3 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.form-note {
		margin: 0 0 1rem;
		font-size: 0.875rem;
		color: var(--color-text-muted);
		line-height: 1.5;
	}

	.comment-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0;
		padding: 1.25rem 1.35rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		align-items: start;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		min-width: 0;
	}

	.field label {
		display: block;
		margin: 0;
		font-weight: 600;
		font-size: 0.875rem;
		color: var(--color-text);
		line-height: 1.3;
	}

	.comment-form :global(input),
	.comment-form :global(textarea) {
		width: 100%;
		box-sizing: border-box;
		margin: 0;
	}

	.form-actions {
		padding-top: 0.15rem;
	}

	.success-banner {
		padding: 1rem 1.15rem;
		border-radius: var(--radius-md);
		background: var(--color-bg-muted);
		border: 1px solid var(--color-border);
	}

	.success-banner p {
		margin: 0;
		color: var(--color-primary-dark);
	}

	@media (max-width: 600px) {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>
