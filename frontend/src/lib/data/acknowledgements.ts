export type Contributor = {
	name: string;
	contribution: string;
};

export type ReferenceEntry = {
	title: string;
	description?: string;
	href?: string;
	citation?: string;
};

export type ReferenceSection = {
	title: string;
	entries: ReferenceEntry[];
};

export const acknowledgementsIntro =
	'In the course of my collecting and related research, I have been helped by several individuals and many reference websites. Individual credits are for contributions to the site content (writing or images). References notes sites on which I have drawn significant quotes or information. As in any literary work, any errors are of course my fault, and I welcome comments and corrections.';

export const contributors: Contributor[] = [
	{
		name: 'Aoi Saginuma',
		contribution: 'Translation of rules and publication information for Japanese games.'
	},
	{
		name: 'Dan Cermak',
		contribution: 'Image of the game Dictator'
	},
	{
		name: 'Laisvydas Liaudanskas',
		contribution: 'Image of Bizertie Gertie'
	},
	{
		name: 'Phil Orbanes',
		contribution:
			'Essay describing his development of the first wargame on Vietnam in 1965'
	},
	{
		name: 'Philip Dennis',
		contribution: 'Donation of 19th Century game Rubicon'
	},
	{
		name: 'Old Johannesburg Warehouse',
		contribution: 'Images of the Boer War games Transvaal Spel and Called to Arms'
	}
];

export const referencesIntro: string[] = [
	'In the course of my research on these games, I have drawn on a host of helpful sources. I want in particular to thank Wikipedia, which has produced information on some surprisingly obscure facts such as the 200th Regiment of the French Army, which was recruited for and died in the 1895 invasion of Madagascar. I make regular donations to Wikipedia and would encourage others to do the same.',
	'Boardgamegeek.com, the most comprehensive online gaming community site, is a constant resource for tracking down possible acquisitions, identifying games from partial components and filling in gaps with respect to rules and publication data.',
	'Google Translate was a great help in working out the rules to many antique German games.',
	'Other sources from which I have drawn direct quotes or detailed information include, listed by topic and order of appearance within the website stories:'
];

export const referenceSections: ReferenceSection[] = [
	{
		title: 'The Great Game',
		entries: [
			{
				title: 'Le Jeu des Fortifications and Le Jeu de la Guerre',
				description:
					'The 1663 Le Jeu des Fortifications and the later Le Jeu de la Guerre by Gilles Jodelet, sieur de La Boissière.',
				href: 'https://gallica.bnf.fr/ark:/12148/btv1b105274765',
				citation: 'Bibliothèque nationale de France'
			},
			{
				title: 'Winged Warfare',
				description: 'Quote from WWI Canadian fighter ace Billy Bishop.',
				citation: 'William Avery Bishop, Winged Warfare'
			},
			{
				title: 'Imperial German Uniforms',
				description: 'The evolution of the Waffenrock during the 19th Century.',
				href: 'https://www.kaisersbunker.com/gtp/',
				citation: 'Imperial German Uniforms 1842 to 1918 (kaisersbunker.com)'
			},
			{
				title: 'Cargo submarine Deutschland',
				description:
					'The voyages of the German cargo submarine Deutschland to the neutral United States during WWI.',
				href: 'https://ghostsofbaltimore.org/2013/09/30/german-uboat-deutschland-1916.'
			},
			{
				title: 'Colonel Elmer Ellsworth',
				description:
					'Death of Colonel Elmer Ellsworth, first Union officer killed in the US Civil War.',
				href: 'https://www.smithsonianmag.com/history/the-death-of-colonel-ellsworth-878695/'
			},
			{
				title: 'Grand National Victory',
				description: 'Publication information on Grand National Victory.',
				href: 'https://www.penn.museum/collections/object/12578',
				citation: 'Penn Museum Collections: Board Game, Game Board - 16294A'
			}
		]
	},
	{
		title: 'Age of Empires',
		entries: [
			{
				title: 'Sugoroku variants',
				href: 'https://www.rekihaku.ac.jp/english/outline/publication/rekihaku/163/witness.html'
			},
			{
				title: 'Pre-WWI British invasion fears',
				description: 'Quote from The Battle of Dorking: Reminiscences of a Volunteer.',
				citation: 'Sir George Tomkyns Chesney, 1871'
			}
		]
	},
	{
		title: 'World War I',
		entries: [
			{
				title: 'Battle of Verdun, 1916',
				description: 'Initial anecdote from Wikipedia.',
				href: 'https://www.firstworldwar.com/diaries/verdun_douaumont.htm',
				citation: 'Quotes from survivors of the battle'
			}
		]
	},
	{
		title: 'Peace for a Time',
		entries: [
			{
				title: 'German autobahn network',
				description: 'Development of the German autobahn network.',
				href: 'https://www.fhwa.dot.gov/infrastructure/reichs.cfm'
			}
		]
	},
	{
		title: 'World War II',
		entries: [
			{
				title: 'Rommel in France, 1940',
				description: "Rommel's battle experience in the invasion of France, 1940.",
				citation:
					'B.H. Liddell-Hart (Ed), The Rommel Papers, New York: Da Capo Press, 1953, pp. 12–3'
			},
			{
				title: 'Norman Eastmead',
				description: 'Reminiscences of Norman Eastmead, British Air-Sea Rescue Service.',
				href: 'https://www.bbc.co.uk/history/ww2peopleswar/stories/28/a5717928.shtml',
				citation: "BBC People's War"
			},
			{
				title: 'Life expectancy of bomber crews',
				href: 'https://www.quora.com/What-was-the-life-expectancy-of-a-B-17-crewman-flying-over-Europe-in-WWII'
			},
			{
				title: 'Makin Island raid',
				href: 'https://warisboring.com/the-lessons-of-the-1942-makin-island-raid/'
			}
		]
	},
	{
		title: 'Hot to Cold',
		entries: [
			{
				title: 'Lt. Col. Peter Dewey',
				description: 'Death of Lt. Col. Peter Dewey.',
				href: 'https://www.history.com/this-day-in-history/first-american-soldier-killed-in-vietnam',
				citation: 'History.com'
			},
			{
				title: 'Peter Dewey in Vietnam',
				href: 'http://www.thehistoryreader.com/contemporary-history/peter-dewey-united-states-first-casualty-vietnam/',
				citation: 'The History Reader'
			}
		]
	}
];
