import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};

// const starloader = defineCollection({
// 	loader: async () => {
// 		const response = await fetch('http://localhost:8881/wp-json/starlight/v1/pages');
// 		const data = await response.json();

// 		return data.map((page) => ({
// 			id: page
// 		}))
// 	}
// });