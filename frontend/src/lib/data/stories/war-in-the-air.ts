import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/war-in-the-air/${name}`;

export const warInTheAir: StoryContent = {
	slug: 'war-in-the-air',
	title: 'War in the Air',
	blocks: [
		{
			type: 'paragraph',
			text: 'Winter nights come early in England, and it was well after dark on Jan. 19, 1915, when two zeppelins crossed over the Norfolk coast. They were aiming for the Humber River valley, but wind had pushed them further south than planned.'
		},
		{
			type: 'paragraph',
			text: 'Aboard L.3, Kapitänleutnant Hans Fritz ordered a parachute flare to be dropped. This helped the crew identify their location, and the zeppelin turned north toward Great Yarmouth. The first bomb from L.3 fell on farmland at 8:25 p.m., followed by another 10 that struck the town. Two people died: 53-year-old shoemaker Samuel Smith and 72-year-old Martha Taylor.'
		},
		{
			type: 'paragraph',
			text: 'Zeppelin L.4, commanded by Kapitänleutnant Magnus von Platen-Hallermund, turned south. This crew, however, misread their location and dropped their bombs across a string of towns, with eight of them hitting King’s Lyn. These bombs killed another two people, teenager Percy Goate and Alice Gradley, a 26-year-old who had recently lost her husband, killed in the fighting in France.'
		},
		{
			type: 'paragraph',
			text: 'Zeppelins had made raids on the continent and often were used for scouting on land and at sea, but only in January 1915 did Kaiser Wilhelm finally gave permission to bomb England.'
		},
		{
			type: 'paragraph',
			text: 'Another 16 people were injured in that first raid, and total damage to property was estimated at GBP 7,740. On the scale of WWI slaughter, the result was a pinprick. From the point of view of civilian morale, it was a game-changer.'
		},
		{
			type: 'paragraph',
			text: 'Graf von Zeppelin, who gave his name to the rigid airships, had been a military observer with the Union Army during the Civil War.'
		},
		{
			type: 'paragraph',
			text: 'When he heard about the use of balloons for observation during the Peninsular Campaign, he had long talks with the founder of the U.S. Balloon Corps, Thaddeus Lowe.'
		},
		{
			type: 'paragraph',
			text: 'By 1900, von Zeppelin had built his first airship, and in 1909 founded the world’s first airline, Deutsche Luftschiffahrts-A.G. (DELAG). The German military was quick to express interest, and both the army and navy soon acquired zeppelins for testing and training.'
		},
		{
			type: 'paragraph',
			text: 'Between military and civilian uses, Germany built up an astonishingly broad infrastructure to support airship use – a network of bases and routes that is shown in amazing detail in a German boardgame of the time. Zeppelin-Spiel was published in 1914 by von Ed. Moeckel of Wiesbaden. It has a plain brown box with a large picture of an early zeppelin. The board bears the slogan “Durch Kampf zum Ziel”, or “Fight through to the goal”.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('zeppelin-spiel-box-cover.jpg'),
					alt: 'Box cover for Zeppelin-Spiel',
					caption: 'Zeppelin-Spiel'
				},
				{
					src: img('zeppelin-spiel-board.jpg'),
					alt: 'Full board for Zeppelin-Spiel',
					caption: 'Zeppelin-Spiel board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The board itself is huge (88 cm or 35” x 77 cm or 30.5”). It is a topographical map of Germany and bordering territories at 1:1,275,0000 scale. It is marked with a network of zeppelin flight routes connecting towns and places “where special events happened” and many more locations which were “flown over without a long stay”.'
		},
		{
			type: 'paragraph',
			text: 'It shows the location of all existing zeppelin hangars, both singles and doubles, as well as planned facilities. It marks the hangars as the property of von Zeppelin’s airship construction business, of his passenger airship line DELAG, and of his main airship-building competitor Schutte-Lanz. It also marks hangars owned by cities and other private companies, and shows four military airship bases. The end space of the 160-point track is New York, showing that the ultimate goal was not military, but to be able to carry passengers by air across the Atlantic to New York.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('zeppelin-spiel-helgoland-and-n-am.jpg'),
					alt: 'Helgoland and North America detail on the Zeppelin-Spiel board',
					caption: 'Helgoland and North America'
				},
				{
					src: img('zeppelin-spiel-rhein-valley-detail.jpg'),
					alt: 'Rhein valley detail on the Zeppelin-Spiel board',
					caption: 'Rhein valley detail'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Much of the map illustrates the dangers of this new technology. Black flags sprout from the locations of zeppelin accidents. These include:'
		},
		{
			type: 'paragraph',
			text: 'Space 23, where experimental zeppelin ZL4 was destroyed when strong winds broke its moorings at Echterdingen on Aug. 4, 1908, during a stop to repair its engines;'
		},
		{
			type: 'paragraph',
			text: 'Space 59, where experimental military zeppelin ZL5 was wrecked on the ground on March 25, 1910;'
		},
		{
			type: 'paragraph',
			text: 'Space 73, where DELAG’s first craft ZL6 was destroyed by a fire in its hangar at Oos, near Baden Baden, on Sept. 14, 1910;'
		},
		{
			type: 'paragraph',
			text: 'Space 81, where LZ7, Deutschland, DELAG’s first civilian airliner, was damaged beyond repair when forced into landing in the Teutoburg forest by a thunderstorm on June 28, 1910;'
		},
		{
			type: 'paragraph',
			text: 'Space 86, where the Schwaben (LZ11), a DELAG ship that had carried 1,553 passengers on 218 commercial flights, caught fire after a strong gust tore it from its moorings near Dusseldorf on June 28, 1912;'
		},
		{
			type: 'paragraph',
			text: 'Space 169, site of the Helgoland disaster where military zeppelin LZ14 was brought down into the North Sea by a thunderstorm on Sept. 9, 1913, drowning 14 crew members. This was the first zeppelin accident to cause fatalities; and'
		},
		{
			type: 'paragraph',
			text: 'Space 66, where LZ18 was destroyed during a test flight on Oct. 17, 1913, by an explosion when hydrogen gas was sucked into an engine. The entire crew died, including the head of the German military airship program and many top experts in the field.'
		},
		{
			type: 'paragraph',
			text: 'Zeppelins performed two missions during the war. Their bombing raids were the best known, but caused very little damage compared with the costs of building them. They were especially vulnerable when flying low enough to target effectively.'
		},
		{
			type: 'paragraph',
			text: 'They saw much more common use in reconnaissance, where they could fly high enough to avoid fixed-wing planes. Both army and navy units performed valuable service.'
		},
		{
			type: 'paragraph',
			text: 'The 1915 game Seekrieg shows both airships and fixed-wing planes in naval roles. The zeppelin on space 41 is named the Deutschland, but this was obviously artistic licence, since the two zeppelins given that name were both civilian craft that went out of service in 1910 and 1911.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('luft-airship-and-plane.jpg'),
				alt: 'Airship and plane on the Seekrieg board',
				caption: 'Seekrieg reconnaissance'
			}
		},
		{
			type: 'paragraph',
			text: 'Similarly, the game Schlacht bei Tannenberg showed the use of an airship for land-based reconnaissance in the first year of the war on the Eastern front. Russian soldiers are shown trying to fire at the German airship with both rifles and artillery. Airships usually stayed high enough to avoid ground fire. However, they sometimes needed to fly lower to see more detail of ground movement.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('tannenberg-shooting-at-airship.jpg'),
				alt: 'Russian soldiers firing at a German airship on the Tannenberg game board',
				caption: 'Shooting at an airship'
			}
		},
		{
			type: 'paragraph',
			text: 'Relatively few WWI games focused on air power. The best graphic example of WWI air combat is the German game published by Franz Schmidt of Nurnberg, Bomber griefen an. The box cover is a spectacular piece of art. A biplane bomber is releasing its bombs is in the foreground. Around it, fighters and other bombers duel in the air. Below, a flak gun fires upward. In the distance, one smoking plane plunges toward the ground. And across the countryside below, bombs explode and buildings burn.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('bomber-griefen-an-box-cover.jpg'),
					alt: 'Box cover for Bomber griefen an',
					caption: 'Bomber griefen an'
				},
				{
					src: img('bomber-griefen-an-map.jpg'),
					alt: 'Board for Bomber griefen an',
					caption: 'Bomber griefen an board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The board is an aerial view of countryside, marked with a square grid, 18 wide by 26 deep. No Man\'s Land is the darker four rows in the middle. Each player gets a combination of fighters, bombers and guns, and they take turns moving and firing or bombing.'
		},
		{
			type: 'paragraph',
			text: 'Playing pieces were normally cardboard, but one surviving copy includes roughly carved and glued wooden pieces, with biplane bombers and monoplane fighters.'
		},
		{
			type: 'paragraph',
			text: 'The guns have a barrel mounted on a block. Each player gets six bombers, six fighters, six anti-aircraft guns and one “Long Max” artillery piece. This was a very large (38 cm) gun originally intended for use in battleships, but that was adapted for use in WWI as a heavy siege or coastal defense gun on land.'
		},
		{
			type: 'paragraph',
			text: 'A mid-war Quartett deck did celebrate two of Germany’s early-war aerial heroes and aces: Hauptman Oswald Boelke and Oberleutnant Max Immelmann.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('quartett-aerial-heroes.jpg'),
				alt: 'Quartett cards featuring Oswald Boelke and Max Immelmann',
				caption: 'Aerial heroes Quartett'
			}
		},
		{
			type: 'paragraph',
			text: 'Boelke was an influential early tactician known as the “Father of Air Fighting Tactics”.'
		},
		{
			type: 'paragraph',
			text: 'Immelmann, for his part, came up with the Immelmann turn, in which a fighter quickly reverses course by combining a half-loop and a twist.'
		},
		{
			type: 'paragraph',
			text: 'He also was called Der Adler von Lille (The Eagle of Lille), after becoming that city’s lone aerial defender in October 1914.'
		},
		{
			type: 'paragraph',
			text: 'According to his card, Boelke had shot down 18 French and English planes by May, 1916. Immelmann had shot down 15 by then.'
		},
		{
			type: 'paragraph',
			text: 'Immelmann was the first German to be awarded the country’s new highest honor, the Pour le Mérite, which became known thereafter as the Blue Max. However, he actually received it on the same day as Boelke, Jan. 12, 1916. Immelmann was shot down on June 18, 1916.'
		},
		{
			type: 'paragraph',
			text: 'One of the most complete reviews of the multiple roles of aircraft during WWI comes not from Europe but from Japan. This sugoroku titled Military Aviation, was published in 1916. Its images include a French tethered observation balloon as well as zeppelins in action and being pulled into a hangar.'
		},
		{
			type: 'paragraph',
			text: 'There are images of air to air combat as well as dropping small bombs by hand. But most prominent are the reconnaissance roles of both fixed-wing and lighter-than-air craft. The top right corner matches a biplane spotting for naval gunfire with a zeppelin aiding German uhlans on patrol.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('military-aviation-full-sheet.jpg'),
					alt: 'Full sheet for Military Aviation sugoroku',
					caption: 'Military Aviation'
				},
				{
					src: img('military-aviation-naval-and-land-recon.jpg'),
					alt: 'Naval and land reconnaissance on the Military Aviation board',
					caption: 'Naval and land reconnaissance'
				}
			]
		}
	]
};
