import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/recruiting-for-war/${name}`;

export const recruitingForWar: StoryContent = {
	slug: 'recruiting-for-war',
	title: 'Recruiting for War',
	epigraph: {
		quote:
			'It was the mud, I think, that made me take to flying… I had succeeded in getting myself mired to the knees when suddenly, from somewhere out of the storm, appeared a trim little aeroplane.',
		attribution: 'William A. Bishop, Winged Warfare'
	},
	blocks: [
		{
			type: 'paragraph',
			text: 'Perhaps it was the mud. Or perhaps it was the rosebush. When still a boy in Owen Sound, Ontario, Billy Bishop made an “aircraft” of sorts from an orange crate and bedsheets. He made his maiden flight from the roof of his house, and followed a rather steep trajectory into his mother’s rose bushes.'
		},
		{
			type: 'paragraph',
			text: 'As a cadet at Royal Military College in Kingston when WWI broke out, Bishop was initially commissioned as a cavalry officer. Shortly after arriving in England in June 1915, he saw that “trim little aeroplane” land and take off from a nearby field. He transferred to the Royal Flying Corps initially as an observer, and did not get his wings as a pilot until November 1916.'
		},
		{
			type: 'paragraph',
			text: 'He was sent to France in March 1917, and shot down his first enemy aircraft on March 25. By May, his score was up to 22. Four months later, he returned to Canada on leave, returning to the front lines on June 8, 1918 as Commander of the “Flying Foxes” squadron. Only eight days later, he was ordered to return to England to organize a Canadian flying corps. By then, he was credited with downing 62 enemy planes. In the next three days, he added 10 to that score, including five within 12 minutes on his final flight on June 19.'
		},
		{
			type: 'paragraph',
			text: 'As WWII began to gather steam, Canada agreed to become the training centre for the British Commonwealth Air Training Plan. Bishop was promptly appointed as Director of Training. It was in this role that Air Vice Marshal William A. Bishop, VC, DSO, MC, DFC, sponsored the game Be an Airman.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('be-an-airman-cover.jpg'),
				alt: 'Box cover for Be an Airman showing a signed portrait of Billy Bishop in full uniform',
				caption: 'Be an Airman (1940s)'
			}
		},
		{
			type: 'paragraph',
			text: 'The game was published by Copp Clark Co. Ltd. of Toronto. A signed portrait of Bishop in full uniform adorns the cover. The box also declares that the game has been approved by the Air Council and that the entire proceeds will be donated to the RCAF Benevolent Fund.'
		},
		{
			type: 'paragraph',
			text: 'This was a typical roll-and-move affair, but it showed potential recruits that there were three possible career paths to follow when joining the air force: pilot, observer and air gunner. On each path, green and red circles send the player forward or back. A student pilot, for instance, advances on a good landing, good solo flight, and passing the night flying course, but is sent back for bad take-offs and landings and dangerous low-level flying.'
		},
		{
			type: 'paragraph',
			text: 'Gunners and observers finish their schools at space 57, while pilots must advance to space 74 in order to reach the Overseas Pool. This sent a message to starry-eyed young lads: pilots may have more prestige, but opting for other roles would let them get into the scrap sooner.'
		},
		{
			type: 'paragraph',
			text: 'From there, all players advance on the same track. All have equal chances of getting lost in London, being caught in an air raid or failing to reach their targets (red circles). All also get equal chances of shooting down a Messerschmitt 110, bombing Berlin and winning medals.'
		},
		{
			type: 'paragraph',
			text: 'The track ends back in Canada at space 175, where the winner is declared a national hero.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('be-an-airman-board.jpg'),
					alt: 'Game board for Be an Airman showing training and combat paths',
					caption: 'Be an Airman game board'
				},
				{
					src: img('be-an-airman-illustration.jpg'),
					alt: 'Board illustration of fighters covering the evacuation at Dunkirk',
					caption: 'Fighters over Dunkirk'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The board is lavishly illustrated with images both of training and of air combat. Especially notable are images of the Berlin skyline burning after a night-time bomber raid, and of two fighters covering the evacuation of the beaches at Dunkirk.'
		},
		{
			type: 'paragraph',
			text: 'This is just one of many examples of the use of games in encouraging young men to sign up for military service. Two German games, one published in the 1930s and the other early in WWII, provide great examples of such advertising.'
		},
		{
			type: 'paragraph',
			text: 'Oh, welche Lust Soldat zu sein (Oh, what a great soldier you are) has a smiling soldier on the box cover, and includes a board showing the progress of a recruit to trained private.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('welche-box-cover.jpg'),
					alt: 'Box cover for Oh, welche Lust Soldat zu sein showing a smiling soldier',
					caption: 'Oh, welche Lust Soldat zu sein'
				},
				{
					src: img('welche-board.jpg'),
					alt: 'Game board showing a recruit’s progress to trained private',
					caption: 'From recruit to trained private'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Soldaten Kamaraden follows a similar line, showing all sorts of fun activities: competing in sports, playing in a band, and dancing with ladies who clearly love a man in uniform. Then there is eating tasty food from a field kitchen, practicing shooting and engaging in a grand excursion across a river.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('soldaten-swimming.jpg'),
					alt: 'Board illustration of soldiers swimming from Soldaten Kamaraden',
					caption: 'Soldaten Kamaraden — swimming'
				},
				{
					src: img('soldaten-food-and-dance.jpg'),
					alt: 'Board illustration of soldiers eating and dancing from Soldaten Kamaraden',
					caption: 'Food, music and dance'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Even more serious strategy games could be cloaked in attractive garb. The 1930s German game Gloria Victoria is another chess derivative that focuses on the interaction of land and air forces.'
		},
		{
			type: 'paragraph',
			text: 'The chess-type board is fairly bland, an 8 x 10 grid, half in blue and half in red. The only terrain features are a shell hole and a downed bridge on each half, both of which block movement. The cardboard pieces represent infantry, machine gunners, storm troopers, panzers, artillery, a fighter plane, a bomber and a flak (anti-aircraft) gun.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('gloria-envelope-cover.jpg'),
					alt: 'Envelope cover for Gloria Victoria showing marching soldiers',
					caption: 'Gloria Victoria envelope cover'
				},
				{
					src: img('gloria-uncut-red.jpg'),
					alt: 'Uncut red game board for Gloria Victoria',
					caption: 'The Gloria Victoria board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The name of the game is based on a popular military marching song. The happy specimens of marching manhood on the cover are clearly proclaiming military service as an opportunity to be seized.'
		},
		{
			type: 'paragraph',
			text: 'Some recruitment games took a longer-term view. In Japan, the 1917 game Boys’ Warship was intended to get younger boys thinking about the glory of joining the naval forces.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('boys-navy-complete.jpg'),
				alt: 'Complete game board for Boys’ Warship showing naval activities',
				caption: 'Boys’ Warship (1917)'
			}
		},
		{
			type: 'paragraph',
			text: 'The game showed a wide variety of naval activities, from building ships to sinking ships. There also is a seaplane taking off and examples of communications at sea, both through wireless and through signal flags.'
		},
		{
			type: 'paragraph',
			text: 'Similarly, Child Soldiers got kids thinking about potential roles during WWII. Players pursue training paths for the army’s five service branches: Infantry, Artillery, Signals, Armor, and Air Force. The winner is the first player to complete training in their chosen branch.'
		},
		{
			type: 'paragraph',
			text: 'The game was a centerfold pull-out in a children’s magazine published by the Asahi Shimbun. The absence of naval roles suggests the game was army-sponsored – illustrating the deep command divide between Japan’s land and naval forces at the time.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('child-soldiers-thinking.jpg'),
					alt: 'Centerfold illustration from Child Soldiers showing boys considering military roles',
					caption: 'Choosing a service branch'
				},
				{
					src: img('child-signals.jpg'),
					alt: 'Signals training path on the Child Soldiers game board',
					caption: 'Signals training'
				},
				{
					src: img('child-basic.jpg'),
					alt: 'Basic training section on the Child Soldiers game board',
					caption: 'Basic training'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Even earlier recruitment games focused on the armed forces as a career option, and on the virtues needed for success. For example, the 1901 American game West Point Cadet followed the path of an officer candidate through that institution.'
		},
		{
			type: 'paragraph',
			text: 'It is a roll-and-move game, but offers optional paths along the way. There is a reward for finishing first, but the winner is the player who collects the most points along the way. The rules suggest that players should go through the cycle five times and then see who has the most total point tokens.'
		},
		{
			type: 'paragraph',
			text: 'Virtues like hard studying, good draughtsmanship and recitation, and soldierly deportment award points. Falling from one’s horse, talking in ranks, smoking cigarettes, engaging in hazing or missing inspection lead to lost points or delays.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('west-point-cadet-box.jpg'),
					alt: 'Box cover for West Point Cadet',
					caption: 'West Point Cadet (1901)'
				},
				{
					src: img('west-point-cadet-board.jpg'),
					alt: 'Game board for West Point Cadet showing the officer candidate path',
					caption: 'The West Point Cadet board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Games in many countries have included the theme of moving up through the military ranks to becoming a top commander. The Japanese game below was published in 1904, on the eve of the Russo-Japanese War. However, Successful Military Career did not focus on short-term recruitment. Instead it showed players getting ahead in the military required a lifelong commitment to service.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('successful-army-career.jpg'),
				alt: 'Game board for Successful Military Career showing rank advancement',
				caption: 'Successful Military Career (1904)'
			}
		},
		{
			type: 'paragraph',
			text: 'Games in many countries have included the theme of moving up through the military ranks to becoming a top commander. For example, this unnamed and undated 19th Century German game board is divided into four triangular segments. Each player advances along the career track within that segment. The winner, of course, is the first player to reach the rank of General at the apex of his pyramid. The style and color of the uniforms show that the game was published after Germany created the Waffenrock as the first modern standard for uniforms in 1842. It was most likely published around the 1870-71 Franco-Prussian War.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('german-through-the-ranks.jpg'),
				alt: '19th-century German game board with four triangular career tracks leading to General',
				caption: 'Through the ranks to General'
			}
		},
		{
			type: 'paragraph',
			text: 'In 1891, Parker Brothers published Soldier Boy, a similar career-advancement game featuring a young lad in the blue uniform of that era. Its board had a single movement track for all players, laid out as an inward circular spiral.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('soldier-boy-box.jpg'),
					alt: 'Box cover for Soldier Boy showing a young lad in blue uniform',
					caption: 'Soldier Boy (1891)'
				},
				{
					src: img('soldier-boy-board.jpg'),
					alt: 'Game board for Soldier Boy with an inward circular spiral track',
					caption: 'The Soldier Boy board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Half a century later, the 1942 American game Salute had an identical theme. However, each player pursues promotion in one of four service branches (army, navy, air force and engineers), each with its own track. But as always, players roll dice to advance through the ranks to Commander-in-Chief.'
		},
		{
			type: 'paragraph',
			text: 'This one includes an action component. A small American flag is placed in the middle of the board, and any time that any player lands on a “Salute” space, all players must immediately jump to their feet and salute the flag. Failure to do so results in a two-rank demotion on the board.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('salute-box.jpg'),
				alt: 'Box cover for Salute showing military promotion tracks',
				caption: 'Salute (1942)'
			}
		},
		{
			type: 'paragraph',
			text: 'Other such games include the pre-WWI game From Sailor Boy to Admiral, published by C.W. Faulkner. The 1918 French game Le Jeu des Poilus included the promotion through the ranks element, but added battles, perils and rewards experienced during WWI to the career track.'
		},
		{
			type: 'paragraph',
			text: 'The WWI British card game Militaire used military ranks to value its cards in a rummy-style game. The 54-card deck includes seven each of Lance Corporals (5 points), Corporals (10) and Sergeants (15). There are four each of the officers: 2nd Lieutenant, Lieutenant, Captain, Major, Lieutenant Colonel, Colonel, Brigadier and General.'
		},
		{
			type: 'paragraph',
			text: 'The values increase by 5 points with each rank, except that the General is worth 60. But as any sensible officer knows, the real boss in a unit is the senior NCO. In this game, the Sergeant Major is a wild card that can be used as any rank.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('militaire-backs.jpeg'),
					alt: 'Card backs from the Militaire card game',
					caption: 'Militaire card backs'
				},
				{
					src: img('militaire-sgtmaj.jpeg'),
					alt: 'Sergeant Major wild card from Militaire',
					caption: 'The Sergeant Major wild card'
				},
				{
					src: img('militaire-rank-cards.jpeg'),
					alt: 'Rank cards from the Militaire card game',
					caption: 'Officer and NCO rank cards'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Players are dealt hands of seven cards. Each player either draws the top card of the face-down deck or takes the top card in the discard pile and then discards, aiming for sets of 3 or 4, either of the same rank or runs of consecutive ranks. The first player to complete a hand with either two sets, a set and a run, or a single run of 6 or 7 cards, wins the round.'
		},
		{
			type: 'paragraph',
			text: 'There is no question that these games encouraged players to think about military service and to sign up if eligible. But game publishers survive by helping people have fun. In cases like this, they simply grabbed popular themes and images and slapped them onto game boards and cards. While they may have supported their country’s military aims, their purpose, as always, was to make money.'
		}
	]
};
