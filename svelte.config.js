import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		serviceWorker: {
			register: false
		},
		files: {
			serviceWorker: 'src/service-worker.ts'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	preprocess: [vitePreprocess({})]
};

export default config;
