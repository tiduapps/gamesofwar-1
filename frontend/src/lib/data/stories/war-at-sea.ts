import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/war-at-sea/${name}`;

export const warAtSea: StoryContent = {
	slug: 'war-at-sea',
	title: 'War at Sea',
	blocks: [
		{
			type: 'paragraph',
			text: 'Leutnant zur See Otto Hersing had just surfaced his U-boat off the Isle of May in order to recharge its batteries. The date was Sept. 5, 1914, and Hersing was proud of his craft, one of Germany’s first to be equipped with diesel engines. U-21 already was on its third patrol since war had broken out. The previous two patrols had been uneventful, except for a hair-raising failed attempt to break into the Firth of Forth and get at the Royal Navy base at Rosyth.'
		},
		{
			type: 'paragraph',
			text: 'Suddenly a lookout gave a shout. He saw smoke on the horizon. Hersing ordered the boat to submerge and set a course toward the smoke. His target, however, turned away, and Hersing resurfaced and returned to charging his batteries. Soon thereafter, however, the target turned again, this time toward the U-boat. Once again, Hersing submerged, and this time got lucky. The smoke turned out to be a warship, the British cruiser Pathfinder. U-21 manoeuvered into firing position and let loose a single torpedo. The torpedo ran true, and detonated one of the cruiser’s magazines. There was a huge explosion, and the ship sank so fast that its crew was able to launch only a single lifeboat.'
		},
		{
			type: 'paragraph',
			text: 'With that, the U-21 became the first submarine ever to sink a ship with a self-propelled torpedo. It was the first of many exploits for Hersing, who later picked up the nickname “Zerstörer der Schlachtschiffe” (Destroyer of Battleships) after U-21 was transferred to the Mediterranean, where its kills included the British battleships Triumph and Majestic off Gallipoli and the French armoured cruiser Amiral Charner. U-21 also became one of six submarines to be featured in a 1916 game, Unsere U-boote neuestes.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('uboot-box-cover.jpg'),
					alt: 'Box cover for Unsere U-boote neuestes',
					caption: 'Unsere U-boote neuestes'
				},
				{
					src: img('uboot-numbered-game-pieces.jpg'),
					alt: 'Numbered metal U-boat playing pieces',
					caption: 'Numbered U-boat pieces'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'This is a game remarkable both for its fine artwork and for the fact that each of its metal playing pieces is stamped with the number of an actual U-boat that had compiled a notable record by mid-war.'
		},
		{
			type: 'paragraph',
			text: 'In addition to U-21, the U-boats represented are:'
		},
		{
			type: 'paragraph',
			text: 'U-8, which sank five British ships in two days on Feb. 23-24, 1915.'
		},
		{
			type: 'paragraph',
			text: 'U-9, which sank the aptly named “Live Bait Squadron” on Sept. 22, 1914. This British squadron was composed of three Cressy-class armored cruisers (Cressy, Aboukir and Hogue). The ships were badly out of date, and U-9 sank them all in a single encounter. By November 1915, it also had sunk British protected cruiser Hawke, 13 British merchant ships and a Russian naval vessel.'
		},
		{
			type: 'paragraph',
			text: 'U-28, which sank 40 ships during five patrols. It was sunk with no survivors when it got too close to its final victim, the British steamer Olive Branch, as it exploded.'
		},
		{
			type: 'paragraph',
			text: 'U-29, which sank or damaged six merchant ships during March 1915. Its cruise came to an abrupt end when it was rammed in Pentland Firth by Dreadnought – making it the only submarine ever sunk by a battleship!'
		},
		{
			type: 'paragraph',
			text: 'U-45, the newest U-boat at time of publication. It went on to sink 27 ships before being sunk in turn by the British submarine D7 in 1917.'
		},
		{
			type: 'paragraph',
			text: 'Two of the captains of these U-boats were featured in a mid-war Quartett card deck. One was Kapitanleutnant Otto Hersing of U-21. The other was Kapitanleutnant Otto Weddigen, who actually commanded two of the six U-boats included in Unsere U-boote neustes.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('quartett-uboat-heroes.jpg'),
					alt: 'Quartett cards featuring Otto Hersing and Otto Weddigen',
					caption: 'U-boat heroes Quartett'
				},
				{
					src: img('skat-u9-weddigen.jpg'),
					alt: 'Ace of Clubs from a wartime Skat deck showing U-9 and Weddigen',
					caption: 'Weddigen and U-9'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Weddigen was captain of U-9 when it sank the Live Bait Squadron in 1914. He then transferred to become captain of U-29, and went down with his boat and crew when they were sunk by Dreadnought in 1915. Weddigen and his U-9 can also be seen below on the Ace of Clubs in this wartime Skat deck.'
		},
		{
			type: 'paragraph',
			text: 'The game board of Unsere U-boote neustes also reflects historical events. Players roll and move along a 100-space track around the UK and Ireland and home. There are 20 English flags on pins that are stuck into the 18 black spaces along the track.'
		},
		{
			type: 'paragraph',
			text: 'Each of these represents a historical sinking of a British ship. The three pins placed on space 6 represent the Live Bait Squadron. The first player to land on a black space collects its flag, and the winner is the one who returns home with the most flags.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('uboot-full-board.jpg'),
				alt: 'Full board for Unsere U-boote neuestes',
				caption: 'Unsere U-boote board'
			}
		},
		{
			type: 'paragraph',
			text: 'Despite the fact that the German fleet emerged from port only once during the war, that country produced quite a few games about naval combat. Der Seekrieg features a box cover with a warship under full steam with escorts following. The game is a simple roll-and-move, covering both the excitement and dangers of naval warfare.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('seekrieg-box-cover.jpg'),
				alt: 'Box cover for Der Seekrieg',
				caption: 'Der Seekrieg'
			}
		},
		{
			type: 'paragraph',
			text: 'Der Seekrieg features a box cover with a warship under full steam with escorts following, but its board is notable for showing the German navy’s extensive use of both fixed-wing aircraft and airships for reconnaissance, including the Friedrichshaven Ff.33 shown above.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('ff33-closeup.jpg'),
				alt: 'Friedrichshafen Ff.33 on the Der Seekrieg board',
				caption: 'Friedrichshafen Ff.33'
			}
		},
		{
			type: 'paragraph',
			text: 'The only major fleet action of the war ran over two days on May 31 – June 1, 1916. It was known as the Battle of Jutland to the British, and the Skaggerakschlacht to the Germans. The clash involved more than 250 ships, of which the British lost 14 and the Germans 11.'
		},
		{
			type: 'paragraph',
			text: 'It was a strategic victory for the British, since the German navy thereafter gave up the idea of taking on the British Grand Fleet and stayed in port. However, because the British lost more ships, the Germans proclaimed it as a huge victory as shown in this card featuring Grossadmiral Alfred von Tirpitz.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('quartett-tirpitz-card.jpg'),
				alt: 'Quartett card featuring Grossadmiral Alfred von Tirpitz',
				caption: 'Grossadmiral von Tirpitz'
			}
		},
		{
			type: 'paragraph',
			text: 'The card credits him with creating such a powerful fleet that the British were afraid to fight it. The card adds that: “His spirit lives on in the fleet even after his retirement in March 1916… as evidenced by the great English defeat on the Skaggerak from May 31 to June 1, 1916.”'
		},
		{
			type: 'paragraph',
			text: 'Other German naval games include Kampf zur See, a very basic roll-and-move game from Klee focused on surface warfare, and Deutschland gegen England, which focuses on Germany’s U-boat campaign against the British merchant fleet. The game has an arresting cover illustration of a U-boat surfacing to capture a freighter labelled Britania (sic). The game board is small, showing Britain and its surrounding seas and the northern coast of Europe overlaid with a square grid. The attacking player moves a combination of U-boats, torpedo boats and troop transports in an effort to isolate and invade Britain.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kampf-zur-see-box-cover.jpg'),
				alt: 'Box cover for Kampf zur See',
				caption: 'Kampf zur See'
			}
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('deutschland-gegen-england-cover-art.jpg'),
					alt: 'Cover art for Deutschland gegen England',
					caption: 'Deutschland gegen England'
				},
				{
					src: img('deutschland-gegen-england-front-line.jpg'),
					alt: 'Western Front line on the Deutschland gegen England board',
					caption: 'Western Front on the board'
				},
				{
					src: img('deutschland-gegen-england-board.jpg'),
					alt: 'Board for Deutschland gegen England',
					caption: 'Deutschland gegen England board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Deutschland gegen England is more of a proper wargame. The Allied player maneuvers from ports in Britain and France, while the German player has U-boat stations in the North Sea, Atlantic Ocean and English Channel as well as along the Dutch and German coastlines, all around Britain as well as along the Channel coast. The map also includes the front lines on the Western Front, but with a couple of major inaccuracies.'
		},
		{
			type: 'paragraph',
			text: 'In particular, it shows the major city of Lille in French hands, even though this city was captured by the Germans early in the war and became a railway supply hub for them for most of the war.'
		},
		{
			type: 'paragraph',
			text: 'On the other hand, it shows the town of Ypres well within German territory. The Allied lines around this town were the subject of multiple German offensives. This includes the Second Battle of Ypres, when the Germans first used chlorine gas in battle. However, Canadian and other allied troops stubbornly held on to the town through the end of the war.'
		},
		{
			type: 'paragraph',
			text: 'A wartime Quartett game included portraits of three of Germany’s naval heroes: Vizeadmiral Graf Maximilian von Spee, Fregattenkapitan Karl von Muller and Korvettenkapitan Graf Nikolaus zu Dohna-Schlodien.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('quartett-naval-raider-heroes.jpg'),
				alt: 'Quartett cards featuring von Spee, von Muller and zu Dohna-Schlodien',
				caption: 'Naval raider heroes'
			}
		},
		{
			type: 'paragraph',
			text: 'Von Spee is certainly the best known of this trio. Born on June 22, 1861, he entered the navy in 1878 and in 1912 was appointed commander of the East Asia Squadron. In July 1914, von Spee abandoned his squadron’s base at Tsingtao in the correct expectation that Japan would soon attack. Rather than stay in the region and face superior British and Australian forces, he forged across the Pacific with the goal of attacking British commerce.'
		},
		{
			type: 'paragraph',
			text: 'On Nov. 1, he encountered the British 4th Cruiser Squadron under Admiral Christopher Craddock off the coast of Chile. The British lost badly, with two of the squadron’s four cruisers sunk and the other two forced to retreat. Von Spee’s ships suffered only three men wounded, but used up half their ammunition and had no way to replace it. As a result, von Spee decided to round Cape Horn and attack the British supply base at the port of Stanley in the Falkland Islands.'
		},
		{
			type: 'paragraph',
			text: 'The British, however, reacted to defeat by sending a much larger force to confront von Spee. Unfortunately for him, this powerful squadron led by the battlecruisers Invincible and Inflexible reached Stanley a day ahead of him. When he realized the power of the force in harbor, von Spee tried to flee, but the British caught up with him. By nightfall on Dec. 8, von Spee’s squadron had been almost totally destroyed, with only a single light cruiser and an auxiliary ship escaping. Von Spee himself was killed along with both his sons.'
		},
		{
			type: 'paragraph',
			text: 'His playing card turns him into both a hero and a martyr: “At the head of the small, cut-off East Asian cruiser fleet, he overwhelmed an enemy fleet off the coast of Chile and then found his fate while fighting against massive odds off the Falkland Islands.”'
		},
		{
			type: 'paragraph',
			text: 'Karl von Muller was given command of the light cruiser Emden in 1913, and was part of von Spee’s East Asia squadron at the outbreak of the war. Emden left port on July 31, 1914, and on August 4, captured the Russian mail ship Ryazan, the first prize taken by the German Navy during the war. He rendezvoused with von Spee in the Marianas Islands and proposed that one light cruiser be detached to raid British commerce in the Indian Ocean. Muller’s ship was then given the task.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('skat-emden-muller.jpg'),
				alt: 'Skat card showing the Emden and Karl von Muller',
				caption: 'Emden and von Muller'
			}
		},
		{
			type: 'paragraph',
			text: 'Emden is shown below on a card from a different deck, along with a cameo of her captain. Over the next 12 weeks, Emden took 14 prizes while killing only five people during a bombardment of Madras. The ship also sank the Russian cruiser Zhemchug and the French destroyer Mousquet.'
		},
		{
			type: 'paragraph',
			text: 'On Nov. 8, Emden was caught by the Australian light cruiser Sydney while a landing party was attacking a radio station. The Australians won, and Muller and his crew were captured. The landing party, led by first officer Hellmuth von Mucke, avoided capture and eventually made it all the way back to Germany.'
		},
		{
			type: 'paragraph',
			text: 'Muller’s card in the first deck credits him with capturing or sinking “many millions” worth of enemy shipping before succumbing to the Sydney in the Cocos Islands. The card also mentions the successful escape by the landing party under Kapitanleutnant von Mucke, which used a sailing ship to reach Arabia.'
		},
		{
			type: 'paragraph',
			text: 'The third naval hero in the card deck, Graf Nikolaus zu Dohna-Schlodien, was given command of the auxiliary cruiser and minelayer Mowe in 1915. The ship had started life as a banana freighter, Pungo, belonging to a Hamburg shipping company. After its conversion, it set out on its first cruise in December 1915. His card states that he broke the blockade of the English fleet, sank 16 English steamers, and returned to home port unharmed after a cruise of several months. The card also mentions that mines laid by the Mowe sank the British pre-dreadnought battleship King Edward VII. The German ship laid 252 mines off the northwest coast of Scotland during a snowstorm on New Year’s Day, 1916, and King Edward VII hit one of them 5 days later while on the way to Belfast for a refit.'
		},
		{
			type: 'paragraph',
			text: 'The card does not mention that when the Mowe captured the British passenger ship Appam later in January, the cargo included a million marks worth of gold bars from South African mines. A prize crew successfully sailed the Appam and its treasure to the then-neutral United States.'
		},
		{
			type: 'paragraph',
			text: 'After the card game was published in 1916, Dohna-Schlodien took the Mowe on a second cruise. Between November 1916 and March 1917, the Mowe sank another 120,000 tons of shipping in the Atlantic. This included the White Star Line’s steamship Georgic, carrying a cargo of oil, wheat and 1,200 horses to Britain. On his return from this cruise, zu Dohna-Schlodien received a personal telegram from Kaiser Wilhelm II, congratulating him and his crew and appointing him as the Kaiser’s naval adjutant.'
		},
		{
			type: 'paragraph',
			text: 'Deutsche-Englischer Seekrieg went back to the theme of a clash between major fleets. It is a fairly complex game of naval maneuver. Each player has 22 wooden ships. This is made up of a single flagship, three cruisers, six destroyers, 10 torpedo boats and two U-boats.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('de-seekrieg-box-cover.jpg'),
					alt: 'Box cover for Deutsche-Englischer Seekrieg',
					caption: 'Deutsche-Englischer Seekrieg'
				},
				{
					src: img('de-seekrieg-pieces-on-board-2.jpg'),
					alt: 'Wooden ships on the Deutsche-Englischer Seekrieg board',
					caption: 'Ships on the board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The board shows a sea area surrounded by land and covered by a square grid. The opposing fleets start in opposite corners, rather like a Halma board. Players move ships and attack with them, with both speed and range varying by ship type.'
		},
		{
			type: 'paragraph',
			text: 'The game was republished toward WWII as Klar zum Gefecht, which came with painted metal ships.'
		},
		{
			type: 'paragraph',
			text: 'The British naval game Defence used a map showing the North Sea, with England on one side and northwestern Europe from Brittany to Norway on the other. Across the North Sea lie a series of dotted lines that intersect at multiple points. Each side has five naval bases that mark the end of a dotted line.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('defence-ship-graphic.jpg'),
					alt: 'Ship graphic from Defence',
					caption: 'Defence ship'
				},
				{
					src: img('defence-game-board.jpg'),
					alt: 'Board for Defence showing the North Sea',
					caption: 'Defence board'
				},
				{
					src: img('defence-german-bases.jpg'),
					alt: 'German naval bases on the Defence board',
					caption: 'German bases'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'There is a Minefield hazard dot 1-3 spaces out from each base. There also are two Mutiny dots at intersections and three Fog patches covering multiple dots around major intersections. Each side starts by moving one ship from each base.'
		},
		{
			type: 'paragraph',
			text: 'On each roll, the player must move one ship that exact number of dots forward or backward. A player captures an enemy ship or base by landing on it.'
		},
		{
			type: 'paragraph',
			text: 'Ships in fog cannot be captured. Landing on a Minefield or Mutiny dot destroys the ship. The winner is the first to capture an enemy base.'
		},
		{
			type: 'paragraph',
			text: 'The game was later re-issued as British vs. Germans, which had the same pattern of dots across the North Sea, but featured a third panel on the board extending the unused land area into eastern Europe.'
		},
		{
			type: 'paragraph',
			text: 'The naval game showing the broadest geographical scope was the German title Admiral Pampero. The origin of the name is obscure, since Pampero is not a known admiral\'s name.'
		},
		{
			type: 'paragraph',
			text: 'This is a game of maneuver for up to five players, representing Germany, England, France, America and Italy. The sea areas represented on the map include not just the Baltic and North Seas, but also the Mediterranean and Red Seas, the North and South Atlantic Oceans, and the Pacific Ocean as far as Samoa, and a very squished Indian Ocean leading to Australia.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('admiral-pampero-1917-board.jpg'),
				alt: 'Board for Admiral Pampero showing global sea areas',
				caption: 'Admiral Pampero'
			}
		},
		{
			type: 'paragraph',
			text: 'The most complete catalog of participants in WWI naval combat actually comes from a game published in neutral Spain. Combate Naval is a gambling game for up to six players. Its board features a chaotic mix of ships at sea, each with a national flag. The countries with ships include not only Germany, Britain and France, but also Russia, Austria-Hungary and the Ottoman Empire (Turkey). The illustration on the box top goes even further, including the flags of Belgium, Italy and Japan as well as the six countries represented on the board. The game is a reminder that the Mediterranean Sea was an important theatre of naval combat.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('combate-navale-box.jpg'),
					alt: 'Box for Combate Naval',
					caption: 'Combate Naval'
				},
				{
					src: img('combate-navale-board.jpg'),
					alt: 'Board for Combate Naval',
					caption: 'Combate Naval board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Austria-Hungary had only a small coastline but a larger and more modern fleet than France had available in the Mediterranean. The Ottoman Empire had a long and unfriendly relationship with Russia in the Black Sea as well as coasts to guard against Britain and France in the Middle East. And Italy brought its own significant fleet into the fray when it chose to join the Allied side in 1915.'
		},
		{
			type: 'paragraph',
			text: 'The game’s board shows two submarines in the foreground, stalking the surface ships. The stories of Austro-Hungary’s two greatest naval heroes both involve submarines. These stories are told on two Quartett cards from a 1916 deck.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('quartett-austrian-naval-heroes.jpg'),
				alt: 'Quartett cards featuring Georg von Trapp and Demeter Konjovic',
				caption: 'Austrian naval heroes'
			}
		},
		{
			type: 'paragraph',
			text: 'One features Linienshiffsleutnant Georg von Trapp. He was commander of the submarine SM U-5 when it sank the French armored cruiser Leon Gambetta on April 17, 1915. This marked the first successful nighttime underwater attack in history. SM U-5 then sank the Italian submarine Nereide and captured a Greek freighter. After moving to command of SM U-14, von Trapp sank another 11 ships.'
		},
		{
			type: 'paragraph',
			text: 'What happened after the war made him even more famous than his military exploits. His wife Agatha died of scarlet fever in 1922. Four years later, he hired Maria Kutschera from nearby Nonnberg Abbey as a tutor for an ill daughter. They married in 1927 when he was 47 and she 22.'
		},
		{
			type: 'paragraph',
			text: 'After von Trapp lost his fortune in a 1935 bank collapse, the family formed a singing group. When Germany took over Austria in 1938, it asked von Trapp to join the German Navy. Von Trapp hated the Nazi ideology, and fled to Italy and then the United States. His story then became the basis for The Sound of Music.'
		},
		{
			type: 'paragraph',
			text: 'The second card honors Linienshiffsleutnant Demeter Konjovic. He commanded a group of flying boats based in Kumbor, in what is now Montenegro.'
		},
		{
			type: 'paragraph',
			text: 'On Sept. 16, 1915, he was flying a Lohner L seaplane on a reconnaissance mission when he spotted the French submarine Foucault on the surface. He attacked with bombs and damaged it enough that it had to be abandoned by its crew. On the card, however, Konjovic is celebrated for a different feat. When one of the seaplanes under his command was damaged and had to land in the sea, Konjovic landed his plane in heavy seas and under enemy fire, successfully rescued the crew of the downed plane, and flew them 220 kilometres back to base.'
		},
		{
			type: 'paragraph',
			text: 'Combate Naval certainly requires its players to take chances, since it is all about rolling dice. Each player controls one of the ships on the board showing a national flag. These ships contain circles numbered 2 to 12. There are three dice: two normal ones and a cardboard cube with a flag on each face. In turn, players roll all three.'
		},
		{
			type: 'paragraph',
			text: 'The rolling player then places a marker on the number equal to the sum of the two normal dice on the ship whose flag was rolled. If a player rolls his own ship, he must pay an amount equal to the number rolled into the bank instead of taking the hit. If a player rolls a number that already has been covered, the rolling player has to pay that amount to the target player.'
		},
		{
			type: 'paragraph',
			text: 'When a ship’s last number has been rolled, that player is out of the game and must pay 25 money into the pot; the player who rolled the final hit takes 50 from the pot. The last surviving ship takes two thirds of the pot, and the runner-up gets the remainder.'
		}
	]
};
