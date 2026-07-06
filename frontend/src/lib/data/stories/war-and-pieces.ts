import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/war-and-pieces/${name}`;

export const warAndPieces: StoryContent = {
	slug: 'war-and-pieces',
	title: 'War and Pieces',
	blocks: [
		{
			type: 'paragraph',
			text: 'War is a gamble for nations. Battle is a life or death gamble for every soldier. It is no surprise, therefore, that when soldiers play games, gambling plays and has played a central role.'
		},
		{
			type: 'paragraph',
			text: 'In the ancient world, two primary ways of gambling developed. The first used dried bones from the legs of sheep. These were rounded and irregular, but had two wide sides and two narrow sides that might support them on the ground. The most likely sides had the lowest score, while the least likely scored highest. Known as knucklebones, they were usually tossed in groups of five, with the highest total score winning.'
		},
		{
			type: 'paragraph',
			text: 'Knucklebones were also used in a different game more like modern jacks. Each player would toss all five in the air and catch as many as possible on the back of his hand.'
		},
		{
			type: 'paragraph',
			text: 'Dice seem to have emerged a bit later, but the familiar six-sided cubes date have been around for more than 2,000 years.'
		},
		{
			type: 'paragraph',
			text: 'Dice were especially popular with soldiers, because they could be very small and light. The bone pair in the image at right measure a mere quarter-inch (6 mm) per side and weigh less than a tenth of an ounce (3 grams). Early dice were usually carved from animal bones, but have been found carved in stone, formed of glass and even faience, the bluish material developed during ancient Egyptian times. Early playing pieces for other games like Senet from ancient Egypt were made from similar materials, but most were fairly plain.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('ancient-game-pieces.jpg'),
				alt: 'Ancient Game Pieces',
				caption: 'Ancient Game Pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'Early gambling implements, all from Egypt 300 BC-1 AD:'
		},
		{
			type: 'paragraph',
			text: 'Top: pair of tiny Roman legionnaire bone dice, larger Egyptian bone die, and oblong Egyptian blue faience die;'
		},
		{
			type: 'paragraph',
			text: 'Bottom: Egyptian stone die with symbols; Egyptian oblong glass die; knucklebone; and long four-sided die with sides numbered 1,2,5,6.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('medieval-game-token.jpg'),
				alt: 'Medieval Game Token',
				caption: 'Medieval Game Token'
			}
		},
		{
			type: 'paragraph',
			text: 'It was not until the Renaissance period that great artistry began to be seen on playing boards and pieces, especially elaborate chess sets made for the rich and powerful.'
		},
		{
			type: 'paragraph',
			text: 'In Germany, Martin Brunner became known for beautifully carved wooden gaming tokens in the 1600s, but for the most part, playing pieces for popular games stayed plain. The medieval token at left, for instance, is a stamped piece of lead. Since then, game pieces have been made from almost any solid material imaginable.'
		},
		{
			type: 'paragraph',
			text: 'The earliest tin soldiers were made for Frederick the Great in the 1700s. As board games became more colorful, metal soldiers and other figures became common gaming pieces.'
		},
		{
			type: 'paragraph',
			text: 'For example, the stamped and painted metal soldiers and ships at right were included in the 1905 German game about the Russo-Japanese War, Russische-Japanische Krieg.'
		},
		{
			type: 'paragraph',
			text: 'Many games through the 1930s opted for the durability and visual appeal of metal: for ships, submarines, vehicles, infantry, artillery, zeppelins and airplanes. For instance, the 1914 Austro-Hungarian game Marschall Vorwarts featured elaborate and painted figures of Napoleonic troops and weapons, including the top commanders, Napoleon Bonaparte and Marshal Gebhard von Blucher (below top).'
		},
		{
			type: 'paragraph',
			text: 'Below middle are three zeppelins from the 1914 Zeppelin-Spiel, and across the bottom are the individually numbered U-boats from 1916’s Unsere U-boote neustes.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('marschall-leaders-and-flags.jpg'),
				alt: 'Marschall Leaders And Flags',
				caption: 'Marschall Leaders And Flags'
			},
				{
				src: img('zeppelin-spiel-pieces.jpg'),
				alt: 'Zeppelin Spiel Pieces',
				caption: 'Zeppelin Spiel Pieces'
			},
				{
				src: img('russische-japanische-pieces.jpg'),
				alt: 'Russische Japanische Pieces',
				caption: 'Russische Japanische Pieces'
			},
				{
				src: img('uboot-numbered-game-pieces-strip.jpg'),
				alt: 'Uboot Numbered Game Pieces Strip',
				caption: 'Uboot Numbered Game Pieces Strip'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The WWII game Mit Prien Gegen England, which celebrated Gunther Prien’s sinking of the British battleship Royal Oak within the British base at Scapa Flow, used the very solid metal U-boats (below left). The 1930s air war game Luftkampfspiel (below right) had a silver metal bomber and twin-engined pursuit planes in different colors. The German game Sturmpioniere (across bottom) featured combat engineers in a variety of roles.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('prien-pieces.jpg'),
				alt: 'Prien Pieces',
				caption: 'Prien Pieces'
			},
				{
				src: img('luft-planes.jpg'),
				alt: 'Luft Planes',
				caption: 'Luft Planes'
			},
				{
				src: img('sturmpioniere-box-contents-2.jpg'),
				alt: 'Sturmpioniere Box Contents 2',
				caption: 'Sturmpioniere Box Contents 2'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'F.P.1 antwortet nicht (top right) was a game based on a 1932 movie about a city-sized aircraft carrier that let planes land and refuel on their way across the Atlantic. It has a solid metal model of the F.P.1 – but it is smaller than the planes that are supposed to land on it!'
		},
		{
			type: 'paragraph',
			text: 'The German naval game Klar zum Gefecht (middle right) was a remake of WWI\'s Deutsch-Englischer Seekrieg). Its thin metal pieces have a wider base to hold them upright.'
		},
		{
			type: 'paragraph',
			text: 'The post-WWII French game Les Convois (bottom right) went for heavy metal: its jeep playing pieces are made of lead!'
		},
		{
			type: 'paragraph',
			text: 'But the prize for most elaborate miniatures has to go to Extended Broadside, (below) a very unusual four-player version of Battleships that was made in the 1930s. Its ships had metal shells around wooden interiors, and felt along the bottoms.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('fp1-pieces.jpg'),
				alt: 'Fp1 Pieces',
				caption: 'Fp1 Pieces'
			},
				{
				src: img('klar-zum-gefecht-pieces-in-box.jpg'),
				alt: 'Klar Zum Gefecht Pieces In Box',
				caption: 'Klar Zum Gefecht Pieces In Box'
			},
				{
				src: img('les-convois-jeeps.jpg'),
				alt: 'Les Convois Jeeps',
				caption: 'Les Convois Jeeps'
			},
				{
				src: img('extended-minis.jpg'),
				alt: 'Extended Minis',
				caption: 'Extended Minis'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'With the advent of the Belagerungsspiel during the Napoleonic era, carved playing pieces made their appearance. These were not fancy but abstract chessmen. Rather, they were crudely carved and painted representations of real soldiers of their times. These hand-painted Napoleonic soldiers came with the mid-18th Century Game of Assault, an English version of Belagerungsspiel.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('assault-oblique.jpg'),
				alt: 'Assault Oblique',
				caption: 'Assault Oblique'
			}
		},
		{
			type: 'paragraph',
			text: 'Wood is has several advantages as a material for game pieces. It is cheap and easily available. It is relatively lightweight. And it can be carved, sliced or assembled to produce almost any desired shape. The wooden ships (below left) come from the WWI Deutsche-Englischer Seekrieg.'
		},
		{
			type: 'paragraph',
			text: 'The early air war game Bomber griefen an (below right) used wood for both airplanes and guns. The tiny airplane pieces were crudely carved and glued together. These models may well have been crafted by an individual game owner, as at least one edition of the game is known to have come with printed cardboard tiles.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('de-seekrieg-pieces-on-board-2.jpg'),
				alt: 'De Seekrieg Pieces On Board 2',
				caption: 'De Seekrieg Pieces On Board 2'
			},
				{
				src: img('bomber-pieces.jpg'),
				alt: 'Bomber Pieces',
				caption: 'Bomber Pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'During WWII, Parker Brothers came up with these ingenious pieces (below left) for Ranger Commandos. Shown above, they represent the combination naval landing craft and raider troops. The wooden pegs fit into a hole in the boat while at sea, and are removed and move separately while on land. A tiny piece of cardboard provides a windscreen.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('ranger-pieces.jpg'),
				alt: 'Ranger Pieces',
				caption: 'Ranger Pieces'
			},
				{
				src: img('panzerschlacht-pieces-closeup.jpg'),
				alt: 'Panzerschlacht Pieces Closeup',
				caption: 'Panzerschlacht Pieces Closeup'
			},
				{
				src: img('feldherrn-box-contents.jpg'),
				alt: 'Feldherrn Box Contents',
				caption: 'Feldherrn Box Contents'
			},
				{
				src: img('pzkw-vor-pieces.jpg'),
				alt: 'Pzkw Vor Pieces',
				caption: 'Pzkw Vor Pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Painted wood could be used to add detail, as in the light and heavy tanks above from Panzerschlacht (left middle). Or they could be left crude and fairly abstract, as were tanks above right from Panzerkampfwagen vor! They also could be used in plain shapes, as in the 1930s game Feldherrnspiel, a German variant of L’Attaque (above left bottom).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('adler-luftverdigungspiel-pieces-closeup.jpg'),
				alt: 'Adler Luftverdigungspiel Pieces Closeup',
				caption: 'Adler Luftverdigungspiel Pieces Closeup'
			},
				{
				src: img('kampf-counter-examples.jpg'),
				alt: 'Kampf Counter Examples',
				caption: 'Kampf Counter Examples'
			},
				{
				src: img('propeller-frei-counters.jpg'),
				alt: 'Propeller Frei Counters',
				caption: 'Propeller Frei Counters'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Wood could be carved into very small pieces, as in the German Adler Luftverdigungsspiel (above left). It also could be made into flat disks, on which information could be added, as in the examples above right from the1930s games Propeller Frei! (top) and Kampf und Sieg (bottom).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('marine-playing-pieces.jpg'),
				alt: 'Marine Playing Pieces',
				caption: 'Marine Playing Pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'Wood also made a handy base for the stand-up pieces common in both strategy and target-shooting games. In the 1940 British game GHQ (right) the shape of the wooden bases shows whether they represent infantry (round), motorized infantry (square) or armor (triangle).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('eclair-enlisted.jpg'),
				alt: 'Eclair Enlisted',
				caption: 'Eclair Enlisted'
			},
				{
				src: img('vehicles.jpg'),
				alt: 'Vehicles',
				caption: 'Vehicles'
			},
				{
				src: img('ghq-allied-set-up-with-poles.jpg'),
				alt: 'Ghq Allied Set Up With Poles',
				caption: 'Ghq Allied Set Up With Poles'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The playing pieces above left added color to the German naval game Marinespiel as players navigate the bowels of a dreadnought.'
		},
		{
			type: 'paragraph',
			text: 'The example middle left is from the WWII French game Guerre-Éclair, another variant of L’Attaque.'
		},
		{
			type: 'paragraph',
			text: 'Bottom left are cars and trucks that players used to navigate the darkened streets of downtown London in 1939’s "Black-out".'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('french-targets.jpg'),
				alt: 'French Targets',
				caption: 'French Targets'
			}
		},
		{
			type: 'paragraph',
			text: 'And as these poilus and their French officers show, wood blocks made excellent bases for targets intended to be knocked down by wooden bullets from a spring-loaded wooden cannon. They are from the European War Game: French Army set from WWI.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('french-flag-and-gun.jpg'),
				alt: 'French Flag And Gun',
				caption: 'French Flag And Gun'
			}
		},
		{
			type: 'paragraph',
			text: 'Wooden pieces game back into vogue in the 1970s with the release of the first historical wargames using upright blocks to hide their values from opponents. Over time, these have become increasingly sophisticated. In Quebec 1759, (below left) the only information on a block was its strength and an identifier. Forty years later, Blocks in the East pieces (below right) show the identity of the unit and its higher headquarters, strength, unit type, troop quality and step replacement cost.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('1759-blocks.jpg'),
				alt: '1759 Blocks',
				caption: '1759 Blocks'
			},
				{
				src: img('bite-4-blocks.jpg'),
				alt: 'Bite 4 Blocks',
				caption: 'Bite 4 Blocks'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The 1930s saw the introduction of a new material that would find many uses long before it became a famous line in the 1960s movie The Graduate. Plastic was still rare and relatively expensive in the early days, and became rarer still in games once WWII began, as petrochemicals were diverted to militarily more important uses.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('friegur-and-wehrschach-pieces-on-boards-2.jpg'),
				alt: 'Friegur And Wehrschach Pieces On Boards 2',
				caption: 'Friegur And Wehrschach Pieces On Boards 2'
			},
				{
				src: img('friegur-and-wehrschach-pieces-side-by-side.jpg'),
				alt: 'Friegur And Wehrschach Pieces Side By Side',
				caption: 'Friegur And Wehrschach Pieces Side By Side'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Plastic, like metal, can be cast into a wide variety of shapes, and has the additional ability to impregnated with vivid colours. As examples, consider the vivid color and detail of these huge pieces from the 1934 Polish-German game Friegur. When the German Wehrmacht publisched Wehrschach four years later, it also used plastic pieces, but as you can see in the comparison photos above, they were much smaller.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('adler-luftkampfspiel-red-and-blue-planes-overhead.jpg'),
				alt: 'Adler Luftkampfspiel Red And Blue Planes Overhead',
				caption: 'Adler Luftkampfspiel Red And Blue Planes Overhead'
			}
		},
		{
			type: 'paragraph',
			text: 'The early-war Adler Luftkampfspiel also went for plastic in a way that allowed each piece to be individually numbered.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('defense-playing-pieces.jpg'),
				alt: 'Defense Playing Pieces',
				caption: 'Defense Playing Pieces'
			},
				{
				src: img('battle-checkers-pieces.jpg'),
				alt: 'Battle Checkers Pieces',
				caption: 'Battle Checkers Pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'While American companies kept using some plastic during the early days of WWII, the pieces got even tinier and cruder. Above, for example, are ships from Game of Defense: Atlantic (1941) and air, sea and land pieces from Battle Checkers (1942).'
		},
		{
			type: 'paragraph',
			text: 'Cardboard pieces became the new normal when modern wargames started hitting the market in the 1960s. For these purposes, flat pieces are needed to display the growing amount of information on a piece. They also enable pieces to be stacked in a single square.'
		},
		{
			type: 'paragraph',
			text: 'While light and cheap, cardboard does have obvious disadvantages. It is easily bent, folded or crumpled if too thin. Ink gets worn away with repeated use. And as any longtime gamer will attest, small chits are all too easy to lose!'
		},
		{
			type: 'paragraph',
			text: 'This is why the first French editions of L’Attaque (and later deluxe versions of this and its variants by Gibson worldwide) used metal backs and stands to hold their cardboard pieces. However, early game makers did sometimes use the material on its own.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('combate-navale-dice.jpg'),
				alt: 'Combate Navale Dice',
				caption: 'Combate Navale Dice'
			}
		},
		{
			type: 'paragraph',
			text: 'The 1915 Spanish game Combate Naval (above) used a hollow cardboard die to show which country’s ship was hit by the roll on the two normal (wooden) dice.'
		},
		{
			type: 'paragraph',
			text: 'In 1944, the Master Toy Company turned cardboard jigsaw puzzles into a competitive game with Our Defenders. Players used a spinner to determine which of the service representatives would get to add a piece that turn. The first player competing a puzzle won the game.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('defenders-spinner.jpg'),
				alt: 'Defenders Spinner',
				caption: 'Defenders Spinner'
			},
				{
				src: img('our-defenders-puzzles.jpg'),
				alt: 'Our Defenders Puzzles',
				caption: 'Our Defenders Puzzles'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'The 1942 game Air Combat Trainer from Lewis Instructor Games include a host of very detailed cardboard planes (below left). These were cut and illustrated to show different plane models from different perspectives to simulate what pilots would see from their cockpits.'
		},
		{
			type: 'paragraph',
			text: 'The flat cardboard square piece appeared as early as the 1930s. These pieces from the pre-war German game Gloria Victoria (below right) show both the type of unit and its ability to move and attack in different directions.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('act-us-playing-pieces-on-board.jpg'),
				alt: 'Act Us Playing Pieces On Board',
				caption: 'Act Us Playing Pieces On Board'
			},
				{
				src: img('gloria-uncut-red.jpg'),
				alt: 'Gloria Uncut Red',
				caption: 'Gloria Uncut Red'
			}
			]
		},
		{
			type: 'paragraph',
			text: '​Cardboard counters have remained a popular feature in most wargames of the modern era. However, the artwork has improved vastly and the amount of information on a counter has grown. The very basic counters from Charles Roberts’ 1958 Tactics II (below left) show unit size and type, combat power and movement ability.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('tactics-ii-counters.jpg'),
				alt: 'Tactics Ii Counters',
				caption: 'Tactics Ii Counters'
			},
				{
				src: img('cc-pacific-counters.jpg'),
				alt: 'Cc Pacific Counters',
				caption: 'Cc Pacific Counters'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Fifty years later, the counters for Combat Commander: Pacific (above right) show nationality, manpower, morale, leadership value, unit firepower, unit range, close combat modifier, ranged penetration modifier and movement ability. They also have a flip side which changes abilities and factors when a unit breaks, shown for the squad in the middle. And there are separate, smaller, weapons counters that have their own firepower and range as well as encumbrance (how much it slows down the unit carrying it). And weapons break down as well.'
		},
		{
			type: 'paragraph',
			text: 'UNUSUAL MATERIALS'
		},
		{
			type: 'paragraph',
			text: 'While metal, wood, plastics and cardboard together have been used in almost all wargames, special circumstances have led to some unusual substitutes. These planes, for instance, come from the American game Flying the Beam in 1941.'
		},
		{
			type: 'paragraph',
			text: 'Although the United States was not yet at war, publishers already were exploring alternative materials. These pieces (top right) are made from a cellulose composite that was derived from trees.'
		},
		{
			type: 'paragraph',
			text: 'On the other side of the Atlantic, at least two German games opted for ceramic pieces during the 1930s. The cute little Volkswagens (middle right) come from the 1938 game Dein KdF-Wagen (named after the German social organization that handled sales and distribution for the new car).'
		},
		{
			type: 'paragraph',
			text: 'As WWII approached, one version of the standard Grosse Belagerungsspiel opted for a third material. It formed its playing pieces as Panzer I tanks – but made them out of glass! They were painted in field grey, but only on the top and sides.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('glass-panzer-closeup.jpg'),
				alt: 'Glass Panzer Closeup',
				caption: 'Glass Panzer Closeup'
			},
				{
				src: img('beam-composite-planes.jpg'),
				alt: 'Beam Composite Planes',
				caption: 'Beam Composite Planes'
			},
				{
				src: img('kdf-pieces.jpg'),
				alt: 'Kdf Pieces',
				caption: 'Kdf Pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'It just begs for a variant on the old saw: “People who ride in glass panzers shouldn’t shoot bullets” perhaps?'
		}
	]
};
