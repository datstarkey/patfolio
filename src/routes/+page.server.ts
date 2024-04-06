import { directus } from '$lib/server/directus';
import { readFiles, readItems } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		images: await directus.request(
			readFiles({
				filter: {
					_or: [
						{
							folder: {
								_eq: '0c7c9d9d-becd-4fca-a2c4-c76ca7f3bd3e'
							}
						},
						{
							folder: {
								_eq: '523d15f4-5821-4ca9-ad4e-7464717ec165'
							}
						},
						{
							folder: {
								_eq: 'c240c50a-c1f4-40a6-a15e-1cff8079f20f'
							}
						}
					]
				},
				limit: -1,
				fields: ['id', 'title']
			})
		),
		blub: await directus.request(readItems('main'))
	};
}) satisfies PageServerLoad;
