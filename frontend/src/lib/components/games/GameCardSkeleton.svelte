<div class="game-card-skeleton" aria-hidden="true">
	<div class="cover skeleton"></div>
	<div class="footer">
		<div class="line title skeleton"></div>
		<div class="line meta skeleton"></div>
	</div>
</div>

<style>
	.game-card-skeleton {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
		background: var(--color-bg-elevated);
	}

	.cover {
		aspect-ratio: 1;
		flex-shrink: 0;
	}

	.footer {
		padding: 0.75rem 0.85rem;
		min-height: 4.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		background: var(--color-bg-elevated);
	}

	.line {
		border-radius: var(--radius-sm);
		height: 0.75rem;
	}

	.title {
		width: 88%;
		height: 0.8rem;
	}

	.meta {
		width: 55%;
	}
</style>
