import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/communist-plotting/${name}`;

export const communistPlotting: StoryContent = {
	slug: 'communist-plotting',
	title: 'Communist Plotting',
	blocks: [
		{
			type: 'paragraph',
			text: 'The Iron Curtain did not stop Communists from playing games. Some, like Voennaya Taina shown earlier, were aimed at young kids and had a heavily patriotic tone. Most war-themed games, however, involved maneuver and capture, with rules clearly rooted in the Russian passion for chess.'
		},
		{
			type: 'paragraph',
			text: 'V Ataku! (В Атаку!) for instance, was a land warfare game of maneuver. The rules say it was aimed at high-school students. It has a mapboard with square spaces in a grid 15 across by 20 deep. There are three key features: a red-bordered six-space headquarters that must be captured, a river across the middle that slows movement, and four yellow squares on each side that allow players to place reserves that cannot be attacked.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('b-box-cover.jpg'),
				alt: 'B Box Cover',
				caption: 'B Box Cover'
			}
		},
		{
			type: 'paragraph',
			text: 'Each side starts with 21 pieces: 8 infantry, 4 tanks, 4 artillery, 3 missiles and 2 airplanes. As in chess, each piece moves differently and destroys an enemy piece by moving onto its square.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('b-mapboard.jpg'),
				alt: 'B Mapboard',
				caption: 'B Mapboard'
			}
		},
		{
			type: 'paragraph',
			text: 'All moves are orthogonal (forward, backward or sideways), and pieces may attack in any of the four directions. Infantry may move one or two squares. Tanks may move 1 - 3 spaces. Missiles may move up to 5 spaces but when attacking are destroyed along with their target.'
		},
		{
			type: 'paragraph',
			text: 'Artillery moves one space but may attack a target up to 3 spaces away (without moving to that square). Airplanes may attack up to 10 squares away. Finally, each player may record one space that is mined and will destroy an enemy piece that moves onto it.'
		},
		{
			type: 'paragraph',
			text: 'The first player makes a single move; his opponent then makes two; the first player makes two; and then the opponent makes three. Thereafter each player\'s turn includes three moves, enabling a variety of assaults, probes and counter-attacks.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('b-screen-side-1.jpg'),
				alt: 'B Screen Side 1',
				caption: 'B Screen Side 1'
			},
				{
				src: img('b-screen-side-2.jpg'),
				alt: 'B Screen Side 2',
				caption: 'B Screen Side 2'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Like other Soviet-era games, the play may be abstract, but the art reflected the post-WWII development of military technologies.'
		},
		{
			type: 'paragraph',
			text: 'В Атаку!, for instance, has an illustrated screen that allows players to make their initial placements in secret.'
		},
		{
			type: 'paragraph',
			text: 'One side of the screen (top left) features a T-55 tank advancing with infantry soldiers. The T-55 was developed in the mid-1950s and was the first Soviet production model that provided NBC (nuclear, biological and chemical) protection for its crews.'
		},
		{
			type: 'paragraph',
			text: 'The other side of the screen features a procession of 2P24 tracked missile launchers, each carrying a pair of 2K11 (NATO code SA-4 Ganef) anti-aircraft missiles. Development of this system started in 1958. The first example was shown off during a military parade in Moscow in 1965 and it entered service in 1967.'
		},
		{
			type: 'paragraph',
			text: 'The T-55 also shows up on the cover of another Soviet-era game, Vstrechnei Boi (Встречиы Бой or Meeting Engagement). This is another chess-type game, but it is played with only three types of units: infantry, armor and missiles.'
		},
		{
			type: 'paragraph',
			text: 'The plastic pieces are period tanks, missile launchers and infantry carrying AK-47s.'
		},
		{
			type: 'paragraph',
			text: 'Players can only move one piece at a time, and by a single space orthogonally. They capture an enemy by moving next to it. Infantry and tanks can kill their counterparts from any direction, but infantry can only kill tanks from the side or rear while tanks only shoot forward. The two missile launchers can kill an enemy anywhere on the board - but can only fire once in the game, and then turn into tanks.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('meeting-box-top.jpg'),
				alt: 'Meeting Box Top',
				caption: 'Meeting Box Top'
			}
		},
		{
			type: 'paragraph',
			text: 'The mapboard has extensive terrain features overlaying the 8 x 12 grid, including woods, marsh, towns, roads, a river and lots of countour lines, but these have no effect on play.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('meeting-pieces.jpg'),
				alt: 'Meeting Pieces',
				caption: 'Meeting Pieces'
			},
				{
				src: img('meeting-mapboard.jpg'),
				alt: 'Meeting Mapboard',
				caption: 'Meeting Mapboard'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Another Soviet wargame, Vnimanie Ataka! (Внимание - Aтака! or Attention – Attack!), focuses on four weapon systems: tanks, artillery, self-propelled anti-tank guided missiles and man-portable rocket-propelled grenades.'
		},
		{
			type: 'paragraph',
			text: 'The game comes packaged in a cardboard Soviet officer’s briefcase. Published in 1984, it has stitching around the edges and an image of a compass, pens, protractor and ruler on an inner flaps. There is a fold-out “smoke screen” to use as a divider between the players when setting up. The playing pieces are cardboard, with tanks on a blue background and other units on yellow.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('bnimanie-ataka-cover.jpg'),
				alt: 'Bnimanie Ataka Cover',
				caption: 'Bnimanie Ataka Cover'
			},
				{
				src: img('bnimanie-ataka-contents.jpg'),
				alt: 'Bnimanie Ataka Contents',
				caption: 'Bnimanie Ataka Contents'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Each player has an “operational map” for his side of the field to use for planning. The playing board itself comes in four rectangular pieces that form a field eight spaces wide and eight deep. The map shows roads, trees and a river running across the middle.'
		},
		{
			type: 'paragraph',
			text: 'On the backs of the map pieces are detailed diagrams of the weapon systems used in the game.'
		},
		{
			type: 'paragraph',
			text: 'The tank, described as medium, is a T-55. The self-propelled missile vehicles is a BRDM-2 equipped with a Sagger anti-tank guided missile system.'
		},
		{
			type: 'paragraph',
			text: 'The artillery piece is a D-30 122 mm towed howitzer. And the portable anti-tank weapon is an RPG-7 rocket-propelled grenade launcher.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('bnimanie-ataka-weapons-cards.jpg'),
				alt: 'Bnimanie Ataka Weapons Cards',
				caption: 'Bnimanie Ataka Weapons Cards'
			}
		},
		{
			type: 'paragraph',
			text: 'All of these were made in quantity during the Cold War years, both used by Soviet forces and exported widely around the world. The D-30 in particular was used extensively in the Middle East, including during the Iran-Iraq war.'
		},
		{
			type: 'paragraph',
			text: 'Another view of Soviet military technology in action can be seen on the box of Vozdushnie Boi (Воздушиые Бой or Aerial Combat). The cover features a top-down view of three Sukhoi Su-7B (NATO Fitter) fighter-bombers.'
		},
		{
			type: 'paragraph',
			text: 'The Su-7 prototype, with its steeply swept wings, set a Soviet speed record of 2,170 km/hr in 1956. It was initially developed as a low-level fighter and entered service in 1959. However, it proved better suited to a ground support role. The Su-7B entered service in 1961 and became the standard Soviet ground-attack aircraft for the next two decades.'
		},
		{
			type: 'paragraph',
			text: 'About 600 were exported to countries including Afghanistan, Algeria, Czechoslovakia, Egypt, India, Iraq, North Korea, Poland and Syria.'
		},
		{
			type: 'paragraph',
			text: 'It saw considerable use in the Middle East. Egypt took delivery of its first 14 just in time for them to be destroyed in the 1967 Six-Day War. It then bought another 185, many of which were lost in the 1973 Yom Kippur War. Syria bought 25 just after the 1967 conflict and lost most of them in 1973.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('vozdushnei-boi-better-box.jpg'),
				alt: 'Vozdushnei Boi Better Box',
				caption: 'Vozdushnei Boi Better Box'
			},
				{
				src: img('vozdushnei-boi-board.jpg'),
				alt: 'Vozdushnei Boi Board',
				caption: 'Vozdushnei Boi Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Both the game box and its board feature much greener terrain, but seen from an altitude low enough to show individual houses. While the board is laid out on a grid, the movement locations are actually at the corners of each square. Each player has a squadron of six fighter bombers and another 10 escorting fighters. The objective is to shoot down the enemy’s planes and bomb the opposing airfields. Attackers also have to avoid air defenses that include both anti-aircraft guns and missile sites.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('vozdushnei-manevri-box.jpg'),
				alt: 'Vozdushnei Manevri Box',
				caption: 'Vozdushnei Manevri Box'
			}
		},
		{
			type: 'paragraph',
			text: 'Vozdushnie Manievrei (Воздушные маневры or Aerial Maneuvers) is an air combat game more focused on dogfighting. Each player starts with six fighters on the yellow circles, and moves one of them each turn by the roll of a die. Rolling a six grants an additional roll.'
		},
		{
			type: 'paragraph',
			text: 'Planes must follow the black lines in the direction of the plane\'s nose. They are not allowed to move backward or to turn sharply at any of the intersections. Landing on an enemy plane shoots it down.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('vozdushnei-manevri-board.jpg'),
				alt: 'Vozdushnei Manevri Board',
				caption: 'Vozdushnei Manevri Board'
			}
		},
		{
			type: 'paragraph',
			text: 'Each player secretly selects five locations as anti-aircraft positions. An enemy landing on one is shot down. If a plane reaches the red dot next to an enemy airfield, all planes still on the field are destroyed. A player wins by destroying all enemy planes.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('morskie-box-cover.jpg'),
				alt: 'Morskie Box Cover',
				caption: 'Morskie Box Cover'
			},
				{
				src: img('morskie-board.jpg'),
				alt: 'Morskie Board',
				caption: 'Morskie Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Morskie Manevrei (Naval Maneuvers) is a naval equivalent, but with more generic artwork. Again, the game featured a board on which cruisers, missile boats and submarines maneuver. The board is 10 squares wide at each end, but narrows to a four-space gap between land areas in the middle.'
		},
		{
			type: 'paragraph',
			text: 'As the Cold War dragged on, game publishing in the West was going through a revolution of its own. With television cameras bringing the reality of bloodshed into living rooms, games about war became much more realistic – but for the most part moved back in time.'
		}
	]
};
