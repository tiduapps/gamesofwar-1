import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/war-and-remembrance/${name}`;

export const warAndRemembrance: StoryContent = {
	slug: 'war-and-remembrance',
	title: 'War and Remembrance',
	blocks: [
		{
			type: 'paragraph',
			text: 'In 1701, the ruling Tokugawa shogun of Japan ordered one of his nobles, Lord Asano Naganori, to arrange a large reception. Assigned to help him was the court\'s senior protocol official, Kira Yoshinaka.'
		},
		{
			type: 'paragraph',
			text: 'Kira said or did something to insult Asano. Losing his temper, Asano drew his dagger and slashed Kira. Although Kira was only slightly wounded, Asano had violated a strict rule against drawing weapons within the shogun\'s court. He was arrested and forced to commit seppuku (ritual suicide).'
		},
		{
			type: 'paragraph',
			text: 'Asano’s fief was forfeited, and his samurai retainers were dismissed, becoming ronin (outcasts).'
		},
		{
			type: 'paragraph',
			text: 'Led by Ōishi Yoshio, they plotted their revenge. Two years later, they reclaimed their honor by breaking into Kira\'s home and beheading him. They then placed Kira\'s head on their former lord\'s grave.'
		},
		{
			type: 'paragraph',
			text: 'These 47 Ronin won eternal renown by immediately turning themselves in to the authorities, and committing seppuku to atone for their crime.'
		},
		{
			type: 'paragraph',
			text: 'Their story has been immortalized in many forms, usually with the title Chūshingura (The Treasury of Loyal Retainers). The game above bearing this title was published during the Edo period (1603 - 1867).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('chus-full-board.jpg'),
				alt: 'Full game board for Chūshingura showing the spiral track of the 47 Ronin story',
				caption: 'Chūshingura (Edo period)'
			}
		},
		{
			type: 'paragraph',
			text: 'This is an early example of a type of game known generically as e-sugoroku or picture game. The primary aim of the game is to tell a story while providing an opportunity for gambling. Sugoroku games come in several variations. This one is an example of mawari-sugoroku, where players roll dice to move along a single track toward a goal.'
		},
		{
			type: 'paragraph',
			text: 'The track starts on the lower right-hand corner and ends in the middle, moving in a clockwise spiral. Such games are very similar to the European Game of Goose, where players follow an inward spiral of 63 spaces. European games, however, usually start on the bottom left and spiral inwards in a counter-clockwise direction.'
		},
		{
			type: 'paragraph',
			text: 'Chūshingura is a tale of sacrifice, of the ultimate cost of doing one\'s duty. Its purpose, and its popularity, reflect the human desire to remember those who have died or been maimed while serving a higher cause. This theme can be seen in many other games over the years.'
		},
		{
			type: 'paragraph',
			text: 'While many games published during WWI showed images of combat and casualties, the German game Unterm Roten Kreuz paid tribute to the medics of the war – the people who risked their own lives to rescue those wounded on the field of battle.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('roten-creuz-box.jpg'),
					alt: 'Box for Unterm Roten Kreuz',
					caption: 'Unterm Roten Kreuz'
				},
				{
					src: img('roten-kreuz-board.jpg'),
					alt: 'Game board showing medical corps activities from recruitment to hospital care',
					caption: 'Tribute to the medics'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'A simple roll-and-move game, it illustrates the full range of activities of the medical corps: recruitment, the used of horse-drawn and motorized ambulances, rescue dogs, hospital trains and hospital care.'
		},
		{
			type: 'paragraph',
			text: 'Two French games acknowledged the costs of WWI even while celebrating the country’s victory. The first, Jeu des Poilus, is very low key.'
		},
		{
			type: 'paragraph',
			text: 'Poilu is the popular French word for the ordinary infantryman. The large gold-lettered label on the deep red back of the board has just the title and an inscription: “Dedicated to the children of France in memory of the Great War”.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('poilus-board.jpg'),
				alt: 'Game board for Jeu des Poilus with wreath of red, white and blue flowers',
				caption: 'Jeu des Poilus'
			}
		},
		{
			type: 'paragraph',
			text: 'The board itself features only a couple of images of war: attacking French troops across the top, and a cameo of a single tank in the lower left corner. Far more space is given to the green wreath of red, white and blue flowers surrounding the playing surface.'
		},
		{
			type: 'paragraph',
			text: 'The game is a simple roll and move progression both through the war and through the ranks of the army. Players start as a private second class. As they navigate a maze of 133 spaces, they get promoted, to first-class private, corporal, sergeant, sergeant major, sub-lieutenant, lieutenant, major, lieutenant colonel, colonel, brigadier general, division commander, army commander, army group commander and finally Marshal of France.'
		},
		{
			type: 'paragraph',
			text: 'Playing pieces also pass through many of the war’s battles: the First Marne in 1914, Yser, Champagne, Somme, Verdun, and Second Marne in 1918. Along the way, players may win medals or be demoted, and more importantly may be wounded, captured or even killed on the field of honor (which forces the player out of the game). The game is a quiet tribute to the ordinary men at the core of the French army.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('poilus-soldiers.jpg'),
					alt: 'Attacking French troops illustrated across the top of the Poilus board',
					caption: 'Attacking troops'
				},
				{
					src: img('poilus-marechal.jpg'),
					alt: 'Marshal of France space on the Jeu des Poilus board',
					caption: 'Marshal of France'
				},
				{
					src: img('poilus-mort.jpg'),
					alt: 'Field of honor space on the Jeu des Poilus board where players may be killed',
					caption: 'The field of honor'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The second French game, Jeu de la Victoire, is similar in mechanism but much more vivid in its impact. The game track is laid out in a Game of Goose style inward spiral of 63 spaces. But every space is illustrated with a scene of war, and many are gruesome.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('victoire-full-board.jpg'),
				alt: 'Full game board for Jeu de la Victoire with illustrated war scenes on every space',
				caption: 'Jeu de la Victoire'
			}
		},
		{
			type: 'paragraph',
			text: 'The first spaces show the start of WWI: the attack on France and Belgium and Britain’s intervention.'
		},
		{
			type: 'paragraph',
			text: 'Some spaces show strategic victories and setbacks: the Miracle of the Marne, the siege of Verdun, the battle of the Somme, the sinking of the Lusitania and entry of America, the seizure of Cambrai, and the liberation of Lille. The final spaces show the German request for armistice and the terms of peace.'
		},
		{
			type: 'paragraph',
			text: 'Other spaces show notorious atrocities, real or alleged, and from vicious to petty. These include the execution of the Mayor of Senlis and later of nurse Edith Cavell, the bombing of hospitals, the looting of houses and wine cellars, the torture of prisoners, the destruction of factories, the use of civilians as slave workers and human shields, and even the cutting down of fruit orchards to ruin the land before beating a retreat.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('victoire-trenches-and-prisoners.jpg'),
					alt: 'Board spaces showing trenches and prisoners of war',
					caption: 'Trenches and prisoners'
				},
				{
					src: img('victoire-somme-and-fruit-trees.jpg'),
					alt: 'Board spaces showing the battle of the Somme and destroyed fruit orchards',
					caption: 'The Somme and ruined orchards'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Also shown are civilian sacrifices and the horrific inventions of that war, from trenches and tanks to flamethrowers and poison gas. The result is a game that says “we won”, but at a horrible cost.'
		},
		{
			type: 'paragraph',
			text: 'War plays no favorites. On the field of battle, some live and some die. Some come through unscathed and some are maimed. Some vanquish and some are captured.'
		},
		{
			type: 'paragraph',
			text: 'Even the bravest warriors may find themselves in a situation where they can no longer hurt the enemy and cannot run away. Captivity for most is better than death, but it is not an easy experience.'
		},
		{
			type: 'paragraph',
			text: 'One of the worst enemies for prisoners can be boredom. As a result, prisoners of war over the years have crafted an immense range of decorations, boxes, mementos and other objects from whatever materials were available.'
		},
		{
			type: 'paragraph',
			text: 'Such efforts have included games. This box and set of dominoes was carved from soup bones by a Napoleonic prisoner of war in Britain. The dominoes are small (about 0.9” by 0.4”).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('napoleonic-dominoes.jpg'),
				alt: 'Bone dominoes and carved box made by a Napoleonic prisoner of war',
				caption: 'Napoleonic prisoner-of-war dominoes'
			}
		},
		{
			type: 'paragraph',
			text: 'The box shown here has decorations carved into its sides and top, and the lid fits into a slot so that it slides open and closed. The lid is also punched with holes so that it can record scores for the card game cribbage.'
		},
		{
			type: 'paragraph',
			text: 'In May, 1915, the German prison camp at Senne in Westphalia actually held an exhibition of objects made by the French prisoners. This in turn prompted one of those prisoners, C. Brunlet, to design a game about life in the camp. Les Canards du Camp, subtitled, Scènes de la vie d’un prisonnier de guerre en Allemagne, was modelled on the traditional Game of Goose. What’s more, it was actually published in Geneva in 1917 after Brunlet escaped and was interned in Switzerland.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('canards-cover.jpg'),
				alt: 'Cover for Les Canards du Camp showing a German guard kicking over a prisoner\'s canteen',
				caption: 'Les Canards du Camp (1917)'
			}
		},
		{
			type: 'paragraph',
			text: 'The game offers a whimsical but biting look at prison camp life. The title itself is a play on words. Images of ducks replace those of the traditional geese, but the word “canards” also refers to the rumours and tall tales that would circulate incessantly in a place full of bored men starved for real news.'
		},
		{
			type: 'paragraph',
			text: 'Such canards, says the introduction, “come in all colors and nationalities. Some are sick ones whose wings are cut from birth. There is an incredible resistance to death, like the canard of the (re)capture of Lille, which according to carefully kept statistics has been repeated more than 60 times.”'
		},
		{
			type: 'paragraph',
			text: 'Brunlet says many of these canards started in the camp infirmary, which was outside the camp’s wire. “On arriving at the camp, the prisoners who pass by the infirmary tell the most incredible things, which the patients welcome and then peddle in the camp, reviewed, corrected and augmented.”'
		},
		{
			type: 'paragraph',
			text: 'The game board shows both both prisoner pastimes and the passage of time through the war. Two corners of the board (those on the upper side of the image below) show the shifting fortunes of the two sides.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('canards-full-board.jpg'),
				alt: 'Full game board for Les Canards du Camp',
				caption: 'The Canards game board'
			}
		},
		{
			type: 'paragraph',
			text: 'The first, labelled a “well-guarded work party”, shows a thin line of French prisoners escorted by two solid ranks of guards. The second, titled a “well-guarded sentinel”, shows a massive column of prisoners led by a single German.'
		},
		{
			type: 'paragraph',
			text: 'Until November 1914, prisoners had to sleep in tents. Then barracks were built beside a stream that the prisoners christened “The Riviera” (shown in the center of the board above). Some prisoners were housed in stables and granaries, which Brunlet describes as stifling in summer and bitterly cold in winter, even with 8 or 10 men stuffed into a single horse stall. “The smart ones are those who have managed to arrange comfortable apartments in the oat chests. By closing its lid, and installing a candle in the corner, we had the whole feeling of home – and a home without either mice or a companion who by his squirming makes himself completely obnoxious.”'
		},
		{
			type: 'paragraph',
			text: 'At the other end of the scale, there was a much sturdier and comfier building known as the Zeppelin for “celebrity” prisoners. Brunlet describes these as “upscale people, those that the Germans believe they should manage for their talents, their social position, the profits they can draw from it, for people like painters, designers and art workers who can be exploited, or for those who sufficiently tug their forelocks to persuade the guards that they deserve special treatment.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('canards-zeppelin.jpg'),
				alt: 'Board illustration of the Zeppelin building for celebrity prisoners',
				caption: 'The Zeppelin barracks'
			}
		},
		{
			type: 'paragraph',
			text: 'The game revels in the absurdities of life in the camp. Prisoners were moved around on a whim, between buildings or even between camps. The record, according to the game, was claimed by a soldier in who by May 1915 was moved for the 55th time! He is shown in the game (above left) during his 23rd move, sitting on a cart with his belongings, being towed by a dog.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('canards-23rd-movement.jpg'),
					alt: 'Board illustration of a prisoner being moved for the 23rd time, towed by a dog',
					caption: 'The 23rd move'
				},
				{
					src: img('canards-sergeant-on-duty.jpg'),
					alt: 'Board illustration captioned What we have not seen: the sergeant of the guard at his post',
					caption: 'The sergeant on duty'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The Germans also appointed prisoners as internal guards to maintain discipline. But when the Germans handed out 35 armbands to designate members of the watch, “31 disappeared into our bags as souvenirs”. What’s more, the sergeant put in charge of this guard force insisted on staying in his bed. The board illustration (above right) is captioned “What we have not seen: the sergeant of the guard at his post”, and shows him being carried around the camp while still on his bed!'
		},
		{
			type: 'paragraph',
			text: 'Then there was the electric fence around the camp: “Imagine our sorrow to see its first victim was a German electrician.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('canards-electric-fence.jpg'),
				alt: 'Board illustration of the electric fence around the prison camp',
				caption: 'The electric fence'
			}
		},
		{
			type: 'paragraph',
			text: 'The subject of food gets quite a bit of attention in the game. While soup was served to all, prisoners for the most part relied on personal canteens to heat food and drink. “With a great deal of smoke, one could boil an anemic chocolate, turnips, potatoes, or re-using coffee grounds again and again – as long as there was coffee to be had.” Such cooking of course was only allowed on a fixed schedule. The game’s cover shows a German guard kicking over one canteen and chasing away a whole group of would-be chefs. And then there was the “daily three inches”, the ration of a sausage described as a grey mixture in a tube – and even that was no longer seen by 1917.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('canards-sausage.jpg'),
				alt: 'Board illustration of the daily three inches sausage ration',
				caption: 'The daily three inches'
			}
		},
		{
			type: 'paragraph',
			text: 'One panel is reserved for the portrait of a fairly stern and formally dressed woman, which the game says represents “that which is missing here: the mother, the sister, the wife, the smile that consoles and encourages”.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('canards-ce-qui-manque.jpg'),
				alt: 'Board panel portrait representing the women left behind',
				caption: 'Ce qui manque ici'
			}
		},
		{
			type: 'paragraph',
			text: 'A final touching reminder of the human cost of World War I is the British game Bombardo. It was not produced during the war, but three years after the Armistice. And it is not a wargame as such. Rather, it is a dexterity game where players spin a top within a circle of light balls perched in a circle.'
		},
		{
			type: 'paragraph',
			text: 'Each player has a color, and the goal is to end each spin with the most balls of your color still on their stands.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('bombardo-box-cover.jpg'),
					alt: 'Box cover for Bombardo from the Lord Roberts Memorial Workshops',
					caption: 'Bombardo (1921)'
				},
				{
					src: img('bombardo-set-up.jpg'),
					alt: 'Bombardo dexterity game set up with spinning top and colored balls',
					caption: 'The game in play'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'What makes the game special is that it was produced not by a commercial company, but by the Lord Roberts Memorial Workshops. Field Marshal Frederick Roberts, 1st Earl Roberts, won the Victoria Cross in India in 1857. He later fought in Abyssinia and Afghanistan, and went on to serve as Commander-in-Chief, India, head of the British forces in the Second Boer War and the final Commander-in-Chief of the Forces before that post was abolished in 1904.'
		},
		{
			type: 'paragraph',
			text: 'A short man affectionately known to his troops and the public as “Bobs”, Lord Roberts was both influential in warning of the increasing threat posed by the German Empire in the years leading to WWI and was a passionate advocate for better support and treatment of disabled veterans.'
		},
		{
			type: 'paragraph',
			text: 'Workshops to give work and training to such men existed for many years prior to WWI, but were named in honor of Lord Roberts after he died in 1914 while visiting troops in France. By 1920, there were 11 Memorial workshops across the United Kingdom, turning out everything from basket war and toys to beds, bedding and linen. They continue to operate today for the benefit of soldiers, sailors and airmen “broken in war”.'
		},
		{
			type: 'paragraph',
			text: 'Not all casualties of war are visible, nor are bodies the only things broken. The cost of war may be measured in destruction of property and economic privation. Several games from Britain give a reminder of the lasting impact of submarine warfare and the Blitz.'
		},
		{
			type: 'paragraph',
			text: 'Britain had for decades been dependent on importing food simply to feed its people. The Battle of the Atlantic in WWII did not just squeeze Britain’s ability to make war. It also forced the government to impose an especially tight rationing of food.'
		},
		{
			type: 'paragraph',
			text: 'A little card game called Menuette published in 1945 is a reminder that food shortages persisted in Britain well beyond the end of the war. Food remained rationed, and putting together a full and healthy meal was quite a feat. Menuette is a set-collection card game. Players try to assemble a meal that includes eight elements: roll, soup, fish, entrée, green vegetable, potato, dessert and drink.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('menuette-box-cover.jpg'),
					alt: 'Box cover for Menuette card game',
					caption: 'Menuette (1945)'
				},
				{
					src: img('menuette-pictures.jpg'),
					alt: 'Waiter, Waitress and Headwaiter picture cards from Menuette',
					caption: 'Picture cards'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Each dish has a value from 1 to 10, and the goal is to assemble the full meal worth the most total points. There are three “picture” cards of the Waiter, Waitress and Headwaiter that are worth additional bonus points if picked up.'
		},
		{
			type: 'paragraph',
			text: 'The most elaborate menu includes turtle soup, lemon sole, roast pheasant with baked potatoes and Brussel sprouts, Peach Melba and champagne. Such a feast was an elusive fantasy amid rationing levels that created sayings like: “Jam yesterday, jam tomorrow, but never jam today”, and “If we had ham, we could have ham and eggs if we had eggs.” Much more realistic was the lowest scoring meal: a roll, vegetable soup, cod, sausages with mashed potatoes and cabbage, a dessert of cheese and crackers and water to drink.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('menuette-max-meal.jpg'),
					alt: 'Menuette cards for the most elaborate possible meal',
					caption: 'The dream feast'
				},
				{
					src: img('menuette-cheapest-meal.jpg'),
					alt: 'Menuette cards for the lowest scoring realistic meal',
					caption: 'The realistic ration'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The damage to property from wartime bombing also required much rebuilding. The post-war British economy was so weak that many businesses could not replace their premises and most people could not afford new homes. Even as the U.S. Marshall Plan flooded the losing combatants with capital for rebuilding industry and housing, Britain was left on its own to cope with its economic wreckage.'
		},
		{
			type: 'paragraph',
			text: 'The 1946 game Housing Drive speaks to the consequences. Most American real estate games show the field as a way to get rich. In this post-war British game, the winner is the player who completes his development with the lowest level of government subsidies!'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('housing-drive-box-cover.jpg'),
					alt: 'Box cover for Housing Drive',
					caption: 'Housing Drive (1946)'
				},
				{
					src: img('housing-drive-player-card.jpg'),
					alt: 'Player development card from Housing Drive showing housing estate spaces',
					caption: 'A player\'s housing estate'
				},
				{
					src: img('housing-drive-components.jpg'),
					alt: 'Housing Drive game components including dice, cards and wooden houses',
					caption: 'Game components'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Each turn, a player rolls two special dice. The six possible results are money (one coin worth GBP100), a card from the blue or yellow decks, or a unit of input (labour, material or power). These are added to each player’s card and may be traded freely among players.'
		},
		{
			type: 'paragraph',
			text: 'Many of the cards grant a building licence that allows the construction of one or more homes. A player first pays 300 pounds for each house on the licence.'
		},
		{
			type: 'paragraph',
			text: 'Each licence card then indicates the required mix of inputs. When a player accumulates enough tokens to complete the card, he places the corresponding number of wooden houses on development spaces in the housing estate on his card. Other cards either give players money or force them to pay fees.'
		},
		{
			type: 'paragraph',
			text: 'Britain at the time was impoverished by the war. As the rules put it: “The building of the Houses requires capital. A player cannot normally obtain sufficient capital from his ordinary play or from his business deals with other players. He is therefore allowed to claim a Government Subsidy, at any time and in any amount.”'
		},
		{
			type: 'paragraph',
			text: 'There is of course no free lunch. Subsidies come in multiples of 1,000 pounds. Any time a player subsequently accumulates 1,300 pounds in cash, he must use it all to pay off one of the subsidy tokens. The game continues until one player has filled all 16 of the housing lots on his estate.'
		},
		{
			type: 'paragraph',
			text: 'If a player has managed to end the game with no subsidy outstanding, he wins outright. If two or more end the game with no subsidies, the one who has built the most houses wins. In most cases, however, players divide the total amount of their outstanding subsidies by the number of houses built. The winner is the player who achieves the lowest subsidy per house, regardless of how many houses he built.'
		},
		{
			type: 'paragraph',
			text: 'The greatest cost to any conflict remains, of course, human. Today, we recognize Post-Traumatic Stress Disorder as a fate that can befall even victorious soldiers as well as civilians caught up in life-or-death situations. Time may heal to some extent, but games have played and continue to play an important role in helping people cope with both the necessities and the consequences of war.'
		}
	]
};
