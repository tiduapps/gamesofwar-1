import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/fog-of-war/${name}`;

export const fogOfWar: StoryContent = {
	slug: 'fog-of-war',
	title: 'The Fog of War',
	subtitle: 'Hidden Set-Up Games from L\'Attaque to Stratego',
	blocks: [
		{
			type: 'paragraph',
			text: 'In 1908, a French woman, Hermance Edan, filed a patent for a new type of wargame, which she called a “jeu de battaille avec pieces mobiles sur damier” (battle game with moving pieces on a checkerboard). She self-published the game a year later and continued to produce it into the 1930s. The game was called simply L’ Attaque (The Attack).'
		},
		{
			type: 'paragraph',
			text: 'It was the first popular game to capture another unavoidable reality of conflict, the so-called fog of war. In real war, the commanders on either side rarely know exactly what forces they face, and must use reconnaissance in one form or another to find out. Determining where the enemy is strong and weak, and where his attacks may fall, is critical to success when the battle reaches its climax.'
		},
		{
			type: 'paragraph',
			text: 'L’Attaque is simple to learn and play, but harder to master. It uses a board 9 squares wide by 10 squares deep, with three “lakes” of two unplayable squares across the middle of the board.'
		},
		{
			type: 'paragraph',
			text: 'Each player has an identical set of 36 pieces. Each piece is marked with a number as well as an illustration of a man in uniform. The values range from 1 for an “eclaireur” or scout to 10 for the army commander.'
		},
		{
			type: 'paragraph',
			text: 'To simulate the fog of war, the pieces stand up with their illustrated sides facing the owning player, while the opponent sees only their identical blank sides. While the forces are equal, players are free to set up their pieces in any order within their initial four rows.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('attaque-board-with-ribbons.jpg'),
				alt: 'Attaque Board With Ribbons',
				caption: 'Attaque Board With Ribbons'
			}
		},
		{
			type: 'paragraph',
			text: 'The players then take turns moving a single piece one space forward, backward, right or left. When a piece ends a move with an enemy piece in front of it, the moving player may declare “Attack”. The players then reveal their pieces. The lower-numbered piece is eliminated. In case of a tie, both pieces die. The game continues until one player manages to attack the “flag” piece of the other player.'
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
			text: 'The game offers a few additional complications. Scouts have the ability to advance any number of spaces forward in a single move. Each player also has six mines. These pieces cannot move, but eliminate any enemy piece that attacks them. Each side also has an “espion” or spy. The spy will kill the opposing army commander, but dies to an attack from any other piece.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('attaque-sample-piece-front-and-back.jpg'),
				alt: 'Attaque Sample Piece Front And Back',
				caption: 'Attaque Sample Piece Front And Back'
			}
		},
		{
			type: 'paragraph',
			text: 'Mlle Edan’s first edition was quite elaborate. It came in a large square box, red on the outside and with a textured finish. The box had no illustration, just the title “L’Attaque”. Inside the box was a board that included ribbons tacked along each horizontal line. These ribbons were used to hold the stands of the playing pieces, to prevent them from being accidentally knocked over. The bottom of the box was printed with a second board, without ribbons.'
		},
		{
			type: 'paragraph',
			text: 'The playing pieces themselves were also elaborate. The artwork showed a different uniform and pose for each of the ranks. The mines were generic bombs and the spy was shown as a man in a suit moving through bushes. Given that it was published several years before WWI broke out, the opposing sides are French and their traditional enemies, the British.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('enlisted.jpg'),
				alt: 'Enlisted',
				caption: 'Enlisted'
			}
		},
		{
			type: 'paragraph',
			text: 'Over time, at least two other opposing armies were introduced.'
		},
		{
			type: 'paragraph',
			text: 'The first, probably during WWI, placed a Germany army up against the French.'
		},
		{
			type: 'paragraph',
			text: 'The second, likely after the United States entered the war, had an American opposing army.'
		},
		{
			type: 'paragraph',
			text: 'In all cases, the French editions continued to have metal backs with prongs to hold the cardboard pieces, and mounted on tin stands.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('attaque-us-enlisted.jpg'),
				alt: 'Attaque Us Enlisted',
				caption: 'Attaque Us Enlisted'
			},
				{
				src: img('attaque-us-officers.jpg'),
				alt: 'Attaque Us Officers',
				caption: 'Attaque Us Officers'
			},
				{
				src: img('attaque-us-genls-and-flag.jpg'),
				alt: 'Attaque Us Genls And Flag',
				caption: 'Attaque Us Genls And Flag'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Edan initially tried exporting directly. One edition of her game has the first edition square box and artwork. In this box, however, the pieces are mounted on wood rather than metal, and an English translation of the rules is included. Those rules describe it as a “New game patented” underneath a diagram of a suggested set-up. However, this diagram does not appear in the first-edition French rules. Also, the wooden pieces suggests that it may have been produced during WWI, when metal would have had priority for war production. (Photo at left courtesy of Ebay vendor lesantoine59.)'
		},
		{
			type: 'paragraph',
			text: 'In any case, British games publisher Gibson saw the game’s broader potential and at some point bought the rights to the game for all English-speaking countries. There appears to be no surviving documentation of the agreement, which has been put as early as 1916 and as late as 1925.'
		},
		{
			type: 'paragraph',
			text: 'Gibson appears to have tested the British market by importing a lower-cost version from France before committing to production in England.'
		},
		{
			type: 'paragraph',
			text: 'The version shown at right maintains the plain style of the French first edition box, except with a label on a plain red box.'
		},
		{
			type: 'paragraph',
			text: 'It also eliminates the costly metal backs. Its box is stamped “Imported Goods” on the bottom, and while it retains the first-edition French artwork, the backs of the pieces are in blue and an unusual vivid purple.'
		},
		{
			type: 'paragraph',
			text: 'From then on, the backs were in red and blue, rather than the test edition’s purple and blue. Gibson also published a few “deluxe” versions that had pieces with metal backs like the original French game.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('attaque-import-box-and-contents.jpg'),
				alt: 'Attaque Import Box And Contents',
				caption: 'Attaque Import Box And Contents'
			}
		},
		{
			type: 'paragraph',
			text: 'Gibson’s biggest contribution to the game was to take the hidden set-up concept and apply it to multiple fields of war. Its first variant was naval, and titled Dover Patrol.'
		},
		{
			type: 'paragraph',
			text: 'The playing board is wide open, with the only terrain features being a Harbour Wall around much of each player’s home base.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('1925-gibson-edition.jpg'),
				alt: '1925 Gibson Edition',
				caption: '1925 Gibson Edition'
			},
				{
				src: img('dover-patrol-box-top.jpg'),
				alt: 'Dover Patrol Box Top',
				caption: 'Dover Patrol Box Top'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The big change is that it takes “capture the flag” to the next level. To win, a player must first move onto the enemy’s base, and then make it safely back to home base while carrying the enemy flag. This is represented by one of the game’s metal stands stuck on top of the carrying ship.'
		},
		{
			type: 'paragraph',
			text: 'The playing pieces represented individual ships of different classes, and many are named after actual ships. For instance, Gnat, Hornet and Mosquito (all value 3) were WWI-era destroyers. On the other hand, Vixen and Viper (value 5) were destroyers, while Lion was a battlecruiser. Birmingham (value 6) was a light cruiser, and Eagle was an unfinished Chilean battleship that was converted to an early aircraft carrier. What’s more, the British navy had no Manchester between 1814 and 1937 and has never had a Surrey or Lancashire.'
		},
		{
			type: 'paragraph',
			text: 'Movement and combat is identical to L’Attaque except for some added specialized pieces (lower right). Minesweepers are like sappers, the only pieces that can eliminate a mine. The Mine Layers, on the other hand, act as mobile mines. They can move, but may not attack, and can be sunk only by a destroyer (value 4).'
		},
		{
			type: 'paragraph',
			text: 'Submarines sink all ships except Mine Layers, but are eliminated by Motor Torpedo Boats (value 2). The Flying Boat acts as a Scout, able to attack most other pieces to reveal them but with both pieces surviving. The Flying Boat also can move two squares instead of one, and can even jump over a known Mine and more importantly over the Harbour Wall. It can only be destroyed by Motor Torpedo Boats and Destroyers.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('dover-patrol-ships.jpg'),
				alt: 'Dover Patrol Ships',
				caption: 'Dover Patrol Ships'
			},
				{
				src: img('dover-patrol-special-units.jpg'),
				alt: 'Dover Patrol Special Units',
				caption: 'Dover Patrol Special Units'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The aerial game in the Gibson series is called Aviation. As in Dover Patrol, the board is very plain with a grid that is 8 rectangles wide and 12 deep. The only feature is the two-space Aerodrome in the middle of each end, and winning the game requires capturing the enemy Aerodrome.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('aviation-box-label.jpg'),
				alt: 'Aviation Box Label',
				caption: 'Aviation Box Label'
			}
		},
		{
			type: 'paragraph',
			text: 'The regular game pieces follow a normal progression, with values from 1 to 10.'
		},
		{
			type: 'paragraph',
			text: 'What’s interesting from a historical point of view is that the game shows a monoplane Scout as the lowest-value piece, followed by a biplane Bomber at 2, a Bristol Fighter at 3, a huge twin-tail biplane Battle Plane at 4 and then an Airship at 5 as the highest value single unit. Values from 6 to 10 are assigned to flights of three planes and full squadrons.'
		},
		{
			type: 'paragraph',
			text: 'The Bristol Fighter is the only named airplane model in the game. Known to many as the Brisfit, it was unusual because it was the only WWI two-seater that proved capable of dogfighting with the best.'
		},
		{
			type: 'paragraph',
			text: 'It was originally designed as a reconnaissance and artillery spotting plane. It then was given a more powerful engine and upgraded to a two-seat fighter. It first saw action at the Second Battle of Arras in April, 1917. Canadian pilot Andrew McKeever and his observer L.F. Powell shot down 38 enemy planes from their Bristol.'
		},
		{
			type: 'paragraph',
			text: 'In 1918, Number 11 Squadron of the Royal Air Force became the first unit ever to be equipped with radio communications, although only from the commander’s plane to others in his squadron. By war’s end, almost 1,600 were active. More than 5,000 were built before it was withdrawn from British service in 1932.'
		},
		{
			type: 'paragraph',
			text: 'Aviation included two innovations in game play. First was the introduction of ranged weapons. The playing pieces included Anti-Aircraft guns with ranges of 3, 4 and 5 spaces. These were restricted to the owner’s half of the board and were used in conjunction with either Searchlight or Observation Balloon pieces. When a Searchlight makes an attack (or when a balloon is attacked), there is no effect.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('aviation-airplane-pieces.jpg'),
				alt: 'Aviation Airplane Pieces',
				caption: 'Aviation Airplane Pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'However, a player can then shoot down the observed plane by demonstrating the ability to get an AA gun to attack position within a number of moves equal to its range.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('aviation-special-pieces.jpg'),
				alt: 'Aviation Special Pieces',
				caption: 'Aviation Special Pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'The second innovation was the use of air assault troops. The opposing base can only be captured by the Troop Carrier piece. This has a value of 4.5. Normally, a Troop Carrier that loses a battle is only put back on its home Aerodrome instead of being removed from the game. It can only be killed by an Airship that attacks it while still on home base.'
		},
		{
			type: 'paragraph',
			text: 'The most sophisticated game in the Gibson series is Tri-Tactics. This has a board that includes land and sea areas as well as a river and a lake.'
		},
		{
			type: 'paragraph',
			text: 'The mix of pieces includes land, sea and air units. The normal ranking of pieces applies to armies on land and fleet units at sea. Land units include Field Artillery, which has an effective value of 3, and Heavy Artillery, which kills all other land units except the lowly Battalion (value 1). Similarly, the Submarine kills all other pieces at sea, but is killed by a Seaplane.'
		},
		{
			type: 'paragraph',
			text: 'Then things get complicated. Scouts, Bombers and Battle Planes all shoot down Seaplanes when the space attacked is on land, but the reverse applies over sea areas. Ships adjacent to the coast or on a river are not affected by land units except Heavy Artillery, which kills them.'
		},
		{
			type: 'paragraph',
			text: 'Seaplanes can kill Battalions (1), Brigades (2) and Divisions (3) across a coastline. Anti-Aircraft units shoot down all planes but lose to lowly Battalions and to Field Artillery. Bombers can kill Battalions and Divisions as well as Heavy Artillery, but have no effect on troops. The combat results table is shown at right.'
		},
		{
			type: 'paragraph',
			text: 'Gibson offered each of its titles in up to four different versions: the basic box, a “superior” edition, an edition with more expensive metal-backed pieces like the French original, and a high-end version delivered in a mahogany box.'
		},
		{
			type: 'paragraph',
			text: 'A copy of an early version of L’Attaque with metal-backed pieces can be seen at the Strong Museum of Play in Rochester, New York. It has a larger rectangular box, equally plain but in dark blue rather than red. Even this higher-end edition does away with the useful retaining ribbons on the original French board.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('tri-tactics-cover-label.jpg'),
				alt: 'Tri Tactics Cover Label',
				caption: 'Tri Tactics Cover Label'
			},
				{
				src: img('tri-tactics-board.jpg'),
				alt: 'Tri Tactics Board',
				caption: 'Tri Tactics Board'
			},
				{
				src: img('tri-tactics-table.jpg'),
				alt: 'Tri Tactics Table',
				caption: 'Tri Tactics Table'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Gibson had great success with this series of games for decades. Over time, it updated the artwork to reflect more modern uniforms and units, but the games continued to be marketed into the 1970s, when it published its final version of L’Attaque.'
		},
		{
			type: 'paragraph',
			text: 'This edition had the same values for playing pieces, but changed the terrain to limit movement from one side of the board to the opponent’s side to five “bridges”. This created a different dynamic for attack and defense.n text and edit me. It\'s easy.'
		},
		{
			type: 'paragraph',
			text: 'In the meantime, publishers in other countries grabbed hold of the hidden set-up idea and put out variants. In Germany, Hugo Grafe published a game called Feldherrnspiel.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('att-5-rivers-complete.jpg'),
				alt: 'Att 5 Rivers Complete',
				caption: 'Att 5 Rivers Complete'
			},
				{
				src: img('feldherrn-box-cover.jpg'),
				alt: 'Feldherrn Box Cover',
				caption: 'Feldherrn Box Cover'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'This had a board seven spaces wide by 14 deep, and used triangular wooden pieces. The narrow side was the base; the angled side had a sticker with the rank and value facing the owning player; and the vertical blank side faced the opponent. The ranks were different but the effects very similar.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('feldherrn-full-set-up.jpg'),
				alt: 'Feldherrn Full Set Up',
				caption: 'Feldherrn Full Set Up'
			}
		},
		{
			type: 'paragraph',
			text: 'Shortly after the liberation of France in WWII, a French publisher came out with a version called La Guerre-Éclair, which translates as Lightning War or Blitzkrieg. Despite this name, the game oddly includes no units representing tanks or armor of any kind!'
		},
		{
			type: 'paragraph',
			text: 'It does, however, devote much attention to the impact of air power on ground combat. The powerful Bombardier (Bomber) pieces can fly over friendly pieces to attack the enemy. This destroys any other piece except an anti-aircraft gun (D.C.A. Volante) or the unusual Magnetic Fence, which somehow reaches into the sky to deactivate their motors. Bombers then return to their starting space. If their fuel truck (Auto Citerne Essence) is destroyed, they can make only one more mission and are then removed from play.'
		},
		{
			type: 'paragraph',
			text: 'The Bombe à Retardement (delayed-action bomb) is like a flying mine. It can be moved to any space on the board once, but then is stuck in place. Like a regular bomb, it destroys anything that attacks it except a Sapper.'
		},
		{
			type: 'paragraph',
			text: 'Flying Bombs act like Bombers but are removed as soon as they explode and eliminate an enemy. The Parachutist unit, with a value of 3, can be dropped on any empty space, and has the ability to destroy a Bomber on the ground.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('eclair-barriers.jpg'),
				alt: 'Eclair Barriers',
				caption: 'Eclair Barriers'
			},
				{
				src: img('eclair-air-force.jpg'),
				alt: 'Eclair Air Force',
				caption: 'Eclair Air Force'
			},
				{
				src: img('eclair-enlisted.jpg'),
				alt: 'Eclair Enlisted',
				caption: 'Eclair Enlisted'
			},
				{
				src: img('eclair-junior-officers.jpg'),
				alt: 'Eclair Junior Officers',
				caption: 'Eclair Junior Officers'
			},
				{
				src: img('eclair-senior-officers.jpg'),
				alt: 'Eclair Senior Officers',
				caption: 'Eclair Senior Officers'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The end of WWII through the use of atomic weapons led to an American variant, Ato-Blitz. Its wooden playing pieces include the usual ranked units, from three each of Private 1st Class, Corporal and Sergeant to one each of 2nd Lieutenant through four-star General.'
		},
		{
			type: 'paragraph',
			text: 'In addition, each player has 1 Airplane, 2 Tanks, 6 combined Anti-Aircraft and Anti-Tank guns, 6 Engineers, 3 Mines and 1 Atom Bomb. Players may set up their 38 pieces anywhere in the 44 yellow squares on their side of the board.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('ato-blitz-pieces.jpg'),
				alt: 'Ato Blitz Pieces',
				caption: 'Ato Blitz Pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'The rules for the special units are similar. Tanks eliminate any infantry unit, but lose to both planes, guns and mines. The Engineer units eliminate Mines, but lose to any other unit. Mines cannot move, but eliminate any unit except the Engineer. The guns kill planes, tanks and engineers, but lost to any other piece.'
		},
		{
			type: 'paragraph',
			text: 'The game’s major innovation is the Atomic Bomb. As soon as it is used to attack or is attacked, it is removed from the game along with along with every unit in the eight adjacent spaces, enemy or friendly!'
		},
		{
			type: 'paragraph',
			text: 'There are two major changes in the movement and attack rules. First, pieces may be moved diagonally as well as forward, back or to either side.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('ato-blitz-box-top.jpg'),
				alt: 'Ato Blitz Box Top',
				caption: 'Ato Blitz Box Top'
			}
		},
		{
			type: 'paragraph',
			text: 'The only exception is that attacks on the fort must come from directly in front or to the sides.'
		},
		{
			type: 'paragraph',
			text: 'Second, once a piece is revealed through battle, it remains exposed, with its face toward the opponent. The first change makes attacks much more flexible; the second significantly reduces the memory part of the game.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('stratego-jumbo-box-cover.jpg'),
				alt: 'Stratego Jumbo Box Cover',
				caption: 'Stratego Jumbo Box Cover'
			},
				{
				src: img('stratego-jumbo-pieces.jpg'),
				alt: 'Stratego Jumbo Pieces',
				caption: 'Stratego Jumbo Pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'It was during WWII that L’Attaque reached its final and most popular form. Initially patented in the Netherlands in 1942, Stratego was brought to market after the war by Dutch-based Jumbo games. Stratego essentially returned the form to its simplest roots. About the only difference from L’ Attaque is an increase to 40 pieces from 36, and a board size of 10 spaces by 10, with two four-space lakes in the middle.'
		},
		{
			type: 'paragraph',
			text: 'Perhaps because of its publication immediately after the carnage of WWII, the rules declare that while a game of strategy is “apt to raise thoughts of warfare… the publishers have had no intention to present a game of war; this particular form has only been chosen because the military order of rank is so eminently suited to assign a certain value to the different pieces.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('1812-board.jpg'),
				alt: '1812 Board',
				caption: '1812 Board'
			}
		},
		{
			type: 'paragraph',
			text: 'The hidden set-up game took two huge steps toward better simulation of warfare in 1972, from Canadian company Gamma Games, based in Vancouver, British Columbia. Gamma’s first innovation was to turn the boards into maps of historical campaigns and battles, with forces representing real troops. Secondly, it added the uncertainty of combat to the fog of war.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('1759-2-blocks.jpg'),
				alt: '1759 2 Blocks',
				caption: '1759 2 Blocks'
			}
		},
		{
			type: 'paragraph',
			text: 'Wooden blocks replaced the stand-up cardboard of L’ Attaque, and pieces now had variable strengths. The blocks have pips along one or more of the sides facing the owning player. The current value of a piece is shown by the number of pips along its uppermost side. The strongest units start with four pips, while the weakest has only one.'
		},
		{
			type: 'paragraph',
			text: 'Multiple pieces can occupy a location and move together from one to another. On each turn, a player can move only one group of pieces. In War of 1812 (above), pieces move along dotted lines. In 1759 (right and below), historical roads are shown, but pieces move from one named area of the map to an adjoining one.'
		},
		{
			type: 'paragraph',
			text: '1759, based on the British invasion of New France during the Seven Years\' War, has additional rules. First, when British units want to move across the St. Lawrence River, they first must position ships in the right zone. Each ship allows one army piece to cross. Second, as the British capture each area, the local French militia is disbanded, wherever it may be. Finally, if the British have not captured Quebec City when time runs out, the French win.'
		},
		{
			type: 'paragraph',
			text: 'When opposing pieces occupy the same location after a move, each side rolls dice, one die per pip. Each roll of 6 causes one casualty. Casualties are taken by rotating the piece hit, so that the side with one fewer pips moves to the top. A hit on a piece with only a single pip remaining eliminates it. Either side may retreat instead of firing. Importantly, the defending units in a combat fire first.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('1759.jpg'),
				alt: '1759',
				caption: '1759'
			},
				{
				src: img('1759-board.jpg'),
				alt: '1759 Board',
				caption: '1759 Board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The next step was a game called Napoleon, which recreated the French emperor’s final campaign toward Waterloo in 1815. This game added three new wrinkles.'
		},
		{
			type: 'paragraph',
			text: 'First, it added logistics in the form of movement restrictions. While the board offers a much broader web of roads for manoeuver, each road is limited to a certain number of blocks. Bringing a large army together requires careful planning, all of which can go out the window if the other side manages to move to avoid combat. The second change introduced unit types: infantry, cavalry and artillery. Cavalry have the ability to move two spaces instead of one on the map. Thirdly, the game introduced tactics in the form of three-column battles when larger combinations of units meet.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('napoleon-columbia-4ed-box.jpg'),
				alt: 'Napoleon Columbia 4ed Box',
				caption: 'Napoleon Columbia 4ed Box'
			}
		},
		{
			type: 'paragraph',
			text: 'If both sides have at least three units, players set up on a tactical board. Still with pieces hidden from the opponent, players allocate their available pieces across three columns (left, center and right) and potentially also in reserve. Artillery can fire at the enemy positions opposite, but cavalry and infantry must move forward to attack, accepting the enemy’s fire before unleashing their own.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('napoleon-map-board.jpg'),
				alt: 'Napoleon Map Board',
				caption: 'Napoleon Map Board'
			},
				{
				src: img('napoleon-tactical.jpg'),
				alt: 'Napoleon Tactical',
				caption: 'Napoleon Tactical'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'If one side succeeds in eliminating one of the three wings of the opponent, its units in that column then get flanking fire on their next attacks – hitting on a 5 or 6 instead of just a six.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('borodino-box.jpg'),
				alt: 'Borodino Box',
				caption: 'Borodino Box'
			}
		},
		{
			type: 'paragraph',
			text: 'The “blocks” concept has evolved steadily from there. Gamma Two became Columbia Games, which then began applying the mechanic to modern warfare. Its first offering, Victory, was a “sandbox” game, allowing multiple scenarios on geomorphic maps rather than historical locations. More recent block games have covered everything from individual battles to strategic warfare.'
		},
		{
			type: 'paragraph',
			text: 'Borodino, for instance, recreates the climactic battle of Napoleon’s disastrous invasion of Russia. It has a multi-colored area control map featuring swamps, woods, villages, rivers and slopes, as well as the prepared Russian redoubts.'
		},
		{
			type: 'paragraph',
			text: 'There are 100 blocks in total, representing divisions and brigades as well as commanders. A unit will only move if ordered by its own corps commander or an army commander, who must be within his command range, from 1 to 3 areas.'
		},
		{
			type: 'paragraph',
			text: 'In addition to dividing units by type (infantry, cavalry, artillery) and strength, the game assigns each unit a quality rating. Each block’s firepower is rated by a letter (A, B or C) and a number (1, 2 or 3). The letter determines the firing sequence: A units fire first, followed by B and then C, with opposing units of the same rating firing simultaneously. The number represents the die roll needed to inflict a hit: a 1 for a 1 unit, a 1 or 2 for a 2 unit and 1 through 3 for a 3 unit.'
		},
		{
			type: 'paragraph',
			text: 'At an entirely different scale, Triumph and Tragedy is a three-player game (Western Allies, Axis and Soviet) covering the European theatre from 1936 to 1945. Players must pay attention to industrial strength, access to resources and available population. Within these constraints, they must choose between building up their military strength, improving military technologies, adding industrial capacity, exerting diplomatic influence and retaining movement capacity for military forces. Territory can be gained diplomatically as well as militarily, and it is possible (though not likely) for a player to win without going to war at all.'
		},
		{
			type: 'paragraph',
			text: 'Combat remains basically the same. Attacking blocks move into a defending area, and both sides roll dice, eliminating an enemy strength point with a six. However, the type of unit and level of technology determine the order in which units fire. Forts always fire first, followed by air, then armor and finally infantry. Within each category, defender fires first unless the attacker has superior technology.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('triumph-and-tragedy-box.jpg'),
				alt: 'Triumph And Tragedy Box',
				caption: 'Triumph And Tragedy Box'
			}
		},
		{
			type: 'paragraph',
			text: 'The chance of a hit varies by attacker and target: air units hit each other on a 1-3 on a D6, but hit land units only on a 1. Armor fires before infantry, but hits on a 1 or 2, while the infantry scores on a 1, 2 or 3. Similar rules affect combat at sea.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('bite-box.jpg'),
				alt: 'Bite Box',
				caption: 'Bite Box'
			}
		},
		{
			type: 'paragraph',
			text: 'The modest concept of blocks has been applied ever more complex games. Blocks in the East is based on the German invasion of Russian in WWII. It has a strategic level that includes levels of industry and technology as well as strategic bombing and access to petroleum. Industry is needed to build and rebuild units. Technology affects how well different kinds of units fight. Petroleum limits the number of armor moves by the German player. The map is colorful and detailed. Terrain includes rivers, lakes, mountains, forests and cities, each of which have an effect on combat.'
		},
		{
			type: 'paragraph',
			text: 'The units themselves have a complex set of markings. These indicate the type of unit (infantry, armored infantry, mountain, armor, artillery and air) as well as nationality and effectiveness. Elite units fight more effectively, but any step marked in red costs twice as much to replace. Headquarters units must be close enough to command units for an offensive. Command points are limited, forcing players to focus their efforts.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('bite-map.jpg'),
				alt: 'Bite Map',
				caption: 'Bite Map'
			},
				{
				src: img('bite-blocks.jpg'),
				alt: 'Bite Blocks',
				caption: 'Bite Blocks'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Little did Hermance Edan know what she was starting when she proposed her modest game. The concept of hidden unit set-up and movement has become, more than a century later, one of the key mechanisms for recreating historical wars and battles on the tabletop.'
		}
	]
};
