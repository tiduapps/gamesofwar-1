import { error } from '@sveltejs/kit';
import {
	getStoryChapters,
	getStoryContent,
	getStoryListItem,
	getStoryNav,
	getStoryParent
} from '$lib/data/stories';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const content = getStoryContent(params.slug);
	const meta = getStoryListItem(params.slug);

	if (!content) {
		throw error(404, 'Story not found');
	}

	const parentStory = getStoryParent(params.slug);
	const chapters = parentStory ? [] : getStoryChapters(params.slug);
	const { prev, next } = getStoryNav(params.slug);

	return {
		story: {
			title: meta?.title ?? content.title,
			slug: params.slug
		},
		content,
		parentStory,
		chapters,
		prevStory: prev,
		nextStory: next
	};
};
