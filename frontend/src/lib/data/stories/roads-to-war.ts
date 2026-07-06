import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/roads-to-war/${name}`;

export const roadsToWar: StoryContent = {
	slug: 'roads-to-war',
	title: 'Roads to War',
	blocks: [
		{
			type: 'paragraph',
			text: 'Another portent of future military disaster crops up in a 1930s game about travel by automobiles. The image of European automotive travel during this decade is indelibly connected with Germany’s famous autobahns, but the idea preceded Adolf Hitler’s rise to power. The first autobahn segment between Bonn and Cologne was dedicated by then Cologne mayor Konrad Adenauer on August 6, 1932. When Hitler took power a year later, he quickly fired Adenauer (who much later became the first Chanceller of the post-WWII West German republic) but saw road-building as a great way to create jobs.'
		},
		{
			type: 'paragraph',
			text: 'He appointed Fritz Todt as Inspector General of German Road Construction, and the pace of construction accelerated dramatically. By 1936, 136,000 workers were directly employed in building the new roads, and another 270,000 people had jobs in all the supporting industries.'
		},
		{
			type: 'paragraph',
			text: 'The autobahns were never that important to the military. Trains were more efficient for moving troops and supplies, and tank tracks chewed up any road they used. German games about roads, however, provide an interesting map of the progress from peace to war through the latter half of the 1930s.'
		},
		{
			type: 'paragraph',
			text: 'Europa Rundreise had players move cute little cars from Berlin both east and west around Europe. Typically for a roll-and-move race game, various spaces along the way offer bonuses or inflict penalties. In a surely unintended omen, the easternmost space that can be reached by the German motorist is Stalingrad.'
		},
		{
			type: 'paragraph',
			text: 'Stalingrad is a penalty space. The instructions read: “While visiting the city of Tractor Factories, the traveller decides to stay a while. Lose two turns.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('rundreise-stalingrad.jpg'),
				alt: 'Stalingrad penalty space on Europa Rundreise board',
				caption: 'Europa Rundreise'
			}
		},
		{
			type: 'paragraph',
			text: 'If creating jobs by building roads was a first step in Nazi policies aimed at reviving Germany’s economy, the next step was to build traffic on those roads. Another early Nazi initiative was the creation of the Kraft durch Freude (Strength through Joy). The KdF was set up under the German Labor Front to bring middle-class activities like concerts, libraries, day-trips and tourism to the masses. By the late 1930s it had become the largest organizer of tourist trips in the country.'
		},
		{
			type: 'paragraph',
			text: 'In 1934, Hitler ordered the design of a new “people’s car” that could carry a family of five at up to 100 km/hr while using less than 7 litres of fuel per 100 km. Famed auto designer Ferdinand Porsche took an idea first developed in the 1920s by Hungarian inventor Béla Barényi, and turned it into a prototype of the Volkswagen.'
		},
		{
			type: 'paragraph',
			text: 'In 1938, Hitler helped break ground on a huge new factory to make the car in what is now Wolfsburg. Before production even began, the car was marketed through the KdF.'
		},
		{
			type: 'paragraph',
			text: 'Part of the marketing effort was a game, Dein KdF-Wagen, published in 1938. The board for roll-and-move game showed the entire process, from the decision to purchase, and the car\'s assembly and delivery through day-to-day use and maintenance.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kdf-box-cover.jpg'),
				alt: 'Box cover for Dein KdF-Wagen',
				caption: 'Dein KdF-Wagen'
			}
		},
		{
			type: 'paragraph',
			text: 'The KdF-wagen was priced at 990 DM, about the same as a small motorcycle and just more than the average annual income. However, it was sold through Sparkarte, savings books that let people set aside a bit at a time until they had accumulated enough to buy the car.'
		},
		{
			type: 'paragraph',
			text: 'Space 3 shows the empty Sparkarte just after the couple has visited the KdF office and signed up to buy. Later, after a factory test drive, the full Sparkarte at space 23 leads to delivery of the shiny new car.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('kdf-buying-start-closeup.jpg'),
					alt: 'Empty Sparkarte at space 3 on Dein KdF-Wagen board',
					caption: 'Signing up to buy'
				},
				{
					src: img('kdf-delivery-closeup.jpg'),
					alt: 'Full Sparkarte and car delivery at space 23',
					caption: 'Car delivery'
				}
			]
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kdf-board.jpg'),
				alt: 'Full board for Dein KdF-Wagen',
				caption: 'KdF-Wagen board'
			}
		},
		{
			type: 'paragraph',
			text: 'The board also shows that while KdF owners would enjoy the freedom of the autobahn, they still had to follow rules.'
		},
		{
			type: 'paragraph',
			text: 'Space 52 shows a traffic control officer doing a random check for car registration and identity papers; space 59 is a penalty space for drinking too much beer, which forces the player to lose two turns and could lead to a blood test (no breathalyzers in those days!).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('kdf-traffic-stop.jpg'),
					alt: 'Traffic control officer check on Dein KdF-Wagen board',
					caption: 'Traffic stop'
				},
				{
					src: img('kdf-pieces.jpg'),
					alt: 'Playing pieces from Dein KdF-Wagen',
					caption: 'KdF-Wagen pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Only a handful had been produced before the Volkswagen factory was converted to war production. Its main output was the Kubelwagen, the Germany equivalent of the American Jeep. The mechanical simplicity of the car, together with its 25 horsepower, flat-four, air-cooled engine, proved to be ideal for military use in many ways.'
		},
		{
			type: 'paragraph',
			text: 'It could survive harsh conditions, notably the heat of North Africa. And while having only two-wheel drive, its flat bottom enabled it to drive (or slide) over rough terrain just as well as the American and British four-wheel-drive equivalents.'
		},
		{
			type: 'paragraph',
			text: 'As cars became more common around the world, there was a spate of new games aimed at teaching drivers and pedestrians alike about the rules of the road.'
		},
		{
			type: 'paragraph',
			text: 'In Germany, the road-rules genre also bore testament to the rise of Nazism and the trend toward war. One of these was an explicit recruiting tool. NSKK & HJ-Vehrkersspiel was co-sponsored by two Nazi organizations.'
		},
		{
			type: 'paragraph',
			text: 'The HJ refers to the Hitler Jugend, the youth arm of the Nazi party. The NSKK is a lesser-known body. The Nationalsozialistisches Kraftfahrkorps (National Socialist Motor Corps) was a small paramilitary wing of the Nazi party.'
		},
		{
			type: 'paragraph',
			text: 'The NSKK‘s primary role was to teach people how to drive and maintain motorcycles and cars. Its role in driver education is featured in space 4 in Dein KdF-Wagen. It also provided roadside assistance to Germans using those new autobahns, acting like the modern-day American Automobile Association and its equivalents. Once war broke out, NSKK members were recruited to serve in transportation units across the German military.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('nskk-und-hj-verkehrsspiel-box-cover.jpg'),
				alt: 'Box cover for NSKK & HJ Verkehrsspiel',
				caption: 'NSKK & HJ Verkehrsspiel'
			}
		},
		{
			type: 'paragraph',
			text: 'Other German games catalogued the steady expansion of both the autobahns and of German territory during the late 1930s.'
		},
		{
			type: 'paragraph',
			text: 'After the Anschluss of March 1938 (when Germany annexed Austria), the term Grossdeutschen Reich came into use – the union having formed a “greater Germany”. Die Reichsautobahnen im Grossdeutschen Reich shows the autobahn network as extending across Austria to Vienna in the east and Klagenfurt in the south.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('reichsautbahn-box-cover.jpg'),
					alt: 'Box cover for Auf der Reichsautobahn durch Grossdeutschland',
					caption: 'Auf der Reichsautobahn'
				},
				{
					src: img('reichsautbahn-board.jpg'),
					alt: 'Board for Auf der Reichsautobahn durch Grossdeutschland',
					caption: 'Reichsautobahn board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The mapboard for this game was outdated quickly by the Munich Conference in September, 1938, which ceded the Sudetenland (a largely German-speaking portion of Czechoslovakia) to Germany. The agreement that British Prime Minister Neville Chamberlain proclaimed would lead to “peace for our time” did anything but. Hitler promptly turned all of western Czechoslovakia into German protectorates.'
		},
		{
			type: 'paragraph',
			text: 'On Aug. 23, 1939, Germany signed the Molotov-Ribbentrop agreement with the USSR that effectively split Poland between them. A week later, Germany invaded Poland. Even though France and Britain promptly declared war, there was little they could do. By Oct. 5, the fighting was over. On Oct. 8, Germany annexed the westernmost section of Poland and the Free City of Danzig. The rest of its Polish territory was placed under the administration of what was called the General Government. All of Germany\'s new territories are shown in a late 1939 “new edition” of the Hausser game Auf der Reichsautobahn durch Grossdeutschland.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('reichsautobahnen-der-gdl-box-cover.jpg'),
					alt: 'Box cover for Die Reichsautobahnen im Grossdeutschen Reich',
					caption: 'Die Reichsautobahnen im Grossdeutschen Reich'
				},
				{
					src: img('reichsautobahnen-der-gdl-board.jpg'),
					alt: 'Board for Die Reichsautobahnen im Grossdeutschen Reich',
					caption: 'Reichsautobahnen board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Grossdeutschlands Stadte Spiel, also published in late 1939, focused more on the cities of the new Greater Germany than on the autobahns connecting them. The map board for this games shows cities across Germany, Austria and occupied Czechoslovakia and Poland. The cities are identified only with a symbol. Players collect tiny letter tiles to spell the names of the cities correctly. The game comes with a booklet that shows the cities, their symbols and rhymes about them.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('stadt-box-top.jpg'),
					alt: 'Box top for Grossdeutschlands Städte Spiel',
					caption: 'Grossdeutschlands Städte Spiel'
				},
				{
					src: img('stadt-full-map.jpg'),
					alt: 'Full map for Grossdeutschlands Städte Spiel',
					caption: 'Städte Spiel map'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Even these maps, of course, quickly became outdated. Germany invaded Denmark on April 9, 1940, quickly followed by Norway. The invasion of France, Belgium and the Netherlands came a month later, on May 10.'
		}
	]
};
