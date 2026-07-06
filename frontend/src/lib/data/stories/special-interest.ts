export type SpecialInterestImage = {
	src: string;
	alt: string;
};

export type SpecialInterestArticle = {
	title: string;
	slug: string;
	description: string;
	images: SpecialInterestImage[];
};

export type SpecialInterestHub = {
	slug: string;
	title: string;
	intro: string[];
	articles: SpecialInterestArticle[];
};

const img = (name: string) => `/images/stories/special-interest/${name}`;

export const specialInterest: SpecialInterestHub = {
	slug: 'special-interests',
	title: 'Special Interests',
	intro: [
		'This section of the website features in-depth coverage of particular topics within the world of wartime games and wargames. Seven are listed below, and others may be added over time. Click on the titles to read the full articles.'
	],
	articles: [
		{
			title: 'War and Pieces',
			slug: 'war-and-pieces',
			description:
				'This article looks at the evolution of the playing pieces of wargames and war-themed games. These range from dice more than 2,000 years old to the latest innovations in wargaming counters. Over the centuries, game pieces have been made from bone, glass, stone, wood, lead, tin and other metals, cardboard, plastic and even ceramics and cellulose composites.',
			images: [
				{
					src: img('les-convois-jeeps.jpg'),
					alt: 'Playing pieces from Les Convois showing military jeeps'
				}
			]
		},
		{
			title: 'Personal Touches',
			slug: 'personal-touches',
			description:
				'Some games offer a personal connection to the history of war, whether through their designers and artists or their individual owners. This article offers some glimpses into the personal pasts of some of my games, from personal experiences in the trenches of WWI to counting the casualties during WWII.',
			images: [
				{
					src: img('fahren-backs-royal-oak.jpg'),
					alt: 'Card backs from Fahren showing Royal Oak, Courageous, Hood, Ark Royal, Repulse, and Malaya'
				}
			]
		},
		{
			title: 'Uneven Odds',
			slug: 'ready-aim-fire',
			description:
				'This article takes a look at the evolution of the Belagerungsspiel, which started as a variant on the renaissance Fox & Geese and continues to be sold today under the name Asalto. Its simple cross-shaped board and asymmetric play (2 defenders against 24 attackers) has been used as a canvas for depicting contemporary warfare for more than two centuries.',
			images: [
				{
					src: img('trenches-chugging-beer.jpg'),
					alt: 'Illustration of soldiers in trenches from a Belagerungsspiel variant'
				},
				{
					src: img('assault-oblique.jpg'),
					alt: 'Oblique view of an Asalto-style assault game board'
				}
			]
		},
		{
			title: 'Fog of War',
			slug: 'fog-of-war',
			description:
				'This article looks at the evolution of the hidden set-up wargame, starting with Hermance Edan’s self-published L’Attaque in France in 1909. It moves from there through H.P. Gibson’s British variants such as Dover Patrol, Aviation and Tri-Tactics to the post-war introduction of the still-familiar Stratego. Finally it looks at how wooden blocks with blank backs have remained playing pieces in complex modern board games, even as the information on their fronts becomes ever more elaborate.',
			images: [
				{
					src: img('attaque-1909-complete.jpg'),
					alt: 'Complete L’Attaque game from 1909'
				},
				{
					src: img('stratego-jumbo-box-cover.jpg'),
					alt: 'Jumbo box cover for Stratego'
				}
			]
		},
		{
			title: 'Shooting Blind',
			slug: 'shooting-blind',
			description:
				'The game Battleships has been a family staple for decades, with its 10 x 10 grids on which each player sets up secretly and then calls out shots, aiming to destroy the opposing fleet. Here you’ll see many of the early versions of the game, in paper, cardboard, chalkboard, wood and metal.',
			images: [
				{
					src: img('blast-em-cover.jpg'),
					alt: 'Cover of the Blast Em battleship game'
				},
				{
					src: img('extended-island-air-hits.jpg'),
					alt: 'Extended island and air hit markers from an early battleship game'
				}
			]
		},
		{
			title: 'Hand to Hand Combat',
			slug: 'assault-and-battery',
			description:
				'This article looks at the many ways in which manual dexterity has been used in games of war. These range from target shooting and bombing games to pinball or bagatelle games to tilting and tapping boxes. You’ll see games with unusual toy guns and launchers, ingenious bombsights and some truly challenging placement puzzles.',
			images: [
				{
					src: img('wings-repeating-rifle.jpg'),
					alt: 'Repeating rifle toy from a Wings target-shooting game'
				},
				{
					src: img('eagle-bombsight-oblique.jpg'),
					alt: 'Oblique view of the Eagle Bombsight dexterity game'
				}
			]
		},
		{
			title: 'Wargame Firsts',
			slug: 'wargame-firsts',
			description:
				'Over the years, wargame designers have developed a host of rules that aim to make their games not only fun but also accurate simulations of the wars and battles they portray. However, many modern concepts, from units with numerical strengths and hexagonal map grids to double-blind movement and combat results tables were brought to the game board long before John Roberts launched the modern wargame era.',
			images: [
				{
					src: img('batailles-sur-mer-rules.jpg'),
					alt: 'Rules page from Batailles sur Mer'
				},
				{
					src: img('bunker-board.jpg'),
					alt: 'Game board from Bunker'
				}
			]
		},
		{
			title: 'Dan Cermak Collection',
			slug: 'dan-cermak-collection',
			description:
				'Dan Cermak is a retired videogame developer from Illinois. His extensive collection includes dozens of wartime games that I don’t have, including rare titles from Denmark, Italy and Mexico.',
			images: [
				{
					src: img('u-one-box.webp'),
					alt: 'Box for the U-one submarine game from the Dan Cermak collection'
				},
				{
					src: img('grandi-manovre-cover.webp'),
					alt: 'Cover of Le Grandi Manovre from the Dan Cermak collection'
				}
			]
		}
	]
};
