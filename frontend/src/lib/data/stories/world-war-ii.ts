import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/world-war-ii/${name}`;

export const worldWarIi: StoryContent = {
	slug: 'world-war-ii',
	title: 'World War II',
	blocks: [
		{
			type: 'paragraph',
			text: 'It was almost midnight on July 7, 1937, when Private Shimura Kikujiro failed to return to his post. He was part of a Japanese force that was conducting military exercises near the walled Chinese town of Wanping. A few shots were exchanged for reasons unknown at about 11:00 p.m., and when Private Kikujiro went missing, his commanding officer assumed he must have been taken captive.'
		},
		{
			type: 'paragraph',
			text: 'He sent a message to Ji Kingwen, commander of the Chinese 219th Regiment, 37th Division, 29th Route Army, who was stationed inside the town with about 100 troops. The Japanese demanded permission to enter Wanping to search for their soldier and investigate the cause of the gunfire. At 2:00 a.m. on July 8th, Qin Dechun, acting commander of the 29th Route Army, sent the mayor of Wanping, Wang Lengzhai, to the Japanese camp to negotiate.'
		},
		{
			type: 'paragraph',
			text: 'Both sides called for reinforcements. Even though Private Kikujiro did eventually return to his post, Japanese troops spread out to surround the walled city (now a southwestern suburb of Beijing).'
		},
		{
			type: 'paragraph',
			text: 'At about 4:00 a.m., Chinese reinforcements approaching from the west fired at Japanese troops stationed at the Lugou Bridge outside the city. This elegant 11-arch structure (right) was also known as the Marco Polo Bridge because it was mentioned in the Italian explorer’s writings about his journey to China in the 15th Century. At that point, Mayor Wang gave up his attempts to dissuade the Japanese from entering Wanping and headed home.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('sino-jap-marco-polo-closeup.jpg'),
				alt: 'Close-up illustration of the Marco Polo Bridge from a wartime game',
				caption: 'The Marco Polo Bridge'
			}
		},
		{
			type: 'paragraph',
			text: 'As he re-entered the town, he spotted Japanese troops apparently getting ready for an assault. Five minutes later, defending Chinese troops opened fire. Although they took heavy losses, the 100 troops defending the town managed to hold out until a truce was arranged.'
		},
		{
			type: 'paragraph',
			text: 'The truce did not last long. On July 9, Japanese Garrison Infantry Brigade Commander General Masakazu Kawabe ordered Wanping to be shelled again. Two days later the Japanese general staff ordered another division from Chosen and two brigades from the Kwantung army moved to the area. By July 20, Japanese forces in the region had reached about 180,000 men, and full-scale fighting had broken out by July 25.'
		},
		{
			type: 'paragraph',
			text: 'By the end of the month, Japanese forces had captured all the territory from Beijing to its nearest port, Tianjin. That triggered further negotiations, but on August 9, a Japanese officer was shot in Shanghai. That proved to be the final straw, pushing China and Japan into full-on warfare. From a global perspective, the Marco Polo bridge incident is considered to mark the beginning of that war, and by implication, the real start of WWII.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('sino-japaness-war-full-sheet.jpg'),
				alt: 'Full game sheet for Sino-Japanese War showing battles across China',
				caption: 'Sino-Japanese War (1938)'
			}
		},
		{
			type: 'paragraph',
			text: 'The Marco Polo Bridge Incident is one of several events captured in Sino-Japanese War, a game published in 1938 by Shougakkan. It is shown in space 2, followed by the Japanese entry into Beijing (3), city fighting in Shanghai (4), battle of Dachang (6), the amphibious landing in Hangzhou Bay (7), fighting at the Great Wall (8), assaults on Bautou (9) and Nanjing (11), the landing at Tsingtao (12), occupation of Xiamen (13), battle of Xuzhou (15), city fighting in Jiujiang 16), mountain warfare in Lushan (20), the fall of Canton (22) and finally the triumphant entry into the city of Hankou.'
		},
		{
			type: 'paragraph',
			text: 'Fighting around Shanghai broke out on Aug. 12, 1937, when the Kuomintang army laid siege to the Japanese settlement there. The battle for the city and region would become one of the longest and bloodiest of the war, lasting more than three months. The fight for Dachang was part of a Japanese effort to encircle the Chinese forces in Shanghai in October. The landing in Hangzhou Bay south of Shanghai, on Oct. 12, was a second pincer in that effort. After the Chinese retreated from Shanghai in early November, the Japanese army quickly pressed on to the republic’s capital city of Nanjing.'
		},
		{
			type: 'paragraph',
			text: 'Meanwhile, the Japanese army also pressed west from Beijing, with fighting at the Great Wall on the way to the Inner Mongolian city of Bautou. In addition, they seized the coastal areas around Xiamen and Canton (Guandong) and pressed west beyond Nanjing to battles at Xuzhou and Jiujiang and the occupation of Hankou.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('brave-japanese-army.jpg'),
				alt: 'Game sheet for Gallant Japanese Army showing military capabilities',
				caption: 'Gallant Japanese Army (1938)'
			}
		},
		{
			type: 'paragraph',
			text: 'Another game published around the same time, Gallant Japanese Army, took a more generic approach. Published on Jan. 1, 1938, it shows the wide range of Japanese military capabilities on land. These include the work of scouts (space 1), the army’s Railways and Shipping section (2), naval bombardment (3), a beach assault by the Japanese navy’s Special Landing Forces (4), combat engineers (10), headquarters planners (12), a soldier and dog guarding a railway (14), communications by motorcycle messenger (15), carrier pigeon (16) and telegraph corps (19), cavalry (20), anti-aircraft guns (21), airplanes dogfighting (23), bombing (24) and strafing a train (17), logistics troops (22), and tanks and infantry in the assault (25, 26 and 27).'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('massive-victory-full-sheet.jpg'),
				alt: 'Full game sheet for Imperial Army Massive Victory',
				caption: 'Imperial Army Massive Victory (1939)'
			}
		},
		{
			type: 'paragraph',
			text: 'Imperial Army Massive Victory, published a year later by Shufu no Tomo, repeats some of these events and adds others. Repeats include the entry into Beijing (6), fighting at the Great Wall (11), landing in Hangzhou Bay (21), occupation of Shanghai (30), and the battle of Xuzhou (43).'
		},
		{
			type: 'paragraph',
			text: 'In addition, it records the Tongzhou Mutiny. Shortly after the Marco Polo Bridge incident, troops of the Japanese puppet state East Hopei rebelled when ordered to attack Kuomintang troops outside Beijing; they massacred Japanese civilians in the city instead.'
		},
		{
			type: 'paragraph',
			text: 'The game also references political and diplomatic events. These include the addition of Italy, in November 1937, to the Anti-Comintern Pact signed the year before by Japan and Germany (above left, 28), and the December 1937 establishment of the Provisional Government of the Republic of China, the Japanese puppet regime in charge of northern China (41). The central winning space shows the China-Japan Friendship Treaty – an agreement between Japan and its new Chinese puppets.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
					src: img('massive-victory-anti-comintern.jpg'),
					alt: 'Board space commemorating Italy joining the Anti-Comintern Pact',
					caption: 'Anti-Comintern Pact (space 28)'
				},
				{
					src: img('massive-victory-american-japanese-women.jpg'),
					alt: 'Board space showing Helen Keller with Empress Nagako during her 1937 visit to Japan',
					caption: 'Helen Keller’s visit to Japan (space 35)'
				}
			]
		},
		{
			type: 'paragraph',
			text: 'Especially notable is the space commemorating Helen Keller’s visit to Japan in 1937 (shown above right with Empress Nagako, space 35). Keller’s long-planned visit was to support deaf and blind people in Japan. However, the Japanese government, well aware both of her renown in the United States and her personal friendship with President Franklin Roosevelt, treated her like royalty. She visited 33 cities, including ones in occupied Korea and Manchuria, and spoke to more than a million people. Roosevelt, for his part, sent a personal letter with her in an effort to soothe the increasingly frayed relationship between the two countries.'
		},
		{
			type: 'paragraph',
			text: 'Unfortunately, her visit came just as open warfare was re-igniting in China, to be followed all too soon by even more calamitous events in Europe.'
		}
	]
};
