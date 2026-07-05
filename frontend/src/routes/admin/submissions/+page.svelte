<script lang="ts">
	import type { ActionData } from './$types';
	import type { GameSubmission } from '$lib/types/database';

	let {
		data,
		form
	}: {
		data: { submissions: GameSubmission[]; supabaseReady: boolean };
		form: ActionData;
	} = $props();

	function formatDate(iso: string) {
		return new Date(iso).toLocaleString();
	}
</script>

<svelte:head>
	<title>Review submissions — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<h1>Pending game submissions</h1>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Supabase is not configured.</p>
{:else if form?.error}
	<p class="form-error" role="alert">{form.error}</p>
{:else if data.submissions.length === 0}
	<p class="admin-empty">No submissions awaiting review.</p>
{:else}
	<ul class="admin-review-list">
		{#each data.submissions as submission (submission.id)}
			<li class="admin-review-card card">
				<div class="review-meta">
					<strong>{submission.title}</strong>
					<span>{submission.submitter_name ?? 'Anonymous'} · {submission.submitter_email}</span>
					<time datetime={submission.created_at}>{formatDate(submission.created_at)}</time>
				</div>

				<dl class="details">
					{#if submission.year}<div><dt>Year</dt><dd>{submission.year}</dd></div>{/if}
					{#if submission.country}<div><dt>Country</dt><dd>{submission.country}</dd></div>{/if}
					{#if submission.publisher}<div><dt>Publisher</dt><dd>{submission.publisher}</dd></div>{/if}
					{#if submission.theme}<div><dt>Theme</dt><dd>{submission.theme}</dd></div>{/if}
				</dl>

				{#if submission.description}
					<p class="review-body">{submission.description}</p>
				{/if}

				<div class="admin-review-actions">
					<form method="POST" action="?/approve">
						<input type="hidden" name="id" value={submission.id} />
						<button type="submit" class="btn btn-sm">Approve & publish</button>
					</form>
					<form method="POST" action="?/reject" class="admin-reject-form">
						<input type="hidden" name="id" value={submission.id} />
						<input
							type="text"
							name="note"
							placeholder="Rejection note (optional)"
							class="admin-reject-note"
						/>
						<button type="submit" class="btn btn-secondary btn-sm">Reject</button>
					</form>
				</div>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.review-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 1rem;
		margin-bottom: 0.65rem;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
	}

	.review-meta strong {
		color: var(--color-primary-dark);
		font-size: 1rem;
		width: 100%;
	}

	.details {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
		gap: 0.5rem 1rem;
		margin: 0 0 0.75rem;
	}

	.details div {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.details dt {
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.details dd {
		margin: 0;
		font-size: 0.875rem;
	}

	.review-body {
		margin: 0 0 1rem;
		white-space: pre-wrap;
		line-height: 1.55;
	}
</style>
