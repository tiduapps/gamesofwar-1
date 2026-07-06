import { specialInterest } from '$lib/data/stories/special-interest';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { hub: specialInterest };
};
