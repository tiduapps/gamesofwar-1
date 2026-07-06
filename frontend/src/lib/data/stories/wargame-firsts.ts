import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/wargame-firsts/${name}`;

export const wargameFirsts: StoryContent = {
	slug: 'wargame-firsts',
	title: 'Wargame Firsts',
	blocks: [
		{
			type: 'paragraph',
			text: 'Since Avalon Hill launched modern wargaming some 60 years ago, the ways of simulating combat in an enjoyable way have multiplied.'
		},
		{
			type: 'paragraph',
			text: 'Most wargames from the 1960s and 1970s dealt with historical conflicts. The emphasis was on orders of battle that reflected both the quantity and quality of units involved. This started with unit counters showing ID, type, strength and movement present in individual battles. The map showed relevant terrain, and combat was covered by rolling a die against an odds-based combat results table. Victory conditions were set to ensure play balance (even when simulating an historical rout).'
		},
		{
			type: 'paragraph',
			text: 'Over the decades since, designers have taken a myriad of approaches to making enjoyable games while enabling players to test their mettle against the historical record. Maps, for instance, may have square grids, hexagonal grids, irregular areas, point-to-point networks or even be portrayed abstractly through cards.'
		},
		{
			type: 'paragraph',
			text: 'Many of these aspects of modern wargaming, however, appeared many years before the launch of Avalon Hill. Here are a few notable examples.'
		},
		{
			type: 'paragraph',
			text: 'Schlacht bei Leipzig,'
		},
		{
			type: 'paragraph',
			text: 'Germany, mid-19th century'
		},
		{
			type: 'paragraph',
			text: 'This boardgame was the earliest to show an historical map, this one of the battle of Leipzig, which ran from Oct. 16-19, 1813. It was the largest of the Napoleonic wars and indeed the largest before World War I. More than 500,000 soldiers were involved.'
		},
		{
			type: 'paragraph',
			text: 'The game also came with Leader cards for each player, and had players follow a path toward Leipzig including an historical clash between their part of the allied forces and their French opposing units at the time.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('leipzig-board.jpg'),
				alt: 'Leipzig Board',
				caption: 'Leipzig Board'
			},
				{
				src: img('leipzig-field-marshal-cards.jpg'),
				alt: 'Leipzig Field Marshal Cards',
				caption: 'Leipzig Field Marshal Cards'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Jungdeutschlands Schlachtenspiel'
		},
		{
			type: 'paragraph',
			text: 'Germany, 1912'
		},
		{
			type: 'paragraph',
			text: 'Almost half a century before the square-grid first edition of Gettysburg, this game actually built the terrain onto a blank square grid.'
		},
		{
			type: 'paragraph',
			text: 'The terrain pieces include painted wooden buildings and trees, turreted forts and blue cardboard water squares. Troops are standard pawns in black and tan (shown as black and white dotted circles at right.'
		},
		{
			type: 'paragraph',
			text: 'The combat rules are simple, like checkers except that troops can move or jump in any direction including diagonal and even over friendly units. Terrain, however, is blocking, and shapes each player\'s tactical choices.'
		},
		{
			type: 'paragraph',
			text: 'And six decades before Panzerblitz and Squad Leader, the game offered multiple scenarios. The rules included a set of training exercises and layouts for eight historical battles from the Seven Years\' War to the Franco-Prussian War.'
		},
		{
			type: 'paragraph',
			text: 'Shown here is the rulebook layout for the battle of Gravelotte-St. Privat on Aug. 18, 1870, along with the same starting position set up on the board.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('jungdeutschlands-battle-of-gravelotte.jpg'),
				alt: 'Jungdeutschlands Battle Of Gravelotte',
				caption: 'Jungdeutschlands Battle Of Gravelotte'
			},
				{
				src: img('jdss-oblique-long.jpg'),
				alt: 'Jdss Oblique Long',
				caption: 'Jdss Oblique Long'
			},
				{
				src: img('img-5879.jpg'),
				alt: 'Img 5879',
				caption: 'Img 5879'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Germany, late 1930s'
		},
		{
			type: 'paragraph',
			text: 'Avalon Hill quickly switched to hex grid map boards in the early 1960s, and this became the wargame standard for decades.'
		},
		{
			type: 'paragraph',
			text: 'However, the earliest board using a hex grid appeared before WWII. The abstract game Bunker involved water obstacles, barbed wire, bunkers and hidden minefields.'
		},
		{
			type: 'paragraph',
			text: 'And while cards play greater or lesser roles in many modern war games, this seems to be the first card-assisted game. Whenever a piece lands on the central red hex, the player draws a card that allows special movement, immediately or on a later turn.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('bunker-board.jpg'),
				alt: 'Bunker Board',
				caption: 'Bunker Board'
			}
		},
		{
			type: 'paragraph',
			text: 'Marschall Vorwärts'
		},
		{
			type: 'paragraph',
			text: 'Austria-Hungary, 1914'
		},
		{
			type: 'paragraph',
			text: 'Zones of control or ZOCs have played a key role in wargames since the 1960s. A unit exercises a Zone of Control over adjacent hexes that may stop enemy movement (tight) or allow movement to continue only under certain conditions (loose). In essence, ZOCs reflect combat friction - the idea that tactically, troops have to move more carefully when closing with the enemy. At an operational level, it reflects the extent to which a unit bring is able to bring fire down on an adjacent space.'
		},
		{
			type: 'paragraph',
			text: 'The earliest game to embody this idea was published just after the start of WWI. The game pieces are metal miniatures each with a value from 1 to 10. The game board requires each player to commit units across five columns and has three ranks leading to a central stream that separates the armies.'
		},
		{
			type: 'paragraph',
			text: 'In turn each player rolls multiple dice, with the result equaling his total movement points available. A unit costs its value in movement points to place on the board or move into the back rank. It costs double its value to move to the second rank, and triple to move to the front rank, which is required to initiate a combat.'
		},
		{
			type: 'paragraph',
			text: 'The combat value of a piece also doubles and triples as it moves forward, with the difference in total values in a column determining the outcome. In essence, the closer a unit gets to the enemy, the more effective its fire, but the more difficult it is to move, nicely capturing the combat friction represented much later by ZOCs.'
		},
		{
			type: 'paragraph',
			text: 'Marine-Schach'
		},
		{
			type: 'paragraph',
			text: 'Germany, 1921'
		},
		{
			type: 'paragraph',
			text: 'A different take on the Zone of Control concept can be seen in this post-WWI naval game. The playing pieces (various sizes of ships and a land battery) have numerical combat strengths. These strengths are projected onto all adjacent spaces. A piece may not be moved into a space that is covered by greater enemy firepower. Adjacent friendly pieces add to the moving piece\'s strength for this purpose.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('marschall-pieces-tight.jpg'),
				alt: 'Marschall Pieces Tight',
				caption: 'Marschall Pieces Tight'
			},
				{
				src: img('marschall-board.jpg'),
				alt: 'Marschall Board',
				caption: 'Marschall Board'
			},
				{
				src: img('marine-s-box-cover.jpg'),
				alt: 'Marine S Box Cover',
				caption: 'Marine S Box Cover'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Tri-Tactics'
		},
		{
			type: 'paragraph',
			text: 'UK, c. 1925'
		},
		{
			type: 'paragraph',
			text: 'Modern war games usually have a random element to resolve combat that is affected by the relative combat value of the opposing pieces. This is usually seen in the form of a Combat Results Table (CRT), where the relative strengths are grouped into columns with each row reflecting a particular die roll. These values may be affected by type of attacking and defending unit, by terrain and by supporting units such as artillery and air power.'
		},
		{
			type: 'paragraph',
			text: 'The earliest combat results table did not depend on odds. Tri-Tactics was the ultimate evolution of L\'Attaque, involving land, air and sea units fighting on a board that included lakes, rivers and an ocean as well as land terrain. While in L\'Attaque, the strongest unit prevailed except in a few certain circumstances, Tri-Tactics had to integrate combat outcomes both by type of unit and location of battle.'
		},
		{
			type: 'paragraph',
			text: 'The result was the highly complex table seen here. To mention a few examples:'
		},
		{
			type: 'paragraph',
			text: 'A Seaplane kills any land-based air over the water, but the reverse is true over land.'
		},
		{
			type: 'paragraph',
			text: 'A Seaplane kills weaker land units when attacking over the coastline, but the reverse is true over land.'
		},
		{
			type: 'paragraph',
			text: 'An Anti-Aircraft Gun on a coast kills a Seaplane, but can be killed by a Destroyer.'
		},
		{
			type: 'paragraph',
			text: 'The powerful Heavy Artillery can kill ships, but only across a coastline or if the ships are on a river.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('tri-tactics-box-top.jpg'),
				alt: 'Tri Tactics Box Top',
				caption: 'Tri Tactics Box Top'
			},
				{
				src: img('tri-tactics-table.jpg'),
				alt: 'Tri Tactics Table',
				caption: 'Tri Tactics Table'
			},
				{
				src: img('tri-tactics-board.jpg'),
				alt: 'Tri Tactics Board',
				caption: 'Tri Tactics Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The odds-based CRT did not appear until WWII. In this example, the strength of a force is not the power of the individual aircraft (all were equal), but rather how many units were in a formation (string of adjacent squares).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('air-attack-crt.jpg'),
				alt: 'Air Attack Crt',
				caption: 'Air Attack Crt'
			}
		},
		{
			type: 'paragraph',
			text: 'France, 1909'
		},
		{
			type: 'paragraph',
			text: 'While many modern war games start with known forces and locations, some (notably those played with blocks) allow players to choose their initial deployments in secret. This mechanism first appeared in the ground-breaking L\'Attaque, the ancestor of today\'s Stratego.'
		},
		{
			type: 'paragraph',
			text: 'Players have identical starting forces, with most units having a value of between 1 and 10, and some units having special powers. For example, a Mine cannot move, but destroys any unit that attacks it, while the Spy is the only piece that can kill the general, but loses to all other ranked pieces.'
		},
		{
			type: 'paragraph',
			text: 'The pieces remain hidden until they move adjacent to an enemy piece and declare an attack, at which point the weaker unit is removed, and the winner occupies the defender\'s space and becomes hidden again.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('attaque-1909-complete.jpg'),
				alt: 'Attaque 1909 Complete',
				caption: 'Attaque 1909 Complete'
			}
		},
		{
			type: 'paragraph',
			text: 'Batailles sur Mer'
		},
		{
			type: 'paragraph',
			text: 'Belgium, c. 1945'
		},
		{
			type: 'paragraph',
			text: 'In 1965, the Avalon Hill game Midway incorporated a way of requiring two players commanding naval forces to search for each other before initiating combat. Each player knew the location of his own fleet, but had to discover the location of enemy ships by sending out patrols.'
		},
		{
			type: 'paragraph',
			text: 'This ingenious way of simulating the uncertainty of naval combat was pioneered in a game developed in Belgium during WWII and published shortly after liberation.'
		},
		{
			type: 'paragraph',
			text: 'It simulates combat in the Indian Ocean, based on the early-war ventures of the Japanese fleet into those waters.'
		},
		{
			type: 'paragraph',
			text: 'There are two boards, and players face away from each other. They move their own ships and track reconnaissance and fire on their own boards.'
		},
		{
			type: 'paragraph',
			text: 'Each player starts by announcing three spaces from which his fleet will move. After that, each player in turn either moves a piece or fires. The flagship and two cruisers move one in any direction; submarines one orthogonally, the aircraft carrier one diagonally, while torpedo boats can both move two spaces and fire a single shot.'
		},
		{
			type: 'paragraph',
			text: 'Other pieces get three shots when they fire (flaghip and cruisers one per turret). Cruisers and torpedo boats can fire on any adjacent space; submarines a line of three spaces orthogonally; and carriers a line of three spaces diagonally.'
		},
		{
			type: 'paragraph',
			text: 'A single hit sinks any ship except the flagship and cruisers, which lose a turret per hit, sinking after 3 and 2 shots respectively. A player may fire more than one shot into a single space.'
		},
		{
			type: 'paragraph',
			text: 'Because of the range limitations, firing gives the defender a better chance of finding his opponent in turn. The rules therefore prohibit a player from moving more than 7 times without taking a shot.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('batailles-summary-rules-inside-box.jpg'),
				alt: 'Batailles Summary Rules Inside Box',
				caption: 'Batailles Summary Rules Inside Box'
			},
				{
				src: img('batailles-box-contents.jpg'),
				alt: 'Batailles Box Contents',
				caption: 'Batailles Box Contents'
			},
				{
				src: img('batailles-sur-mer-rules-1.jpg'),
				alt: 'Batailles Sur Mer Rules 1',
				caption: 'Batailles Sur Mer Rules 1'
			},
				{
				src: img('batailles-sur-mer-rules-2.jpg'),
				alt: 'Batailles Sur Mer Rules 2',
				caption: 'Batailles Sur Mer Rules 2'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Germany, 1940'
		},
		{
			type: 'paragraph',
			text: 'Many modern wargames forego the standard hex grid for a map that is divided into areas, with victory determined by control of those areas. This wartime game from Germany is technically about trade rather than combat. Pieces move along tracks according to die rolls, and the first into or through a major (red) city places a token on it.'
		},
		{
			type: 'paragraph',
			text: 'That then blocks movement by any other player, and can only be removed by offering an exchange for one of the moving player\'s tokens elsewhere.'
		},
		{
			type: 'paragraph',
			text: 'Furthermore, major cities are grouped into 16 areas, with three major cities in each. The game ends when all cities have been taken, with victory points heavily dependent on control of adjacent areas. For instance, a single city is worth one point. Owning all three cities in an area is worth 4 points. Controlling two adjacent areas is worth 10; three adjacent 18 and four or more, 30.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('export-box-top.jpg'),
				alt: 'Export Box Top',
				caption: 'Export Box Top'
			},
				{
				src: img('export-board.jpg'),
				alt: 'Export Board',
				caption: 'Export Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'War Tactics, or Can England Be Invaded?'
		},
		{
			type: 'paragraph',
			text: 'Some modern games offer players the chance to choose their forces for a game or scenario. This is particularly true for games about hypothetical conflicts, where designers are not bound by historical orders of battle.'
		},
		{
			type: 'paragraph',
			text: 'This pre-WWI game about the potential for a German invasion of Britain gives players much flexibility. Players may agree to start with an equal number of pieces from 12 to 30. Within the agreed total, they can pick any mix of pieces within the counter mix. The maximum available includes six Dreadnoughts, six Cruisers, four Torpedo Boats, two Submarines, two Flying Squadrons and 10 Land Forces.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('war-tactics-box-and-contents.jpg'),
				alt: 'War Tactics Box And Contents',
				caption: 'War Tactics Box And Contents'
			},
				{
				src: img('war-tactics-board.jpg'),
				alt: 'War Tactics Board',
				caption: 'War Tactics Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'H.M. Squadron, or Naval Maneouvres'
		},
		{
			type: 'paragraph',
			text: 'UK, c. 1880'
		},
		{
			type: 'paragraph',
			text: 'Many modern games have gone beyond the standard six-sided die, and include dice unique to the game. D-Day Dice is one recent example.'
		},
		{
			type: 'paragraph',
			text: 'The first use of specialized dice was in this ironclad-era British game. It actually has two unique cubes, both used for movement. The first has numbers from 1 to 5, with the sixth face showing a G for gale, which means the player gets no move that turn.'
		},
		{
			type: 'paragraph',
			text: 'The second cube has six different colors on its faces. These determine the color of spaces on the board to which the player\'s ironclad moves.'
		},
		{
			type: 'paragraph',
			text: 'Combate Navale'
		},
		{
			type: 'paragraph',
			text: 'Spain, 1915'
		},
		{
			type: 'paragraph',
			text: 'This game gets an honorable mention for its unique die. It is made of cardboard, with each face bearing the flag of one of the naval powers of WWI. The result determines which of the ships on the board is hit on each throw of the two wooden normal dice.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('hm-squadron-pieces.jpg'),
				alt: 'Hm Squadron Pieces',
				caption: 'Hm Squadron Pieces'
			},
				{
				src: img('combate-navale-dice.jpg'),
				alt: 'Combate Navale Dice',
				caption: 'Combate Navale Dice'
			}
			]
		}
	]
};
