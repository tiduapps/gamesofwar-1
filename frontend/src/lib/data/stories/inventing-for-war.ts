import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/inventing-for-war/${name}`;

export const inventingForWar: StoryContent = {
	slug: 'inventing-for-war',
	title: 'Inventing for War',
	blocks: [
		{
			type: 'paragraph',
			text: 'Leslie Irvin had nothing but a pack on his back when he deliberately jumped out of the airplane. The year was 1919, and Irvin was part of a team working for the U.S. Army to find a safe way for pilots to reach the ground from a damaged plane. It was the world’s first pre-meditated freefall jump from a plane. It cost Irvin a broken ankle on landing, but his test of a novel parachute was deemed a success.'
		},
		{
			type: 'paragraph',
			text: 'Flying the plane that day was James Smith, a test pilot who invented the first manually operated parachute for the Army in 1918. Together with the rest of the post-war team under Major E.L. Hoffman, Irvin and Smith had developed what they called the Type A parachute. It was held in a soft pack strapped to the pilot’s back, had a ripcord to let the pilot open the chute after leaving the airplane, and also used a small pilot chute to drag the main parachute out of the pack.'
		},
		{
			type: 'paragraph',
			text: 'World War I had shown the need for such a device. By WWII, parachutes were standard for all aircrew. By then, strategists had realized that the parachute also could be an offensive weapon, dropping anything from supplies and spies to entire divisions behind enemy lines.'
		},
		{
			type: 'paragraph',
			text: 'The American game Parachute Jump was published in 1920, within months of Irvin’s successful if painful descent – and subsequent founding of what became the dominant parachute manufacturing company.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('parachute-jump-box-cover.jpg'),
				alt: 'Box cover for Parachute Jump',
				caption: 'Parachute Jump'
			}
		},
		{
			type: 'paragraph',
			text: 'By 1925, the Japanese Warship Game showed parachutists jumping even from undamaged planes. The connection to naval warfare was not clear, but the parachutes seem intended to add glamour rather than danger to the military experience. By the time of the Parachute Jump Game in the mid-1930s, the device had become popular in both military novels and actual exercises.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('boys-club-warship-parachutist-closeup.jpg'),
				alt: 'Closeup of parachutist from the Japanese Warship Game',
				caption: 'Japanese Warship Game'
			}
		},
		{
			type: 'paragraph',
			text: 'The parachute was just one technological development flowing from the challenges of WWI that matured in time for the next big war.'
		},
		{
			type: 'paragraph',
			text: 'However, not all imagined technologies came to pass. The most ambitious preview of potential innovations came from Japan. Modern Military Science is a sugoroku game that portrays a vast range of current and future weapons and techniques. There is nothing extraordinary about many of them: dogfighting biplanes, submarines, torpedo and dive bombers, charging infantry wearing gas masks and outlines of tanks. The use of cavalry seems dated.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('military-science-sugoroku.jpg'),
				alt: 'Board for Modern Military Science sugoroku',
				caption: 'Modern Military Science'
			}
		},
		{
			type: 'paragraph',
			text: 'Other images show future technologies, imaginary or otherwise. The amphibious tanks like those in the bottom row were developed, at least in the U.S., and Germany eventually did deploy a rocket-powered plane. However, torpedo boats that could use rockets to fly and the idea of having infantry invade a beach using powered water skis never came to pass. And it wasn’t until the 1980s that lasers came into play, although more as an anti-pilot weapon and potentially an anti-missile system.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('military-amphibious.jpg'),
					alt: 'Amphibious tanks from Modern Military Science',
					caption: 'Amphibious tanks'
				},
				{
					src: img('military-rocket-boats.jpg'),
					alt: 'Rocket-powered torpedo boats from Modern Military Science',
					caption: 'Rocket torpedo boats'
				},
				{
					src: img('military-ray-guns.jpg'),
					alt: 'Ray guns from Modern Military Science',
					caption: 'Ray guns'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The 1932 German science-fiction movie F.P.1 Antwortet Nicht (Floating Platform 1 Does Not Answer) stemmed from another budding military technology, the aircraft carrier.'
		},
		{
			type: 'paragraph',
			text: 'The movie was based on a novel by Kurt Siodmak (better known in the U.S. as the creator of The Wolf Man) after Charles Lindbergh’s transatlantic flight.'
		},
		{
			type: 'paragraph',
			text: 'Its premise was a floating landing field that would provide a stopover for transatlantic travel. F.P.1 was more than just an aircraft carrier: it was an entire floating city. F.P.1 Antwortet Nicht also was turned into a board game. The pieces features a tiny model of the F.P.1, along with six much larger painted airplanes.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('fp1-box-cover.jpg'),
					alt: 'Box cover for F.P.1 Antwortet Nicht board game',
					caption: 'F.P.1 Antwortet Nicht'
				},
				{
					src: img('fp1-map-board.jpg'),
					alt: 'Map board for F.P.1 game',
					caption: 'F.P.1 board'
				},
				{
					src: img('fp1-pieces.jpg'),
					alt: 'Playing pieces from F.P.1 game',
					caption: 'F.P.1 pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Technology also was evolving on the ground. The cards of a 1928 Quartettspiel Deutsches Heer had one card with modern forces in each set of four, with the remainder showing WWI uniforms and roles.'
		},
		{
			type: 'paragraph',
			text: 'The examples shown here include supply trains using trucks rather than horse-drawn wagons, transport troops with an armored car rather than depending on railway building, and the latest garb for engineering and ski-equipped scout troopers compared with their WWI counterparts.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('deutsches-heer-old-and-new.jpg'),
					alt: 'Old and new uniforms from Deutsches Heer Quartett',
					caption: 'Deutsches Heer Quartett'
				},
				{
					src: img('deutches-heer-pigeons.jpg'),
					alt: 'Carrier pigeon signals trooper from Deutsches Heer Quartett',
					caption: 'Carrier pigeons'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'On the other hand, to replace old-fashioned telegraph wires and radio antennas, the deck suggests that the latest military technology also included a bicycle-equipped signals trooper with a shoulder-bag full of carrier pigeons.'
		},
		{
			type: 'paragraph',
			text: 'The 1930s German game Sturmpioniere showed a much more detailed view of the wide range of techniques developed to deal with fortified defenses.'
		},
		{
			type: 'paragraph',
			text: 'Each player follows an identical course through their individual triangle of the board toward a central bunker objective. They must pass through a series of obstacles, each of which requires a different pioneer specialist.'
		},
		{
			type: 'paragraph',
			text: 'The metal playing pieces show each of these specialties in action: wire-cutting, mine detection and removal, armored assault, flamethrowers and river crossing. There also is a series of illustrations of these activities in boxes that surround the rules printed inside the lid of the game box.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('sturmpioniere-box-cover.jpg'),
					alt: 'Box cover for Sturmpioniere',
					caption: 'Sturmpioniere'
				},
				{
					src: img('sturmpioniere-full-board.jpg'),
					alt: 'Full board for Sturmpioniere',
					caption: 'Sturmpioniere board'
				},
				{
					src: img('sturmpioniere-box-contents-2.jpg'),
					alt: 'Contents of Sturmpioniere including metal playing pieces',
					caption: 'Sturmpioniere pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'There were perhaps three major leaps forward in military technology between the wars: one on land, one at sea and one in the air.'
		},
		{
			type: 'paragraph',
			text: 'On land, these years saw the tank become key to a whole new doctrine of land warfare. All countries developed improvements on the bulky, slow and unreliable tanks that waddled across trenches in WWI. Only in Germany were they combined with a radical new doctrine that became known as “blitzkrieg” or lightning war.'
		},
		{
			type: 'paragraph',
			text: 'Their impact was not immediately obvious, even in Germany.'
		},
		{
			type: 'paragraph',
			text: 'Perhaps the last game to feature cavalry as a useful military force was the mid-1930s Unsere Wehrmacht im Manover (Our army on manoeuvre).'
		},
		{
			type: 'paragraph',
			text: 'While the game box showed cavalry in action, the game board showed change underway. A cavalry dragoon (mounted rifle) unit is featured in the foreground at the lower right. But already, crossing the central bridge is an early turreted tank.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('unsere-box-top.jpg'),
					alt: 'Box top for Unsere Wehrmacht im Manover',
					caption: 'Unsere Wehrmacht im Manover'
				},
				{
					src: img('unsere-full-board.jpg'),
					alt: 'Full board for Unsere Wehrmacht im Manover',
					caption: 'Unsere Wehrmacht board'
				},
				{
					src: img('unsere-red-pieces.jpg'),
					alt: 'Red playing pieces from Unsere Wehrmacht im Manover',
					caption: 'Playing pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'In Unsere Wehrmacht im Manover, the tank token represents only one of the 30 counters on each side. The bulk of the army is still seen as infantry, supported by a solid cluster of artillery and token help from a primitive armored car, a motorcycle and a single biplane for air support.'
		},
		{
			type: 'paragraph',
			text: 'The game’s mechanism also dates back to WWI, using the same format as the 1917 Kampf gegen Russland. Players have small wooden sticks with flat ends that are used to propel the cardboard disk playing pieces. Players capture pieces by landing on top of them, and still have to pay attention to the river barrier. This is shown on the map as a serious obstacle, and troops are shown using assault boats and a pontoon bridge as well as existing stone and wooden crossings.'
		},
		{
			type: 'paragraph',
			text: 'This 1930s Belagerungsspiel shows a combination of biplane fighters and more modern bombers overhead, along with a primitive small tank. The tank commander is shown still using flags as signaling devices, rather than the radios which became standard in German armor by wartime.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('belagerung-30s-panzers.jpg'),
				alt: 'Biplanes and primitive tank from 1930s Belagerungsspiel',
				caption: 'Belagerungsspiel'
			}
		},
		{
			type: 'paragraph',
			text: 'One of the first games to focus on modern tank design and armor tactics was Panzerschlacht. This is one of many chess-type games that emerged in the late 1930s, but it has only two kinds of playing pieces: light tanks and heavy tanks.'
		},
		{
			type: 'paragraph',
			text: 'The board is elongated. It measures only 12 spaces wide, but 20 deep. Each player starts with eight heavy tanks in the back row and 10 light tanks in the second row.'
		},
		{
			type: 'paragraph',
			text: 'Both kinds of tanks only move diagonally, forward or backward. However, they shoot and kill enemy pieces only directly forward (across the alternating squares). A light tank moves up to six spaces, and can then kill an enemy tank up to three spaces away. A heavy tank has a maximum move of four spaces, but also can shoot an enemy up to four spaces away.'
		},
		{
			type: 'paragraph',
			text: 'The board is littered with dark green barriers. These represent tank traps and other barriers. Playing pieces cannot move onto or through them – but can shoot over them.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('panzerschlacht-box-cover.jpg'),
					alt: 'Box cover for Panzerschlacht',
					caption: 'Panzerschlacht'
				},
				{
					src: img('panzerschlacht-pieces-closeup.jpg'),
					alt: 'Tank playing pieces from Panzerschlacht',
					caption: 'Panzerschlacht pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Tanks would play a critical role in WWII ground combat. However, even more sweeping improvements were underway in the air.'
		},
		{
			type: 'paragraph',
			text: 'These new designs in turn allowed air forces to take on a wide range of missions: fighters to intercept or escort, bombers for tactical support and bombardment, naval assault by torpedo and bomb, and long-range reconnaissance.'
		},
		{
			type: 'paragraph',
			text: 'The German game Propeller Frei! continued to show biplanes taking the lead in aerial combat. The slightly later game Luftkampfspiel does show a two-engine monoplane bomber in action, but it still has fixed landing gear and an open cockpit and forward gunnery position.'
		},
		{
			type: 'paragraph',
			text: 'The pursuing fighters are still biplanes, as are all the planes shown on the game board. The game pieces themselves, however, have moved a generation ahead. The five colored fighters in the mix are all twin-engine monoplanes, as is the larger silver piece representing the attacking bomber.'
		},
		{
			type: 'paragraph',
			text: 'The bomber starts from the airfield at the upper left of the game board. The fighters begin from the fields at the lower left and right.'
		},
		{
			type: 'paragraph',
			text: 'The fighter players try to intercept the bomber before it can reach the target factories in the middle of the board.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('propeller-frei-box-and-board.jpg'),
					alt: 'Box and board for Propeller Frei!',
					caption: 'Propeller Frei!'
				},
				{
					src: img('luft-box-cover.jpg'),
					alt: 'Box cover for Luftkampfspiel',
					caption: 'Luftkampfspiel'
				},
				{
					src: img('luft-game-board.jpg'),
					alt: 'Game board for Luftkampfspiel',
					caption: 'Luftkampfspiel board'
				},
				{
					src: img('luft-planes.jpg'),
					alt: 'Plane pieces from Luftkampfspiel',
					caption: 'Luftkampfspiel planes'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Similarly, American designers showed a growing sophistication. Selchow and Righter’s Flying Aces from 1938 features two-seater, closed-cockpit monoplanes, but they still have fixed landing gear.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('flying-aces-box-cover.jpg'),
				alt: 'Box cover for Flying Aces',
				caption: 'Flying Aces'
			}
		},
		{
			type: 'paragraph',
			text: 'Game designers made some poor predictions about the evolution of aerial technology. In the earliest versions of the British games Aviation and Tri-Tactics published by Gibson, the scout has become a monoplane while others are still biplanes.'
		},
		{
			type: 'paragraph',
			text: 'The Bristol Fighter first flew in 1916 but remained in service until the 1930s. The game predicts development of a massive "Battle Plane" to rule the skies, suggesting that size and firepower would be more important than speed and agility.'
		},
		{
			type: 'paragraph',
			text: 'While the subsequent war did produce some powerful twin-engine planes like the Messerschmidt 110 and the P-38 Lightning mentioned above, it was fighters with a single engine and single seat that were to be dominant in air-to-air combat. (For that matter, pieces from a later version show troop carriers and airships as more powerful than either fighters or bombers!)'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('singles.jpg'),
					alt: 'Individual plane cards from Aviation and Tri-Tactics',
					caption: 'Aviation and Tri-Tactics'
				},
				{
					src: img('aviation-airplane-pieces.jpg'),
					alt: 'Airplane playing pieces from Aviation',
					caption: 'Aviation pieces'
				},
				{
					src: img('biplanes.jpg'),
					alt: 'Biplane pieces from Tri-Tactics',
					caption: 'Biplanes'
				},
				{
					src: img('bob-planes.jpg'),
					alt: 'Battle Plane and other pieces from later Tri-Tactics',
					caption: 'Battle Plane'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The most comprehensive look at the worldwide evolution of fighting aircraft during the 1920s and 1930s comes from the American card game Zoom. Each card has the name and picture of a different airplane, decked out in colors from a wide range of countries.'
		},
		{
			type: 'paragraph',
			text: 'The earlier models include many biplanes: a Norwegian Marinens M.F. 11 seaplane, a Russian I.5, a Henschel HS 123 and Focke-Wulfe Stieglitz from Germany, and two models of the Curtiss Hawk (III and IV).'
		},
		{
			type: 'paragraph',
			text: 'Later models included in the deck include key WWII combatants such as the Messerschmidt BF109 and the Supermarine Spitfire.'
		},
		{
			type: 'paragraph',
			text: 'Also shown is the Karigane 96, designated the Mitsubishi A5M in Japan, which was the immediate predecessor to Japan’s famous Zero fighter. The deck includes two experimental aircraft that would go on to play huge roles during WWII. First is the XP-38. This aircraft was designed to be a high-altitude and long-range interceptor. It was built with two engines on twin booms, with the pilot, guns and any bombload carried in the central nacelle.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('karigane.jpg'),
				alt: 'Karigane 96 card from Zoom',
				caption: 'Karigane 96'
			}
		},
		{
			type: 'paragraph',
			text: 'The experimental prototype cost Lockheed $761,000 to build, several times the $163,000 it was paid. The plane shown on the card actually flew for only 16 days. Its maiden flight was on Jan. 27, 1939, and it crashed on Feb. 11 at the end of a record-setting test flight from California to New York. Its performance was impressive enough that the army ordered another 11 prototypes.'
		},
		{
			type: 'paragraph',
			text: 'The twin-boom design allowed the nose of the nacelle to be packed with 4 machine guns and a 20mm cannon. This allowed it to hit accurately at a far longer range than a fighter with wing-mounted guns, which were set to converge at a particular range.'
		},
		{
			type: 'paragraph',
			text: 'While the P-38 was not as manoeuvrable at low altitudes as a single-engine fighter, its long range enabled it to be the first US Army Air Force fighter to make it to England in 1942. It was used in photo reconnaissance, bomber escort and ground support roles.'
		},
		{
			type: 'paragraph',
			text: 'The long distances in the Pacific War made it hugely valuable there. It was a flight of P-38s that shot down Japan’s top naval strategist, Admiral Isoroku Yamamoto, on April 18, 1943.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('xp-38.jpg'),
				alt: 'XP-38 card from Zoom',
				caption: 'XP-38'
			}
		},
		{
			type: 'paragraph',
			text: 'Also shown is the Boeing XB-15. This was the first attempt by the United States to design a heavy, long-range bomber, one that could carry a ton of bombs at 200 miles per hour over a distance of 5,000 miles. In testing, it set new lift-to-height records, such as lifting 31,205 pounds to a height of 8,200 feet (2,000 metres).'
		},
		{
			type: 'paragraph',
			text: 'This huge plane had crew compartments with beds, a galley and a lavatory, since its maximum 33-hour flight time needed multiple crews. Engineers could crawl inside the wings to service engines during flight.'
		},
		{
			type: 'paragraph',
			text: 'Some of its features were adapted to the prototype for the shorter-ranged B-17 Flying Fortress, the plane that carried out most of the U.S. strategic bombing missions for the United States in Europe.'
		},
		{
			type: 'paragraph',
			text: 'The design work on this plane led more directly to the B-29 Superfortress – the plane that dropped the atomic bombs on Hiroshima and Nagasaki.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('xb-15.jpg'),
				alt: 'XB-15 card from Zoom',
				caption: 'XB-15'
			}
		}
	]
};
