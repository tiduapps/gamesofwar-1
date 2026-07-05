<svelte:head>
	<title>Community — Games of War</title>
	<meta
		name="description"
		content="Join the Games of War community — share thoughts, contribute games, and connect with collectors and historians."
	/>
</svelte:head>

<section class="community-page">
	<div class="container-narrow">
		<header class="page-header">
			<h1>Community</h1>
		</header>

		<div class="intro prose">
			<p>
				We are interested in your thoughts on war and games. We hope you will share your ideas and
				experiences with us and with other visitors to this site.
			</p>
			<p>
				We welcome contributions from collectors, gamers, and historians. If you have a game to add to
				our library, a comment about a particular game, or a question for us, please use the options
				below.
			</p>
		</div>

		<div class="community-sections">
			<section class="community-row card">
				<div class="row-content">
					<h2>Send me a private message</h2>
					<p>
						Click this button to send an email directly to the administrator at
						<a href="mailto:info@gamesofwar.org">info@gamesofwar.org</a>.
					</p>
				</div>
				<a href="mailto:info@gamesofwar.org" class="btn">Send an email</a>
			</section>

			<section class="community-row card">
				<div class="row-content">
					<h2>Post a comment</h2>
					<p>
						Visit any game in the <a href="/games">Game Library</a> to leave a comment. Include your
						name and email — comments are reviewed before they appear on the game page.
					</p>
				</div>
				<a href="/games" class="btn">Browse games</a>
			</section>

			<section class="community-row card">
				<div class="row-content">
					<h2>Upload a game</h2>
					<p>
						Use our form to contribute a game to the library. You can provide game details and note
						if any information is unknown. Submissions are reviewed before publication.
					</p>
				</div>
				<a href="/games/add" class="btn">Add a Game</a>
			</section>
		</div>
	</div>
</section>

<style>
	.community-page {
		padding: 2rem 0 3.5rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.page-header h1 {
		margin: 0;
		font-size: clamp(2.25rem, 5vw, 3rem);
		font-weight: 800;
		color: var(--color-primary-dark);
		letter-spacing: -0.02em;
	}

	.intro {
		margin-bottom: 2.5rem;
		text-align: center;
		max-width: 42rem;
		margin-inline: auto;
	}

	.community-sections {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.community-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1.5rem 1.75rem;
	}

	.row-content h2 {
		margin: 0 0 0.65rem;
		font-size: 0.8125rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-primary-dark);
	}

	.row-content p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--color-text);
	}

	.row-content a {
		color: var(--color-primary);
		font-weight: 600;
	}

	.community-row .btn {
		flex-shrink: 0;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.community-row {
			flex-direction: column;
			align-items: stretch;
			text-align: center;
		}

		.community-row .btn {
			width: 100%;
			justify-content: center;
		}
	}
</style>
