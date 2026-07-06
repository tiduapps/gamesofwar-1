import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/franco-prussian-war/${name}`;

export const francoPrussianWar: StoryContent = {
	slug: 'franco-prussian-war',
	title: 'The Franco-Prussian War',
	blocks: [
		{
			type: 'paragraph',
			text: 'Bismarck’s version was then badly translated by the French press, making it look like the Prussian king had treated the French ambassador like dirt. The resulting explosion of public opinion led to a French declaration of war on July 16, 1870.'
		},
		{
			type: 'paragraph',
			text: 'This played into Bismarck’s hands by driving Germany’s southern states like Bavaria into an alliance with the Prussian-dominated North German Confederation.'
		},
		{
			type: 'paragraph',
			text: 'Over the next few months, the Germans repeatedly trounced French forces, and on September 2, 1870, captured French Emperor Napoleon III at the Battle of Sedan.'
		},
		{
			type: 'paragraph',
			text: 'In 1870, Prussian Chancellor Otto von Bismarck managed to spark a war with France simply by tweaking the wording of a diplomatic telegram. France and Prussia were having a spat over a royal succession in Spain. A Prussian prince was one of the candidates, and France was worried about being encircled.'
		},
		{
			type: 'paragraph',
			text: 'France objected vigorously, and it looked like Prussia would back down. However, Bismarck then altered a telegram being sent by his sovereign, Wilhelm I. In the so-called Ems Dispatch, he rejected the French demand that Prussia never again support such a candidacy in Spain.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('krieg-full-board.jpg'),
				alt: 'Full board for Kriegs-Spiel with vivid combat scenes',
				caption: 'Kriegs-Spiel'
			}
		},
		{
			type: 'paragraph',
			text: 'This led to a popular uprising and a new Government of National Defense, but not to an end to the war.'
		},
		{
			type: 'paragraph',
			text: 'The Germans proceeded to lay siege to Paris. By the New Year, Paris was starving. On Jan. 26, 1871, France surrendered.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('krieg-bayonet-work.jpg'),
					alt: 'Close-quarters infantry combat scene from Kriegs-Spiel',
					caption: 'Bayonet work'
				},
				{
					src: img('krieg-lancer-triumphant.jpg'),
					alt: 'Triumphant lancer scene from Kriegs-Spiel',
					caption: 'Lancer triumphant'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Given the damage both to French pride and the French economy, most games related to the Franco-Prussian War were published in Germany. These included two fairly complex gambling games from Oehmigke & Riemschneider, a publishing firm based in Neuruppin that was founded in 1831.'
		},
		{
			type: 'paragraph',
			text: 'The Kriegs-Spiel shown above offers a complex matrix of gambling penalties and bonuses. It also has vivid scenes of the fighting between German and French forces. These include close-quarters cavalry and infantry combat.'
		},
		{
			type: 'paragraph',
			text: 'A version of Belagerungsspiel is printed on the back with more images from the Franco-Prussian War. Notable is the scene showing both regular infantry (in dark blue uniforms) and jägers or light infantry (in green tunics) razing a town.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('krieg-reverse-festungsspiel.jpg'),
					alt: 'Reverse side of Kriegs-Spiel showing Belagerungsspiel',
					caption: 'Belagerungsspiel on the reverse'
				},
				{
					src: img('krieg-reverse-infantry-on-guard.jpg'),
					alt: 'Infantry on guard from the reverse of Kriegs-Spiel',
					caption: 'Infantry on guard'
				},
				{
					src: img('krieg-reverse-burning-village.jpg'),
					alt: 'Prussian troops razing a burning village on the reverse of Kriegs-Spiel',
					caption: 'Burning village'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'The war had two main results. First, France surrendered much of Alsace and Lorraine to Germany, setting the stage for the next big conflict between the two.'
		},
		{
			type: 'paragraph',
			text: 'The second was the unification of Germany, forming the new German Empire under Kaiser Wilhelm I. The balance of power within Europe shifted dramatically, and set the stage for the much greater conflict that would follow four decades later.'
		},
		{
			type: 'paragraph',
			text: 'The Neues deutsches Flaggen-spiel was produced shortly after the end of that war by the same publisher. It is another dice-throwing gambling game with an even more elaborate board consisting of a 100-space track divided into three areas.'
		},
		{
			type: 'paragraph',
			text: 'Two elements of the board show that it was produced as a celebration of Germany’s victory. First, space 12 shows Elsass-Lothringen (Alsace-Lorraine) as now being a German territory, albeit a penalty space. Secondly, the coat of arms at the centre of the board, the objective space of the game, is that of the newly declared German Empire.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('flaggen-full-board.jpg'),
				alt: 'Full board for Neues deutsches Flaggen-spiel',
				caption: 'Neues deutsches Flaggen-spiel'
			}
		},
		{
			type: 'paragraph',
			text: 'The outer ring consists of 26 squares around the edge of the board, each showing the flag of a German royal realm, princedom, grand duchy or duchy, as well as those of the free cities Lubeck, Bremen and Hamburg. The second ring consists of small squares numbered 27-82 in a variety of colors including light and dark blue, red, green, yellow and white. The final ring is a circle numbered 83-99 which sits at the center of the board flanked on either side by soldiers on horseback and above and below by the rules.'
		},
		{
			type: 'paragraph',
			text: 'Players each start with the same amount of money and put an agreed sum into the pot. They take turns rolling a single die to move along the track. Players need to know the ranks of the various flags: they receive 3 marks from the pot when landing on a royal or duchy space, but must put 3 marks into the pot when landing on a princedom or grand duchy.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('belagerungspiel-krupp-gun.jpg'),
				alt: 'Belagerungsspiel showing French artillery firing Krupp breech-loading siege guns',
				caption: 'Belagerungsspiel with Krupp guns'
			}
		},
		{
			type: 'paragraph',
			text: 'The free city squares have no effect. Landing on the same space as another player also has no effect. Landing on Alsace-Lorraine (12) or on the squares 30, 40, 50, 60 or 70 means going back to square 1 and starting over. A player who runs out of money is out of the game. Whoever gets to the 100 space first collects the pot.'
		},
		{
			type: 'paragraph',
			text: 'Another post-war German game includes a subtle snub. It is a version of the Belagerungsspiel showing French artillery troops firing away at the enemy citadel. It was produced by JW Spear & Sohne in Nurnberg, and was intended for distribution across Europe. The box cover includes the title in German, French, Dutch and Hungarian.'
		},
		{
			type: 'paragraph',
			text: 'However, while the uniforms of the French artillery troops are correct, the troops are shown firing what are clearly Krupp breech-loading siege guns – the very ones recently used against the French in the siege of Paris!'
		},
		{
			type: 'paragraph',
			text: 'France, however, would not be the last European Great Power to face humiliation as the century moved to a close.'
		}
	]
};
