import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/preparing-for-war/${name}`;

export const preparingForWar: StoryContent = {
	slug: 'preparing-for-war',
	title: 'Preparing for War',
	blocks: [
		{
			type: 'paragraph',
			text: 'Dennis Wheatley was a prolific and well-known novelist, publishing more than 70 books starting in 1933. His first book, The Forbidden Territory, was published in 1933 and had to be reprinted seven times in seven weeks. Like that book’s fictional hero, the Duc de Richleau, Wheatley was an ardent conservative and monarchist who regarded war as an evil inflicted by ambitious and unscrupulous politicians. Wheatley hated both Nazism and Communism and believed the latter was controlled by Satanic power.'
		},
		{
			type: 'paragraph',
			text: 'That view fitted with his intense interest in the occult, which played a big role in many of his popular novels. While writing was his primary interest, he used his fame as a writer to design and publish a couple of games in the late 1930s that anticipated the war to come.'
		},
		{
			type: 'paragraph',
			text: 'Wheatley was a reserve Flight Lieutenant in the Royal Airforce as the war arrived, and in 1941, he was appointed as the air force representative to the London Controlling Section. The LCS was set up as a secret organization within the Joint Planning Staff of the War Office. Its mission was strategic deception, including the use of double agents and the famous code-breaking operation at Bletchley Park. Its largest scheme was the successful effort to persuade the German high command that the 1944 European invasion would be aimed at the Pas de Calais rather than Normandy. Wheatley wrote numerous papers for the war office, including one on how to deal with a possible Nazi invasion of Britain and one on Total War.'
		},
		{
			type: 'paragraph',
			text: 'His first game, Dennis Wheatley’s Invasion, used his novelist fame as a marketing tool in 1938.'
		},
		{
			type: 'paragraph',
			text: 'This is a strategy game for four players, each controlling a country. The ocean is marked with a square grid, while land movement is a network of connections between key points on the map.'
		},
		{
			type: 'paragraph',
			text: 'While the geography is similar to that of England, the North Sea and the Northern Europe, he chose to use fictional country names.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('wheatley-invasion-label.jpg'),
				alt: 'Label for Dennis Wheatley\'s Invasion',
				caption: 'Dennis Wheatley\'s Invasion'
			}
		},
		{
			type: 'paragraph',
			text: 'The first three, Angleland, Franken and Danereich are geographically similar to England, France and Germany. The fourth power, Ruslavia, is clearly intended to represent Russia, but is land-bound on the eastern segment of the board and borders both Franken and Danereich.'
		},
		{
			type: 'paragraph',
			text: 'The map includes many tongue-in-cheek placenames. Daneland has the border forts of Donner and Blitz. The western border of Ruslavia includes Spit and Polish, facing Franken towns like Patéburg and La Garconiere. In Angleland can be found the quaint villages of Damnithall and Whatamess.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('wheatley-invasion-donner-and-blitz.jpg'),
					alt: 'Donner and Blitz border forts on Dennis Wheatley\'s Invasion board',
					caption: 'Donner and Blitz'
				},
				{
					src: img('wheatley-invasion-spit-and-polish.jpg'),
					alt: 'Spit and Polish on Dennis Wheatley\'s Invasion board',
					caption: 'Spit and Polish'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Starting countries are determined by a die roll. Highest roll gets first pick, then second and so on. The highest and lowest rolling players then become allies against the other two. The playing pieces include three shapes of colored wooden blocks: cubes for army divisions, pyramids for air units and diamonds for naval formations. The game winner is the first player to get four army pieces into the four spaces surrounding an enemy capital.'
		},
		{
			type: 'paragraph',
			text: 'In the simple game, only armies are used. In turn, each player rolls two dice. The total is the number of pieces that may be moved. Each army may only move to one adjacent space in a turn. Some spaces are fortified. In order to advance into a fortified space, one of the die rolls must be a natural six.'
		},
		{
			type: 'paragraph',
			text: 'A single division will push back an enemy division. To eliminate an enemy division, a player must move two divisions to the enemy space by two different roads.'
		},
		{
			type: 'paragraph',
			text: 'Normally, only one division may occupy a space. However, if two divisions arrive at the same space by two different roads (whether via battle or just movement), they can be stacked into a corps.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('wheatley-invasion-full-setup-cropped.jpg'),
				alt: 'Full setup for Dennis Wheatley\'s Invasion',
				caption: 'Invasion setup'
			}
		},
		{
			type: 'paragraph',
			text: 'It then takes two pips on a die to move a corps by one space, but a corps can eliminate a division by moving into its space.'
		},
		{
			type: 'paragraph',
			text: 'When opposing corps meet, the same rules apply: eliminating a corps requires two corps converging on the target from different directions. There is a special rule for capital cities. Divisions defending their capital have their backs against the wall and can be eliminated one for one.'
		},
		{
			type: 'paragraph',
			text: 'To move across seas to an allied country, a player must roll a natural six. This allows the move of a single division from a fortified port to an ally’s fortified port. To invade an enemy country by sea requires a roll of double 5 or double 6. This allows a player to move two divisions from fortified ports to a single unoccupied town on the enemy coast. This then becomes a base that enables additional pieces to invade as a normal move.'
		},
		{
			type: 'paragraph',
			text: 'In the advanced game, each power gets a different mix of army, navy and air pieces. In the starting setup shown below, Angleland rules the seas with nine naval units. Daneland gets six, Franken four and Ruslavia none. Ruslavia, on the other hand, starts with 10 armies and 10 air units.'
		},
		{
			type: 'paragraph',
			text: 'Some units start on the board. The rest are in reserve and can be added during the game. Army divisions must start in the capital or major towns. Navy fleets start on coastal squares. Air units start on a country’s air bases.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('wheatley-invasion-angleland-view.jpg'),
				alt: 'Angleland view of advanced game setup for Dennis Wheatley\'s Invasion',
				caption: 'Angleland view'
			}
		},
		{
			type: 'paragraph',
			text: 'Army divisions move as in the basic game, but for each enemy town taken, another army may be brought into play from the reserve. Naval units move the same way (one space per pip, maximum one space each turn), but can move in any direction on the sea, including diagonally. However, they fight differently. A naval unit moving forward forces the nearest enemy naval unit back one space toward one of its own ports. If forced into a port, it becomes bottled up and can only get out again on a roll of 6.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('wheatley-invasion-box-contents.jpg'),
				alt: 'Box contents for Dennis Wheatley\'s Invasion',
				caption: 'Invasion box contents'
			}
		},
		{
			type: 'paragraph',
			text: 'Instead of moving ships, a player may try to sink an enemy fleet. To do this, he must have two naval units close enough to an enemy that the combined range is less than or equal to the total of the two dice rolled.'
		},
		{
			type: 'paragraph',
			text: 'For instance, if one friendly unit is three spaces from the enemy and another is four away, any roll of 7 or more will kill the enemy. Excess pips can be used for other moves. Sinking an enemy unit allows a reserve naval unit to be brought into play.'
		},
		{
			type: 'paragraph',
			text: 'Air units use yet another mechanism. They make air raids from a friendly base that can attack an unoccupied fort, a naval unit or an air base. After rolling his dice, the moving player may announce an air raid and specifies the target. The defending player then also rolls two dice. If the attacker total is lower, the raid fails and the attacking piece is lost.'
		},
		{
			type: 'paragraph',
			text: 'If the attacker roll is higher, the fort is eliminated for movement purposes, the fleet unit is eliminated, and an air base may be occupied. If a defending base has a single air unit on it, the defending piece is eliminated and the attacking piece stays on the base. That base then remains out of play. If occupied by more than one piece, one defender is eliminated and another raid is needed to occupy it. In all cases, successful raids allow the addition of a piece from reserves.'
		},
		{
			type: 'paragraph',
			text: 'His second game, Dennis Wheatley’s Blockade, was published in 1939. This is less about combat and more about using navies and air forces to hurt an opponent\'s economy. The playing pieces represent surface fleets, submarines and air forces.'
		},
		{
			type: 'paragraph',
			text: 'Most of the board is ocean, again marked with a grid for movement. And again the four nations have fake names: Cockayne, Leoland, Adlerreich and Ursinia. The first two share an island in the middle of the board; the latter have a land border and occupy the northern reaches.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('blockade-label.jpg'),
					alt: 'Label for Dennis Wheatley\'s Blockade',
					caption: 'Dennis Wheatley\'s Blockade'
				},
				{
					src: img('blockade-map-board.jpg'),
					alt: 'Map board for Dennis Wheatley\'s Blockade',
					caption: 'Blockade board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Wheatley was one of many designers to develop strategy games between the two World Wars. All of them offered the play of a game, but focused on game boards and rules for moving pieces that would train players to think strategically.'
		},
		{
			type: 'paragraph',
			text: 'The earliest probably was Marine-Schach, published in 1921. Despite the use of the word "chess", the board moves away from the traditional square grid. Instead, it shows a sea area with a harbor at each end and four islands, one in each quarter of the board. Across the board is a network of dots connected by lines. Each dot is designated by row (letter) and column (number).'
		},
		{
			type: 'paragraph',
			text: 'There are two novel features to the game. First, each of the pieces is assigned a numerical value, something only seen before on land in L\'Attaque.'
		},
		{
			type: 'paragraph',
			text: 'Each player gets one flagship and one heavy cruiser, each with a combat value of 4, one light cruiser with a value of 3, three torpedo boats each worth 2, and minesweeper worth just 1.'
		},
		{
			type: 'paragraph',
			text: 'Each player also gets a land battery with a value of 4, and eight mines that serve only to block movement. These pieces can be carried by ships, which can drop off mines at sea and move the battery to one of the islands.'
		},
		{
			type: 'paragraph',
			text: 'The second novel feature is the combat system. It works more like Japanese Go than traditional chess.'
		},
		{
			type: 'paragraph',
			text: 'All ships start in their harbor. Each turn, a player moves one ship either one or two dots in any direction. Stronger ships do not eliminate enemies by moving adjacent, as in L\'Attaque. Rather, a weaker enemy must retreat.'
		},
		{
			type: 'paragraph',
			text: 'In determining relative strength, all ships adjacent to the contested space are added up. A player may not move a ship onto a space that is covered by superior firepower. And no ship may move to a space occupied by a mine or by another ship of either side.'
		},
		{
			type: 'paragraph',
			text: 'The only way to eliminate an enemy is to surround it with superior force, leaving it nowhere to retreat. A player wins either by destroying the opposing flagship, or moving a ship to the enemy\'s harbor.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('marine-s-box-cover.jpg'),
					alt: 'Box cover for Marine-Schach',
					caption: 'Marine-Schach'
				},
				{
					src: img('marine-s-board.jpg'),
					alt: 'Board for Marine-Schach',
					caption: 'Marine-Schach board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'While many inter-war strategy games remained fairly abstract, they often tried to model the impact on battle of newly developed weapons and types of units.'
		},
		{
			type: 'paragraph',
			text: 'One of the earliest such games was developed by a WWI German soldier whose home town of Danzig became an oddly governed region of Poland as a result of the 1918 peace settlement. E. Steyr had enjoyed games as a child, and wanted to design one with soldiers.'
		},
		{
			type: 'paragraph',
			text: '“The war experience enriched this thought in me,” he said in the introduction to the rules of his 1934 game Friegur. “Added to this was the desire… to cling to and cultivate soldierly beings, as an opposition to pacifist thinking and an all-too-fast forgetfulness of the former greatness of the army and defense, and as proof that defensive thinking is firmly present in our people.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('friegur-box-top.jpg'),
				alt: 'Box top for Friegur',
				caption: 'Friegur'
			}
		},
		{
			type: 'paragraph',
			text: 'He did not have enough money to pursue publication of a game during the 1920s. In any case, he felt that trying to publish a war game in those days was a recipe for condemnation rather than profit.'
		},
		{
			type: 'paragraph',
			text: 'The timing of the game’s eventual publication is significant. Hitler had just come to power in Germany, and ethnic Germans in cities like Danzig were already agitating for a return to the Fatherland. Steyr also wrote that the game was published to commemorate the 20th anniversary of the beginning of WWI. He dedicated it to a fallen comrade in that conflict, Hans Kowalt.'
		},
		{
			type: 'paragraph',
			text: 'What’s more, the title of the game is an acronym which he said stands for “Feldgraue rangen in Ehren, gewannen unsterblichen Ruhm” (“Field grays fight with honor, gaining immortal fame”). He makes it clear that the goal of his game is not simply amusement, but to strengthen his Fatherland through the innocuous means of a game. He wraps up his introduction with the Latin phrase “pro patria est, dum ludere videmur” (for our country, whilst we seem to play).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('friegur-board.jpg'),
				alt: 'Board for Friegur',
				caption: 'Friegur board'
			}
		},
		{
			type: 'paragraph',
			text: 'The Friegur board has light and dark squares like chess. However, it is larger, 14 by 15, with the longer side facing the players.'
		},
		{
			type: 'paragraph',
			text: 'The light and dark squares do not alternate. Rather, the dark squares are clustered in groups of six, which overlap in an “X” shape across the board.'
		},
		{
			type: 'paragraph',
			text: 'The dark squares are called artillery areas and represent defensive terrain or obstacles, including forest, mountain, swamp, rivers and barbed wire. The squares with diagonal lines running through represent barriers. Clear brown squares are called rider or maneuver spaces. The light squares are called minefields.'
		},
		{
			type: 'paragraph',
			text: 'The brown spaces can be used by all pieces except the mortar. The crosses in some of these squares have no impact on movement or combat. The four-square green-bordered boxes are fortresses, the main objectives of the game.'
		},
		{
			type: 'paragraph',
			text: 'Squares are identified by row and column using a combination of the letters and numbers printed on the edge of the board. The board is divided into three main areas: a homeland for each player in the first four rows on each side, and a battle space in between. Off-centre at the back of each homeland stands the fortress: a four-square bastion that is the main target of the attacker.'
		},
		{
			type: 'paragraph',
			text: 'The pieces are shaped in the form of various types of military units. Their movement and attack capabilities on the board are intended to represent the unique features of these units in battle. Infantry is the basic unit, and acts like a chess pawn. It moves one space forward, and attacks one space diagonally forward. As in checkers, it can be promoted to an Officer if it reaches the final rank of enemy territory.'
		},
		{
			type: 'paragraph',
			text: 'Similarly, the Flag piece is like a chess king, but “embodies the honor, the freedom of the nation and the understanding of the Fatherland”. It moves or attacks one space in any direction. However, the Flag must remain in the fortress unless it is penetrated by the enemy, and is then restricted to moving within its homeland. The other pieces have a wide range of moves and attacks.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('friegur-pieces-inside-box.jpg'),
				alt: 'Bakelite playing pieces from Friegur inside the box',
				caption: 'Friegur pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'An Officer is the most powerful. It represents “the storm troopers, front line and staff officers, courage, honor and ingenuity.” Initially Officers can move forward or sideways through any number of empty spaces, and may move backward only to dark squares or to attack. After at least one gate to the enemy fortress has been captured, they gain the power to move or attack in any direction, including diagonally.'
		},
		{
			type: 'paragraph',
			text: 'The Rider, representing cavalry, can move only on dark squares. However, it can move diagonally along a line of dark squares or jump horizontally or vertically over a white square, even if a friendly or enemy piece is located there. In the battleground area, it may jump as many as four white squares in a straight line.'
		},
		{
			type: 'paragraph',
			text: 'The Flyer, representing air forces, is the most mobile. It can move and attack across any number of empty spaces in any direction, and can even ignore friendly pieces in the way. Tanks, like chess castles, can move any number of spaces, but only horizontally or vertically. The Gun, representing artillery, can move and attack only along diagonal dark lines, while the Mortar can attack only white spaces.'
		},
		{
			type: 'paragraph',
			text: 'The winning conditions differ significantly from chess. To win, a player must capture both gates to the enemy fortress and the enemy Flag piece.'
		},
		{
			type: 'paragraph',
			text: 'However, certain achievements provide extra benefits or penalties. For instance, a player who loses one fortress gate and his flag may no longer promote infantry to officers.'
		},
		{
			type: 'paragraph',
			text: 'The game box is very plain and the game board fairly bland. The game pieces however, stand out. They are made from red and black bakelite (plastic), and they are huge. The airplane even comes with a stand so that it towers over the board.'
		},
		{
			type: 'paragraph',
			text: 'They are shown here beside the board and pieces from Wehrschach Tak-Tik, a similar-looking game published in 1938 by the German army. With its name translating as “war chess”, the latter game is both much smaller and more similar to regular chess than Friegur. The Wehrmacht produced its game as a military training aid but it became very popular.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('friegur-and-wehrschach-pieces-on-boards-2.jpg'),
				alt: 'Friegur and Wehrschach pieces on their boards',
				caption: 'Friegur and Wehrschach'
			}
		},
		{
			type: 'paragraph',
			text: 'The Wehrschach board is square, with 11 spaces per side. The board is also checkered like a regular chess board, with alternating black and white squares. However, the game adds several lines that affect the game.'
		},
		{
			type: 'paragraph',
			text: 'As in Friegur, the bumpy lines across the third and ninth ranks represent each of the opposing country’s borders. The dashed diagonal line is a highway. The long wavy line across the other diagonal is a river. The two white squares filled with wavy lines are “seas”. Each player gets 18 pieces: six infantry, three tanks, two fighter planes, two bombers, four artillery pieces and one eagle-shaped Leader piece that is supposed to symbolize the civilian, military and economic forces and reserves of each player.'
		},
		{
			type: 'paragraph',
			text: 'All pieces can only move orthogonally: forward, back, right or left. Infantry pieces move one space, the Leader two, tanks three, artillery four and airplanes five.'
		},
		{
			type: 'paragraph',
			text: 'Tanks can effectively move diagonally because their three moves can include one or more right angle turns.'
		},
		{
			type: 'paragraph',
			text: 'Airplanes can fly over other pieces, friendly or enemy, but not artillery (which includes anti-aircraft guns).'
		},
		{
			type: 'paragraph',
			text: 'Tanks and infantry can move four spaces along the highway. All pieces can cross the river, but none except airplanes can move along it.'
		},
		{
			type: 'paragraph',
			text: 'No piece can move onto a sea space, but airplanes can pass over.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('wehrschach-box-top.jpg'),
					alt: 'Box top for Wehrschach Tak-Tik',
					caption: 'Wehrschach Tak-Tik'
				},
				{
					src: img('wehrschach-board.jpg'),
					alt: 'Board for Wehrschach Tak-Tik',
					caption: 'Wehrschach board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'What makes the game unusual is its emphasis on maneuver. Enemy pieces can only be captured by a combination of two attacking units. This is what makes tanks especially valuable, since they can attack from an angle. Also, artillery can fire over the heads of another unit, enabling a double attack up a single file. Similarly, aircraft can fly overhead to attack.'
		},
		{
			type: 'paragraph',
			text: 'Enemy pieces also can be eliminated by surrounding them. If an enemy finds itself in the middle of a sandwich along any line including diagonal, it must move or disrupt the enemy formation on its turn or be eliminated. Either attacking piece (except artillery) then moves into the conquered square.'
		},
		{
			type: 'paragraph',
			text: 'There are five ways to win: occupy five spaces of the opponent’s home territory with ground forces; leave the enemy with fewer than five ground pieces; eliminate all enemy infantry; eliminate the enemy leader; or leave the enemy without a legal move. After a player makes a winning move, the other player may also make a move if it is possible for him to meet one of the victory conditions as well. This creates a tie.'
		},
		{
			type: 'paragraph',
			text: 'Another German wargame was still smaller in size and more focused on tactical military thinking. Gloria Victoria, featured earlier on the page Recruiting for War, has a cover that features happy and fine-featured young German soldiers marching off to war. The game comes in an envelope rather than a box. The board is made of light cardboard, and so are the pieces.'
		},
		{
			type: 'paragraph',
			text: 'The board is eight squares wide and 11 spaces deep, with blue squares on one side and red on the other, and the middle row half and half. There are only two terrain features: a downed bridge and a shell hole, neither of which cannot be entered or crossed.'
		},
		{
			type: 'paragraph',
			text: 'Players have 18 pieces each. They start by putting eight of them across each of the two closest rows, keeping two pieces in reserve.'
		},
		{
			type: 'paragraph',
			text: 'Each player gets four rifle units, three each of assault troops and machine guns, two each of tanks, artillery and flak (anti-aircraft) guns, and a single fighter plane and bomber.'
		},
		{
			type: 'paragraph',
			text: 'Each of the cardboard playing pieces is marked with lines and perpendicular dashes showing how far and in which direction each piece can move and attack. The bomber has unlimited move diagonally, while the fighter can do the same or move a single space in any orthogonal direction.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('gloria-board.jpg'),
					alt: 'Board for Gloria Victoria',
					caption: 'Gloria Victoria'
				},
				{
					src: img('gloria-uncut-red.jpg'),
					alt: 'Uncut red playing pieces from Gloria Victoria',
					caption: 'Gloria Victoria pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Another German strategy game of the period was Das Bunkerspiel, which came in a small box and was played with smaller wooden pieces on a rather plain chess-type board.'
		},
		{
			type: 'paragraph',
			text: 'Each player gets one stormtrooper (the largest piece), one sergeant (next largest), two machineguns (disks) and eight soldiers (small cylinders). As in chess, each type of piece has different powers. The objective is to seize the opponent\'s bunker.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('bunkerspiel-box-cover-rules.jpg'),
					alt: 'Box cover and rules for Das Bunkerspiel',
					caption: 'Das Bunkerspiel'
				},
				{
					src: img('bunkerspiel-board-setup-overhead.jpg'),
					alt: 'Overhead view of Das Bunkerspiel board setup',
					caption: 'Bunkerspiel setup'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'With a similar title and theme, Bunker from Stomo-Spiel in Austria has much fancier graphics, at least on the board. It also may be the first wargame to feature a hexagonal grid to govern movement. It can be played by two or four players, starting in opposite corners. Each player represents one of the four armed services: army, air force, navy and coastal defense.'
		},
		{
			type: 'paragraph',
			text: 'Each player gets 5 pawns and 2 domed bunkers. There are two dice. One is numbered from 1 to 3. The other has colored sides, divided between white, black, blue and red.'
		},
		{
			type: 'paragraph',
			text: 'Each player has a 25-space starting area surrounded by barbed wire. Each player represents a different armed service: army, air force, navy or coastal defense.'
		},
		{
			type: 'paragraph',
			text: 'Players place their pieces on the five hexes of their color. They also secretly record three minefields on numbered hexes within their defensive perimeter.'
		},
		{
			type: 'paragraph',
			text: 'In turn, a player rolls both dice, and moves one piece in a straight line by the number shown. However, the direction of the move is determined by the color on the other die. White means moving in one of the two forward directions (toward the enemy), black backward and blue sideways, while red allows the player to choose.'
		},
		{
			type: 'paragraph',
			text: 'The playing piece must move the exact number over open spaces unless ending on an enemy, capturing it. A unit landing on water or a minefield is eliminated. Landing on the red center hex, however, grants a card with special moves that can be used immediately or held for later use.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('bunker-box-cover.jpg'),
					alt: 'Box cover for Bunker',
					caption: 'Bunker'
				},
				{
					src: img('bunker-board.jpg'),
					alt: 'Hexagonal board for Bunker',
					caption: 'Bunker board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'A player who gets all five pieces into the enemy\'s five starting hexes wins. Since this is only possible if a player loses no units, the winner is often determined on points. Players get 5 points for each friendly piece in the enemy base, 2 for each enemy piece captured and 3 per surviving piece.'
		},
		{
			type: 'paragraph',
			text: 'In America, Corey Games Co. took a very different approach that year with Strategy: The Game of Armies. Although Wehrschach’s playing pieces stand out for the bright colors and design, its box and board are somber, mostly black and white. Strategy’s cover art can only be described as garish. A caricature of a Roman god stands holding the entire globe, while airplanes buzz off his shoulder and tanks and guns march across the foreground. It is a dazzle of primary colors: yellow, red and blue.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('strategy-box-top.jpg'),
				alt: 'Box top for Strategy: The Game of Armies',
				caption: 'Strategy'
			}
		},
		{
			type: 'paragraph',
			text: 'The board too is colorful if more functional. It is much larger (32 by 45 squares), and is divided into 62 “sectors” or groups of squares, each in different shades of white, pink, red or yellow. There also are terrain features including impassable forests and swamps, a large river crossing diagonally between the opponents, and five bridges across the river.'
		},
		{
			type: 'paragraph',
			text: 'However, despite the images of planes and tanks on the box, the game includes only two types of pieces: infantry and guns. The emphasis is on movement rather than firepower.'
		},
		{
			type: 'paragraph',
			text: 'Each player gets 20 pieces: four guns and 16 infantry. These all start in the Barracks, an area next to each player’s capital city.'
		},
		{
			type: 'paragraph',
			text: 'There is an element of luck: each player in turn rolls two dice, and the total is the number of spaces that may be moved. A roll of “7”, for instance, allows one piece to move seven squares, seven pieces one square each, or some combination thereof.'
		},
		{
			type: 'paragraph',
			text: 'The guns are extremely powerful both on offense and defense. A gun moving into a new region kills all enemy pieces there. Pieces may not move into a region containing a gun. A gun can also capture an infantry piece by moving directly into its square (unless the infantry has a friendly gun in its sector). Infantry units block each other, but do not capture enemy pieces.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('strategy-board.jpg'),
				alt: 'Board for Strategy: The Game of Armies',
				caption: 'Strategy board'
			}
		},
		{
			type: 'paragraph',
			text: 'The goal is to get four pieces close enough to the enemy capital that they all can move into it on a single die roll. Because there are five bridges but only four guns per player, there will always be some path forward for attack (and vulnerability on defense). A single gun can probably move to contain a breakthrough faster than four infantry units can get to the capital, unless they have a gun escort too. There is a constant tension between offensive and defensive priorities. Despite the gaudy art, it is a game that provides good training in planning movement and managing the momentum of battle.'
		},
		{
			type: 'paragraph',
			text: 'A colorful British title of the same era was Campaign. This was published in 1940 by Wills and Hepworth, a company best known for children\'s books.'
		},
		{
			type: 'paragraph',
			text: 'Each side gets four tanks, four artillery and six infantry pieces. The objective is to get one of each type across the board to the opposing base. Movement is complicated not only by enemy pieces, but by a river running down the middle and fortifications on both sides of the river.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('campaign-1940-label.jpg'),
					alt: 'Label for Campaign 1940',
					caption: 'Campaign'
				},
				{
					src: img('campaign-1940-board.jpg'),
					alt: 'Board for Campaign 1940',
					caption: 'Campaign board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'While the board was abstract, the resemblance to the French-German front is surely no coincidence.'
		},
		{
			type: 'paragraph',
			text: 'The forts along the border reflect the French Maginot Line on the west side of the Rhine River, with the Siegfried Line on the east.'
		},
		{
			type: 'paragraph',
			text: 'The mighty river runs from neutral mountains in the south (Switzerland) to neutral flowering fields in the north (Netherlands). Tip-toeing through the tulips is not allowed in the game.'
		},
		{
			type: 'paragraph',
			text: 'In real life, of course, WWII saw Germany invade the Netherlands rather than leaving it neutral as it did in WWI.'
		},
		{
			type: 'paragraph',
			text: 'Invasion (no relation to Wheatley’s title) was another American wargame published just before that country entered the war.'
		},
		{
			type: 'paragraph',
			text: 'This is really just another chess-based game for two or four players. However, its playing pieces are colorful and have a nice twist. The equivalent of the chess king is a long open-topped limousine for the reigning monarch or dictator.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('invasion-box-cover.jpg'),
					alt: 'Box cover for Invasion',
					caption: 'Invasion'
				},
				{
					src: img('invasion-rules-front.jpg'),
					alt: 'Rules front for Invasion',
					caption: 'Invasion rules'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Conflict, published by Parker Bros. in 1940 while the U.S. was still at peace, added additional domains.'
		},
		{
			type: 'paragraph',
			text: 'The four-player game has a board with interconnected land and sea areas, and pieces representing land, sea and air forces. Land pieces only move on land and sea pieces only on sea, while air pieces can move over and end their moves on either.'
		},
		{
			type: 'paragraph',
			text: 'The board includes offset land and sea squares that both allow land units to cross a “bridge” to a central island and naval pieces to cross from one sea to another.'
		},
		{
			type: 'paragraph',
			text: 'The circles in the sea areas are minefields. They do not affect a friendly player (the one based in that quadrant of the board), but eliminates any other piece that ends on them. Players can place pieces on top of friendly minefields, which eliminates both pieces if the defender is captured.'
		},
		{
			type: 'paragraph',
			text: 'Movement is controlled by die rolls. In turn, players roll two dice. They must move two different pieces by the number of spaces equal to each of the dice.'
		},
		{
			type: 'paragraph',
			text: 'However, pieces are free to move horizontally, vertically or diagonally in any combination. Land and sea pieces capture an enemy by moving onto its square. Air pieces capture by moving over an enemy piece.'
		},
		{
			type: 'paragraph',
			text: 'Each player starts with some pieces in “reserve”, on a colored space in the central island. Any time the two dice roll a total of 7, the player may bring a reserve piece onto the board, starting from the corner home area.'
		},
		{
			type: 'paragraph',
			text: 'A player eliminates another player by moving a piece onto that player’s home base. The eliminating player takes all pieces captured by the loser, and any pieces that had been captured by that player are returned to the winner’s reserve. The winner is the last player standing.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('conflict-board-back-label.jpg'),
					alt: 'Back label for Conflict board',
					caption: 'Conflict'
				},
				{
					src: img('conflict-board-set-up.jpg'),
					alt: 'Conflict board set up for play',
					caption: 'Conflict setup'
				},
				{
					src: img('conflict-orange-pieces-closeup.jpg'),
					alt: 'Orange playing pieces from Conflict',
					caption: 'Conflict pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'All of these games had the same objectives: to get players thinking about the possibility of war, and to encourage them to think strategically – so that they might be more effective if called on to take part in the war to come.'
		}
	]
};
