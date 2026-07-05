<section class="contributor-section">
	<div class="container cta-card">
		<div class="cta-content">
			<span class="section-eyebrow">Join the community</span>
			<h2 class="cta-title">Share your stories &amp; games</h2>
			<p class="cta-text">
				Help grow the world's largest collection of war-themed board and card games. Whether you're
				a collector, historian, or enthusiast — we'd love to hear from you.
			</p>
			<div class="cta-buttons">
				<a href="mailto:info@gamesofwar.org" class="btn btn-ghost">Send an email</a>
				<a href="/games/add" class="btn">Add a game</a>
			</div>
		</div>
	</div>

	<div class="container site-info">
		<div class="info-card">
			<div class="info-avatar" aria-hidden="true">DS</div>
			<div>
				<p class="info-name">David Stewart-Patterson</p>
				<p class="info-bio">
					Canadian wargamer and collector. Gamesofwar.org is run with love for history, play, and
					peace. Feel free to offer comments or additions to the site!
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.contributor-section {
		padding: 2rem 0 4rem;
	}

	.cta-card {
		background: linear-gradient(
			135deg,
			var(--color-primary-dark) 0%,
			var(--color-primary) 50%,
			var(--color-primary-light) 100%
		);
		border-radius: var(--radius-lg);
		padding: clamp(2rem, 5vw, 3.5rem);
		box-shadow: var(--shadow-glow);
		color: var(--color-text-on-dark);
		margin-bottom: 2rem;
	}

	.cta-content {
		max-width: 36rem;
	}

	.cta-card .section-eyebrow {
		color: rgba(255, 255, 255, 0.85);
	}

	.cta-title {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		line-height: 1.15;
		letter-spacing: -0.02em;
		margin: 0 0 1rem;
	}

	.cta-text {
		margin: 0 0 1.75rem;
		font-size: 1.0625rem;
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.9);
	}

	.cta-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.site-info {
		padding-top: 0.5rem;
	}

	.info-card {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		padding: 1.5rem;
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.info-avatar {
		flex-shrink: 0;
		width: 3rem;
		height: 3rem;
		border-radius: var(--radius-full);
		background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary-dark));
		color: white;
		font-weight: 700;
		font-size: 0.875rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-name {
		margin: 0 0 0.35rem;
		font-weight: 700;
		font-size: 0.9375rem;
		color: var(--color-text);
	}

	.info-bio {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	@media (max-width: 560px) {
		.info-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
