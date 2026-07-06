import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				routes: {
					include: ['/*'],
					// Wildcards avoid per-file excludes (967 images exceeded the 100-rule limit).
					exclude: ['<build>', '/images/*', '/robots.txt']
				}
			})
		})
	]
});
