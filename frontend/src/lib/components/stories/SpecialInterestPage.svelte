<script lang="ts">
	import type { SpecialInterestHub } from '$lib/data/stories/special-interest';

	let { hub }: { hub: SpecialInterestHub } = $props();
</script>

<article class="special-interest">
	<header class="story-hero">
		<div class="container story-hero-inner">
			<a href="/stories" class="back-link">← All stories</a>
			<span class="section-eyebrow">Stories</span>
			<h1>{hub.title}</h1>
			{#each hub.intro as paragraph}
				<p class="hero-lead">{paragraph}</p>
			{/each}
		</div>
	</header>

	<div class="container">
		<ol class="article-list">
			{#each hub.articles as article (article.slug)}
				<li class="article-card">
					<a href="/stories/{article.slug}" class="article-link">
						<div class="article-images" class:duo={article.images.length > 1}>
							{#each article.images as image (image.src)}
								<div class="image-frame">
									<img src={image.src} alt={image.alt} loading="lazy" />
								</div>
							{/each}
						</div>
						<div class="article-copy">
							<h2>{article.title}</h2>
							<p>{article.description}</p>
							<span class="read-more">Read article →</span>
						</div>
					</a>
				</li>
			{/each}
		</ol>

		<aside class="contact-cta card">
			<p>
				Do you have comments or questions on these pages? Would you like to see an article on a
				specific subject, or have a topic that you’d be willing to explore and share?
			</p>
			<a href="mailto:info@gamesofwar.org" class="btn btn-secondary">Send a message</a>
		</aside>
	</div>
</article>

<style>
	.special-interest {
		padding-bottom: 3.5rem;
	}

	.story-hero {
		padding: 2rem 0 1.75rem;
		margin-bottom: 1.5rem;
		background:
			linear-gradient(180deg, rgba(220, 232, 220, 0.5) 0%, transparent 100%),
			var(--color-bg);
		border-bottom: 1px solid var(--color-border);
	}

	.story-hero-inner {
		max-width: 44rem;
		margin-inline: auto;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.story-hero h1 {
		margin: 0 0 0.75rem;
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4.5vw, 2.75rem);
		font-weight: 700;
		line-height: 1.12;
		color: var(--color-primary-dark);
	}

	.hero-lead {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.article-list {
		list-style: none;
		margin: 0 auto;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 52rem;
	}

	.article-card {
		margin: 0;
	}

	.article-link {
		display: grid;
		grid-template-columns: minmax(9rem, 13rem) 1fr;
		gap: 1.25rem;
		padding: 1.15rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		text-decoration: none;
		color: inherit;
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast),
			transform var(--transition-fast);
	}

	.article-link:hover {
		border-color: var(--color-primary-light);
		box-shadow: var(--shadow-sm);
		transform: translateY(-1px);
	}

	.article-images {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.article-images.duo {
		flex-direction: row;
	}

	.image-frame {
		overflow: hidden;
		border-radius: var(--radius-sm);
		border: 1px solid var(--color-border);
		background: var(--color-bg-muted);
		aspect-ratio: 4 / 3;
	}

	.article-images.duo .image-frame {
		flex: 1;
		aspect-ratio: 3 / 4;
	}

	.image-frame img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.article-copy h2 {
		margin: 0 0 0.6rem;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1.25;
		color: var(--color-primary-dark);
	}

	.article-copy p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.65;
		color: var(--color-text);
	}

	.read-more {
		display: inline-block;
		margin-top: 0.85rem;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-primary);
	}

	.contact-cta {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		max-width: 44rem;
		margin: 2.5rem auto 0;
		padding: 1.5rem 1.75rem;
	}

	.contact-cta p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	@media (max-width: 720px) {
		.article-link {
			grid-template-columns: 1fr;
		}

		.article-images.duo {
			flex-direction: row;
		}

		.article-images.duo .image-frame {
			aspect-ratio: 4 / 3;
		}
	}
</style>
