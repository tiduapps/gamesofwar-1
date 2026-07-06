import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/the-great-game/${name}`;

export const theGreatGame: StoryContent = {
	slug: 'the-great-game',
	title: 'The Great Game',
	epigraph: {
		quote:
			'What is war, in the end, other than a sad game where the player moves men instead of pawns, where you lose your life instead of money?',
		attribution: 'Las Guerras Modernas, 1915'
	},
	blocks: [
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('napoleonic-cavalry.jpg'),
				alt: 'Hand-colored illustration of a Napoleonic cavalry officer leading troops from a burning village',
				caption: 'Detail from an early 19th-century game board'
			}
		},
		{
			type: 'paragraph',
			text: 'The unsheathed sword points forward. The officer’s horse is already in motion, forelegs in the air, beginning to leap over a fence. But the rider’s gaze is fixed backward, over his right shoulder. He is making sure that his foot soldiers are following him out of the village. In the foreground, a farm building shoots fire and billows smoke. The officer’s orders are clear: the time for looting is over, and battle awaits!'
		},
		{
			type: 'paragraph',
			text: 'This snapshot of Napoleonic warfare does not appear on an imposing framed canvas. It is not an illustration in a venerable book. Rather, it graces the corner of a hand-colored game board from the early 1800s, an early version of Belagerungsspiel.'
		},
		{
			type: 'paragraph',
			text: 'War is mankind’s deadliest activity. Clan against clan, tribe against tribe, nation against nation, people have found an amazing number of ways to band together and kill each other. Whether using clubs, swords, rifles or missiles, kill-or-be-killed warfare represents the ultimate in grim reality.'
		},
		{
			type: 'paragraph',
			text: 'Games, on the other hand, are about fellowship and fun. Playing games is social. People play games primarily as a diversion from the humdrum or harsh realities of daily life. In one way or another, a game board replaces reality with some degree of fantasy.'
		},
		{
			type: 'paragraph',
			text: 'So why then, for more than 200 years, have people bought and played so many games about war?'
		},
		{
			type: 'paragraph',
			text: 'In part, it is surely because war lends itself so well to the winner-take-all objectives of many games. Moreover, a good game is enjoyable regardless of its theme. A game about war is a contest within civilized rules. It is a competition for supremacy in which the worst casualty is a lost bet or wounded pride. It is war without tears.'
		},
		{
			type: 'paragraph',
			text: 'War-themed games have played many roles over the years. Some have helped to train warriors. Some have inspired participation in war. Some have encouraged civilian support for war. Some have commemorated victories and counted the costs of war. All provide lessons about how battles and wars were won and lost.'
		},
		{
			type: 'paragraph',
			text: 'It was an unknown German publisher who first married the art of war to a game of strategy. Belagerungsspiel emerged while Napoleon was ravaging Europe. It was so popular that it became an enduring witness to the evolution of war through the next two centuries.'
		},
		{
			type: 'figure',
			align: 'left',
			figure: {
				src: img('war-american-generals.jpg'),
				alt: 'Cover of War, or American Generals and Their Battles',
				caption: 'War, or American Generals and Their Battles'
			}
		},
		{
			type: 'paragraph',
			text: 'The game’s pictures of men at war during the Napoleonic era were fairly generic. As time passed, publishers started putting out versions to commemorate specific wars, battles and new technologies – from muzzle-loading muskets to panzers. The Game of Assault’s simple crosshatch of dots became a frame that illustrated wars as they happened over the next century and a half.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('light-of-morning-sun.jpg'),
					alt: 'East Asian illustration of land combat from a wartime game',
					caption: 'Light of Morning Sun — land combat'
				},
				{
					src: img('deutsch-englischer-seekrieg.jpg'),
					alt: 'Box cover for Deutsch-englischer Seekrieg',
					caption: 'Deutsch-englischer Seekrieg'
				},
				{
					src: img('nail-hitler.jpg'),
					alt: 'Wartime card game envelope titled Nail Hitler',
					caption: 'Wartime card game: Nail Hitler'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Games that simulate war have been around for millennia. Chess is the obvious example. It has pieces representing foot soldiers, cavalry and fortresses, supported by the forces of religion and secular power. But it is played on an abstract field, a plain grid of 8 by 8 squares. It has no burning homes, no sounds of clashing blades, no smell of smoking guns.'
		},
		{
			type: 'paragraph',
			text: 'Art about war also has a long history. Some such art proclaims glory; some is merely gory. It was only in the 17th century that woodcuts and etchings began to add wartime art to game boards. The earliest European examples tended to be variations of the Game of Goose. This is a gambling game in which players roll dice to race along an inward spiral toward a goal in the centre. They collect bonuses and pay penalties along the way, and the winner collects the pot.'
		},
		{
			type: 'paragraph',
			text: 'In rare cases such as the illustration at the top, games have offered a candid glimpse at the reality of organized slaughter. Most often game boards used art to glorify and build public support for the wars of their times. Sometimes, though, they also have spoken to the human costs of war, and even to the costs of a victory won.'
		},
		{
			type: 'figure',
			align: 'left',
			figure: {
				src: img('belegerungsspiel-board.jpg'),
				alt: 'Hand-colored Belagerungsspiel game board from the early 1800s',
				caption: 'Belagerungsspiel board, c. 1820'
			}
		},
		{
			type: 'paragraph',
			text: 'As war became more complex, so did games about war. At first, fairly simple games of luck or maneuver provided a framework for their art.'
		},
		{
			type: 'paragraph',
			text: 'Today, wargames can offer sophisticated tools for either re-enacting past battles or training for future ones. They can examine the challenges of small-scale tactics, of single set-piece battles, of major campaigns, and of entire wars.'
		},
		{
			type: 'paragraph',
			text: 'Each game of war tells a story. The artwork, the board, the pieces and the rules combine to create a chance to relive a piece of history: the stories of those who fought and the stories of those who played.'
		}
	]
};
