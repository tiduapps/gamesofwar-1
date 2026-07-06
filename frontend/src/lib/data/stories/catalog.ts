export type StoryListItem = {
	slug: string;
	title: string;
	description: string;
	kind: 'article' | 'hub';
};

export type StoryNav = { title: string; slug: string };

export type StoryWithChapters = StoryListItem & {
	chapters: StoryNav[];
};

/** Top-level entries shown on /stories */
export const storyCatalog: StoryListItem[] = [
	{
		slug: 'the-great-game',
		title: 'The Great Game',
		description: 'Wartime games from the 17th through 19th centuries.',
		kind: 'article'
	},
	{
		slug: 'the-age-of-empires',
		title: 'The Age of Empires',
		description: 'Games spanning the Napoleonic era through the road to global war.',
		kind: 'article'
	},
	{
		slug: 'world-war-i',
		title: 'World War I',
		description: 'Opening moves of the Great War, from Tsingtao to the Western Front.',
		kind: 'article'
	},
	{
		slug: 'peace-for-a-time',
		title: 'Peace for a Time',
		description: 'The uneasy peace between the world wars.',
		kind: 'article'
	},
	{
		slug: 'world-war-ii',
		title: 'World War II',
		description: 'The Marco Polo Bridge incident and the war in China.',
		kind: 'article'
	},
	{
		slug: 'the-cold-war',
		title: 'The Cold War',
		description: 'Ideological conflict through games of containment and propaganda.',
		kind: 'article'
	},
	{
		slug: 'special-interests',
		title: 'Special Interests',
		description: 'In-depth articles on playing pieces, hidden setup, dexterity games, and more.',
		kind: 'hub'
	}
];

/** Chapters grouped under their parent story */
export const chaptersByStory: Record<string, StoryNav[]> = {
	'the-great-game': [
		{ slug: 'combined-aims', title: 'Combined Aims' },
		{ slug: 'recruiting-for-war', title: 'Recruiting for War' },
		{ slug: 'enthusiasm-for-war', title: 'Enthusiasm for War' },
		{ slug: 'sinews-of-war', title: 'Sinews of War' },
		{ slug: 'war-and-remembrance', title: 'War and Remembrance' }
	],
	'the-age-of-empires': [
		{ slug: 'the-napoleonic-era', title: 'The Napoleonic Era' },
		{ slug: 'the-victorian-era', title: 'The Victorian Era' },
		{ slug: 'the-u-s-civil-war', title: 'The American Civil War' },
		{ slug: 'franco-prussian-war', title: 'The Franco-Prussian War' },
		{ slug: 'the-anglo-boer-wars', title: 'The Boer Wars' },
		{ slug: 'the-spanish-american-war', title: 'The Spanish-American War' },
		{ slug: 'russo-japanese-war', title: 'The Russo-Japanese War' },
		{ slug: 'girding-for-global-war', title: 'The Path to Global War' }
	],
	'world-war-i': [
		{ slug: 'war-in-the-trenches', title: 'War in the Trenches' },
		{ slug: 'war-at-sea', title: 'War at Sea' },
		{ slug: 'war-in-the-air', title: 'War in the Air' },
		{ slug: 'the-big-picture', title: 'The Big Picture' }
	],
	'peace-for-a-time': [
		{ slug: 'inventing-for-war', title: 'Inventing for War' },
		{ slug: 'preventing-war', title: 'Preventing War' },
		{ slug: 'preparing-for-war', title: 'Preparing for War' },
		{ slug: 'roads-to-war', title: 'Roads to War' }
	],
	'world-war-ii': [
		{ slug: 'blitzkrieg', title: 'Blitzkrieg' },
		{ slug: 'battle-of-britain', title: 'The Battle of Britain' },
		{ slug: 'battle-of-the-atlantic', title: 'Battle of the Atlantic' },
		{ slug: 'bombing-the-reich', title: 'Bombing the Reich' },
		{ slug: 'liberating-europe', title: 'Liberating Europe' },
		{ slug: 'war-in-the-pacific', title: 'War in the Pacific' }
	],
	'the-cold-war': [
		{ slug: 'mad-about-war', title: 'MAD about War' },
		{ slug: 'jets-come-of-age', title: 'Jets Come of Age' },
		{ slug: 'the-race-for-space', title: 'The Race for Space' },
		{ slug: 'communist-plotting', title: 'Communist Plotting' },
		{ slug: 'hearts-and-minds-viet-nam', title: 'Hearts and Minds' },
		{ slug: 'religion-and-oil-the-middle-east', title: 'Religion and Oil: The Middle East' },
		{ slug: 'despots-and-decolonialization-africa', title: 'Despots and Decolonialization: Africa' },
		{ slug: 'missives-and-missiles-the-falklands', title: 'Missives and Missiles: The Falklands' },
		{ slug: 'communists-and-contras-latin-america', title: 'Communists and Contras: Latin America' },
		{ slug: 'worlds-of-if', title: 'Worlds of If' }
	],
	'special-interests': [
		{ slug: 'war-and-pieces', title: 'War and Pieces' },
		{ slug: 'personal-touches', title: 'Personal Touches' },
		{ slug: 'ready-aim-fire', title: 'Uneven Odds' },
		{ slug: 'fog-of-war', title: 'The Fog of War' },
		{ slug: 'shooting-blind', title: 'Shooting Blind' },
		{ slug: 'assault-and-battery', title: 'Hand to Hand Combat' },
		{ slug: 'wargame-firsts', title: 'Wargame Firsts' }
	]
};

export function getStoriesWithChapters(): StoryWithChapters[] {
	return storyCatalog.map((story) => ({
		...story,
		chapters: chaptersByStory[story.slug] ?? []
	}));
}

export function getStoryListItem(slug: string): StoryListItem | null {
	const topLevel = storyCatalog.find((story) => story.slug === slug);
	if (topLevel) return topLevel;

	for (const chapters of Object.values(chaptersByStory)) {
		const chapter = chapters.find((item) => item.slug === slug);
		if (chapter) {
			return { slug: chapter.slug, title: chapter.title, description: '', kind: 'article' };
		}
	}

	return null;
}

export function getStoryParent(slug: string): StoryNav | null {
	for (const [parentSlug, chapters] of Object.entries(chaptersByStory)) {
		const chapter = chapters.find((item) => item.slug === slug);
		if (chapter) {
			const parent = storyCatalog.find((story) => story.slug === parentSlug);
			return parent ? { slug: parent.slug, title: parent.title } : null;
		}
	}
	return null;
}

export function getStoryChapters(parentSlug: string): StoryNav[] {
	return chaptersByStory[parentSlug] ?? [];
}

function getTopLevelNav(slug: string): { prev: StoryNav | null; next: StoryNav | null } {
	const index = storyCatalog.findIndex((story) => story.slug === slug);
	if (index < 0) return { prev: null, next: null };

	const prev =
		index > 0
			? (() => {
					const prevStory = storyCatalog[index - 1];
					const prevChapters = chaptersByStory[prevStory.slug];
					if (prevChapters?.length) {
						return prevChapters[prevChapters.length - 1];
					}
					return { slug: prevStory.slug, title: prevStory.title };
				})()
			: null;

	const next =
		index < storyCatalog.length - 1
			? { slug: storyCatalog[index + 1].slug, title: storyCatalog[index + 1].title }
			: null;

	return { prev, next };
}

export function getStoryNav(slug: string): { prev: StoryNav | null; next: StoryNav | null } {
	const parent = getStoryParent(slug);

	if (parent) {
		const chapters = chaptersByStory[parent.slug];
		const index = chapters.findIndex((chapter) => chapter.slug === slug);

		const prev: StoryNav | null =
			index > 0 ? chapters[index - 1] : { slug: parent.slug, title: parent.title };

		const next: StoryNav | null =
			index < chapters.length - 1
				? chapters[index + 1]
				: (() => {
						const parentIndex = storyCatalog.findIndex((story) => story.slug === parent.slug);
						if (parentIndex < 0 || parentIndex >= storyCatalog.length - 1) return null;
						const nextStory = storyCatalog[parentIndex + 1];
						return { slug: nextStory.slug, title: nextStory.title };
					})();

		return { prev, next };
	}

	const chapters = getStoryChapters(slug);
	if (chapters.length > 0) {
		const { prev } = getTopLevelNav(slug);
		return { prev, next: chapters[0] };
	}

	return getTopLevelNav(slug);
}
