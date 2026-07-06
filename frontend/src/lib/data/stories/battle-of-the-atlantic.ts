import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/battle-of-the-atlantic/${name}`;

export const battleOfTheAtlantic: StoryContent = {
	slug: 'battle-of-the-atlantic',
	title: 'Battle of the Atlantic',
	blocks: [
		{
			type: 'paragraph',
			text: 'The Danish merchant ship Chilean Reefer was an unlikely hero. It was a small ship, only 1,831 gross registered tons. It had just one puny gun mounted on its bow in recognition of wartime dangers. And yet it would manage to scare off two German battlecruisers.'
		},
		{
			type: 'paragraph',
			text: 'On Jan. 22, 1941, the 32,000-ton battlecruisers Scharnhost and Gneisenau set sail from Kiel on an anti-convoy mission code-named "Berlin". The former had just sunk the British aircraft carrier Glorious off Norway, but the pair had less luck in their commerce raiding, at least to start.'
		},
		{
			type: 'paragraph',
			text: 'They intercepted convoy HX 106, but aborted their attack after spotting the British battleship Ramilles acting as an escort. (They had orders to avoid fighting enemy capital ships.) After moving south to the Azores, they backed off attacking another convoy because of the presence of the British battleship Malaya. On March 11, they were ordered back to Brest in France.'
		},
		{
			type: 'paragraph',
			text: 'Commanding officer Admiral Gunther Lutjens was not ready to slink home. After meeting up with the supply ships Uckermark and Ermland, he formed them into a 220 km-long search line as they sailed north. Just four days later, that paid off. The German ships found an unescorted group of six tankers, sinking three and taking the other three captive. But greater prizes awaited.'
		},
		{
			type: 'paragraph',
			text: 'At 1:00 a.m. on March 16, both the support ships signaled that they had spotted silhouettes of merchant ships against the night sky.'
		},
		{
			type: 'paragraph',
			text: 'Dawn found the raiders in the middle of a major convoy. In short order, Gneisenau sank five ships and Scharnhorst four more.'
		},
		{
			type: 'paragraph',
			text: 'The plucky Chilean Reefer refused to go down without a fight. First her captain sent an accurate sighting report, received by the British battleship Rodney. Then he made smoke, and actually fired back at the Gneisenau with his one small gun.'
		},
		{
			type: 'paragraph',
			text: 'The Gneisenau\'s captain had never seen a merchant ship actually fire back at a major warship. Was she a disguised armed cruiser? Was she armed with torpedoes that might actually inflict damage? He kept his distance and pounded the freighter with his nine 11-inch guns, taking 73 rounds to sink the little ship.'
		},
		{
			type: 'paragraph',
			text: 'By then, the Rodney had appeared on the horizon. Admiral Lutjens wanted no part of a fight with the British battleship, and his two battlecruisers fled at their maximum speed of 32 knots. His last view was of Rodney\'s searchlights looking for survivors around the burning Chilean Reefer.'
		},
		{
			type: 'paragraph',
			text: 'Commerce raiding had played an important role in World War I, and isolating Britain was a critical part of Germany\'s strategy in World War II. Most of the effort went into the U-boat campaign, but Germany\'s relatively few surface ships remained a constant threat even if they rarely put to sea. The British Navy in turn was the first line of defense for its critical sea lanes against surface and subsurface threats alike.'
		},
		{
			type: 'paragraph',
			text: 'It is not surprising, therefore, that Ramilles, Malaya and Rodney all appear as targets in an early-war German game, Wir Fahren gegen Engeland. The attacking playing pieces are a combination of U-boats and long-range aircraft. Players can choose one of two routes (black or white) around the British Isles. Along the way, they may land on spaces representing attacks against 49 specific British ships.'
		},
		{
			type: 'paragraph',
			text: 'The first player to encounter a given ship sinks it and takes a card that shows its name, class, date of launch, tonnage, length and crew size. Each card also shows a white or black-circled number on the upper left (corresponding to the point of encounter on the board) as well as a victory point value on the upper right.'
		},
		{
			type: 'paragraph',
			text: 'Subsequent players landing on that ship\'s space get nothing. Other spaces have events that help or hinder players along the way.'
		},
		{
			type: 'paragraph',
			text: 'The game is supposed to continue until every British ship has been sunk. Players reaching the end of their track simply start over again from point A. (The rules do allow players to set a time limit to prevent endless rolling in search of the last ship or two.)'
		},
		{
			type: 'paragraph',
			text: 'In the standard game, the winner is the player with the largest tonnage sunk. For younger players, the actual tonnage is set aside in favor of the the simpler point values shown on the cards.'
		},
		{
			type: 'paragraph',
			text: 'In my copy of this game, the original owner tracked actual German victories in the early war. He marked crosses on the front of cards of ships sunk, and on the back noted the date, location and sinking ship\'s commander. In the top row shown below, he notes the sinking of Royal Oak by Gunther Prien\'s submarine in Scapa Flow on 14 October 1939, and the sinking of the aircraft carrier Courageous on 17 Sept. 1939 by Kapitanleutnant (Otto) Schuhart (commanding U-29). Courageous was the first British warship lost during the war. It was hit by two torpedoes while leading an anti-submarine task force.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('fahren-box-cover.jpg'),
				alt: 'Box cover for Wir Fahren gegen Engeland',
				caption: 'Wir Fahren gegen Engeland'
			},
				{
				src: img('fahren-full-board.jpg'),
				alt: 'Full board for Wir Fahren gegen Engeland',
				caption: 'Wir Fahren board'
			},
				{
				src: img('fahren-backs-royal-oak-courageous-hood-ark-royal-repulse-malaya.jpg'),
				alt: 'Ship cards from Wir Fahren gegen Engeland',
				caption: 'Ship cards'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The middle two cards show the sinking of Hood on 24 May 1941 by Bismarck, and that of the carrier Ark Royal in the Mediterranean on 13 Nov. 1941.'
		},
		{
			type: 'paragraph',
			text: 'The final two cards show errors possibly due to wartime reporting or censorship. Repulse is correctly shown as having been sunk by the Japanese, but gives the date as 9 December 1941. (The ship was not actually attacked and sunk until the following day.)'
		},
		{
			type: 'paragraph',
			text: 'More significantly, Malaya is shown as having been damaged in the Mediterranean near Gibraltar on the same day as the sinking of the Ark Royal. It was on convoy duty to Malta at the time, but was not damaged then. It was damaged by U-106 back in March 1941, but returned to service after repairs in August.'
		},
		{
			type: 'paragraph',
			text: 'The stakes in the Battle of the Atlantic were huge. As the manufacturing hub for the British Empire, the United Kingdom was utterly dependent on imports to feed both its factories and its people. With both its supply lines and manufacturing centers under attack, it counted on former colonies to step into the breach.'
		},
		{
			type: 'paragraph',
			text: 'Canada in particular became the arsenal of empire. This role was captured in detail by the game Carrying the Tools to Britain, published by the Canadian Broadcasting Corporation in early 1942. The four-leaf cardstock sheet has the game board on one side. It unfolds to reveal a map board 14" high and 35" wide. This map shows Canada from coast to coast as well as the convoy routes across the Atlantic to the British Isles.'
		},
		{
			type: 'paragraph',
			text: 'The map is marked with symbols of Canada\'s industrial contribution to the war. Raw materials like oil, iron, copper, aluminum, nickel, chromium and radium appear in rural regions.'
		},
		{
			type: 'paragraph',
			text: 'Canada\'s cities are marked with symbols showing their production of planes and anti-aircraft guns, ships and naval guns, tanks and motorized vehicles, machine guns, rifles, uniforms, chemicals, ammunition and shells.The entire back of the board was filled with text and graphics showing the speed and extent of Canada\'s expansion of military production.'
		},
		{
			type: 'paragraph',
			text: 'For instance, in just two years, the Canadian Navy had expanded from 15 ships to 300. These were all smaller vessels focused on protecting coastal waters and the critical convoys: destroyers, corvettes, minesweepers, submarine chasers, auxiliary cruisers and motor torpedo boats. In 1941 alone, Canada produced 136 military vessels and another 100 cargo ships.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('cbc-full-map.jpg'),
				alt: 'Full map for Carrying the Tools to Britain',
				caption: 'Carrying the Tools to Britain'
			},
				{
				src: img('cbc-heartland.jpg'),
				alt: 'Heartland detail from Carrying the Tools to Britain',
				caption: 'Canadian heartland'
			},
				{
				src: img('cbc-value-for-money.jpg'),
				alt: 'What We Get for our Money from Carrying the Tools to Britain',
				caption: 'What We Get for our Money'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'A page titled "What We Get for our Money," also shows that the Royal Canadian Air Force had expanded to 93,000 men, on top of the Canadians already in Britain serving with the Royal Air Force.'
		},
		{
			type: 'paragraph',
			text: 'More importantly, the Commonwealth Air Training Plan was already operating 18 pre-enlistment training centres and 92 flying schools. Featured in the Canadian game Be an Airman shown earlier, the CATP was operating 4,000 aircraft, flying a total of more than a million miles a day.'
		},
		{
			type: 'paragraph',
			text: 'Canada also was building up its army, and churning out armored vehicles, artillery, infantry weapons and munitions. The projected production of explosives for 1942 would equal the total Canadian output for the whole of WWI.'
		},
		{
			type: 'paragraph',
			text: 'Just as important for Britain\'s survival, Canada was shipping food in vast quantities.'
		},
		{
			type: 'paragraph',
			text: 'During the first two years of the war alone, Canada had sent 300 million bushels of wheat, 7 million barrels of flour, 800 million pounds of bacon, 195 million pounds of cheese, 15 million dozen eggs and even 13 million pounds of honey.'
		},
		{
			type: 'paragraph',
			text: 'The critical military challenge was to get as much as possible of that food and munitions across the Atlantic. That battle raged in the air, on the surface and under the waves.'
		},
		{
			type: 'paragraph',
			text: 'Games on both sides addressed the German efforts to isolate Britain. Sea Raider was a Parker Brothers game. Its scenario deals specifically with the threat posed by an isolated surface ship breaking into the Atlantic to terrorize convoys. It also recreates the kind of chase that occurred when the Bismarck burst into the North Atlantic in 1941.'
		},
		{
			type: 'paragraph',
			text: 'The game has a single raider pursued by three cruisers, and starts as a stern chase. The raider piece starts at the entrance to the open sea and spins first. The cruisers start six spaces behind.'
		},
		{
			type: 'paragraph',
			text: 'After the raider\'s move, each cruiser also spins and moves. A piece may start in any possible direction but must move the full number of spaces spun without reversing course. The cruisers try to spread out and cut off the raider, and win if any one of them lands by exact count on the raider.'
		},
		{
			type: 'paragraph',
			text: 'The raider, for its part, has access to some unique wavy black paths. The raider may on any turn duck into one of these paths and cannot be captured while there. However, the raider must leave the wavy path on the next turn if its spin makes this possible. The raider wins if it is able to reach its safe haven. This is labelled "Raider\'s Home Base" and is symbolically hidden in the clouds.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('sea-raider-box-top.jpg'),
				alt: 'Box top for Sea Raider',
				caption: 'Sea Raider'
			},
				{
				src: img('almost-home.jpg'),
				alt: 'Almost home on the Sea Raider board',
				caption: 'Almost home'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Air power was a vital tool in fighting both submarines and surface raiders. The box cover of the British game Air-Scouts! features a Bristol Blenheim light bomber in its reconnaissance role, overflying a squadron of warships.'
		},
		{
			type: 'paragraph',
			text: 'It is a typical roll-and-move race, but the board has an unusually long 201-space track, from the home aerodrome to the enemy base and back.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('air-scouts-box-cover.jpg'),
				alt: 'Box cover for Air-Scouts!',
				caption: 'Air-Scouts!'
			}
		},
		{
			type: 'paragraph',
			text: 'Surface raiders like Scharnhorst, Gneisenau, Bismarck and Prince Eugen were potentially the most dangerous, but surface sorties were relatively rare.'
		},
		{
			type: 'paragraph',
			text: 'The much more persistent threat came from Germany\'s vast fleet of U-boats. All those smaller ships being churning out of Canadian shipyards were focused on protecting both coastal shipping and transatlantic convoys from that undersea menace.'
		},
		{
			type: 'paragraph',
			text: 'This side of the Battle of the Atlantic was captured in the 1939 Milton Bradley game Submarine Chaser.'
		},
		{
			type: 'paragraph',
			text: 'The chase is abstract, and similar in concept to Parker Bros.\' Sea Raider. The game pits one player commanding the submarine against up to four players in charge of the four submarine chasers.'
		},
		{
			type: 'paragraph',
			text: 'In this game, however, the board is a set of linked concentric circles. The chasers start at bases around the outer circle. The submarine starts in the middle. Only the submarine and a single chaser move in any given turn, and they move by only a single space.'
		},
		{
			type: 'paragraph',
			text: 'The goal of the chasers is to force the submarine into the anti-submarine nets located at the top and bottom of the board. The submarine can eliminate a chaser by moving into the firing position when a chaser sits on a space with a torpedo pointed in its direction. The submarine wins by eliminating three chasers or killing two of them and then surviving for another 25 moves.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('sub-chaser-box-cover.jpg'),
				alt: 'Box cover for Submarine Chaser',
				caption: 'Submarine Chaser'
			},
				{
				src: img('submarine-chaser-board.jpg'),
				alt: 'Board for Submarine Chaser',
				caption: 'Submarine Chaser board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'On the German side, the WWI game Deutsche-Englischer Seekrieg was reborn as Klar zum Gefecht! (Clear for Action!) The game shows its age, since it focuses on the idea of a clash of two large fleets rather than the asymmetric warfare that characterized the Battle of the Atlantic.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('klar-zum-gefecht-box-cover.jpg'),
				alt: 'Box cover for Klar zum Gefecht!',
				caption: 'Klar zum Gefecht!'
			}
		},
		{
			type: 'paragraph',
			text: 'Another German game, Denn wir fahren gegen Engelland was published just before the early 1940 conquests of Denmark, Norway, Belgium, Netherlands and France.'
		},
		{
			type: 'paragraph',
			text: 'However, it more accurately portrays the combination of air and undersea forces that did the bulk of the damage against Allied convoys, whether in the North Atlantic, the Mediterranean or the icy run to Murmansk in Russia .'
		},
		{
			type: 'paragraph',
			text: 'It is not clear why Engelland was spelled with both an extra "e" and a double "l". The game uses lead pieces: three U-boats and three planes. Heinkel 111 bombers are given starring roles on both the cover of the box and over the North Sea on the board.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('wir-fliegen-gegen-engeland.jpg'),
				alt: 'Board for Denn wir fahren gegen Engelland',
				caption: 'Denn wir fahren gegen Engelland'
			}
		},
		{
			type: 'paragraph',
			text: 'Another Canadian game published in 1940 showed an unusual perspective on the Battle of the Atlantic. While Carrying the Tools to Britain focused on the need to move cargo from Canada to Britain through the German gauntlet, Contraband Control is about preventing war material from getting to Germany.'
		},
		{
			type: 'paragraph',
			text: 'It seemed to anticipate an ocean conflict like that of WWI, when the British blockade of the Central Powers was a strategic priority. However, WWII saw no repetition of 1916\'s attempt to use cargo submarines for commerce with a neutral United States. Nazi Germany\'s priority was to obtain access to oil and strategic minerals through land conquest rather than marine commerce.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('contraband-full-board.jpg'),
				alt: 'Full board for Contraband Control',
				caption: 'Contraband Control'
			},
				{
				src: img('contraband-copyright-sinking-detail.jpg'),
				alt: 'Sinking detail from Contraband Control',
				caption: 'Sinking detail'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'In the United States, Corey Games published Blockade, another game about denying resources to the enemy power.'
		},
		{
			type: 'paragraph',
			text: 'Two players each on an island compete to keep their economies supplied with four vital commodities: Food, Arms, Oil and Metals. The source for each commodity is a port on the board edge. Each player starts with 3 warships, 2 submarines, 2 planes and 3 cargo ships, as well as a stockpile of 5 of each. There are two spinners, one for movement and consumption, the other for battle results. There also is a 12-turn circular marker for each player.'
		},
		{
			type: 'paragraph',
			text: 'Movement is by spinner. The number spun can move a single unit or be split between two or more. Many results also cause the loss of a commodity. Cargo ships must reach a source port to load a commodity and get home to add it to the stockpile. Battles are triggered by moving adjacent to an enemy. Results are determine by a table cross-referencing the combatants with the number spun. As soon as any player runs out of a commodity, he has 12 turns to replenish or loses the game.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('blockade-box-cover.jpg'),
				alt: 'Box cover for Blockade',
				caption: 'Blockade'
			},
				{
				src: img('blockade-board.jpg'),
				alt: 'Board for Blockade',
				caption: 'Blockade board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'There is an interesting post-script to the Battle of the Atlantic. One of the most successful commerce raider of the war was the German ship Atlantis. She was equipped with six 150-mm guns and other weapons, all hidden behind false deck or structures that could be modified into 26 different silhouettes.'
		},
		{
			type: 'paragraph',
			text: 'She set sail on March 31, 1940, and over the next 602 days, would travel more than 161,000 km and sink or capture 22 ships. On Nov. 11, 1940, she captured the British cargo ship Automedon northwest of Sumatra. On board, the Germans found 15 bags of Top Secret mail for the British Far East Command, including decoding tables, fleet orders, gunnery instructions and naval intelligence reports.'
		},
		{
			type: 'paragraph',
			text: 'They also discovered a small weighted green bag marked "Highly Confidential" that contained the Chief of Staff\'s report to the British Commander-in-Chief Far East, Robert Brooke Popham. This contained the latest assessments of Japanese military strength, details of British deployments in the Far East and notes on Singapore\'s defences. It painted a very gloomy picture of British strength in the region and said Britain was too weak to risk war with Japan.'
		},
		{
			type: 'paragraph',
			text: 'Atlantis Captain Bernhard Rogge quickly put the documents in the hands of Lieutenant Commander Paul Kamenz, and sent him and six crew on the prize ship Ole Jacob to Japan, where they arrived on Dec. 4. The next day, the German naval attaché wired a summary to Berlin and sent the original document by courier across the Trans-Siberian Railway. He also gave a copy to the Japanese.'
		},
		{
			type: 'paragraph',
			text: 'After reading the report, Admiral Isoroku Yamamoto wrote to the Japanese Naval Minister asking if a quick strike to knock out America would enable Japan to quickly dispose of the demonstrably weak British and Dutch forces in the Far East. This German intelligence coup therefore may have tipped the balance in Japanese planning toward the attack on Pearl Harbor on Dec. 7, 1941.'
		}
	]
};
