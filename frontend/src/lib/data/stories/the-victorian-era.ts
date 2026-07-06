import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/the-victorian-era/${name}`;

export const theVictorianEra: StoryContent = {
	slug: 'the-victorian-era',
	title: 'The Victorian Era',
	blocks: [
		{
			type: 'paragraph',
			text: 'The succession of Queen Victoria to the British throne in 1837 launched a remarkable era of human achievement. Wars carried on as before, both within Europe and in colonial territory around the world. But the technologies of war evolved dramatically: steamships became armoured; guns at sea and ashore became much more powerful; infantry muzzle-loaders were replaced by breechloaders and supported by rapid-firing weapons; undersea warships were developed, as were airplanes to fight in the skies.'
		},
		{
			type: 'paragraph',
			text: 'The Jeu du Siège de Sébastopol was a mid-century French version of the venerable Belagerungsspiel. It is based on the year-long siege of the major Russian naval base on the Black Sea by the allied forces of Britain, France and Turkey beginning in September 1854.'
		},
		{
			type: 'paragraph',
			text: 'The images show soldiers and weapons not much changed from Napoleonic times. The cannon and infantry weapons are still muzzle-loaders, and the uniforms remain vividly colorful. More advanced printing means the images themselves are crisper, and there is even a metallic bronze sheen on many of the metal objects shown.'
		},
		{
			type: 'paragraph',
			text: 'And behind the scenes during the Crimean War, Florence Nightingale was ushering in a new era of healing rather than killing. Shortly after the war, the International Red Cross was formed in Geneva to ensure proper medical care of battlefield casualties.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('sevastopol-full-board.jpg'),
				alt: 'Full board for Jeu du Siège de Sébastopol',
				caption: 'Jeu du Siège de Sébastopol'
			}
		},
		{
			type: 'paragraph',
			text: 'This untitled French game board, believed to be from Nouveau Jeu de la Guerre, shows medical care playing a significant role both on the battlefield and in game play. The Hospital is shown prominently in the lower left, just above the rules. And a Red Cross can be seen flying over the Ambulance tent at space 81 in the upper right.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('french-19th-c-board.jpg'),
				alt: 'French 19th-century war game board with hospital and ambulance spaces',
				caption: 'Nouveau Jeu de la Guerre'
			}
		},
		{
			type: 'paragraph',
			text: 'Game play was the usual roll and move race to the top of the hill at space 99 with the winner taking the pot. However, many of the spaces are marked with a small H or A. Landing on an A simply sends the player to the Ambulance tent.'
		},
		{
			type: 'paragraph',
			text: 'The H spaces, however, send a player’s piece to the Hospital, where it must remain until a different player is wounded and sent there. At that point, the first player starts rolling again from space 35 and pays a token into a separate Hospital pot. The player unfortunate to be stuck in Hospital when the game ends gets the Hospital pot as a consolation prize.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('hm-squadron-box-top.jpg'),
					alt: 'Box top for H.M. Squadron or Naval Manoeuvres',
					caption: 'H.M. Squadron'
				},
				{
					src: img('hm-squadron-pieces.jpg'),
					alt: 'Ironclad playing pieces from H.M. Squadron',
					caption: 'Ironclad playing pieces'
				},
				{
					src: img('hm-squadron-board-better.jpg'),
					alt: 'Game board for H.M. Squadron showing naval manoeuvres',
					caption: 'H.M. Squadron board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Meanwhile, a technological revolution was underway at sea. The Victorian era saw the end of the age of sail.'
		},
		{
			type: 'paragraph',
			text: 'Steamships proved more efficient at carrying cargo and for military maneuvering. Steam power also made it possible to put armor on wooden ships and then build ships out of metal entirely. Early steam warships of either type were known as ironclads.'
		},
		{
			type: 'paragraph',
			text: 'In this British game, H.M. Squadron or Naval Manoeuvres, the "ironclad" playing pieces do not fight. Rather they "capture" ports simply by passing them by. The game uses a die that provides movement of 0-5 spaces (with a G for Gale counting 0). It also has a colored die that determines which color of space counts for movement. So a "blue 3" means that a ship moves to the 3rd blue space along its track.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('rubicon-label.jpg'),
					alt: 'Label for the Rubicon game',
					caption: 'Rubicon label'
				},
				{
					src: img('rubicon-full-board.jpg'),
					alt: 'Full playing board for Rubicon showing Uganda, Africa and Asia',
					caption: 'Rubicon board'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Much of the fighting between the Great Powers was over territories abroad. Some was about control of colonies that provided important resources for their industries, markets for their manufacturers and tax revenue for their governments. Other conflicts concerned control or influence over key strategic locations. And as sail gave way to steam, the limited range of coal-powered ships made coaling stations vital in otherwise obscure places.'
		},
		{
			type: 'paragraph',
			text: 'The 1893 British game Rubicon, for instance, is loosely based on the activities of the Imperial British East Africa Company. This was set up in 1888 with a royal charter giving rights to develop about 639,000 square kilometres covering what is now Uganda and Kenya.'
		},
		{
			type: 'paragraph',
			text: 'To encourage British settlement and trade, it planned to build a railway from Mombasa inland to Lake Victoria, and shipped 110-ton steamship in kit form to Mombasa for use on the lake. However, this sat in storage for five years because the company could not afford to build an oxcart track that would be more than 600 kilometers long.'
		},
		{
			type: 'paragraph',
			text: 'Conflict then broke out in the interior with both Europeans and indigenous groups. Frederick Lugard, a British mercenary who later become governor of Hong Kong, built a fort on Kampala Hill and came out on top militarily. However, the struggle left the company almost bankrupt. In 1894, the British government dissolved it and took over administration of the territory.'
		},
		{
			type: 'paragraph',
			text: 'The playing board for Rubicon is quite unusual. At the top is a territory labelled Uganda divided into squares. This connects by tracks both to a six-space Fort Lugard and a checkerboard area that takes up the middle of the board.'
		},
		{
			type: 'paragraph',
			text: 'Below this is a green area market Africa, a blue ocean gap, and another green area labelled Asia. The green areas have lines connecting various dot locations, including three port cities on each side of the water.'
		},
		{
			type: 'paragraph',
			text: 'Players start with three tokens in Fort Lugard and nine in Asia. In order for units in Asia to cross to Africa, an African port has to be occupied by a friendly unit. The game therefore involves a rush from Fort Lugard to the African ports, a shuffling of units across from Asia to Africa, and then racing to Uganda. Pieces move one space at a time along a track or in any direction on the checkerboard.'
		},
		{
			type: 'paragraph',
			text: 'Another rather sad example of colonial warfare can be seen in yet another example of the standard Belagerungsspiel board, this one with the French title of Jeu d\'Assaut from publisher Mauclair-Dacier. This one features the ill-fated 200th Regiment of Infantry. The unit was raised in Lyon to take part in a French invasion of Madagascar in 1895.'
		},
		{
			type: 'paragraph',
			text: 'The island was an independent nation at the time, but very friendly with Britain. It may have been poor in resources, but its location off the east coast of Africa offered a superb coaling base for naval units operating in the Indian Ocean.'
		},
		{
			type: 'paragraph',
			text: 'Using the excuse of a broken commercial deal dating to 1855, France first sent a naval expedition in 1883. This bombarded and occupied a couple of towns and issued an ultimatum that was rejected.'
		},
		{
			type: 'paragraph',
			text: 'This led to a full invasion of the island in 1895. The 200th Regiment was one of a dozen new units recruited to get the job done.'
		},
		{
			type: 'paragraph',
			text: 'The 15,000 soldier expedition landed at the port of Majunga on the northwest coast in May. To reach the capital of Antananarivo in the middle of the island, the expedition had to build a road through thick jungle during the rainy season. Madagascar eventually surrendered and was formally annexed in 1896.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('jeu-dassault-madagascar-board.jpg'),
					alt: 'Jeu d\'Assault board themed on the Madagascar campaign',
					caption: 'Jeu d\'Assault, Madagascar'
				},
				{
					src: img('jeu-dassault-mauclair-dacier-1894.jpg'),
					alt: 'Publisher label for Mauclair-Dacier Jeu d\'Assault',
					caption: 'Mauclair-Dacier, 1894'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Of the 15,000 soldiers who arrived, only 25 died from fighting while about 5,000 died of malaria, dysentery and typhoid.'
		},
		{
			type: 'paragraph',
			text: 'The 200th Regiment of Infantry was 400 men strong when it was formed in Lyon. By the time the campaign ended in September, it had ceased to exist as a fighting force.'
		},
		{
			type: 'paragraph',
			text: 'The 200th Regiment may have died to disease, but the game board shows the regimental banner being held high as its soldiers charge across the top of a hill. Malagasy soldiers are shown fleeing before them.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('jeu-dassault-madagascar-200th-regt-flag.jpg'),
				alt: 'Detail showing the 200th Regiment flag on the Jeu d\'Assault board',
				caption: 'The 200th Regiment charges'
			}
		},
		{
			type: 'paragraph',
			text: 'Despite the small size and high human cost of the Madagascar expedition, the game was widely circulated and published in both color and black-and-white versions.'
		},
		{
			type: 'paragraph',
			text: 'The Victorian era also was notable for a dramatic evolution in military uniforms. During the Napoleonic era, uniforms were brightly colored and differentiated to help commanders keep track of the action.'
		},
		{
			type: 'paragraph',
			text: 'But in 1842, Germany took a huge step toward a more functional style of uniform. It did away with the Napoleonic short tunic with tails and tall “shako” hats. In its place, it introduced the Waffenrock, combined with the spiked leather helmet known as the Pickelhaube.'
		},
		{
			type: 'paragraph',
			text: 'The cut of the new German uniform was standardized, but different services and principalities retained distinctive color combinations.'
		},
		{
			type: 'paragraph',
			text: 'The standard Prussian infantry uniform was a dark blue (dunkelblau). Certain specialist units wore different colors: a light blue for dragoons, and a dark green for Jäger (light infantry/scout) units.'
		},
		{
			type: 'paragraph',
			text: 'As this later (c.1914) card game Soldaten-Quartett showed, the change-over still left many variations in color and adornments across services and allied armies.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('soldaten-box-cover.jpg'),
					alt: 'Box cover for Soldaten-Quartett',
					caption: 'Soldaten-Quartett'
				},
				{
					src: img('soldaten-sample-card.jpg'),
					alt: 'Sample card from Soldaten-Quartett showing uniform variations',
					caption: 'Uniform variations'
				},
				{
					src: img('soldaten-6-central-power-sets.jpg'),
					alt: 'Six Central Power uniform sets from Soldaten-Quartett',
					caption: 'Central Power uniforms'
				},
				{
					src: img('soldaten-6-eventual-allies.jpg'),
					alt: 'Six eventual allied uniform sets from Soldaten-Quartett',
					caption: 'Eventual allied uniforms'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'While Scots Highlanders hung on to their traditional kilts, other countries moved their standard uniforms in a similar direction, with shorter jackets that were more functional in the field.'
		},
		{
			type: 'paragraph',
			text: 'All too soon even these colors would disappear except on parade, as camouflage rather than display became key to surviving battles.'
		}
	]
};
