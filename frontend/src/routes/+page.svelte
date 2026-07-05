<script lang="ts">
	import DidYouKnow from '$lib/components/home/DidYouKnow.svelte';
	import HeroSection from '$lib/components/home/HeroSection.svelte';
	import ContributorCta from '$lib/components/home/ContributorCta.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Games of War — Board and card games about war</title>
	<meta
		name="description"
		content="The world's largest library of board and card games telling stories about war, from 1663 to the present day."
	/>
</svelte:head>

<HeroSection featured={data.featuredCollections} />

<section class="about-section">
	<div class="container">
		<div class="about-intro">
			<span class="section-eyebrow">Our mission</span>
			<h2 class="section-title">The world's largest war-games library</h2>
			<p class="about-lead">
				We display board and card games telling stories about war, from <strong>1663 to the present
				day</strong> — fostering appreciation of history and the human spirit's capacity for play and
				for peace.
			</p>
		</div>

		<div class="about-grid">
			<article class="about-card card">
				<h3>Global collection</h3>
				<p>
					Games from the USA, Britain, Germany, France, Japan and many other countries — played by
					soldiers at the front, civilians at home, or both.
				</p>
			</article>
			<article class="about-card card">
				<h3>Stories in every box</h3>
				<p>
					Each game reflects the conflict, culture, and creativity of its era — from Napoleonic
					battles to modern strategy.
				</p>
			</article>
			<article class="about-card card">
				<h3>Open to everyone</h3>
				<p>
					Whether you're a collector, historian, gamer, or simply curious, explore how generations
					turned war into the art of play.
				</p>
				<a href="/games" class="about-link">Explore the collection →</a>
			</article>
		</div>
	</div>
</section>

<DidYouKnow items={data.announcements} />

<ContributorCta />

<style>
	.about-section {
		padding: 1rem 0 3.5rem;
	}

	.about-intro {
		max-width: 42rem;
		margin-bottom: 2rem;
	}

	.about-lead {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.about-card {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		padding: 1.35rem 1.4rem;
	}

	.about-card h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.about-card p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.65;
		color: var(--color-text-muted);
		flex: 1;
	}

	.about-link {
		margin-top: 0.35rem;
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
	}

	.about-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
