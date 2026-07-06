import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/blitzkrieg/${name}`;

export const blitzkrieg: StoryContent = {
	slug: 'blitzkrieg',
	title: 'Blitzkrieg',
	blocks: [
		{
			type: 'paragraph',
			text: 'As General Erwin Rommel\'s tank started to leave some woods and cross a plantation near the Meuse River in Belgium, his unit suddenly came under fierce artillery and anti-tank fire. His own tank was hit twice, once on the upper edge of the turret and again on its periscope. His driver reacted by opening the throttle wide, dashing across the field and into the nearest bushes. Unfortunately, these concealed a steep slope, and the Panzer III slid down and stopped, slanted to one side in plain view of French forces.'
		},
		{
			type: 'paragraph',
			text: 'Rommel survived the encounter, and just four days later the man who would become famous as the Desert Fox in charge of Germany\'s forces in North Africa found himself in a fresh tank driving unopposed in bright moonlight through France\'s heavily fortified Maginot Line.'
		},
		{
			type: 'paragraph',
			text: '"It was hardly conceivable. Twenty-two years before, we had stood for four and a half long years before this self-same enemy and had won victory after victory and yet finally lost the war. And now we had broken through the renowned Maginot Line and were driving deep into enemy territory. It was not just a beautiful dream. It was reality."'
		},
		{
			type: 'paragraph',
			text: 'Germany\'s six-week conquest of France was not what Allied military commanders had expected. It also confounded the expectations of game designers. Just before the blitzkrieg was unleashed in the West, British publisher Waddington put out a game called GHQ.'
		},
		{
			type: 'paragraph',
			text: 'The board was a map of Germany, northern France, Belgium, the Netherlands and Switzerland, as well as the English Channel and southern Britain. It is laid out in a point-to-point format.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('ghq-board-label.jpg'),
				alt: 'Label on the GHQ game board',
				caption: 'GHQ'
			},
				{
				src: img('ghq-board.jpg'),
				alt: 'Full board for GHQ',
				caption: 'GHQ board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The game acknowledged recent developments in military technology. Units on both sides come in the form of infantry, motorized divisions and armored forces. Infantry units can move only by one, to one adjacent space; motorized infantry by two spaces and armor by three. Each turn, a player rolls a single die to determine the number of pieces allowed to move.'
		},
		{
			type: 'paragraph',
			text: 'Successful combat is based on outflanking the enemy. Capturing an enemy piece requires occupying either two adjacent spaces (for infantry) or three adjacent spaces (for armor).'
		},
		{
			type: 'paragraph',
			text: 'The late-1939/early-1940 publication date is shown by the inclusion of a Polish unit within the Allied forces. This unit represents the Polish Army in France, which was set up after Poland\'s fall in 1939. By the time the Germans invaded France, this force had grown to 85,000 men including four infantry divisions and a motorized brigade (the 10th Brigade of Armored Cavalry). Despite the fact that most of the Polish troops were regular infantry, the Polish unit in the game is a motorized infantry force.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('ghq-polish-motorized.jpg'),
				alt: 'Polish motorized unit from GHQ',
				caption: 'Polish motorized brigade'
			}
		},
		{
			type: 'paragraph',
			text: 'The game\'s capture rules recognize the growing importance of manoeuvre combat rather than the unavoidable frontal assault of trench warfare.'
		},
		{
			type: 'paragraph',
			text: 'In this sense, the game reflects the views of Allied military planners. The forces were roughly equal in terms of numbers and technology. Therefore the Allied player should be just as likely to capture the objectives of Berlin and Munich as the German player is to take Paris and Dover.'
		},
		{
			type: 'paragraph',
			text: 'What neither the game\'s designer nor Allied commanders had expected were the ways that German commanders like Rommel had found to combine military technologies. The GHQ game board has no way to simulate the impact of Stukas smashing traffic along roads and sending streams of refugees to spread panic and block military responses. It fails to model the differences between the concentrated use of German armored forces and the Allied preference for spreading tanks out to support the infantry.'
		},
		{
			type: 'paragraph',
			text: 'A French game, shown as approved by the military censor on November 17, 1939, made similar faulty assumptions. Bombardement de la ligne Siegfried assumed a fairly static war. Just as the Germans would by stymied by the Maginot Line, the French expected a tough time assaulting the opposing fortifications built during the 1930s by the Germans. The Siegfried Line, known by the Germans as the Westwall, ran 630 kilometres from the Dutch border in the north to Switzerland in the south.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('siegfried-box.jpg'),
				alt: 'Box for Bombardement de la ligne Siegfried',
				caption: 'Bombardement de la ligne Siegfried'
			},
				{
				src: img('siegfried-board-pair.jpg'),
				alt: 'Pair of boards for Bombardement de la ligne Siegfried',
				caption: 'Siegfried boards'
			},
				{
				src: img('siegfried-board-closeup.jpg'),
				alt: 'Closeup of the Siegfried game board',
				caption: 'Siegfried board detail'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The game is based on the familiar naval game Battleships. Each player has a board showing a map of the region between Cologne in the north to Lorrach in the south. The board is marked with a grid, with the letters A – J down the sides and 1 – 25 across the top and bottom. Each player also gets a smaller slate chalkboard showing the same grid.'
		},
		{
			type: 'paragraph',
			text: 'The slate is used to mark defensive positions secretly (each type with a unique shape.'
		},
		{
			type: 'paragraph',
			text: 'Each player must place 4 machine guns, 3 anti-aircraft batteries, 4 artillery batteries, 4 aeroplane squadrons, 1 aviation park, 1 ammunition depot, 1 GHQ, and 5 mines. Machine guns, anti-aircraft, artillery, the aviation park and the GHQ are marked as in battleships, filling one to five squares respectively in a straight line. Squadrons are marked as a triangle and the ammunition depot as a diamond. The mines are marked as an M in single spaces.'
		},
		{
			type: 'paragraph',
			text: 'Players are allowed a total of 30 volleys during the game, with 3 shots in each. Players take turns firing volleys. The defender announces the results for the volley as a whole: say, two misses and a hit on an artillery battery. The defender says what kind of piece was hit, but not which shots hit and which ones missed.'
		},
		{
			type: 'paragraph',
			text: 'The players use the large board to keep track of their progress. Black markers are used for confirmed misses; yellow for possible hits; and red for confirmed hits. Whoever destroys or hits the most enemy pieces after 30 volleys wins.'
		},
		{
			type: 'paragraph',
			text: 'While the illustration on the box shows a sky full of planes and a tank charging forward into territory blasted by the artillery, the game demonstrates the blind spot shared by French generals. The blitzkrieg bypassed the Maginot line, and the Siegfried Line did not become a factor until 1944 as the Allies finally closed in on Germany.'
		},
		{
			type: 'paragraph',
			text: 'Meanwhile, German game publishers had no hesitation in issuing triumphant titles featuring all the elements of blitzkrieg warfare. Panzerkampfwagen Vor! focuses on the impact of tank warfare. Its playing board is filled with Panzer I tanks charging across a contested countryside.'
		},
		{
			type: 'paragraph',
			text: 'The tanks are shown driving along dirt roads, heading down a slope, crossing a large ditch, smashing barbed wire, hiding in smoke and firing their twin machine-guns with abandon at defending infantry and anti-tank guns.'
		},
		{
			type: 'paragraph',
			text: 'Unusually, the roll-and-move track counts downwards from 90 at the start point to 1 in the centre of the target village. It also acknowledges the unreliability of armored vehicles.'
		},
		{
			type: 'paragraph',
			text: 'Space 84 shows a tank stopped to fix a balky engine and space 57 the crew replacing a broken track. And it shows that tanks can be confronted by enemy anti-tank weapons and airplanes (although the one aircraft shown is still a biplane) as well as minefields. The game pieces also bow to military priorities: both the tank playing pieces and the die are wooden.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('pzkw-vor-box-top.jpg'),
				alt: 'Box top for Panzerkampfwagen Vor!',
				caption: 'Panzerkampfwagen Vor!'
			},
				{
				src: img('pzkw-vor-pieces.jpg'),
				alt: 'Playing pieces from Panzerkampfwagen Vor!',
				caption: 'Panzerkampfwagen pieces'
			},
				{
				src: img('pzkw-vor-board.jpg'),
				alt: 'Board for Panzerkampfwagen Vor!',
				caption: 'Panzerkampfwagen board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Stukas griefen an is an unabashed celebration of the tactical air power that added so much impact to assaults by Germany\'s panzers and motorized infantry. Most of the planes pictured in the game are the gull-winged Junkers Ju 87 dive bombers (Sturzkampfflugzeug, hence Stuka). However, a Junkers Ju 88 is given the place of honor on both the box and board. Both types of plane are shown delivering destruction against land and ocean targets alike, with devastating effect. Factories are engulfed in flames, potential strongpoints are annihilated and ships plunge into the ocean.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('stukas-game-box-cover.jpg'),
				alt: 'Box cover for Stukas griefen an',
				caption: 'Stukas griefen an'
			},
				{
				src: img('stukas-game-board.jpg'),
				alt: 'Board for Stukas griefen an',
				caption: 'Stukas griefen an board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The Stuka, with the trademark wailing siren created by the Jericho trumpets mounted on its fixed landing gear, became the propaganda symbol of Germany\'s prowess at lightning war. It led the air assaults in all the early campaigns, including the invasions of Poland, Norway, Netherlands, Belgium and France.'
		},
		{
			type: 'paragraph',
			text: 'The Ju 88, on the other hand, was the most versatile plane in the German air force. It was especially effective in its dive bombing role during the invasion of France, destroying rail systems and many Allied planes on the ground. On June 17, 1940, a Ju 88 destroyed the ocean liner RMS Lancastria off St. Nazaire, killing an estimated 5,800 Allied personnel being evacuated from France.'
		},
		{
			type: 'paragraph',
			text: 'The game board has a crossed shape filled with linked circles. It looks like a typical Grosse Belagerungsspiel, but the rules are quite different. Each of the 67 circled spaces in the cross is numbered. Five green planes start from spaces 1-5 and the red planes from 62-66. Each player tries to move his planes across the board to the enemy\'s side and back again without suffering any losses.'
		},
		{
			type: 'paragraph',
			text: 'Players take turns rolling a six-sided die and moving one plane that many spaces, in any direction. The board is dotted with both yellow and red filled circles. These represent searchlights and anti-aircraft guns respectively, and each is circled with a red or green halo. The green player can use the green-circled spots safely and is forbidden from landing on any red-circled spaces, and vice versa.'
		},
		{
			type: 'paragraph',
			text: 'The colored spaces are not placed in a symmetric pattern or equally between players. There are 14 green-circled spaces, mostly toward the middle of the board. There are only five red-circled spaces, but these are concentrated in the red player\'s defensive zone.'
		},
		{
			type: 'paragraph',
			text: 'A player can shoot down an enemy plane by jumping over it to an empty space, as in checkers. Planes also are shot down if they are surrounded, with no valid move. Flying between enemy flak and searchlight spaces is therefore dangerous. Players score a point for each enemy plane shot down, and each plane that reaches the enemy spaces and returns safely to base. The winner is the player who gets the most points.'
		},
		{
			type: 'paragraph',
			text: 'A diving Stuka is also seen in action on the cover of this game from Diana-Spiel: Stuka: Das Packende Kampffliegerspiel.'
		},
		{
			type: 'paragraph',
			text: 'This roll-and-move game has a rather plain board, but with watermark images of Stukas in full stoop over panicking enemy infantry and artillery.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('stuka-box-cover.jpg'),
				alt: 'Box cover for Stuka: Das Packende Kampffliegerspiel',
				caption: 'Stuka'
			}
		},
		{
			type: 'paragraph',
			text: 'Adler Luftkampfspiel is more of a wargame. It was designed by a Luftwaffe officer and aimed at encouraging young Germans to think strategically .'
		},
		{
			type: 'paragraph',
			text: 'The cover of the box features a German Me 109 downing a British Spitfire while escorting a pair of Heinkel 111 medium bombers. The cover of the rules also shows another Spitfire falling in flames, this one downed by an Me-109 accompanied by two Me-110s.'
		},
		{
			type: 'paragraph',
			text: 'The game introduces tactical air combat concepts including bombing, the use of fighter escorts for bombers, dogfighting and dealing with ground fire. The pieces include plastic red and blue bomber and fighter planes, cardboard flak guns and ships, and wooden bombs.'
		},
		{
			type: 'paragraph',
			text: 'It is a game still dependent on rolling dice. The numbered bombers move in a fixed order (Red 1, Blue 1, Red 2, Blue 2, and so on. The fighters take their turns in sequence after the bombers. The board is divided into 80 numbered spaces (with each space bearing two numbers, one for each player in reverse order).'
		},
		{
			type: 'paragraph',
			text: 'The player rolls 5 six-sided dice on each turn, and moves the designated piece by that number of squares. When a plane\'s roll reaches a number higher than 80, it reverses course at 80 and starts heading back to base. The game ends when all surviving planes have made it home.'
		},
		{
			type: 'paragraph',
			text: 'When a plane lands on an enemy plane, flak gun or ship, combat ensues. Both players roll the dice and compare totals. In air-to-air combat, a difference of three or more results in the plane with the lower total being shot down. For air-to-ground combat, only the attacking plane rolls the dice. On a total score of 18 or more, the flak gun or ship is knocked out; a score of 13 or less means the plane is shot down.'
		},
		{
			type: 'paragraph',
			text: 'When a bomber is in combat on a square with a lightning bolt, it can call for its escorting fighter (the one with the matching number) to join it. When multiple planes are in a space, combat is between fighters first, and then any surviving fighters can attack bombers. When a bomber lands on an enemy base space, it drops a bomb marker on that space. A fighter may drop a bomb on (strafe) the enemy fighter base (space 60).'
		},
		{
			type: 'paragraph',
			text: 'At the end of the game, the winner is determined by points. Each player gets 3 points for each plane safely returning home, 4 points for each flak gun destroyed, 5 points for each enemy plane shot down, 6 points for each bomb dropped on an enemy base, and 8 points for each ship sunk.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('adler-luftkampfspiel-box-cover.jpg'),
				alt: 'Box cover for Adler Luftkampfspiel',
				caption: 'Adler Luftkampfspiel'
			},
				{
				src: img('adler-luftkampfspiel-pieces-on-boar-overhead.jpg'),
				alt: 'Overhead view of Adler Luftkampfspiel pieces on board',
				caption: 'Adler Luftkampfspiel board'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Flieger greifen an! was another German air war game with graphics featuring Heinkel 111 bomber. Its board is roughly diamond shaped. Each player has three types of planes: fighters, bombers and scouts.'
		},
		{
			type: 'paragraph',
			text: 'A bomber must try to reach the enemy\'s railway station (the red circle surrounded by a hexagon of flak guns) and then return to start. A scout aims to overfly the enemy\'s starting point and return. The fighters move all over the board trying to shoot down enemy planes.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('flieger-dsp-board.jpg'),
				alt: 'Board for Flieger greifen an!',
				caption: 'Flieger greifen an!'
			}
		},
		{
			type: 'paragraph',
			text: 'Airpower came into play in yet another dimension on the first day of Fall Gelb (Case Yellow). On May 10, Germany\'s Army Group B invaded Belgium and the Netherlands. In the wee hours, the first assaults came from the air.'
		},
		{
			type: 'paragraph',
			text: 'Paratroops from the 7th Flieger and 22 Luftlande Infanterie-Division under the command of Kurt Student made surprise landings at The Hague, on the road to Rotterdam and against the Belgian fort of Eben-Emael at the junction of the Meuse River and the Albert Canal.'
		},
		{
			type: 'paragraph',
			text: 'The standard paratroop transport was the Junkers Ju-52, also known as Tante Ju (Aunt Ju). These planes were also used as bombers, which is why they are featured on the cover of the game Kampfgeschwader vorwarts! (Bomber wings forward!)'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('kampfgeschwader-box-cover.jpg'),
				alt: 'Box cover for Kampfgeschwader vorwarts!',
				caption: 'Kampfgeschwader vorwarts!'
			},
				{
				src: img('kampfgeschwader-pieces-closeup.jpg'),
				alt: 'Playing pieces from Kampfgeschwader vorwarts!',
				caption: 'Kampfgeschwader pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Some 400 of them were committed as carriers for the airborne troops used in the invasion of Belgium and the Netherlands – of which 152 were destroyed and another 47 damaged. Roughly half of the invading paratroopers were killed or wounded as well.'
		},
		{
			type: 'paragraph',
			text: 'The game features the planes in their bombing role. It is played on a much plainer board, but again involves a combination of bombers, fighters and flak guns.'
		},
		{
			type: 'paragraph',
			text: 'Here too the pieces are made of plastic, indicating that the game was released before that substance became dedicated entirely to war production.'
		},
		{
			type: 'paragraph',
			text: 'Aided by the paratroop landings and air superiority, the 9th Panzer Division reached Rotterdam by May 13. The Dutch army surrendered the next day. As much of the French Army had moved north to defend the Dutch and Belgians, the main German armored thrust was launched near Sedan, west through the Ardennes forest and along the Somme valley. By May 21, the Germans had reached the English Channel. This isolated three French armies, along with the British and Belgian forces.'
		},
		{
			type: 'paragraph',
			text: 'With most of the French army cut off in the north, Germany launched its second offensive, Fall Rot (Case Red), on June 5.'
		},
		{
			type: 'paragraph',
			text: 'This bypassed the Maginot line and smashed the remaining French resistance. Paris fell on June 14. Prime Minister Paul Reynaud resigned and was replaced by Marshal of France Philippe Pétain, who promptly sued for peace. Hitler order the the surrender to be signed in the same railway carriage in the same location as the armistice imposed on Germany in 1918.'
		},
		{
			type: 'paragraph',
			text: 'With the surrender, the French Third Republic officially came to an end. France retained control of much of the center and south of the country, with a capital in the city of Vichy (hence Vichy France). Pétain remained in charge of the humbled country.'
		},
		{
			type: 'paragraph',
			text: 'His new role was promptly captured in the game Jeu de l\'histoire de France. The game was published by Witho, a company set up under German occupation that put out games judged acceptable to the conquerors.'
		},
		{
			type: 'paragraph',
			text: 'This one is a lotto-style game in which each card covers an epoch of French history. The game\'s final card covers the years of the Third Republic, founded as a result of the French defeat by Prussia in 1871 and destroyed by the German invasion of WWII.'
		},
		{
			type: 'paragraph',
			text: 'In the final panel on the card, Marshal Pétain is shown standing, backlit by a halo bearing the slogan Travail, Famille, Patrie (Work, Family, Homeland).'
		},
		{
			type: 'paragraph',
			text: 'Behind him, an outline map of France is packed with a multitude of people. The lotto card that covers the 1940 space notes the end of the Third Republic, has Marshal Pétain calling for French unity, and concludes, "Apres sa victoire, la France sombre" (After its victory, France lies in gloom).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('france-box-cover.jpg'),
				alt: 'Box cover for Jeu de l\'histoire de France',
				caption: 'Jeu de l\'histoire de France'
			},
				{
				src: img('france-petain.jpg'),
				alt: 'Marshal Pétain card from Jeu de l\'histoire de France',
				caption: 'Marshal Pétain'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Having conquered France so quickly, Hitler could have gone on the defensive in the West and turned his eyes toward the Soviet Union in 1940 rather than a year later. But elation over his humiliation of France would drive him to try and do the same to Britain.'
		}
	]
};
