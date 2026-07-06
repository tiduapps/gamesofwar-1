import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/mad-about-war/${name}`;

export const madAboutWar: StoryContent = {
	slug: 'mad-about-war',
	title: 'MAD about War',
	blocks: [
		{
			type: 'paragraph',
			text: 'The first board game to introduce the atom bomb as a playing piece appears to be the appropriately named Ato-Blitz. This was self-published in Hawaii by its designer, Mack Seso Akamine. The rules actually provided for two variants: one for a land battle and the other for a naval confrontation. However, while the rules printed on the box show the symbols and values for the naval units, the playing pieces it contains represent only the land units.'
		},
		{
			type: 'paragraph',
			text: 'In play, Ato-Blitz is a variant on the old L’Attaque. It has a very plain board, with yellow set-up areas and a green “No Man’s Land/Sea” in between. Winning the game requires capturing the enemy fort, which occupies a fixed position in the middle of the back rank.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('ato-blitz-atom-bomb-piece.jpg'),
				alt: 'Ato Blitz Atom Bomb Piece',
				caption: 'Ato Blitz Atom Bomb Piece'
			},
				{
				src: img('ato-blitz-label.jpg'),
				alt: 'Ato Blitz Label',
				caption: 'Ato Blitz Label'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Each piece is assigned a name and corresponding value. The playing pieces are wooden triangles where the angled side showing the unit type and value faces the owning player, as in the German wartime Feldherrnspiel. Players set up secretly and move pieces one at a time. When one piece attacks another, the values are revealed and the lower-value piece is removed from the game.'
		},
		{
			type: 'paragraph',
			text: 'As in Gibson’s Tri-Tactics, this game also has different troop categories that interact in specific ways. There are infantry pieces valued from 1 to 14; engineers; tanks; airplanes; anti-aircraft and anti-tank guns, mines, and of course atom bombs (1 per player). Between two infantry pieces, highest value wins. Bombs don’t move, but kill any unit that attacks them except engineers. Tanks and airplanes kill any infantry unit including engineers, but lose to guns. Planes also kill tanks. The A-bomb acts like a moveable mine that destroys every piece in an adjacent square when it explodes – enemy and friendly alike.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('atomic-submarine.jpg'),
				alt: 'Atomic Submarine',
				caption: 'Atomic Submarine'
			}
		},
		{
			type: 'paragraph',
			text: 'Nuclear power also makes an appearance in Atomic Submarine Up Scope! from Bar-Zim. While the propulsion may have been upgraded to the atomic age, the game was an old-fashioned shooter. It used a spring-loaded periscope mechanism to shoot torpedoes at cardboard targets propped up on wooden bases.'
		},
		{
			type: 'paragraph',
			text: 'Although tactical nuclear weapons were developed along with doctrines for using them, they never actually saw use in combat. Rather, the focus of the Cold War was on the potential for strategic nuclear conflict. The resulting nuclear military doctrine of Mutual Assured Destruction (MAD) triggered both hope and fear.'
		},
		{
			type: 'paragraph',
			text: 'In Western societies, many people trembled at the thought of Communist world domination. At the same time, they hoped that the obvious insanity of nuclear war would lead to a kinder era of global peace and prosperity.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('boom-board.jpg'),
				alt: 'Boom Board',
				caption: 'Boom Board'
			}
		},
		{
			type: 'paragraph',
			text: 'This tension was captured nicely in an American game published in 1951: Big Boom… or Golden Age. The game was published by a small company set up for the purpose: the Golden Age Co. of Lafayette, California. It comes across as propaganda for the recently formed United Nations.'
		},
		{
			type: 'paragraph',
			text: 'The game is a roll-and-move affair. Between one and five players move Nation pieces cooperatively on an inward spiral toward the goal of a single world government through the UN. The remaining player, however, represents the Atom Bomb and moves around a different “doomsday clock” circle.'
		},
		{
			type: 'paragraph',
			text: 'The components include 8 lettered Nation pieces, 34 Vote cards, 36 Goodnews cards, 36 Badnews cards and markers for the A-bomb and the number of its trips around the clock.'
		},
		{
			type: 'paragraph',
			text: 'The Nation players on their turns roll two dice and can move any of the pieces by either or both dice. Each starts with a single Vote card and adds another each time a Nation piece reaches the center or when a third Nation is moved onto a space with two others. There are spaces marked with a "?", and when a Nation lands on such a space, the Nations players each get to draw and act on a Goodnews card.'
		},
		{
			type: 'paragraph',
			text: 'The Bomb player also rolls two dice, and can use them either to move the bomb forward or to move one or two Nations backward onto a "?" by exact count. If the Bomb player does so, all Nations players must take and act on a Badnews card.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('boom-bomb-clock.jpg'),
				alt: 'Boom Bomb Clock',
				caption: 'Boom Bomb Clock'
			}
		},
		{
			type: 'paragraph',
			text: 'If the Bomb player completes a number of circuits that varies with the number of players, the world blows up and the Bomb player wins. If the Nation players get all of the nations to the middle to spell "One World", the UN brings everyone around the globe together in a new Golden Age, where "taxes are a joke, starvation and illiteracy are gone, disease is conquered, you still have money to burn... (and) your workday is cut in two. Yippee!"'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('boom-money-to-burn.jpg'),
				alt: 'Boom Money To Burn',
				caption: 'Boom Money To Burn'
			},
				{
				src: img('boom-workday.jpg'),
				alt: 'Boom Workday',
				caption: 'Boom Workday'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Wargames as such all but disappeared in the 15 years after the end of WWII. The very idea of armed conflict became almost moot with the overhanging threat of the bomb. The actual crises of the era, such as the Berlin Blockade and the Cuban Missile Crisis, reinforced the idea that unless one side backed down, the only alternative was world annihilation.'
		},
		{
			type: 'paragraph',
			text: 'While the handful of French games published right after liberation had a celebratory feel, Miro\'s first post-war game had a box with a dreary landscape still reeking of the clouds of war and suggesting a gloomy future.'
		},
		{
			type: 'paragraph',
			text: 'Les Convois (The Convoys) had lead models of wartime jeeps as the playing pieces. Moving in convoy for protection against partisans or raids was very much a wartime practice. While the game is a simple race to get a team of five jeeps to the warehouse, it suggests ongoing danger in the nuclear age.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('les-convois-box-cover.jpg'),
				alt: 'Les Convois Box Cover',
				caption: 'Les Convois Box Cover'
			},
				{
				src: img('les-convois-board.jpg'),
				alt: 'Les Convois Board',
				caption: 'Les Convois Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Even the Korean War from 1950-53 seems to have prompted little activity from game publishers. The closest to a Korean War game seems to be Built-Rite’s Beachhead Invasion Game.'
		},
		{
			type: 'paragraph',
			text: 'The board and the rules are generic, but the game box does show a pair of Russian MiG-15 fighters diving toward the troops as they land. These fighters were used extensively in Korea, both by Russia directly and by their Communist allies. And the game came out just after the American landing at Inchon in the first year of the war.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('beachhead-box-cover.jpg'),
				alt: 'Beachhead Box Cover',
				caption: 'Beachhead Box Cover'
			}
		},
		{
			type: 'paragraph',
			text: 'Wolverine produced a bagatelle (pinball) game called Battle Action at around the same time. Most of its artwork, however, still seems to reflect WWII island combat against the Japanese. It echoes the invasion theme, but the brown-camouflaged enemies and palm-like trees hark back to the Pacific campaign. So do both of the armored vehicles shown.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('battle-action-bagatelle.jpg'),
				alt: 'Battle Action Bagatelle',
				caption: 'Battle Action Bagatelle'
			}
		},
		{
			type: 'paragraph',
			text: 'The first of these is an M3 Stuart light tank, which by the time of the Korean War had been replaced as the main light tank by the Chaffee. The second is an M3 GMC (Gun Motor Carriage). This is a WWII halftrack equipped with a 75 mm gun that saw extensive use in the Pacific theatre.'
		},
		{
			type: 'paragraph',
			text: 'However, there also is an image of a Piasecki H-21 helicopter that did not come into service until 1952.'
		},
		{
			type: 'paragraph',
			text: 'This huge twin-rotor helicopter was known as the Flying Banana because of the shape of its fuselage. For medical evacuation, it could carry 12 stretchers and two attendants. In its later air assault role, it could carry 22 troops.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('battle-action-flying-banana.jpg'),
				alt: 'Battle Action Flying Banana',
				caption: 'Battle Action Flying Banana'
			}
		},
		{
			type: 'paragraph',
			text: 'A the fragile Cold War peace enabled growing prosperity in much of the world, game publishers almost seemed afraid to come across as warmongers. They preferred happy games that reinforced family values and the comfort of economic progress. This attitude almost prevented the global game phenomenon called Risk.'
		},
		{
			type: 'paragraph',
			text: 'This classic of world domination was first published by Miro in France as La Conquête du Monde – Conquest of the World. Miro’s manager Michel Habourdin was convinced he had global a winner and pressed the company’s U.S. partner Parker Brothers to publish it.'
		},
		{
			type: 'paragraph',
			text: 'But as recounted by Phil Orbanes in his 2018 book Tortured Cardboard, Parker was loath to publish such an openly militaristic title. Eventually one of Parker’s salespeople, Elwood “Al” Reeves, offered a slip of paper with the letters R I S K.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('conquete-box-top-flat-light-cropped.jpg'),
				alt: 'Conquete Box Top Flat Light Cropped',
				caption: 'Conquete Box Top Flat Light Cropped'
			}
		},
		{
			type: 'paragraph',
			text: 'The top executives loved it, but when they asked how he came up with the name, he said it was just the initials of his four grandchildren! It took two more years and one significant rule change (accelerating the reinforcement value of card sets) before it was finally published in the United States and around the world as Risk.'
		},
		{
			type: 'paragraph',
			text: 'Until the mid-1960s, there was little interest among publishers in exploring the unwinding of European empires and the shift toward superpower competition by proxy. The ejection of the French from Indochina by the Viet Minh? Fidel Castro’s revolutionary struggle in Cuba? Who in the West would want to buy a game reflecting the strength of Communism? And surely the last thing Britons wanted to play was a game about the Ghandi-led dismantling of the Raj in India.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('sahara-patrol-box-cover.jpg'),
				alt: 'Sahara Patrol Box Cover',
				caption: 'Sahara Patrol Box Cover'
			}
		},
		{
			type: 'paragraph',
			text: 'The closest gaming came to colonial conflict in the first two decades after WWII was Sahara Patrol, published in 1959.'
		},
		{
			type: 'paragraph',
			text: 'This is a fairly simple game of maneuver pitting the French Foreign Legion against Arab insurgents in North Africa.'
		},
		{
			type: 'paragraph',
			text: 'The pieces are green and pink plastic flags on pins. Players use a French-flag spinner to advance one or more flags along a network of paths through the desert between their home cities. They try to take control of a majority of the forts scattered across the sands.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('sahara-in-progress.jpg'),
				alt: 'Sahara In Progress',
				caption: 'Sahara In Progress'
			}
		},
		{
			type: 'paragraph',
			text: 'European colonies would go on to generate many battlefields in the years ahead. Some would be violent bids for independence from old empires. Some would become proxy wars for the Cold War\'s new empires.'
		}
	]
};
