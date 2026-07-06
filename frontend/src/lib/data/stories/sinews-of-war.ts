import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/sinews-of-war/${name}`;

export const sinewsOfWar: StoryContent = {
	slug: 'sinews-of-war',
	title: 'Sinews of War',
	blocks: [
		{
			type: 'paragraph',
			text: 'It was just after midnight on July 9, 1916, when James Fesmire spotted the U-boat. Normally captain of the tug boat Efco, the sharp-eyed 28-year old had been hired as crew for a very special mission aboard the tug Thomas F. Timmins, commanded by Capt. Zack W. Cullison. The tug had been lying in wait for more than two weeks in order to make this clandestine rendezvous.'
		},
		{
			type: 'paragraph',
			text: 'The two vessels exchanged signals, and then the U-boat followed the tug into Chesapeake Bay. In 1916, Germany was at war with Britain, France and Russia, but not with the United States. However, the British fleet was doing its best to cripple German industry by blockading the continent. This U-boat was Germany’s answer.'
		},
		{
			type: 'paragraph',
			text: 'The Deutschland at the time was the largest U-boat ever built. It had an overall length of 315 feet, an extraordinarily wide beam of 31 feet and a range of 5,000 miles. And it was built as a commercial venture by a subsidiary of the North German Lloyd shipping company. It had no torpedo tubes or other weaponry. The sole purpose of the Deutschland was to carry valuable cargo and evade the British blockade by sailing underwater whenever necessary.'
		},
		{
			type: 'paragraph',
			text: 'The Deutschland set out on its maiden voyage from the port of Bremerhaven on June 23. It arrived off Baltimore 16 days later, having had to submerge for only 140 kilometres of the 6,100 kilometre journey. Its outbound cargo consisted of 125 tons of valuable chemical dyes, medical drugs, gemstones and mail.'
		},
		{
			type: 'paragraph',
			text: 'Once into Chesapeake Bay, the Deutschland unfurled her German flag and proceeded openly to the port of Baltimore. Her arrival was a major media event, and her crew were treated as celebrities and feted around town.'
		},
		{
			type: 'paragraph',
			text: 'After unloading, she took on a return cargo of materials Germany needed for war, including 341 tons of nickel, 93 tons of tin and 348 tons of crude rubber, most of which was carried in the space between her inner and outer hulls. The value of the return cargo was several times what it had cost to build the U-boat. The Deutschland left Baltimore for Germany on August 2.'
		},
		{
			type: 'paragraph',
			text: 'The huge U-boat made a second voyage to the United States in November, landing in New London, Connecticut with a cargo of gems, securities and medicines worth an estimated $10 million (about $240 million today).'
		},
		{
			type: 'paragraph',
			text: 'Shortly thereafter, Von Deutschland nach Amerika mit unseren Handels-U-booten was published by O&M Hausser. Both the box cover and board feature artwork by renowned artist Sigmund Socholkowski. The game was a simple roll-and-move affair, but showed the route from Germany to Baltimore and then New London and back as a single voyage. It was undoubtedly designed and published to coincide with the release of a book about his trips by Capt. Konig. The game may have been a commercial venture, but like the book, certainly supported government efforts to show that the British blockade was failing.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('hu-box-cover.jpg'),
					alt: 'Box cover for Von Deutschland nach Amerika mit unseren Handels-U-booten',
					caption: 'Von Deutschland nach Amerika (1916)'
				},
				{
					src: img('hu-board.jpg'),
					alt: 'Game board showing the Deutschland’s route from Germany to Baltimore and New London',
					caption: 'The Handels-U-boot route'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'In 1939, on the eve of WWII, Hausser published another trading game, Welthandel. The box cover featured the flags of Nazi Germany and its many trading partners, including its enemies to be. The postwar version shown below replaces the swastika with a fictitious flag (yellow on red).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('welthandel-box-cover.jpg'),
					alt: 'Postwar box cover for Welthandel with fictitious flag replacing the swastika',
					caption: 'Welthandel (postwar edition)'
				},
				{
					src: img('welthandel-swastika-box.jpg'),
					alt: 'Original Welthandel box cover with Nazi Germany flag',
					caption: 'Welthandel (1939 edition)'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The board shows a global map with a web of trade routes. Each player starts with 10 cargo cards and some money.'
		},
		{
			type: 'paragraph',
			text: 'The objective is to work out the most efficient way to take the goods to ports where they are in demand and end the game with the most cash.'
		},
		{
			type: 'paragraph',
			text: 'Germany was not alone in publishing games about the importance of trade during wartime. As WWI drew to a close in 1918, Milton Bradley published Game of the New U.S. Merchant Marine. The game was developed under the authority of the United States Shipping Board, a wartime body established in 1916 with the goal of restoring the health of the U.S. merchant marine. Through the end of the war, the Board had effective control of all U.S. ships and shipping operations.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('new-us-merchant-marine-box-cover.jpg'),
					alt: 'Box cover for Game of the New U.S. Merchant Marine',
					caption: 'Game of the New U.S. Merchant Marine (1918)'
				},
				{
					src: img('new-us-merchant-marine-board.jpg'),
					alt: 'Mercator projection game board showing the political world of 1918',
					caption: 'The Merchant Marine board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The game board is an unusually detailed Mercator projection of a global map, showing the political world as it was then. The Russian Civil War was still raging, and St. Petersburg is still shown as Petrograd rather than Leningrad.'
		},
		{
			type: 'paragraph',
			text: 'The game was re-issued in 1936 as Liners and Transports. It used a newer map showing the Union of Soviet Socialist Republics as well as a Pacific Ocean with “Former German Possessions” and "Japanese Mandate" north of New Guinea.'
		},
		{
			type: 'paragraph',
			text: 'Corey Games published Yankee Trader in 1941. This game was issued just before American entry into the war.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('yankee-trader-box-cover.jpg'),
				alt: 'Box cover for Yankee Trader showing a ship named Singapore',
				caption: 'Yankee Trader (1941)'
			}
		},
		{
			type: 'paragraph',
			text: 'It therefore assumed that American ships were still free to sail anywhere in the world, notably Singapore (shown as the name of a ship on the box cover). Players follow a route from San Francisco to New York via Asia and Europe, picking up and selling cargoes along the way.'
		},
		{
			type: 'paragraph',
			text: 'Whoever finishes with the most money wins – but there is a bonus for finishing first.'
		},
		{
			type: 'paragraph',
			text: 'During the war, Milton Bradley came back in 1943 with Trade Winds: The Merchant Marine Game, which featured trading routes between the United States and Latin America – a region much freer of Axis forces than the North Atlantic or Pacific oceans. Parker Brothers matched this in the same year with its grandly titled South American Pictorial Travel and Trading Game.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('trade-winds-box-cover.jpg'),
					alt: 'Box cover for Trade Winds: The Merchant Marine Game',
					caption: 'Trade Winds (1943)'
				},
				{
					src: img('south-box-cover.jpg'),
					alt: 'Box cover for South American Pictorial Travel and Trading Game',
					caption: 'South American Pictorial Travel and Trading Game (1943)'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'This is actually two games in one, both played on the same board, a large map of the Americas.'
		},
		{
			type: 'paragraph',
			text: 'The first involves drawing two U.S. goods to sell in specified South American countries and two goods to pick up there and bring home.'
		},
		{
			type: 'paragraph',
			text: 'The second game is about moving passengers along routes from the United States to destinations in Central and South America.'
		},
		{
			type: 'paragraph',
			text: 'It features a large and detailed cutaway depiction of the Flying Clipper Ship, a 106-foot long 41-ton flying boat. Its four 1,500 horsepower engines gave it a cruising speed of 130 miles per hour, and it could carry 74 passengers and 10 crew for up to 4,275 miles.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('south-clipper.jpg'),
				alt: 'Cutaway depiction of the Flying Clipper Ship from the South American game board',
				caption: 'The Flying Clipper Ship'
			}
		},
		{
			type: 'paragraph',
			text: 'The layout included 6 passenger compartments that could be converted from daytime use to sleeping berths. In addition, there was a dining lounge, a men\'s retiring room, a ladies\' dressing room and even a private suite at the rear for the truly well-heeled.'
		},
		{
			type: 'paragraph',
			text: 'The major importance of trade, of course, is to provide both the strategic materials and economic wealth needed to sustain war. Wartime games have featured the role of industry within the war effort.'
		},
		{
			type: 'paragraph',
			text: 'The most spectacular illustration of a military-industrial complex running at full speed can be found in the 1915 German game Stahl und Eisen.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('stahl-box-top.jpg'),
					alt: 'Box top for Stahl und Eisen',
					caption: 'Stahl und Eisen (1915)'
				},
				{
					src: img('stahl-full-board.jpg'),
					alt: 'Full game board showing coal mines, steel works and finished military products',
					caption: 'From coal to cannon'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The game itself is a roll-and-move tour, but it runs from the coal mines and steel works to the production of finished artillery and warship turrets.'
		},
		{
			type: 'paragraph',
			text: 'The base board shows a black and white view of a massive industrial complex, but it shows key operations (such as pouring steel and rolling thick plates) and finished products in vivid colors in circles and squares inset around the board.'
		},
		{
			type: 'paragraph',
			text: 'Wartime industry also requires the diversion of strategic materials away from civilian products and into military items. This leads to recycling. During the Napoleonic era, the citizens of Moscow melted down church bells to be cast into cannon. That same spirit has imbued modern warfare.'
		},
		{
			type: 'paragraph',
			text: 'In 1944, Milton Bradley put out Get in the Scrap, a game that challenged players to move around the board collecting scrap and then feeding it into one of the four steel foundries. It was subtitled “The Game with a Patriotic Purpose”. Only half of the six-page rule booklet was about how to play the game, which is pretty simple. Players first move three small “truckload” pawns to a scrap dealer. This turns into a “carload” of scrap to be delivered to each player’s choice of three destinations: an Open-Hearth Iron Furnace, an Iron Foundry or an Electric Furnace.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('scrap-box-cover.jpg'),
					alt: 'Box cover for Get in the Scrap',
					caption: 'Get in the Scrap (1944)'
				},
				{
					src: img('scrap-game-board.jpg'),
					alt: 'Game board for Get in the Scrap showing steel foundries',
					caption: 'Feeding the foundries'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The booklet then devotes more than a page to the how and why of scrap collecting. This includes a quote from Donald Nelson, Chairman of the War Production Board.'
		},
		{
			type: 'paragraph',
			text: 'Nelson was a former executive vice president at Sears, Roebuck and Co. He was appointed by President Franklin Roosevelt first in 1940 to manage the sale of war materials to Britain. In 1942, he was appointed as head of the newly created WPB.'
		},
		{
			type: 'paragraph',
			text: 'The game booklet includes a Scrap Quiz which taught gamers that:'
		},
		{
			type: 'list',
			items: [
				'One discarded farm tractor could be turned into 580 machine guns;',
				'It took 7,700 aluminum pots and pans to make one fighter plane;',
				'Five old hay rakes could provide all the metal needed to build an armored scout car;',
				'Just one old garbage pail could be turned into 1,000 .30 calibre cartridges.'
			]
		},
		{
			type: 'paragraph',
			text: 'Germany had a particular challenge during WWII related to the production of oil - not only to provide fuel to its tanks, trucks and planes, but also to produce petrochemicals and the many products that flow from them.'
		},
		{
			type: 'paragraph',
			text: 'This is why getting Romania with its Ploesti oil fields signed up as an ally was so important. It is also why Germany made such great efforts to take the Soviet oilfields in the Caucusus.'
		},
		{
			type: 'paragraph',
			text: 'While Germany had little oil of its own, it had plentiful supplies of coal. German industry therefore invested a great deal of time and energy into coal-based substitutes for fuel for vehicles, heating and power generation as well as asphalt, rubber, plastics and other products.'
		},
		{
			type: 'paragraph',
			text: 'The sheer scope of these efforts was vividly illustrated in a 1944 game, Kohlenklau Quartett. This card game was published as a counterpart to the board game Jagd auf Kohlenklau (above). The board game was aimed primarily at encouraging civilians to conserve coal and catching the “thief” who would waste such a precious resource.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('jagd-auf-kohlenklau.jpg'),
				alt: 'Box and board for Jagd auf Kohlenklau',
				caption: 'Jagd auf Kohlenklau (1944)'
			}
		},
		{
			type: 'paragraph',
			text: 'The card game had the same theme, but it offered much more detailed descriptions about the many ways that coal was critical to the war effort. The game included eight sets of four cards as well as the Kohlenklau card. Each set illustrated a theme on the importance of coal: Coal for Fighting; Coal Plastics; Coal Extraction; Coal Processing; Coal Burning; Coal in Industry; Coal Conversion; and "Wonders from Coal" (other uses including medicines, propellants, dyes, candles and soap).'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('kohlen-wartime-uses.jpg'),
					alt: 'Kohlenklau Quartett cards showing coal for fighting',
					caption: 'Coal for Fighting'
				},
				{
					src: img('kohlen-plastic-set.jpg'),
					alt: 'Kohlenklau Quartett cards showing coal plastics',
					caption: 'Coal Plastics'
				},
				{
					src: img('kohlen-other-uses.jpg'),
					alt: 'Kohlenklau Quartett cards showing other uses of coal',
					caption: 'Wonders from Coal'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'When it comes to raising the money to wage war, governments resort to two primary methods: raising taxes or borrowing.'
		},
		{
			type: 'paragraph',
			text: 'The former has limits both in terms of public acceptance and economic impact. Much more common was the issuance of “war bonds” or similar vehicles for getting people to invest money voluntarily with no interest and no return of their money until the war was over.'
		},
		{
			type: 'paragraph',
			text: 'An interesting variation on a popular 1930s business game illustrated how Canada went about raising money to support the war. Easy Money was initially published by Milton Bradley in 1935 as its competitor for Monopoly. It has a very similar mechanism: roll dice, move around the board, buy properties, pay rent, collect salary, and deal with events.'
		},
		{
			type: 'paragraph',
			text: 'But the Canadian company Somerville licensed the rights and produced Wartime Easy Money for the Canadian market. While the brand and basic mechanism remained the same, the wartime board is quite different.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('wartime-box.jpg'),
					alt: 'Box for Wartime Easy Money',
					caption: 'Wartime Easy Money'
				},
				{
					src: img('wartime-board.jpg'),
					alt: 'Wartime Easy Money board with Victory Bonds and wartime sacrifice spaces',
					caption: 'Victory Bonds on the board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The Canadian board has only 28 spaces around the edge, compared with 48 spaces in the Milton Bradley original. It offers only two properties per side for purchase, and has four corner squares. These corners are labelled Town Square, Hospital, Victory Bonds and Income Tax. The board has an inner Chance Circle of 24 spaces matching each of the spaces along the four sides of the board.'
		},
		{
			type: 'paragraph',
			text: 'Anyone throwing doubles would apply the result of the Chance Circle space corresponding to the outside space landed on, and then would roll again.'
		},
		{
			type: 'paragraph',
			text: 'The theme of wartime sacrifices is strongly represented. Even when collecting $200 for passing the Town Square, $100 must be donated to the Victory Bond space, and a player landing on Victory Bonds takes only half the money there.'
		},
		{
			type: 'paragraph',
			text: 'There also are spaces for Blackout Regulations, Air Raid Defense Plan, Soldiers Welfare Project, War Project and Red Cross Project on the outer square, and for Buy War Savings Stamps and Extra Call for Victory Bonds on the inner circle.'
		},
		{
			type: 'paragraph',
			text: 'An American game, Supremacy, also found a way to turn the peacetime pursuit of money into a wartime virtue. The game board and play is similar to Monopoly except for a change to a wartime theme.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('supremacy-german-properties.jpg'),
					alt: 'Supremacy game board showing German properties and strategic locations',
					caption: 'Supremacy board'
				},
				{
					src: img('supremacy-cards.jpg'),
					alt: 'A Shot in the Dark and Blind Flying cards from Supremacy',
					caption: 'Chance and Community Chest reimagined'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Most of the properties are cities or strategic locations within countries; Canada, New Zealand and Australia are locations within the British Empire. The bank becomes an ominous entity called “Control”.'
		},
		{
			type: 'paragraph',
			text: 'As in Monopoly, locations can be bought by the first player to land there. Later players arriving on the space become “invaders” who must pay a price to the owner.'
		},
		{
			type: 'paragraph',
			text: 'That price escalates when the owner gets a pair of linked locations and adds “forts”. Instead of Monopoly’s Chance and Community Chest cards, there are “A Shot in the Dark” and “Blind Flying” decks that offer bonuses or penalties. The winner is the player who makes the rest militarily rather than financially bankrupt.'
		},
		{
			type: 'paragraph',
			text: 'The game’s unique aspect lies in its currency. Instead of dollars to measure wealth, players collect “points” in military assets. An Officer is worth 1, Infantry 5, Aeroplane 10, Submarine 20, Destroyer 50 and a Tank, Battleship and General are each worth 100.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('supremacy-assets.jpg'),
				alt: 'Supremacy military asset tokens including infantry, tanks and battleships',
				caption: 'Military assets as currency'
			}
		},
		{
			type: 'paragraph',
			text: 'When paying for landing on properties that can take forts, players can pay in whatever mix of denominations works best. Some properties, however, require specific assets (Gibraltar forces the invader to pay in ships) or payment related to a player’s assets (the Kiel Canal owner collects 50 points for each Battleship owned by the invader).'
		},
		{
			type: 'paragraph',
			text: 'When players don’t own enough of the correct assets when demanded, they can substitute other assets - but have to pay double the amount. For instance, if the invader of France’s Maginot Line has more Infantry than its owner, it takes over the space; if not, it must pay a whopping 300 points.'
		},
		{
			type: 'paragraph',
			text: 'Supremacy in this sense is another game that follows the golden rule: whoever collects the most gold rules. In wartime, armed forces are golden, and how much a country can afford in terms of quality and quantity of troops and armaments has a huge impact on who wins and who loses.'
		},
		{
			type: 'paragraph',
			text: 'On the other side of the world, a wartime Australian game tossed aside all the battling armies, navies and air forces. Instead, The Game of Powers reframed war between nations as a battle of banks to take over the world.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('powers-box-cover.jpg'),
					alt: 'Box cover for The Game of Powers',
					caption: 'The Game of Powers'
				},
				{
					src: img('powers-board.jpg'),
					alt: 'Game board for The Game of Powers with world maps and country track',
					caption: 'A battle of banks'
				},
				{
					src: img('powers-country-cards.jpg'),
					alt: 'Country cards from The Game of Powers showing flags and statistics',
					caption: 'Country cards'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The board has an external track with spaces for 72 countries, along with special-purpose spaces and entry points to one of two maps of the world (one on each side). The maps in turn are marked with a network of red dots connecting all the countries in the deck of country cards. Each card of that decks shows the flag, statistics, value and grid location of the country. There is a 48-card Powers deck that controls initial movement and triggers special events, bonuses and penalties. Some countries and map locations also have bonuses and penalties.'
		},
		{
			type: 'paragraph',
			text: 'Each round, one player takes the role of the "Broker". This player turns over a country card, which becomes the objective for the round. The Broker then deals a Power card to each player in turn. These direct movement along the outer track from each player s starting corner.'
		},
		{
			type: 'paragraph',
			text: 'When a player s piece reaches or passes the Embarkation space, a player stops, and uses a die to move toward the target country in future moves. The first to reach the location of the target country collects the card, as well as its value from the player bank in charge of that region. Next player becomes Broker and repeats. After an agreed number of rounds, the player with the highest total country value wins.'
		},
		{
			type: 'paragraph',
			text: 'The conflict between military and civilian needs is sometimes expressed as “guns versus butter”. During war, this can be a literal trade-off. No matter how much civilians sacrifice in terms of scrap for industry, other sacrifices can be demanded in the kitchen.'
		},
		{
			type: 'paragraph',
			text: 'The interaction between civilian and military needs is shown the American WWII game Ration Board. Players move around the board to collect the ration coupons needed to buy butter, coffee, meat, sugar and gasoline. It has an interesting “press your luck” mechanism. Before rolling two dice, players announce a target number. If they roll higher, they advance the target number of spaces; otherwise they do not move at all.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('ration-box-top.jpg'),
					alt: 'Box top for Ration Board',
					caption: 'Ration Board'
				},
				{
					src: img('ration-board.jpg'),
					alt: 'Game board for Ration Board showing ration coupon spaces',
					caption: 'Collecting ration coupons'
				},
				{
					src: img('ration-box-contents.jpg'),
					alt: 'Contents of the Ration Board game box',
					caption: 'Box contents'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Along the way, they pick up cards with pats on the back and warnings. There are kudos for giving a lift to plant workers, buying War Bonds and giving up a train trip so that a soldier can get home on leave. But beware the black market and speeding, and call police right away if you spot “vandals” stealing scarce tires off a parked car.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('ration-release-good-and-bad.jpeg'),
				alt: 'Good and bad behaviour cards from Ration Board',
				caption: 'Pats on the back and warnings'
			}
		}
	]
};
