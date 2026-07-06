import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/combined-aims/${name}`;

export const combinedAims: StoryContent = {
	slug: 'combined-aims',
	title: 'Combined Aims',
	blocks: [
		{
			type: 'paragraph',
			text: 'When the 1659 Treaty of the Pyrenees ended the 24-year Franco-Spanish War, Spain surrendered much of Flanders to France. France promptly began to build forts to make sure it could hang on to what it had won. That job was given to Sebastien Le Prestre de Vauban, a Royal Engineer who had won acclaim during the war both for his expertise and for his personal valor.'
		},
		{
			type: 'paragraph',
			text: 'Vauban’s designs became the dominant model of fortification for more than a century. He also was an innovator in attacking fortifications, coming up with new ways to use siege artillery, military mining, and developing the “siege parallel”. The latter involved digging concentric trenches around a fort, bringing both guns and troops as close as possible to an assault point. (He would not have been amused to see the Viet Minh use his techniques to strangle and defeat the more advanced French force at Dien Bien Phu some three centuries later.) In his later years, he founded the Corps Royal des ingénieurs militaires, and until his death, personally administered its graduation exam.'
		},
		{
			type: 'paragraph',
			text: 'While Vauban was off fortifying newly acquired towns like Dunkirk, a fellow Royal Engineer designed a game to improve the training of students at the Ecolle Royale Militaire, the Royal Military School. In 1663, Gilles Jodelet, sieur de La Boissière, produced Le Jeu des Fortifications.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('fortifications-title.jpg'),
				alt: 'Title page of Le Jeu des Fortifications',
				caption: 'Le Jeu des Fortifications (1663)'
			}
		},
		{
			type: 'paragraph',
			text: 'His engraving created a playing board of 52 numbered rectangular spaces leading to a central objective. Each space contained the name, a description and an illustration of one of the many aspects of Vauban-type fortifications. Players must agree on a monetary stake. They then roll two dice and moved along the track toward the goal. Various spaces along the way inflict penalties or provide bonuses. The first player to reach the goal takes the pot.'
		},
		{
			type: 'paragraph',
			text: 'Each of the spaces is marked with the symbol of an ordinary playing card, and the rules say the game is also designed to allow play of any card game. This implies that owners of the game could cut it up into a deck of playing cards.'
		},
		{
			type: 'paragraph',
			text: 'This may seem odd, but the Bibliotheque nationale de France also has a copy of a later game designed by Jodelet, Le Jeu de la Guerre, that has in fact been carved into a card deck. This game was commissioned by King Louis XIV for the education of his son.'
		},
		{
			type: 'paragraph',
			text: 'It is possible that such a deck could be used not only to play card games, but as a form of flash card or quiz game to reinforce the knowledge printed on each card.'
		},
		{
			type: 'paragraph',
			text: 'Jodelet dedicated his first game to the students of L’Ecolle Royale Militaire. The dedication makes it clear that he saw absolutely no conflict between having fun and preparing for the harsh business of war. Translated from the French, it reads:'
		},
		{
			type: 'paragraph',
			text: '“I am not afraid of distracting you from any of your regular exercises in offering for your amusement a game which contains first principles of the military art…. One does not propose the study of fine arts at the Royal Military School, but the idea of places to attack and to defend, assaults to order and sustain, battles to win and victories to achieve.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('fortifications-dedication.jpg'),
				alt: 'Dedication page of Le Jeu des Fortifications to the Royal Military School',
				caption: 'Dedication to the Royal Military School'
			}
		},
		{
			type: 'paragraph',
			text: 'War is not a game. War is a matter of myriad decisions, large and small, that lead to people dying . But just as war furnishes the basis for many games, games themselves can be used to support war in many ways.'
		},
		{
			type: 'paragraph',
			text: 'Their most obvious use has been in training for war. Training in the tactical and operational arts of war is best done in the field, and armies, navies and air forces regularly conduct exercises that attempt to reflect both the choices and the environment of war. However, games have been used to simulate aspects of warfare for more than two centuries.'
		},
		{
			type: 'paragraph',
			text: 'Making war is complex. Obviously it requires weapons and soldiers with the knowledge and skills to put them to good use. But countries need the industrial base to produce those weapons and an economy strong enough to afford them. Soldiers have to be forced or persuaded to sign up for military service. As war continues, new weapons, new tactics and new strategies need to be developed. Through it all, war requires public support, and both military and civilian morale need reinforcement from time to time. Finally, after the shooting stops, it is time to assess the costs, reflect on what went right and wrong, and consider how to avoid repeating the bloody process.'
		},
		{
			type: 'paragraph',
			text: 'The primary purpose of any game is to enable people to have fun; without that, a publisher would make no sales and quickly go out of business. Yet over the centuries, games have helped to focus players’ attention on war rather than just provide an escape from its harsh realities. They have supported a country’s ability to make war, to recruit and train soldiers; boost industrial production; keep civilians safe and improve morale; celebrate triumphs; and eventually to remember the costs in the hope of avoiding a repeat.'
		}
	]
};
