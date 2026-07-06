import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/the-napoleonic-era/${name}`;

export const theNapoleonicEra: StoryContent = {
	slug: 'the-napoleonic-era',
	title: 'The Napoleonic Era',
	blocks: [
		{
			type: 'paragraph',
			text: 'The 19th Century was not unusual in the number of wars and battles that took place. What made it memorable was the way in which printing technologies made possible more vivid images of contemporary warfare. This was accompanied by the growing interest in games as a social pastime, especially as the Industrial Revolution broadened the middle class. The result was a steady increase in games that also reflected the conflicts of their times.'
		},
		{
			type: 'paragraph',
			text: 'Early versions of the German Belagerungsspiel published while the Napoleonic wars still raged, showed contemporary images of warfare, but did not reference specific battles. As shown below, the printed artwork was in black and white, with colors then added by hand. Many early versions such as The Game of Siege came with wooden pieces shaped and painted in the form of Napoleonic soldiers.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('festung-board.jpg'),
					alt: 'Early Festungsspiel board with hand-colored Napoleonic imagery',
					caption: 'Festungsspiel board'
				},
				{
					src: img('beleger1820-board.jpg'),
					alt: 'Belagerungsspiel board from circa 1820',
					caption: 'Belagerungsspiel, circa 1820'
				},
				{
					src: img('assault-oblique.jpg'),
					alt: 'Oblique view of an early assault-themed game board',
					caption: 'The Game of Assault'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Most early war-themed games did not involve strategy. The main focus of game players was to roll dice and gamble. The image below is a detail from an 1840 German game also called Belagerungsspiel. One player attacks the fortress; the other defends it. Each aspect of the fortress is assigned a combination of two dice, some of them repeated. Each attacking gun also is assigned a die-roll combination.'
		},
		{
			type: 'paragraph',
			text: 'The players take turns rolling, marking off a defensive zone or an attacking gun as appropriate. The attacker must score more hits, but initially scores on every roll. The defender only has to knock out the six attacking guns, but misses far more often.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('belag-full-sheet-cropped.jpg'),
				alt: 'Full sheet for the 1840 Belagerungsspiel showing fortress and attacking guns',
				caption: 'Belagerungsspiel, 1840'
			}
		},
		{
			type: 'paragraph',
			text: 'The first games based on actual Napoleonic battles did not emerge until the second half of the century. The earliest appears to be a German game, Die Schlacht bei Leipzig.'
		},
		{
			type: 'paragraph',
			text: 'This is another die-rolling game rather than a game of strategy. Up to seven players race to reach the city of Leipzig. The map, like the battle itself, is unusually complex. Each player follows a different track toward the city. Each player commands one of the attacking armies, with a player card having an illustration of the general in charge and a short biography.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('leipzig-box-cover.jpg'),
					alt: 'Box cover for Die Schlacht bei Leipzig',
					caption: 'Die Schlacht bei Leipzig'
				},
				{
					src: img('leipzig-board.jpg'),
					alt: 'Game board for Die Schlacht bei Leipzig showing multiple tracks toward the city',
					caption: 'Leipzig game board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Each player advances along a different track toward the city of Leipzig, and somewhere along the way faces an obstacle. Each one represents an encounter with French forces in the course of the historical battle (the red diamonds topped with red dots and the name of a French commander). Getting past this space requires a high die roll.'
		},
		{
			type: 'paragraph',
			text: 'While not primarily educational, Die Schlacht bei Leipzig was the first game intended to help players understand and take lessons from the outcome of an historical battle.'
		},
		{
			type: 'paragraph',
			text: 'Moves may have been based on chance rather than strategy, but the game as a whole helped players to understand the strategies employed by the generals in charge at the time, and perhaps to reflect on how they might handle similar choices.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('leipzig-cavalry-charge-detail.jpg'),
					alt: 'Detail from Leipzig box art showing a cavalry charge',
					caption: 'Cavalry charge on the box cover'
				},
				{
					src: img('leipzig-water-to-wounded.jpg'),
					alt: 'Detail from Leipzig box art showing a soldier offering water to a wounded comrade',
					caption: 'Offering water to the wounded'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The box art combines three main elements. At the center, allied commanders on horseback confer as the battle rages behind them. To their left, cavalry troops are captured in the midst of a full-fledged charge, one that combines saber-wielding riders with lancers. But in the foreground at bottom right, the game also pays homage to the harsh costs of even a battle won. A dismounted soldier leans over to offer a flask of water to a wounded soldier lying on the ground with a dead comrade behind him.'
		},
		{
			type: 'paragraph',
			text: 'The earliest strategy game based on a Napoleonic battle is Waterloo. It was not published until 1895 by Parker Brothers. It is unusual in having its board printed on the bottom of the wood-sided box. It also represented a huge step forward in popular wargaming.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('waterloo-box-cover.jpg'),
					alt: 'Box cover for Parker Brothers Waterloo game',
					caption: 'Waterloo (1895)'
				},
				{
					src: img('waterloo-board.jpg'),
					alt: 'Waterloo game board showing Belgium and northern France with dotted movement lines',
					caption: 'Waterloo game board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The map on the board includes parts of Belgium and Northern France. The French start from Paris and Versailles, the English troops from Brussels and the Prussians from Namur. These locations are linked by a web of dotted lines.'
		},
		{
			type: 'paragraph',
			text: 'Two to four can play. In the two-player game, Wellington starts in Brussels and Napoleon in Paris. With four, another player starts as Blucher from Namur and the other as Ney from Versailles.'
		},
		{
			type: 'paragraph',
			text: 'Each player starts with ten pieces. Two of these are larger and represent cavalry. The eight smaller pieces are infantry.'
		},
		{
			type: 'paragraph',
			text: 'In turn, each player rolls three dice. Each die can be used to move one infantry piece that many dots along a line. Each infantry piece can only move once in a turn. A player may use the sum of two or all three dice to move a single cavalry piece.'
		},
		{
			type: 'paragraph',
			text: 'Each piece must move the exact number of spaces on the die, and may not double back. A player captures an enemy piece by landing on it by exact count.'
		},
		{
			type: 'paragraph',
			text: 'A cavalry piece may capture using the number on one die and then move again using a second die. However, a piece standing on one of the hills (dots surrounded by green shading) cannot be captured. Neither can two pieces in adjacent dots.'
		},
		{
			type: 'paragraph',
			text: 'A player wins by getting two pieces into any of the three starred spaces in the opponent’s starting city. Defending pieces on these starred spaces cannot be protected by adjacent friendly pieces, so are always vulnerable to capture. While the hills block crucial intersections, they can be bypassed. The game is therefore very much about maneuvering.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('waterloo-brussels.jpg'),
					alt: 'Detail from the Waterloo board showing Brussels and surrounding area',
					caption: 'Brussels on the Waterloo board'
				},
				{
					src: img('waterloo-napoleon.jpg'),
					alt: 'Detail from the Waterloo board showing Paris and Napoleon’s starting position',
					caption: 'Napoleon’s starting position'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Oddly, the map shows both Ligny and Quatre Bras, the locations of the first battles against the Prussians and British respectively, but has no named location for the field of Waterloo. The rules explain that this is because “the little village of Waterloo which gave its name to the famous battle was located quite a distance from the actual battlefield”.'
		},
		{
			type: 'paragraph',
			text: 'In any case, Waterloo marked the end of the long Napoleonic Wars, but the Great Powers of Europe would take arms many more times in the decades ahead.'
		}
	]
};
