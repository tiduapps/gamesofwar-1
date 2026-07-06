import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/the-big-picture/${name}`;

export const theBigPicture: StoryContent = {
	slug: 'the-big-picture',
	title: 'The Big Picture',
	blocks: [
		{
			type: 'paragraph',
			text: 'While Japan played a relatively small role in WWI, its game publishers gave a lot of attention to both the European and broader global conflict. The War in Europe, for instance, was published in Japan as an appendix to the Boys’ Club magazine issue of Jan. 1, 1916 (Vol. 3, No. 1). The board is a vivid stylized map of the European continent. The game can be played by two players or teams of up to three players each. The game provides six cut-out counters at the bottom, with Germany, Austria and Bulgaria representing the Central Powers and Russia, France and Britain the Allies.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('europe-full-board.jpg'),
				alt: 'Full board for The War in Europe',
				caption: 'The War in Europe'
			}
		},
		{
			type: 'paragraph',
			text: 'Locations noted include Vienna, Bosnia, Budapest, Constantinople, Rome, Trieste, Vienna, Munich, Mulhausen, Essen, Alsace-Lorraine, Hannover, Kiel, Bremen, Cologne, Nuremburg, Antwerp, Liege, Ostend, Riga and Warsaw. Their locations on the map, however, are a bit arbitrary.'
		},
		{
			type: 'paragraph',
			text: 'The Central Powers start from the fort at the top left and move along three possible routes on the upper half of the board toward the objective of Brussels.'
		},
		{
			type: 'paragraph',
			text: 'The Allies start from the fort at the bottom right and follow three tracks across the bottom half of the board toward Hamburg. Some of the movement spaces are geographical locations; some are hazards that push the piece backward or cause loss of a turn.'
		},
		{
			type: 'paragraph',
			text: 'The goal is to get all three pieces of one side to the starting fort of the opponents. Each side has three possible routes between the corners. The air route is the shortest but has the most hazards. An Allied player trying to cross the path showing the biplane (above right) has a four in six chance of either losing time (one or two turns) or being sent back (by three spaces or to start). The land routes is the longest, but has fewer hazards. The sea route, also shown above, offers a middle ground. Players must choose between risk and speed.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('europe-air-and-sea.jpg'),
					alt: 'Air and sea routes on The War in Europe board',
					caption: 'Air and sea routes'
				},
				{
					src: img('europe-german-reserves.jpg'),
					alt: 'German reserves on The War in Europe board',
					caption: 'German reserves'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Once a piece arrives at its objective location (Brussels or Hamburg), it must roll to try and enter the enemy fort.'
		},
		{
			type: 'paragraph',
			text: 'On a 1 or 6, it succeeds. Otherwise it loses a turn or gets sent to a hazard space (red circles not connected to the movement tracks). These include ambushes, trenches, barbed wire, land mines and bombing.'
		},
		{
			type: 'paragraph',
			text: 'On the turn after landing on such a space, the player’s roll determines the piece’s next location. Most rolls lead to a different hazard space.'
		},
		{
			type: 'paragraph',
			text: 'A few allow retreat to a rest area after which the piece can move normally. And a handful (no more than 1 in 6 on any given hazard) allow the piece to occupy the enemy fort.'
		},
		{
			type: 'paragraph',
			text: 'So while this is a roll-and-move game, it does force players to assess their risk tolerance in racing for the win. It also captures the frustration of trench warfare, with a potentially endless cycle of combat standing in the way of final victory.'
		},
		{
			type: 'paragraph',
			text: 'On a more symbolic level, Gunkoku Shonen Kokki features flags of all the world’s military powers during the war. It is dated Dec. 11, 1915, and features artwork by Murada. The countries represented include neutrals like Switzerland, Norway and Sweden.'
		},
		{
			type: 'paragraph',
			text: 'While the game was supposed to show current wartime flags, the author clearly had not kept up with political developments in Europe. Sweden and Norway had formally dissolved their political union 10 years earlier. As a result, each country adopted the flags we know today, with the yellow cross on blue for Sweden, and the white-and-blue cross on red for Norway. However, the upper left corner of this game sheet still shows both countries with their pre-1905 battle flags, which include the “union symbol” in the canton.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('gunkoku-1915.jpg'),
				alt: 'Gunkoku Shonen Kokki game sheet showing world flags',
				caption: 'Gunkoku Shonen Kokki'
			}
		},
		{
			type: 'paragraph',
			text: 'Das Feldherrn-Spiel, the German card game below, did not cover quite as much ground, but it did display uniforms and equipment across all eight major combatants: Germany, Austria-Hungary, Britain, France, Russia, Belgium, Turkey and Japan.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('feldherr-box-cover.jpg'),
					alt: 'Box cover for Das Feldherrn-Spiel',
					caption: 'Das Feldherrn-Spiel'
				},
				{
					src: img('feldherr-8-nations.jpg'),
					alt: 'Cards showing eight nations from Das Feldherrn-Spiel',
					caption: 'Eight nations'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Each national set included images of infantry, cavalry, artillery, navy and specialty units such as Russian Cossacks and Scottish Highlanders. The cards also carried information such as the size of each country\'s peacetime and wartime armies as well as the number and types of naval ships and aircraft.'
		},
		{
			type: 'paragraph',
			text: 'Sekai Rekyo So Yugi (Battle Game of the World Great Powers) is a very unusual Japanese game offering a global perspective on the war. It is designed for eight players, each representing one of the powers: Britain, Germany, France, Russia, Austria-Hungary, Japan, Italy and the United States. It was designed by Noburo Sato, described as a Doctor of Agriculture, and published as an appendix to Boys’ Club magazine issue of January 1, 1917 (Vol. 4, No. 1).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('shogi-full-board.jpg'),
					alt: 'Full board for Sekai Rekyo So Yugi',
					caption: 'Sekai Rekyo So Yugi'
				},
				{
					src: img('shogi-japan-russia.jpg'),
					alt: 'Japan and Russia detail on the Sekai Rekyo So Yugi board',
					caption: 'Japan and Russia'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'This game takes a rather metaphysical approach to the Great War. Each nation has four pieces. These represent Armaments, Economy, Morals and Knowledge.'
		},
		{
			type: 'paragraph',
			text: 'The goal is to get all four pieces to the center of the board, which represents the Ideal State. As the rules put it: “The first country to enter the Ideal State receives a laurel wreath as a symbol of triumph and world domination.”'
		},
		{
			type: 'paragraph',
			text: 'In play, it resembles Parcheesi, but for twice as many players. Each piece starts from the owning country’s corner space and proceeds by die roll clockwise around the track of blue squares to its home track toward the center.'
		},
		{
			type: 'paragraph',
			text: 'A player must roll a 6 to move a piece out of the starting zone, and a 5 to reach the Ideal State. Otherwise each roll moves one piece by that many spaces.'
		},
		{
			type: 'paragraph',
			text: 'The rules for interaction are a bit unusual. A piece that lands on a rival’s piece sends it back to the white holding box, where it must start over. If a third country then lands on the same space, the second country’s piece goes back to start. However, the first country then gets a die roll, and on a 1 returns to the space, banishing the third country’s piece instead.'
		},
		{
			type: 'paragraph',
			text: 'In the United States, Wilder published The Liberty Game just as the war was ending in 1918. It has players rolling dice to move along a track that begins and ends in the United States.'
		},
		{
			type: 'paragraph',
			text: 'The track offers a choice of paths with different hazards at several points, and meanders across France, Italy, the Balkan States, the Ottoman Empire, Russia, Austria-Hungary, Germany Denmark and England.'
		},
		{
			type: 'paragraph',
			text: 'Along the way, players also must roll dice to defeat a wide range of challenges. These include a submarine, battleship and torpedo boat at sea, a zeppelin and airplane aloft, and everything from an infantry regiment, cannon and rapid-fire gun to trenches and forts on land.'
		},
		{
			type: 'paragraph',
			text: 'Failure can send a player\'s piece to one of the four hospitals, marked with red crosses in France, Greece, Russia and England.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('liberty-game-board.jpg'),
				alt: 'Board for The Liberty Game',
				caption: 'The Liberty Game'
			}
		},
		{
			type: 'paragraph',
			text: 'But the final word on WWI must go to The Champion European War Game, published by Proctor Amusement Co. of North Cambridge, Massachusetts.'
		},
		{
			type: 'paragraph',
			text: 'It is unusually plain. The box simply has text on a light blue background. And the yellow board is just outline of Europe sprinkled with small numbers identified in a legend as various cities across the continent. A total of four tracks of small red squares lead west from Germany to Paris, Brussels and London and east to Petrograd. The tracks range in length from 8 to Brussels to 12 to London.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('champion-european-war-game-box-cover.jpg'),
					alt: 'Box cover for The Champion European War Game',
					caption: 'The Champion European War Game'
				},
				{
					src: img('champion-european-war-game-board.jpg'),
					alt: 'Board for The Champion European War Game',
					caption: 'Champion European War Game board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The Allied player starts with a marker at the home end of each track. The German player starts with four markers in Germany.'
		},
		{
			type: 'paragraph',
			text: 'Each player in turn uses a spinner on the board and moves a marker accordingly. The spinner has both inner and outer results. The inner ones apply when a marker has open spaces in front of it, and provide for advances of 0, 1 or 2 spaces.'
		},
		{
			type: 'paragraph',
			text: 'Once two opposing markers have met up, the outer “battle” results apply. These may result in a stalemate, push both markers forward or backward, or cause the defender to retreat by one or two spaces, leaving a gap between the forces. Since the defender in a battle spins next, any retreat is likely followed by an advance to contact again.'
		},
		{
			type: 'paragraph',
			text: 'The result in play is an astonishingly realistic reflection of the static nature of trench warfare. Pieces tend to move back and forth in small increments, with major advances highly unlikely and just as likely to be reversed. The result is a game which tends to drag on and on without resolution. It is more likely to end in an exhausted stalemate than in a victory for either side!'
		}
	]
};
