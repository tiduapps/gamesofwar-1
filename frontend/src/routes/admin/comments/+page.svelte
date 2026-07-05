<script lang="ts">
	import type { ActionData } from './$types';

	let {
		data,
		form
	}: {
		data: {
			comments: Array<{
				id: string;
				author_name: string;
				author_email: string;
				body: string;
				created_at: string;
				games: { title: string; slug: string } | null;
			}>;
			supabaseReady: boolean;
		};
		form: ActionData;
	} = $props();

	function formatDate(iso: string) {
		return new Date(iso).toLocaleString();
	}
</script>

<svelte:head>
	<title>Review comments — Admin</title>
</svelte:head>

<header class="admin-page-header">
	<h1>Pending comments</h1>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Supabase is not configured.</p>
{:else if form?.error}
	<p class="form-error" role="alert">{form.error}</p>
{:else if data.comments.length === 0}
	<p class="admin-empty">No comments awaiting review.</p>
{:else}
	<ul class="admin-review-list">
		{#each data.comments as comment (comment.id)}
			<li class="admin-review-card card">
				<div class="review-meta">
					{#if comment.games}
						<a href="/games/{comment.games.slug}" class="game-link">{comment.games.title}</a>
					{/if}
					<span>{comment.author_name} · {comment.author_email}</span>
					<time datetime={comment.created_at}>{formatDate(comment.created_at)}</time>
				</div>
				<p class="review-body">{comment.body}</p>
				<div class="admin-review-actions">
					<form method="POST" action="?/approve">
						<input type="hidden" name="id" value={comment.id} />
						<button type="submit" class="btn btn-sm">Approve</button>
					</form>
					<form method="POST" action="?/reject" class="admin-reject-form">
						<input type="hidden" name="id" value={comment.id} />
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

	.game-link {
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
	}

	.game-link:hover {
		text-decoration: underline;
	}

	.review-body {
		margin: 0 0 1rem;
		white-space: pre-wrap;
		line-height: 1.55;
	}
</style>
