import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/battle-of-britain/${name}`;

export const battleOfBritain: StoryContent = {
	slug: 'battle-of-britain',
	title: 'The Battle of Britain',
	blocks: [
		{
			type: 'paragraph',
			text: 'Norman Eastmead remembers never having to pay when he went to see the movies. That was because he rarely got to see the end of the film. Eastmead was a crew member on an air-sea rescue launch, and they were never truly off-duty.'
		},
		{
			type: 'paragraph',
			text: '"Every time a plane left the country, we had to put to sea, and if they were on a bombing raid we would go about half way out to where the minefield ran from the Straits of Dover down to Cherbourg right down the centre of the Channel," he later told the BBC. "At the beginning of the war there were a lot of dog fights going on over the channel, and we had to be at sea for anyone who fell out of the sky to bring them home again."'
		},
		{
			type: 'paragraph',
			text: 'The Battle of Britain is known best for the heroics of the "never has so much been owed to so few" fighter pilots of the Royal Air Force. However, one of Britain\'s key advantages in that conflict was that when shot down, its planes tended to be over home territory or coastal waters.'
		},
		{
			type: 'paragraph',
			text: 'Pilots parachuting over land had a very good chance of surviving to fly again. Over sea, the odds were poorer, just one in five. This rescue performance was not due to any lack of heroics on the part of rescue crew like Eastmead. If a flyer came down on the wrong side of the Channel minefields, they had to cross them to rescue the pilot. "That didn\'t worry us, because if you went through this at speed they popped up behind us so we used them as target practice on the way back, but not before we\'d put a dinghy over the stern with a couple of deckhands to pick up the fish we wanted for supper."'
		},
		{
			type: 'paragraph',
			text: 'The Germans were actually the first to develop an effective air-sea rescue service, but the Battle of Britain caused the Royal Air Force to beef up its efforts, eventually creating an entire Air-Sea Rescue Service involving a combination of boats and planes to spot downed pilots, to drop dinghies and supplies to keep them alive, and then to pluck them from the water and bring them home.'
		},
		{
			type: 'paragraph',
			text: 'The Game of Air-Sea Rescue was published under licence from the RAF Benevolent Fund. Players take the part of downed airmen. They roll dice to move along a track. On reaching a certain point , players may launch spotter planes, which roll to move from the opposite end of the track. On their turn, players may move either counter but not both. Once the spotter plane and pilot meet, the player launches the rescue boat. This must then reach the pilot and return to port. The first player back wins the game.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('air-sea-rescue-launch-ecu.jpg'),
				alt: 'Air-sea rescue launch',
				caption: 'Air-sea rescue launch'
			},
				{
				src: img('air-sea-rescue-board.jpg'),
				alt: 'Board for Game of Air-Sea Rescue',
				caption: 'Game of Air-Sea Rescue'
			},
				{
				src: img('air-sea-rescue-counters-die-and-box.jpg'),
				alt: 'Counters, die and box for Game of Air-Sea Rescue',
				caption: 'Air-Sea Rescue contents'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Another early-war British game highlighted the role of other under-appreciated services in protecting civilians during the Blitz. In the game "Black-Out", players must drive their cars across the centre of London at night. To move, they draw from a deck of cards.'
		},
		{
			type: 'paragraph',
			text: 'The cards show people who may help out during an air raid (an Air Raid Warden, an Auxiliary Fire Squad, a Policeman, a War Auxiliary Policeman and Fireman) and the equipment they need to fight fires and keep streets safe (such as Firefighting Equipment, Sandbags, Sand Buckets and signals).'
		},
		{
			type: 'paragraph',
			text: 'Each player\'s car that must make it from one corner of London to the opposite corner. Players draw a card each turn, keeping them in hand until they have those needed to proceed across one or more of the white arrows that cross London\'s streets.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('board.jpg'),
				alt: 'Board for Black-Out',
				caption: 'Black-Out board'
			},
				{
				src: img('people.jpg'),
				alt: 'People cards from Black-Out',
				caption: 'People cards'
			},
				{
				src: img('fire.jpg'),
				alt: 'Fire equipment cards from Black-Out',
				caption: 'Fire equipment'
			},
				{
				src: img('crossings.jpg'),
				alt: 'Street crossings on the Black-Out board',
				caption: 'Street crossings'
			},
				{
				src: img('vehicles.jpg'),
				alt: 'Vehicle playing pieces from Black-Out',
				caption: 'Vehicles'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Aerial Attack is another air-raid game. It is a simpler roll-and-move game with a vividly illustrated box cover: A searchlight points at a bomber overhead, pinpointing the target for the anti-aircraft gun beside it. A large factory burns in the background to the right. Night fighters take off to do battle from an aerodrome on the left.'
		},
		{
			type: 'paragraph',
			text: '"Our present game shows an attack by enemy planes and the brave defence of the home Air Force," the rules say. "Apart from this, however, the game also teaches us how the population should behave during such assaults."'
		},
		{
			type: 'paragraph',
			text: 'Players move metal airplanes that represent defending fighters. Attacking bombers are black and the fighters are red. The first 34 spaces on the 60-space track deal with the air battle. The remainder focus on events on the ground.'
		},
		{
			type: 'paragraph',
			text: 'At space 40, for instance, an incendiary bomb strikes a basement that has been "cleared according to regulations"; the player landing their gets a token from each other player.'
		},
		{
			type: 'paragraph',
			text: 'Space 44 shows how not to fight a fire, forcing the player to pay five tokens into the kitty. Space 48 "shows that the inhabitants must not lounge about the streets during attacks to satisfy their curiosity, but must immediately take cover in basements."'
		},
		{
			type: 'paragraph',
			text: 'Space 53 shows people under cover in gas-protected premises, while Space 55 shows "careless reading under open flame". Space 57 pays tribute to the Ambulance Corps, showing two men in protective uniforms and gas masks carrying a stretcher.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('aerial-attack-box-cover.jpg'),
				alt: 'Box cover for Aerial Attack',
				caption: 'Aerial Attack'
			},
				{
				src: img('aerial-attack-board.jpg'),
				alt: 'Board for Aerial Attack',
				caption: 'Aerial Attack board'
			},
				{
				src: img('aerial-attack-ground-rules-spaces.jpg'),
				alt: 'Ground rules spaces on the Aerial Attack board',
				caption: 'Ground rules spaces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Beyond the hazards faced by civilians during bombing raids, this game has an even sadder story about the costs of WWII.'
		},
		{
			type: 'paragraph',
			text: 'While Aerial Attack was published by Chad Valley in England, it was actually a copy of the German game Feindliche Flieger in Sicht! (Enemy planes in sight!) That game was published in 1938 by Klee.'
		},
		{
			type: 'paragraph',
			text: 'The German company\'s name and clover logo come from its founder in 1884, Ludwig Kleefeld (whose last name would translate as "clover field"). In 1907, it was taken over by Leopold Bromeisl. He was joined in 1915 by his brother Moritz. Together, they built a leading games company selling games across Europe in five languages. By 1937, its game catalog ran to 52 pages.'
		},
		{
			type: 'paragraph',
			text: 'Feindliche Flieger in Sicht! was the brothers\' effort to show the Nazi government that they were German patriots. It did no good.'
		},
		{
			type: 'paragraph',
			text: 'The government forced them to sell their company for a pittance, as happened to many Jewish business owners of that era.'
		},
		{
			type: 'paragraph',
			text: 'Moritz survived the war, but Leopold and his wife were captured by the Gestapo while hiding in Rotterdam and sent to Sobibor concentration camp, where they died.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('feindliche-box-better.jpg'),
				alt: 'Box for Feindliche Flieger in Sicht!',
				caption: 'Feindliche Flieger in Sicht!'
			}
		},
		{
			type: 'paragraph',
			text: 'While German companies put out several games of abstract air combat as noted previously, they also published games specifically about the air campaign against the United Kindom.'
		},
		{
			type: 'paragraph',
			text: 'Bomber uber England was a bagatelle (pinball) type game. There is a curved wooden frame set within a cardboard box, with a launching path for a metal ball against the right edge.'
		},
		{
			type: 'paragraph',
			text: 'The board shows a map of the UK, the North Sea and the northern European coast. England and France are shown in orange; Belgium and Holland in white; and Germany in green.'
		},
		{
			type: 'paragraph',
			text: 'This shows that the game was published after the German invasion of Poland and declarations of war by England and France, but before the invasion of the Low Countries in April 1940.'
		},
		{
			type: 'paragraph',
			text: 'The board has 19 potential holes as targets and a grid of small bumps to redirect the ball. Each of the target holes is marked with a score.'
		},
		{
			type: 'paragraph',
			text: 'The highest possible score, 100 points, is assigned to London and to Calais. Hitting neutral Amsterdam or Brussels subtracts 80, and hitting Germany is -100! Each player is allowed to shoot the ball 10 times, and the player with the highest total score wins.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('bomber-uber-england-board.jpg'),
				alt: 'Board for Bomber uber England',
				caption: 'Bomber uber England'
			}
		},
		{
			type: 'paragraph',
			text: 'The "Post" magazine included a paper board game in one of its issues on the same theme. Wir fahren und fliegen gegen England combined air and naval combat against Britain. There is a 100-space track that wanders across the North Sea to Scotland, then a loop out to sea and back across northern England, down the Irish Sea, along the Channel, over southeastern England and finally home.'
		},
		{
			type: 'paragraph',
			text: 'What makes the game a little unusual for its type is that players cut out and use one of five different playing pieces: a scouting seaplane, dive bomber, fighter, cruiser or U-boat. The 22 red event spaces on the track have a different impact depending on the playing piece.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('fahren-und-fliegen.jpg'),
				alt: 'Board for Wir fahren und fliegen gegen England',
				caption: 'Wir fahren und fliegen gegen England'
			},
				{
				src: img('fahren-und-fliegen-space-30-description.jpg'),
				alt: 'Space 30 description from Wir fahren und fliegen gegen England',
				caption: 'Space 30'
			},
				{
				src: img('fahren-und-fliegen-pieces-ecu.jpg'),
				alt: 'Playing pieces from Wir fahren und fliegen gegen England',
				caption: 'Playing pieces'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Space 30, for instance, is an encounter with a battleship. The U-boat player landing here sinks the ship and gets to double his next die roll. Airplanes circle to take reconnaissance photos and miss a turn.'
		},
		{
			type: 'paragraph',
			text: 'If a player lands on London (83), the scouting plane goes over the flak balloons, takes aerial photographs and rolls again. Ship pieces, on the other hand, must wait at space 82 until they roll a number high enough to reach the next sea space (85).'
		},
		{
			type: 'paragraph',
			text: 'There is some foreshadowing of the broader Battle of the Atlantic to come. In the Bristol Channel (66), the U-boat "makes a daring foray", kills an enemy torpedo boat and moves ahead to 70. The cruiser moves ahead to 68, while all planes are attacked by fighters from the Bristol airbase and sent back to 64.'
		}
	]
};
