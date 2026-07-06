import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/ready-aim-fire/${name}`;

export const unevenOdds: StoryContent = {
	slug: 'ready-aim-fire',
	title: 'Uneven Odds',
	blocks: [
		{
			type: 'paragraph',
			text: 'In real war, opposing forces are never equal. They always differ in some ways – in weapons, training, morale, numbers, leadership and others. And in most wars and battles, one side is attacking, while the other is on defense. The defender usually has an advantage. Especially when the defender is fortified, even a large attacking force may pay a high price to defeat a much smaller protected enemy force.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('festung-board.jpg'),
				alt: 'Festung Board',
				caption: 'Festung Board'
			},
				{
				src: img('beleger1820-board.jpg'),
				alt: 'Beleger1820 Board',
				caption: 'Beleger1820 Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The earliest attempt to make a popular wargame that tried to add the asymmetry of attacker and defender to the abstract conflict of chess and checkers began as a game about hunting. The medieval game of Fox and Geese used cross-shaped board of connected points. One player took the role of the fox, trying to capture all 17 geese. This idea was expanded in Germany in the early 19th Century to create a wargame.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('festung-cannon.jpg'),
				alt: 'Festung Cannon',
				caption: 'Festung Cannon'
			},
				{
				src: img('belager1820-officers.jpg'),
				alt: 'Belager1820 Officers',
				caption: 'Belager1820 Officers'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'It was named Belagerungsspiel or Festungsspiel (Siege Game or Fortress Game). Two examples from the Napoleonic era are shown here. The earliest were black-and-white woodblock prints that were then hand-colored. The smoke around the artilleryman at right is clearly hand-smudged, showing fingerprint-like shapes across the grain of the paper.'
		},
		{
			type: 'paragraph',
			text: 'It became a standard both as a standalone game and as an inclusion in popular game sets that might also have boards and pieces for chess, checkers, 9-Mens Morris, backgammon, and others.'
		},
		{
			type: 'paragraph',
			text: 'While it is a very basic game of movement and logic, it represents one frequent aspect of warfare: asymmetry. In other words, it is easier to defend than to attack.'
		},
		{
			type: 'paragraph',
			text: 'In Beleirings-Spil, the early Danish version of the game shown here, the nine points of the defending castle area are numbered and outlined with green battlements. The two defending pieces start on any castle dots, facing 24 attacking pieces (starting on all the red dots).'
		},
		{
			type: 'paragraph',
			text: 'Attackers can only move forward directly or diagonally along a line into an open space. The defenders can move in any direction, and eliminate an attacker by jumping over it to an empty space, as in checkers. They cannot be eliminated. The attacker wins by occupying all nine of the fortress spaces. The defender wins by eliminating all but eight of the attackers or by leaving the attacker with no valid move.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('beleiringspil.jpg'),
				alt: 'Beleiringspil',
				caption: 'Beleiringspil'
			}
		},
		{
			type: 'paragraph',
			text: 'The dotted cross of the game became a base for games commemorating numerous conflicts through the 19th and 20th centuries. The designs became steadily more elaborate as chromolithography replaced the hand-colored engraving of the Napoleonic era. Compare the crudely drawn and colored early boards with the fine details and shading and vivid colors of the Crimean War era Siege de Sebastopol (below left).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('sevastopol-full-board.jpg'),
				alt: 'Sevastopol Full Board',
				caption: 'Sevastopol Full Board'
			},
				{
				src: img('assault-overhead.jpg'),
				alt: 'Assault Overhead',
				caption: 'Assault Overhead'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Playing sets were sometimes simple pawns, but early versions usually used soldier pieces made of wood, with pointed hats. This early English Game of Assault (above right) has wooden pieces and a chromolithographed board on a wooden box containing the pieces.'
		},
		{
			type: 'paragraph',
			text: 'Editions of this game illustrated many of the large and small conflicts of the 19th Century. They continued to offer pictures of the wars of the 20th Century.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('belagerungspiel-board.jpg'),
				alt: 'Belagerungspiel Board',
				caption: 'Belagerungspiel Board'
			},
				{
				src: img('belagerung-30s-panzers.jpg'),
				alt: 'Belagerung 30s Panzers',
				caption: 'Belagerung 30s Panzers'
			},
				{
				src: img('uberfall-board.jpg'),
				alt: 'Uberfall Board',
				caption: 'Uberfall Board'
			},
				{
				src: img('belagerung-small-wwi.jpg'),
				alt: 'Belagerung Small Wwi',
				caption: 'Belagerung Small Wwi'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Clockwise from top left: French Jeu d\'Assaut by Mauclair Dacier, French invasion of Madagascar 1896; German Festungs- und Belagerungs-Spiel, JW Spear & Sohne, 1870-71 Franco-Prussian War; German Belagerungsspiel, publisher unknown, WWI; Hallo "Uberfall!", Schmidt Spiele, 1930s German Police Raid; Belagerungsspiel, publisher unknown, 1930s early panzers and assault tactics.'
		},
		{
			type: 'paragraph',
			text: 'Somewhere along the line, a larger version of the game was introduced. It was known simply as Die Grosse Belagerungsspiel or large siege game, and also spread across multiple countries and themes.'
		},
		{
			type: 'paragraph',
			text: 'The 1894 American game Hold the Fort (below left) is an example of this format, which has three defenders against 50 attackers. To make room for the additional pieces, it expands each arm of the attacking cross to nine points across from seven. The size and shape of the objective arm varies, with the back row sometimes having fewer points and sometimes more.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('hold-the-fort-board.jpg'),
				alt: 'Hold The Fort Board',
				caption: 'Hold The Fort Board'
			},
				{
				src: img('belagerung-artillery-board.jpg'),
				alt: 'Belagerung Artillery Board',
				caption: 'Belagerung Artillery Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The German WWI version (above right) has the same number of attacker spaces, but the fortress widens rather than narrows at the rear, providing 17 possible starting spots for the three defenders compared with 13 in Hold the Fort.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('three-guardsmen.jpg'),
				alt: 'Three Guardsmen',
				caption: 'Three Guardsmen'
			},
				{
				src: img('glass-panzer-full-setup.jpg'),
				alt: 'Glass Panzer Full Setup',
				caption: 'Glass Panzer Full Setup'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'As with the basic game, larger versions sometimes extended the theme beyond warfare. The 1930s Three Guardsman (above left) featured board art of Athos, Porthos and Aramis as the Three Musketeers. However, the playing field has the same expanded castle battlements, dots and lines as the Grosse Belagerungsspiel.'
		},
		{
			type: 'paragraph',
			text: 'World War II brought a German version of the larger game (above right) using glass panzers rather than metal as playing pieces. The tanks appear to be modelled on the Panzer I, a light tank armed with only two machineguns.'
		}
	]
};
