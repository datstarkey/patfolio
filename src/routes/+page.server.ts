import { directus } from '$lib/server/directus';
import { readFiles } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		images: await directus.request(
			readFiles({
				filter: {
					folder: {
						_eq: '0c7c9d9d-becd-4fca-a2c4-c76ca7f3bd3e'
					}
				},
				limit: -1,
				fields: ['id', 'title']
			})
		)
	};
}) satisfies PageServerLoad;
