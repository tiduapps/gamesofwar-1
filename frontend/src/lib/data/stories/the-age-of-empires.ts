import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/the-age-of-empires/${name}`;

export const theAgeOfEmpires: StoryContent = {
	slug: 'the-age-of-empires',
	title: 'The Age of Empires',
	blocks: [
		{
			type: 'paragraph',
			text: 'The 19th Century began with the seemingly endless campaigns of the Napoleonic Wars and went on to encompass dozens of wars between the Great Powers and more one-sided conflicts against less powerful nations.'
		},
		{
			type: 'paragraph',
			text: 'The broad scope of warfare through those years is captured in a retrospective German game, Das Neunzehnte Jahrhundert published at the turn of the century.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('das-19-jahrhundert-box.jpg'),
				alt: 'Box cover for Das Neunzehnte Jahrhundert',
				caption: 'Das Neunzehnte Jahrhundert'
			}
		},
		{
			type: 'paragraph',
			text: 'It is a lotto game with 10 illustrated boards, each covering a decade, and a deck of 100 small cards, each bearing a year and a personality or event. The first player to fill their card wins.'
		},
		{
			type: 'paragraph',
			text: 'The game’s pieces include tiles with portraits of major personalities that can be placed instead of the corresponding card. A 32-page booklet offers a year-by-year history of the 19th Century covering both what is shown on the player boards and other events of each year.'
		},
		{
			type: 'paragraph',
			text: 'The early decade boards, of course, feature many of the famous Napoleonic battles including Borodino, Leipzig and Waterloo. The game then documents the 1827 sea battle of Navarino (involving Britain, France, Russia and Turkey) and the 1831 battle of Ostrolenka (Russia versus Poland). Further conflicts follow, including:'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('19th-century-old-guard.jpg'),
					alt: 'Illustration of Napoleonic Old Guard soldiers from a 19th-century game board',
					caption: 'The Old Guard on a decade board'
				},
				{
					src: img('19th-century-rules.jpg'),
					alt: 'Rules booklet pages from Das Neunzehnte Jahrhundert',
					caption: 'Rules and year-by-year history'
				},
				{
					src: img('19th-century-1890s.jpg'),
					alt: '1890s decade board from Das Neunzehnte Jahrhundert',
					caption: 'The 1890s board'
				}
			]
		},
		{
			type: 'list',
			items: [
				"Britain's battles in Afghanistan in 1839 and with China in 1849",
				'Italy fighting Austria in 1849',
				'Schleswig-Holstein versus Denmark in 1849',
				'the Crimean War in 1855, war between Austria',
				'Italy versus France in 1859',
				"Garibaldi's battles in Sicily in 1860",
				'Germany versus Denmark in 1864',
				'the Franco-Prussian War of 1870-71',
				'Russia versus Turkey in 1877',
				"Britain's conflict with the Mahdi in Sudan in 1885",
				"Japan's battle with China over Korea in 1894",
				"Germany's invasion of Qingdao in China in 1897"
			]
		},
		{
			type: 'paragraph',
			text: 'Oddly not mentioned, perhaps because Germany had no interest in it, is the carnage of the Civil War in the United States during the 1860s.'
		},
		{
			type: 'paragraph',
			text: 'The booklet included in the game does mention two major conflicts in the final years of the century that spawned a host of games in their own right: the Spanish-American War and Britain’s campaigns against the Boers in South Africa.'
		},
		{
			type: 'paragraph',
			text: 'One of these wars would drive Spain forever out of Great Power status. The second would humble the mighty British Empire. And soon to come would be the third great turn-of-the-century war, the one that would see Japan emerge as a major power with an unexpected smashing of both the army and navy of Imperial Russia. These and other conflicts all spawned games through the 19th Century and beyond.'
		}
	]
};
