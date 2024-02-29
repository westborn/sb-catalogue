import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			// these are the aliases and paths to them
			'@components': path.resolve('./src/lib/components'),
			'@lib': path.resolve('./src/lib'),
			'@utils': path.resolve('./src/lib/utils'),
		},
	},
}

export default config
