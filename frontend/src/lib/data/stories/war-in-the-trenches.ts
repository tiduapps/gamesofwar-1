import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/war-in-the-trenches/${name}`;

export const warInTheTrenches: StoryContent = {
	slug: 'war-in-the-trenches',
	title: 'War in the Trenches',
	blocks: [
		{
			type: 'paragraph',
			text: 'The weather was terrible as Pioneer-Sergeant Kunze and his squad of combat engineers approached Fort Duaumont. This was the largest of 19 fortresses protecting the town of Verdun. It was set on a hilltop with a commanding view. It was surrounded by a huge moat, covered by casemates or “coffres” at each corner holding Hotchkiss revolving cannon. It was built with a 155 mm retractable turret, a similar 75 mm turret, four other 75 mm guns and assorted machine-gun posts. Inside, the fort was a maze of tunnels with two underground levels protected by 12 metres of concrete.'
		},
		{
			type: 'paragraph',
			text: 'The German army had begun a massive offensive thrust at Verdun four days earlier, on Feb. 21, 1916. But as Kunze and his men reached the moat, they were greeted only with silence. They snuck up to one of the coffres, and found it empty. Kunze managed to climb inside and get a door open, but his men were sure that an ambush awaited them and refused to enter.'
		},
		{
			type: 'paragraph',
			text: 'The rapid fall of Belgium’s major fortresses early in the war had persuaded the French that such forts were useless against modern heavy artillery. They therefore had removed most of Fort Douaumont’s guns and troops, leaving only 56 men led by an NCO. Kunze headed into the tunnels on his own, found the 155 mm gun turret and took its crew prisoner.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('verdun-douamont.jpg'),
				alt: 'Fort Douaumont on the Verdun game board',
				caption: 'Fort Douaumont'
			}
		},
		{
			type: 'paragraph',
			text: 'In the meantime, other troops from his 24th Brandenburg Regiment had made it to the fort. Their leader, Lt. Radke, had them spread out across the fort. They captured its remaining occupants without firing a shot. It was perhaps the only bloodless event in what turned into the longest and bloodiest battle of WWI. Over the next 300 days, the French army would suffer 400,000 casualties while the Germans lost 350,000 men. Almost half of these casualties, about 300,000 in total, died.'
		},
		{
			type: 'paragraph',
			text: 'The battle was the subject of a German game, Verdun, published at some point after the battle. The black and white mapboard shows the interlocking zones of fire amongst the many defending forts and batteries around Verdun. The attacking player must start from the southeast corner and try to overwhelm strongpoints one at a time.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('verdun-full-board.jpg'),
				alt: 'Full board for Verdun',
				caption: 'Verdun'
			}
		},
		{
			type: 'paragraph',
			text: 'Memoirs of soldiers at Verdun capture the sheer horror of the battle. “Verdun has become a battle of madmen in the midst of a volcano. Whole regiments melt in a few minutes, and others take their places only to perish in the same way,” wrote one. “The valley separating Le Mort Homme from Hill 287 is choked with bodies. A full brigade was mowed down in a quarter hour\'s holocaust by our machine guns….West of the Meuse, at least, one dies in the open air, but at Douaumont is the horror of darkness, where the men fight in tunnels, screaming with the lust of butchery, deafened by shells and grenades, stifled by smoke.”'
		},
		{
			type: 'paragraph',
			text: 'Trench warfare was both the harsh reality and enduring image of The War to End Wars. While several of the combatant countries produced games with images of life and death in the trenches, the German images are the most detailed. The most elegant can be seen on the cover of Im Schutzengraben (In the Trenches), published in mid-war by O.&M. Hausser.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('schutzengraben-archive-cover-art.jpg'),
				alt: 'Cover art for Im Schutzengraben',
				caption: 'Im Schutzengraben'
			}
		},
		{
			type: 'paragraph',
			text: 'The art is by German impressionist and modernist painter Fritz Neumann (born in 1881 and best known for his paintings of Cossacks in action). These images from the publisher’s archive copy have retained their vivid colors.'
		},
		{
			type: 'paragraph',
			text: 'The board has equally clear depictions of four of the armies fighting on the Western Front. In the upper left corner, French troops in a trench throw grenades. In the lower left corner, a British soldier works a trench mortar while a comrade in arms keeps watch. On the lower right, Belgian soldiers defend the remaining sliver of their country. And on the upper right, a German machine-gun unit fires toward the enemy.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('schutzengraben-archive-board-art.jpg'),
				alt: 'Board art from Im Schutzengraben showing four armies in the trenches',
				caption: 'Im Schutzengraben board'
			}
		},
		{
			type: 'paragraph',
			text: 'It is a roll and move game for any number of players, but it comes with six metal playing pieces: three German soldiers, one French, one British and one Belgian. There also are six country cards. These are drawn at the start to determine which country each player represents. Each player starts on their own or an allied flag in the outer ring.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('schutzengraben-playing-pieces.jpg'),
				alt: 'Metal playing pieces from Im Schutzengraben',
				caption: 'Schutzengraben playing pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'Players roll two dice and move that many spaces counter-clockwise until they land exactly on a space with an enemy flag. That position is then taken, and the piece moves to the next ring inward. Some spaces show soldiers, airships or planes with a flag in one corner: these are the same as flag spaces.'
		},
		{
			type: 'paragraph',
			text: 'However, if an Allied piece lands on one of the cannon in the second and fourth rings, it must go back to the starting position.'
		},
		{
			type: 'paragraph',
			text: 'Similarly, a German piece goes back to the start if it lands on one of the shell bursts in the fourth or fifth rings.'
		},
		{
			type: 'paragraph',
			text: 'The barbed wire space in the fourth ring merely inflicts a delay: the piece goes back to the space it started the turn. Any piece landing on a space showing a soldier (without any flag) must move outward one ring. The winner is the first to penetrate all the lines of battle to the space in the middle, and is instructed to shout loudly three times: “Hurray!”'
		},
		{
			type: 'paragraph',
			text: 'Another artistic masterpiece shows images of the action on the Eastern Front. The game box of Kampf gegen Russland shows a fierce German assault as it reaches the Russian trench line.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kampf-gegen-russland-box-cover.jpg'),
				alt: 'Box cover for Kampf gegen Russland',
				caption: 'Kampf gegen Russland'
			}
		},
		{
			type: 'paragraph',
			text: 'The board offers a broader aerial view of the fighting. It covers a wide range of activities, from carnage to caring, from artillery duels to cavalry probes, from airships and zeppelins to the rail cars needed to move armies and supplies across large distances, from bridge assaults to the never-ending task of digging trenches.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kampf-gegen-russland-board.jpg'),
				alt: 'Board for Kampf gegen Russland',
				caption: 'Kampf gegen Russland board'
			}
		},
		{
			type: 'paragraph',
			text: 'The playing pieces are cardboard disks, blue for the Germans and pink for the Russians. Each army consists of 50 pieces: one Commander-in-chief, two Generals, 3 Infantry Officers, 1 Flagbearer, 19 infantry in four different poses, 11 cavalry troops, one drummer, one trumpeter, four artillery pieces, two machine guns, one “warcar”, one baggage wagon and three air units.'
		},
		{
			type: 'paragraph',
			text: 'There are slight differences in the names and mix of units. The Germans have two airplanes and an airship, while the Russians have three planes. The German cavalry units are divided into light cavalry, uhlans (lancers) and hussars, while the Russian units are Don Cossacks, Astrakhan Cossacks and dragoons.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kampf-gegen-russland-contents.jpg'),
				alt: 'Contents of Kampf gegen Russland',
				caption: 'Kampf gegen Russland pieces'
			}
		},
		{
			type: 'paragraph',
			text: 'The game is more about dexterity than strategy. Each player uses a wooden stick with a flat end to try to “flip” his pieces so that they land at least in part on top of an enemy piece. The enemy piece is thus eliminated.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kampf-gegen-russland-trench-digging.jpg'),
				alt: 'Trench digging illustration on the Kampf gegen Russland board',
				caption: 'Digging trenches'
			}
		},
		{
			type: 'paragraph',
			text: 'There are significant restrictions that reflect terrain difficulties: any disk landing in the water is lost, and a disk can only cross the river via one of the two bridges. That said, Kampf gegen Russland is closer to Tiddledy Winks than to a game of strategy.'
		},
		{
			type: 'paragraph',
			text: 'Other German board games on trench warfare have artwork that ranges from morbid to amusing. One unlabelled board includes three images of casualties: fallen soldiers; a rabbit killed in the trench wire; and a dog having found a new toy among the dead.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('trenches-gefallen.jpg'),
					alt: 'Fallen soldiers on an unlabelled trench game board',
					caption: 'Fallen soldiers'
				},
				{
					src: img('trenches-rabbit.jpg'),
					alt: 'Rabbit killed in trench wire on a game board',
					caption: 'A rabbit in the wire'
				},
				{
					src: img('trenches-dog.jpg'),
					alt: 'Dog among the dead on a trench game board',
					caption: 'A dog and the dead'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'A different game board took a more whimsical look at the everyday realities of life on the front lines. Below left, the first image shows a soldier resting on his pack under a tree. He is supposedly guarding the stacked rifles of his comrades. These include a soldier in the stream doing his best to wash off some of the filth of the trenches. Below right features a soldier chugging a beer at the canteen.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('trenches-washing-up.jpg'),
					alt: 'Soldier washing in a stream on a trench game board',
					caption: 'Washing up'
				},
				{
					src: img('trenches-chugging-beer.jpg'),
					alt: 'Soldier chugging beer at the canteen on a game board',
					caption: 'Chugging a beer'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The picture above left immortalizes the reality that no matter where soldiers find themselves, there is always an officer ready to chew out subordinates. And the final image above right is a reminder that everyone needs bathroom breaks regardless of circumstances. In this case, a fellow soldier stays alert at the front trench, with rifle in hand and two grenades close by.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('trenches-bawling-out.jpg'),
					alt: 'Officer chewing out subordinates on a trench game board',
					caption: 'Bawling out'
				},
				{
					src: img('trenches-latrine.jpg'),
					alt: 'Soldier at the latrine on a trench game board',
					caption: 'Latrine duty'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Games also showed moments of caring and compassion amidst the slaughter. From Unterm Roten Kreuz comes an image of stretcher bearers taking a wounded soldier toward the hospital wagons. And right, from a WWI edition of Belagerungsspiel, German soldiers advance past a French soldier giving succour to a wounded comrade.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('roten-kreuz-stretchers.jpg'),
					alt: 'Stretcher bearers from Unterm Roten Kreuz',
					caption: 'Unterm Roten Kreuz'
				},
				{
					src: img('belagerung-small-wwi-capture-wounded.jpg'),
					alt: 'French soldier tending a wounded comrade on a Belagerungsspiel board',
					caption: 'Belagerungsspiel'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The war in the trenches was very much a war of artillery. While soldiers could be killed by the thousands during an assault, major offensives were rare.'
		},
		{
			type: 'paragraph',
			text: 'Much of the day-to-day killing was done by large guns throwing massive shells over long distances.'
		},
		{
			type: 'paragraph',
			text: 'That said, even the artillerymen did not have easy lives. This cover of a WWI Grosse Belagerungsspiel shows a crew trying to drag a 21 cm Morser 10 howitzer. Dragging a 7-tonne gun was difficult best, and exhausting through the all-too-common mud.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('belagerung-artillery-cover-21-cm-m-rser-10.jpg'),
				alt: 'Cover showing crew dragging a 21 cm Morser 10 howitzer',
				caption: 'Grosse Belagerungsspiel'
			}
		},
		{
			type: 'paragraph',
			text: 'The game board below takes an unusually even-handed approach. The text is in German, but there are two parallel tracks. One follows the experiences of a German soldier; the other of a French one. Both start the war full of joy. Both experience surprise, the harsh realities of trench warfare and the pain of being wounded. Both engage in routine activities from eating to seeking religious solace. Both survive the war with pride.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('french-german-trench-game.jpg'),
					alt: 'French-German trench game board with parallel tracks',
					caption: 'French-German trench game'
				},
				{
					src: img('french-german-trench-vertical-crop.jpg'),
					alt: 'Detail from the French-German trench game board',
					caption: 'Parallel tracks'
				},
				{
					src: img('french-german-trench-game-medics.jpg'),
					alt: 'Medics on the French-German trench game board',
					caption: 'Medics at work'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'One of the big differences between WWI and WWII in Europe is that the Netherlands remained neutral through the First World War. This led to a fascinating 1916 Dutch game, Het Nieuwe Koerierspel (The New Courier Game).'
		},
		{
			type: 'paragraph',
			text: 'The Australian game on the right took a more abstract approach. Trencho is really a game of Nine Men’s Morris dressed up in wartime camouflage. The points on which the playing pieces sit are shown as artillery positions. The lines along which they move have become trenches filled with troops.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('trencho-board.jpg'),
				alt: 'Board for Trencho',
				caption: 'Trencho'
			}
		},
		{
			type: 'paragraph',
			text: 'From France, Le Jeu du Front is even more minimalist and abstract – really just a small board for tic-tac-toe.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('jeu-du-front.jpg'),
				alt: 'Le Jeu du Front board',
				caption: 'Le Jeu du Front'
			}
		},
		{
			type: 'paragraph',
			text: 'Another British title linked trench warfare to the national sport, football (soccer to North Americans). A handheld maze game, it requires players to start with the ball at their own goal line and work it past the entire German "team". This starts with Outside Right "Little Willie" (Crown Prince Wilhelm), and winds around caricatures of assorted luminaries such as army leader (Helmuth) Von Moltke at Centre Half and Count Zeppelin at Right Back to the goal mouth of The Kaiser.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('trench-football-box.jpg'),
					alt: 'Box for Trench Football maze game',
					caption: 'Trench Football'
				},
				{
					src: img('trench-football-rules.jpg'),
					alt: 'Rules for Trench Football showing the German team',
					caption: 'Trench Football rules'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'One of the big differences between WWI and WWII in Europe is that the Netherlands remained neutral through the First World War. This led to a fascinating 1916 Dutch game, Het Nieuwe Koerierspel (The New Courier Game).'
		},
		{
			type: 'paragraph',
			text: 'This roll-and-move race game highlights challenges facing couriers moving between their own country, Germany and occupied Belgium. The board shows that while the Dutch kept their usual, relatively open, border with Germany, the line between the Netherlands and occupied Belgium was guarded by an electric fence.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('koerierspel-electric-fence.jpg'),
					alt: 'Electric fence on the Het Nieuwe Koerierspel board',
					caption: 'The electric fence'
				},
				{
					src: img('koerierspel-full-map.jpg'),
					alt: 'Full map for Het Nieuwe Koerierspel',
					caption: 'Het Nieuwe Koerierspel'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Another WWI game from a neutral perspective came from Spain. Las Guerras Modernas is subtitled “French-German Combat”. The board is 11 spaces (dots) wide by 11 deep. Both orthogonal and diagonal lines connect the dots. Each side gets 33 pieces: a flagbearer; two artillery; two air units (biplane and airship); 11 cavalry; and 17 infantry. Each player sets up on the three closest ranks: cavalry on the front rank; flag bearer in the middle of the second rank; guns on the corners of the back rank; aerial units next to the guns; and infantry filling in the rest.'
		},
		{
			type: 'paragraph',
			text: 'An infantry piece moves one space orthogonally. Cavalry moves one space diagonally. Enemy pieces are captured by jumping over them to an empty space, as in Checkers.'
		},
		{
			type: 'paragraph',
			text: 'Artillery move across empty spaces orthogonally and then jump to capture, while air units do the same in any direction. Capturing an enemy is compulsory if possible.'
		},
		{
			type: 'paragraph',
			text: 'The centre rank on the board is a river Until passing the river, infantry can move only forward or sideways. Once in enemy territory, it can move backward as well, but only until it crosses back into friendly territory. An infantry or cavalry piece that captures the enemy flag gains the powers of an artillery piece, and is stacked with a captured enemy counter to show this.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('modernas-box-cover.jpg'),
					alt: 'Box cover for Las Guerras Modernas',
					caption: 'Las Guerras Modernas'
				},
				{
					src: img('modernas-pieces-closeup.jpg'),
					alt: 'Playing pieces from Las Guerras Modernas',
					caption: 'Playing pieces'
				},
				{
					src: img('modernas-board-overhead.jpg'),
					alt: 'Overhead view of the Las Guerras Modernas board',
					caption: 'Las Guerras Modernas board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The earliest American game about the war seems to War of Nations from Milton Bradley. The cover illustration still shows German cavalry charging British guns manned by soldiers still in red coats. The map board inset in the box covers the full Western front.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('war-of-nations-box.jpg'),
					alt: 'Box for War of Nations',
					caption: 'War of Nations'
				},
				{
					src: img('war-of-nations-board.jpg'),
					alt: 'Board for War of Nations',
					caption: 'War of Nations board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Each player starts with five armies. One at the starting cities of each of five twisty red lines with movement points. On each turn, a player spins and can move a single army that many spaces. Landing directly in front of an enemy pushes it back three spaces; landing on an enemy kills it.'
		},
		{
			type: 'paragraph',
			text: 'American game makers made up for lost time after the United States joined the conflict in 1917, producing multiple games celebrating American involvement. Milton Bradley, for instance, published Game of Battles, with a cover illustrating an American crew firing one of the French quick-firing 75 mm guns the U.S. bought to equip its forces. Note the wireless operator in the dugout.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('game-of-battles-box-top.jpg'),
				alt: 'Box top for Game of Battles',
				caption: 'Game of Battles'
			}
		},
		{
			type: 'paragraph',
			text: 'Milton Bradley also offered Over There, with a picture of Americans camping in a field as they would at home. It offers a rather idyllic view of living conditions compared with the horrific reality of the trenches.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('over-there-box-cover.jpg'),
					alt: 'Box cover for Over There',
					caption: 'Over There'
				},
				{
					src: img('over-there-board.jpg'),
					alt: 'Board for Over There printed on the box bottom',
					caption: 'Over There board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'In play, the game is similar to that of the earlier War of Nations, but is focused on patrolling No Man’s Land rather than the grand campaign. Printed on the bottom of the box, the board shows five lines of advance. Each player starts with five pieces, one for each line.'
		},
		{
			type: 'paragraph',
			text: 'In turn, players use the spinner and may advance a single piece that exactly that number of spaces on a line of their choice. Pieces may move forward or backward, but not both. The goal is to capture the enemy soldier on each line by landing on it by exact count.'
		},
		{
			type: 'paragraph',
			text: 'A piece occupying a shell hole cannot be captured. Capturing an enemy piece ends the game on that line. The capturing player can move his victorious piece to any other line, increasing his chances of spinning the right number on that one. The first player to capture all of the opposing pieces wins the game.'
		},
		{
			type: 'paragraph',
			text: 'Parker Brothers came out with a couple of war-themed card games. In 1918, it published Camouflage. Most of the 56-card deck consists of assorted weapons of war. There are five each of cards illustrating an Airplane Gun, a rhomboid Tank, three kinds of artillery (Mortar, Howitzer and Field Gun) and four kinds of infantry weapons (Machine Gun, Rifle, Revolver and Bomb, meaning hand grenade).The deck also includes 11 Camouflage cards.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('camouflage-box-cover.jpg'),
					alt: 'Box cover for Camouflage card game',
					caption: 'Camouflage'
				},
				{
					src: img('camouflage-weapon-cards.jpeg'),
					alt: 'Weapon cards from Camouflage',
					caption: 'Weapon cards'
				},
				{
					src: img('camouflage-card.jpeg'),
					alt: 'Camouflage card from the Camouflage deck',
					caption: 'Camouflage card'
				},
				{
					src: img('camouflage-backs.jpeg'),
					alt: 'Card backs from Camouflage',
					caption: 'Card backs'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The deck is shuffled and one card is dealt face up to each player. The dealer then puts one more card on top of that held by the player on his left. This player then uses the spinner, which has six possible results, the player 1, 2 or 3 places to the left or right. The identified player is “shot at” by the spinning player, and if that player’s cards are not covered by a Camouflage card, the spinning player takes them all and adds them to his stack.'
		},
		{
			type: 'paragraph',
			text: 'That player then deals a card to the player on his left, who repeats the process. A player who is dealt a Camouflage card gets protection, but loses his spin. If a player is dealt a Howitzer card, he takes all of the stacks of all other players that are not camouflaged. Play continues until the deck is exhausted at which point the player holding the largest number of cards wins 10 points. The first player to collect 50 points wins the game.'
		},
		{
			type: 'paragraph',
			text: 'In 1915, while the United States was still neutral, National Military Tactics Co. of New York issued a card game called Tactics: The Military Game. After America entered the war, Parker Brothers bought the rights and published it as The U.S. Army Game. It was re-issued after the war with yet another title, Militac.'
		},
		{
			type: 'paragraph',
			text: 'This is a trick-taking card game. The 53-card deck is divided into four suits by service: Infantry (blue), Cavalry (yellow), Artillery (red) and Engineers (green).'
		},
		{
			type: 'paragraph',
			text: 'Each card has a detailed illustration of an individual of each rank in dress uniform, and a colored border that includes the value of the card, branch of service, symbol of service, rank and rank symbol.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('usarmy-box-cover.jpg'),
					alt: 'Box cover for The U.S. Army Game',
					caption: 'The U.S. Army Game'
				},
				{
					src: img('usarmy-4-fourstars.jpg'),
					alt: 'Four-star general cards from The U.S. Army Game',
					caption: 'Four-star generals'
				},
				{
					src: img('udsarmy-technology-cards.jpg'),
					alt: 'Technology cards from The U.S. Army Game',
					caption: 'Technology cards'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Each suit is numbered from 1 to 12 in ascending order of rank: Private (1), Corporal, Sergeant, 2nd Lieutenant, 1st Lieutenant, Captain, Major, Lieutenant Colonel, Colonel, Brigadier General, Major General, and General (12).'
		},
		{
			type: 'paragraph',
			text: 'The game also included four black (unsuited) cards illustrating military technology of the time. This includes a card labelled Machine-Gun (5) even though the photograph shows a piece of field artillery. The other three cards show an Armored Motor-car (10), Air-Ship (15) and Tank (20).'
		},
		{
			type: 'paragraph',
			text: 'Finally, there is a President and Commander-in-Chief card. The unsuited cards act as a miniature trump suit, and the President card beats all other cards.'
		},
		{
			type: 'paragraph',
			text: 'Even early in the war, this German game offered a sense of both confidence and desperation. Weltkriegsspiel has an enlarged checkers-type board, 15 squares wide and 16 ranks deep. The Central Powers set up in the bottom four ranks, while the Allied forces occupy the top nine, leaving a 3-rank No Man\'s Land in between.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('weltkrieg-board.jpg'),
				alt: 'Board for Weltkriegsspiel',
				caption: 'Weltkriegsspiel'
			}
		},
		{
			type: 'paragraph',
			text: 'Based on the disparity in strength, the Germans probably get an advantage in capability. This likely was allowing German pieces to move and jump forward and backward like Kings in Checkers. This sense of being better but outnumered would reinforce the message at the bottom of the board: "We want to win! We will win! We have to win!"'
		}
	]
};
