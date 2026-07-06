<script lang="ts">
	type GuideStep = { text: string };
	type GuideFeature = {
		title: string;
		href: string;
		summary: string;
		steps: GuideStep[];
		tip?: string;
	};

	type PublicSection = {
		title: string;
		href: string;
		summary: string;
	};

	let { data } = $props();

	const workflows = [
		'Check the dashboard for pending comments and submissions.',
		'Approve or reject visitor comments on game pages.',
		'Review new game submissions — or add games yourself.',
		'Keep homepage announcements fresh with a new “Did you know?” fact.'
	];

	const adminFeatures: GuideFeature[] = [
		{
			title: 'Dashboard',
			href: '/admin',
			summary: 'Your home base. See how many games are in the library and how many items need your attention.',
			steps: [
				{ text: 'Glance at pending comment and submission counts.' },
				{ text: 'Jump to any section using the cards or the sidebar.' }
			]
		},
		{
			title: 'Games library',
			href: '/admin/games',
			summary: 'Search, edit, and photograph every game in the collection.',
			steps: [
				{ text: 'Search by title or publisher to find a game quickly.' },
				{ text: 'Open a game to edit its title, year, country, publisher, theme, description, and rules.' },
				{ text: 'Upload photos, drag order with the arrows, set a cover image, or remove shots you no longer need.' },
				{ text: 'Use Add game to open the same form visitors use — with an option to publish immediately.' }
			],
			tip: 'After publishing a new game, you land on its edit page to fine-tune photos and details.'
		},
		{
			title: 'Announcements',
			href: '/admin/announcements',
			summary: 'Manage the rotating “Did you know?” facts on the homepage.',
			steps: [
				{ text: 'Add a short historical fact visitors will enjoy.' },
				{ text: 'Optionally link a fact to a specific game so the button opens that game’s page.' },
				{ text: 'Set sort order to control rotation sequence.' },
				{ text: 'Toggle active to hide an announcement without deleting it.' }
			]
		},
		{
			title: 'Comments',
			href: '/admin/comments',
			summary: 'Moderate notes left by visitors on individual game pages.',
			steps: [
				{ text: 'Read each comment in context — you can see which game it belongs to.' },
				{ text: 'Approve to show it publicly on that game’s page.' },
				{ text: 'Reject with an optional note if it is off-topic or inappropriate.' }
			],
			tip: 'New comments stay hidden until you approve them. The sidebar badge shows how many are waiting.'
		},
		{
			title: 'Submissions',
			href: '/admin/submissions',
			summary: 'Review games suggested through the public Add a Game form.',
			steps: [
				{ text: 'Read the details and photos a contributor submitted.' },
				{ text: 'Approve to add the game to the public library automatically.' },
				{ text: 'Reject if it does not fit the collection — you can leave an internal note.' }
			],
			tip: 'Contributors must provide an email so you can follow up if anything is missing.'
		}
	];

	const publicSite: PublicSection[] = [
		{
			title: 'Homepage',
			href: '/',
			summary: 'Hero image, featured collection links, and rotating announcement facts you manage in admin.'
		},
		{
			title: 'Game library',
			href: '/games',
			summary: 'Browse and filter the full collection. Each game has its own page with photos, description, rules, and approved comments.'
		},
		{
			title: 'Stories',
			href: '/stories',
			summary: 'Long-form articles on wartime games through history, organized by era with expandable chapters.'
		},
		{
			title: 'News & Events',
			href: '/news',
			summary: 'Event-style listings for talks, shows, and related news (content comes from the database when configured).'
		},
		{
			title: 'Community',
			href: '/community',
			summary: 'Explains how visitors can contribute games, leave comments, or get in touch by email.'
		},
		{
			title: 'Add a Game',
			href: '/games/add',
			summary: 'Public submission form with photos. Logged-in admins see extra options to publish straight to the catalog.'
		}
	];
</script>

<svelte:head>
	<title>Admin guide — Games of War</title>
</svelte:head>

<header class="admin-page-header guide-hero card">
	<p class="eyebrow">Admin guide</p>
	<h1>Welcome — here’s everything you can do</h1>
	<p class="subtitle">
		This panel is your toolkit for keeping Games of War accurate, welcoming, and up to date. Use the
		sections below as a reference whenever you need a refresher.
	</p>
</header>

{#if !data.supabaseReady}
	<p class="admin-empty">Configure Supabase in <code>frontend/.env</code> to use the admin panel.</p>
{:else}
	<section class="guide-section">
		<h2>A typical visit</h2>
		<ol class="workflow-list card">
			{#each workflows as step, index}
				<li>
					<span class="workflow-num">{index + 1}</span>
					<span>{step}</span>
				</li>
			{/each}
		</ol>
	</section>

	<section class="guide-section">
		<h2>Admin tools</h2>
		<p class="section-lead">Everything in the sidebar, explained in plain language.</p>
		<div class="feature-grid">
			{#each adminFeatures as feature}
				<article class="feature-card card">
					<div class="feature-head">
						<h3>{feature.title}</h3>
						<a href={feature.href} class="feature-link">Open →</a>
					</div>
					<p class="feature-summary">{feature.summary}</p>
					<ol class="feature-steps">
						{#each feature.steps as step}
							<li>{step.text}</li>
						{/each}
					</ol>
					{#if feature.tip}
						<p class="feature-tip">
							<strong>Tip:</strong>
							{feature.tip}
						</p>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<section class="guide-section">
		<h2>What visitors see</h2>
		<p class="section-lead">
			The public site lives at the main navigation. These pages are what your edits ultimately
			support.
		</p>
		<ul class="public-list">
			{#each publicSite as section}
				<li class="public-row card">
					<div class="public-copy">
						<h3>{section.title}</h3>
						<p>{section.summary}</p>
					</div>
					<a href={section.href} class="public-link" target="_blank" rel="noopener noreferrer">
						View ↗
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section class="guide-section">
		<h2>Good to know</h2>
		<div class="notes-grid">
			<div class="note-card card">
				<h3>Stories content</h3>
				<p>
					Story articles and chapters are built into the site code today, not edited through this
					panel. Game and announcement content is what you manage here.
				</p>
			</div>
			<div class="note-card card">
				<h3>Photos & storage</h3>
				<p>
					Game images are stored in cloud storage and attached to each record. Uploads are
					automatically resized to keep pages fast.
				</p>
			</div>
			<div class="note-card card">
				<h3>Need help?</h3>
				<p>
					Use <a href="/">View site</a> in the sidebar to preview changes, or reach out via
					<a href="mailto:info@gamesofwar.org">info@gamesofwar.org</a> for site questions.
				</p>
			</div>
		</div>
	</section>
{/if}

<style>
	.guide-hero {
		padding: 1.75rem 1.5rem;
		background: linear-gradient(135deg, rgba(85, 139, 110, 0.12) 0%, var(--color-bg-elevated) 55%);
		border-color: var(--color-primary-light);
	}

	.guide-hero .eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-primary);
	}

	.guide-hero h1 {
		margin: 0 0 0.65rem;
		font-size: clamp(1.5rem, 3vw, 1.85rem);
		font-weight: 800;
		color: var(--color-primary-dark);
		line-height: 1.2;
	}

	.guide-hero .subtitle {
		margin: 0;
		max-width: 58ch;
		line-height: 1.65;
		color: var(--color-text-muted);
	}

	.guide-section {
		margin-bottom: 2rem;
	}

	.guide-section h2 {
		margin: 0 0 0.35rem;
		font-size: 1.125rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.section-lead {
		margin: 0 0 1rem;
		font-size: 0.9375rem;
		color: var(--color-text-muted);
		line-height: 1.6;
		max-width: 58ch;
	}

	.workflow-list {
		list-style: none;
		margin: 0;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.workflow-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.85rem;
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-text);
	}

	.workflow-num {
		flex-shrink: 0;
		width: 1.65rem;
		height: 1.65rem;
		border-radius: var(--radius-full);
		background: var(--color-accent-soft);
		color: var(--color-primary-dark);
		font-size: 0.75rem;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		gap: 1rem;
	}

	.feature-card {
		padding: 1.15rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.feature-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.feature-head h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.feature-link {
		flex-shrink: 0;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
	}

	.feature-link:hover {
		text-decoration: underline;
	}

	.feature-summary {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.feature-steps {
		margin: 0;
		padding-left: 1.15rem;
		font-size: 0.8125rem;
		line-height: 1.55;
		color: var(--color-text);
	}

	.feature-steps li + li {
		margin-top: 0.35rem;
	}

	.feature-tip {
		margin: 0.25rem 0 0;
		padding: 0.65rem 0.75rem;
		border-radius: var(--radius-sm);
		background: rgba(85, 139, 110, 0.1);
		font-size: 0.8125rem;
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.feature-tip strong {
		color: var(--color-primary-dark);
	}

	.public-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.public-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1.15rem;
	}

	.public-copy h3 {
		margin: 0 0 0.25rem;
		font-size: 0.9375rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.public-copy p {
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.55;
		color: var(--color-text-muted);
		max-width: 48ch;
	}

	.public-link {
		flex-shrink: 0;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-primary);
		text-decoration: none;
	}

	.public-link:hover {
		text-decoration: underline;
	}

	.notes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: 0.85rem;
	}

	.note-card {
		padding: 1rem 1.15rem;
	}

	.note-card h3 {
		margin: 0 0 0.4rem;
		font-size: 0.875rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.note-card p {
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}

	.note-card a {
		color: var(--color-primary);
		font-weight: 600;
	}
</style>
