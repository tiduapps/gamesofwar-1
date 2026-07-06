import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/world-war-i/${name}`;

export const worldWarI: StoryContent = {
	slug: 'world-war-i',
	title: 'World War I',
	subtitle: 'Opening Moves',
	blocks: [
		{
			type: 'paragraph',
			text: 'The Wakamiya was an odd ship. She was built in 1900 as the British freighter Lethington. Russia chartered her to carry supplies to Vladivostok during the Russo-Japanese war. She was captured and turned into a Japanese transport, and renamed twice along the way. In 1913, she was transferred to the Japanese navy and turned into a seaplane carrier.'
		},
		{
			type: 'paragraph',
			text: 'This was not much by today’s standards. The ship could only carry two seaplanes on its deck, with two more stowed below. The aircraft were Japanese-built copies of French Maurice Farman seaplanes. They were not launched from the deck. Rather, cranes lowered them to the water. They took off from there and were recovered the same way.'
		},
		{
			type: 'paragraph',
			text: 'On Sept. 5, 1914, this ungainly ship launched a new kind of warfare. As the French Sixth Corps marched east from Paris to begin what would become the Miracle of the Marne, the Wakamiya lowered one of its planes into the water. The plane took off and flew toward the German-held territory of Tsingtao on the coast of China. There, the Farman dove twice over Qiaozhou Bay, dropping bombs first on the Austro-Hungarian cruiser Kaiserin Elizabeth, and then on the German gunboat Jaguar. Neither ship was hit, but this marked the world’s first naval-launched bombing mission. (Pearl Harbor lay more than 27 years ahead.)'
		},
		{
			type: 'paragraph',
			text: 'The raid also marked the beginning of the largest military action of WWI in Asia. Germany had built the port of Tsingtao on land in Shantung province that Germany had forced China to hand over on a 99-year lease in 1898. The port (shown on this playing card with the German name for the territory, Kiautschau), was designed as the base for the East Asiatic Squadron of the German Navy.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('skat-naval-bases.jpg'),
				alt: 'Playing cards depicting German naval bases including Kiautschau',
				caption: 'Kiautschau on a wartime Skat card'
			}
		},
		{
			type: 'paragraph',
			text: 'Britain had become an ally of Japan through a 1902 treaty. When WWI broke out, Britain asked Japan for help in attacking Germany’s Asian possessions. Japan issued an ultimatum to Germany on Aug. 15, demanding the handover of Tsingtao, and declared war a week later. The subsequent siege of Tsingtao lasted until Nov. 6, when the final line of defending troops was overwhelmed.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('tsingtao-full-board.jpg'),
				alt: 'Full game board for Siege of Tsingtao',
				caption: 'Siege of Tsingtao (1915)'
			}
		},
		{
			type: 'paragraph',
			text: 'This 1915 Japanese title, Siege of Tsingtao, is probably the earliest game in the world published about a particular battle of WWI. The graphics are by the artist Kawabata Ryushi (pseudonym for Kawabata Shotarō). He was considered one of the “Three Big Figures” in the Nihonga style, and later was awarded the Order of Culture, Japan’s highest honor for artistic achievement.'
		},
		{
			type: 'paragraph',
			text: 'This game is an example of furiwake-sugoroku, since players roll a die at the start to determine which path toward victory they will take. On an even roll, players follow the left path, which focuses on the naval actions.'
		},
		{
			type: 'paragraph',
			text: 'If the first roll is odd, players go right and follow the early land manoeuvers. The two paths join for the final assault. The two tracks show the gradual tightening circle of the siege. The board also illustrates the Farman seaplanes used in the ground-breaking naval raid. The depicted hit on the ship in harbor is fictitious, but this was after all published as wartime cheerleading.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('tsingtao-aerial-bombardment.jpg'),
				alt: 'Board illustration of aerial bombardment during the siege of Tsingtao',
				caption: 'Naval air raid on the game board'
			}
		},
		{
			type: 'paragraph',
			text: 'In Europe, meanwhile, the German high command was already realizing that it had miscalculated on two fronts. The shape of its overall strategy had been set almost a decade earlier by Field Marshal Alfred von Schlieffen.'
		},
		{
			type: 'paragraph',
			text: 'Von Schlieffen’s original plan was continuously modified, and never fully implemented. Nonetheless, when Germany went to war in 1914, its essence remained. It assumed that the large but poorly led Russian army would take two months or more to mobilize and get organized. The bulk of German forces were to smash through Belgium and capture Paris within six weeks before shifting east to tackle the Russians. Only a small force was left as a guard in East Prussia.'
		},
		{
			type: 'paragraph',
			text: 'Germany’s war planners made just one small miscalculation. They were right that Russia did not have the capacity to mobilize its full army quickly. But 40 per cent of Russia’s peacetime army was stationed near Warsaw, and Tsar Nicholas II had secretly issued mobilization orders five days before his official announcement. That gave the Russians almost half a million men in Poland as war broke out. Germany had only 173,000 soldiers defending East Prussia.'
		},
		{
			type: 'paragraph',
			text: 'Russia quickly went on the offensive, both against the Austro-Hungarians in Galicia and into East Prussia in the north. After Germany’s Eighth Army was beaten twice and started to withdraw, its commander was relieved and replaced by General Paul von Hindenburg. What followed was a gigantic battle of maneuver.'
		},
		{
			type: 'paragraph',
			text: 'Between Aug. 23 and 31, Hindenburg’s forces managed to surround the advancing Russian Second Army near the town of Frogenau. They pounded the Russians relentlessly with artillery while preventing the Russian First Army from relieving the pocket until the Second Army surrendered.'
		},
		{
			type: 'paragraph',
			text: 'The Russians lost 40,000 killed and wounded and had another 92,000 men captured. The Germans had fewer than 20,000 casualties. Germany named it the Battle of Tannenberg, even though that town lay 30 km to the west — symbolic revenge for a defeat of the Teutonic Knights there by Poles and Lithuanians way back in 1410. The battle also led to a rare gaming event: a German game published during the war about the first great battle of that war: Schlacht bei Tannenberg.'
		},
		{
			type: 'figure',
			align: 'left',
			figure: {
				src: img('tannenberg-box-cover.jpg'),
				alt: 'Box cover for Schlacht bei Tannenberg',
				caption: 'Schlacht bei Tannenberg'
			}
		},
		{
			type: 'paragraph',
			text: 'The game is a simple die-rolling race from an initial patrol by Uhlans (German lancers) to the climax of the battle in the central space 75. As in most such games, players put money in the pot to start. They add more money to the pot or win some back as they land on various spaces along the way.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('tannenberg-board.jpg'),
				alt: 'Game board for Schlacht bei Tannenberg showing the scale of the victory',
				caption: 'The Tannenberg game board'
			}
		},
		{
			type: 'paragraph',
			text: 'While the central image on the board focuses on the scale of the victory, other images offer some human touches.'
		},
		{
			type: 'paragraph',
			text: 'In the top right corner, German soldiers enjoy some relaxation while in bivouac. Just above the central image, a Russian Cossack is shown getting drunk in a barn instead of fighting. And space 60 features a plump pig being pierced with a knife and fork. The instructions for the space simply refer to “a good beginning”.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('tannenberg-bivouac.jpg'),
					alt: 'German soldiers relaxing in bivouac on the Tannenberg game board',
					caption: 'Troops in bivouac'
				},
				{
					src: img('tannenberg-drunken-russian.jpg'),
					alt: 'Drunken Russian Cossack on the Tannenberg game board',
					caption: 'A Cossack in the barn'
				},
				{
					src: img('tannenberg-stuck-pig.jpg'),
					alt: 'Pig pierced with knife and fork on the Tannenberg game board',
					caption: '“A good beginning”'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'This might be seen as simply suggesting that a porker looted from a farm building was destined to become a tasty dinner for some troops. More likely it was a snide reference to the war as a whole, saying that the battle was a good start in carving up the Russian Empire.'
		},
		{
			type: 'paragraph',
			text: 'General von Hindenburg gets triumphal billing on both the box cover and the board. He was pulled out of retirement to take command of German forces in the east after the initial Russian attacks. He became a national hero for winning this battle and one of the most influential military figures on the German side for the rest of the war.'
		},
		{
			type: 'paragraph',
			text: 'For Germany, the Eastern Front was supposed to be a holding action. The big early victory was supposed to come in the West. The plan there was nicely captured by an early-war dexterity game, Siegeslauf der Deutschen nach Paris (Victory run of the Germans to Paris).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('siegeslauf-box.jpg'),
				alt: 'Box for Siegeslauf der Deutschen nach Paris dexterity game',
				caption: 'Siegeslauf der Deutschen nach Paris'
			}
		},
		{
			type: 'paragraph',
			text: 'The tiny ball starts in the track on the right, labelled “toward the enemy”. It enters the playing field at the top, where the blue bars represent the German-Belgian border. The player must first get past the fortress of Luttich, then march across the Meuse valley to take the fortresses of Huy, Namur and Dinant. The ball must cross the Belgian-French border and wend its way across northern France through the cities of Lille, Mauberge, Givet, St. Quentin, Cambrai, Rocroy and Longwy.'
		},
		{
			type: 'paragraph',
			text: 'The ball then must cross the Aisne and Oise rivers and penetrate the line of defense from La Fere to Reims and Verdun. Finally, it must assault the forts before the capital city, “after the conquest of which there is nothing in the way of the victorious invasion of Paris”, represented by a downward pointing horseshoe.'
		},
		{
			type: 'paragraph',
			text: 'The first phases of the invasion of Belgium went according to plan. This was due in large part to the Minenwerfer-Gerät (M-Gerät). This was a huge 42 cm (17 inch) siege artillery gun. It weighed 42 tonnes and fired shells that were 1.5 metres (almost five feet) long and weighed between 400 and 1150 kg (888 – 2,560 lbs). A shell fused to explode on contact would create a crater almost 30 feet wide and 20 feet deep.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('skat-42cm-morser.jpg'),
				alt: 'Ace of Spades from a wartime Skat deck showing the 42 cm M-Gerät siege gun',
				caption: 'The M-Gerät on the Ace of Spades'
			}
		},
		{
			type: 'paragraph',
			text: 'The M-Gerät is shown here on the Ace of Spades from a wartime Skat deck. Kaiser Wilhelm personally watched its test firing in February 1913, and the first battery was deployed on August 12, 1914, to destroy the Belgian forts around Liege.'
		},
		{
			type: 'paragraph',
			text: 'The guns quickly forced the surrender of Fort de Pontisse and Fort de Liers, then destroyed Fort de Loncin on Aug. 15 when its 25th shot hit the fort’s magazine. They then moved on to Namur, where they similarly blew up the Fort de Marchovelette on Aug. 23 with a magazine hit, and then forced the surrender of the remaining forts.'
		},
		{
			type: 'paragraph',
			text: 'The Belgian forts, however, lasted just long enough to enable the French to stem the German tide short of Paris. The Eastern Front, where Germany expected nothing but a quiet holding action, began instead with a huge German victory. The initial invasion in the West came close to an even bigger victory, but ended with the Miracle of the Marne and the “race to the sea”. Trench lines soon stretched from the English Channel to the Swiss border.'
		}
	]
};
