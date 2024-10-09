import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WordPress + Starlight',
			titleDelimiter: '&mdash;',
			credits: false,
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Docs', link: '/docs/' },
				{ label: 'About', link: '/about/' },
			],
			components: {
				EditLink: './src/components/EditLink.astro'
			}
		}),
	],
});