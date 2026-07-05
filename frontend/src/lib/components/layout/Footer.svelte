<script lang="ts">
	import SiteLogo from '$lib/components/layout/SiteLogo.svelte';

	const currentYear = new Date().getFullYear();
	const copyrightYear = currentYear
</script>

<footer class="site-footer">
	<div class="footer-inner container">
		<div class="footer-brand">
			<SiteLogo href={null} variant="footer" />
			<p class="footer-tagline">Board & card games about war, 1663–present</p>
		</div>

		<div class="footer-links">
			<a href="/games">Browse Games</a>
			<a href="/games/add">Submit a Game</a>
			<a href="/about">About</a>
			<a href="/acknowledgements">Acknowledgements</a>
		</div>

		<p class="copyright">© {copyrightYear} David Stewart-Patterson</p>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: auto;
		background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
		color: var(--color-text-on-dark);
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		gap: 2rem 3rem;
		padding: 3rem 0 2rem;
		align-items: start;
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.35rem;
	}

	.footer-tagline {
		margin: 0;
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		justify-content: flex-end;
	}

	.footer-links a {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.8);
		transition: color var(--transition-fast);
	}

	.footer-links a:hover {
		color: white;
	}

	.copyright {
		grid-column: 1 / -1;
		margin: 0;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.55);
		text-align: center;
	}

	@media (max-width: 640px) {
		.footer-inner {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.footer-brand {
			justify-content: center;
		}

		.footer-links {
			justify-content: center;
		}
	}
</style>
