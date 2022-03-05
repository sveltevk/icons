import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import sveld from 'vite-plugin-sveld';

import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md']
		}),
		preprocess()
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/icons'
		},
		vite: {
			server: {
				fs: {
					allow: ['README.md']
				}
			},
			optimizeDeps: {
				include: ['svg-baker-runtime/browser-sprite.js', 'svg-baker-runtime/browser-symbol.js']
			},
			plugins: [sveld()],
			resolve: {
				extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'svg'],
				alias: {
					$site: path.resolve('src/site'),
					'@sveltevk/icons': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
