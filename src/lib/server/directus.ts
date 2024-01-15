import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus('https://cms.patfolio.art').with(rest());

export function directusAsset(path: string) {
	return `https://cms.patfolio.art/assets/${path}`;
}
