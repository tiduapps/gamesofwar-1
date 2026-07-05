<script lang="ts">
	import {
		acknowledgementsIntro,
		contributors,
		referenceSections,
		referencesIntro
	} from '$lib/data/acknowledgements';
</script>

<svelte:head>
	<title>Acknowledgements — Games of War</title>
	<meta
		name="description"
		content="Contributors and reference sources for Games of War."
	/>
</svelte:head>

<section class="ack-page">
	<div class="container-narrow">
		<header class="page-header">
			<a href="/about" class="back-link">← About the site</a>
			<h1>Acknowledgements</h1>
			<p class="intro">{acknowledgementsIntro}</p>
		</header>

		<section class="ack-section" aria-labelledby="contributors-heading">
			<div class="section-banner">
				<h2 id="contributors-heading">Contributors</h2>
			</div>

			<ul class="contributor-grid">
				{#each contributors as person (person.name)}
					<li class="contributor-card card">
						<h3>{person.name}</h3>
						<p>{person.contribution}</p>
					</li>
				{/each}
			</ul>
		</section>

		<section class="ack-section" aria-labelledby="references-heading">
			<div class="section-banner">
				<h2 id="references-heading">References</h2>
			</div>

			<div class="references-intro prose">
				{#each referencesIntro as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<div class="reference-sections">
				{#each referenceSections as section (section.title)}
					<section class="reference-group card">
						<h3>{section.title}</h3>
						<ul class="reference-list">
							{#each section.entries as entry}
								<li>
									<strong>{entry.title}</strong>
									{#if entry.description}
										<p class="entry-desc">{entry.description}</p>
									{/if}
									{#if entry.citation}
										<p class="entry-citation">{entry.citation}</p>
									{/if}
									{#if entry.href}
										<a
											href={entry.href}
											class="entry-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											{entry.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
												<path
													d="M7 17L17 7M17 7H9M17 7V15"
													stroke="currentColor"
													stroke-width="1.75"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			</div>
		</section>
	</div>
</section>

<style>
	.ack-page {
		padding: 2rem 0 3.5rem;
	}

	.page-header {
		margin-bottom: 2.5rem;
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

	.page-header h1 {
		margin: 0 0 1rem;
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4.5vw, 2.75rem);
		font-weight: 700;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.intro {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.ack-section + .ack-section {
		margin-top: 2.5rem;
	}

	.section-banner {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.25rem;
		padding: 0.85rem 1.25rem;
		border-radius: var(--radius-md);
		background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
		color: white;
		box-shadow: var(--shadow-sm);
	}

	.section-banner h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.contributor-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		gap: 0.85rem;
	}

	.contributor-card {
		padding: 1.15rem 1.2rem;
	}

	.contributor-card h3 {
		margin: 0 0 0.45rem;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.contributor-card p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.references-intro {
		margin-bottom: 1.25rem;
		font-size: 1rem;
	}

	.reference-sections {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.reference-group {
		padding: 1.25rem 1.35rem;
	}

	.reference-group h3 {
		margin: 0 0 0.85rem;
		font-size: 0.9375rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.reference-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.reference-list li {
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.reference-list li:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.reference-list strong {
		display: block;
		margin-bottom: 0.25rem;
		font-size: 0.9375rem;
		color: var(--color-text);
	}

	.entry-desc,
	.entry-citation {
		margin: 0.15rem 0 0;
		font-size: 0.875rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.entry-citation {
		font-style: italic;
	}

	.entry-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		margin-top: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-primary);
		text-decoration: none;
		word-break: break-word;
	}

	.entry-link:hover {
		text-decoration: underline;
	}
</style>
