import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/peace-for-a-time/${name}`;

export const peaceForATime: StoryContent = {
	slug: 'peace-for-a-time',
	title: 'Peace for a Time',
	blocks: [
		{
			type: 'paragraph',
			text: 'The end of the Great War did not mark the end of either the fighting or the dying, but it did usher in a new era of optimism.'
		},
		{
			type: 'paragraph',
			text: 'In Russia, the end of war with Germany launched the beginning of war with itself. Vladimir Lenin’s Red armies fought for six years with the Whites, a coalition of monarchists, capitalists and assorted other forms of socialism and democracy. Regional militias known as Green armies and an anarchist Black Army fought against all governments. Foreign countries also got into the act. At one time or another, Red armies were opposed by troops from Britain (in both Northern Russia and Central Asia), France (in Odessa), and Japan (in the Far East). The Second Polish Republic also joined the fighting along with Latvian forces. By 1923, at least 7 million people had died, most of them civilians.'
		},
		{
			type: 'paragraph',
			text: 'Around the world, disease took over from combat as the lead horseman of the apocalypse. Between 1918 and 1920, the H1N1 influenza pandemic known as the Spanish Flu infected half a billion people and killed between 50-million and 100-million, between three and five percent of the world’s population at the time.'
		},
		{
			type: 'paragraph',
			text: 'In Japan, 1923 saw the Great Kanto Earthquake. A magnitude 7.9 earthquake hit near Tokyo. This smashed the city and surrounding areas and started massive fires. This was followed within minutes by a 10-metre high tsunami. And all this happened while a typhoon whipped up winds in the region fanning flames into firestorms. More than 100,000 people died, and almost 2 million were left homeless.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kanto-earthquake.jpg'),
				alt: 'Illustration of devastation from the 1923 Great Kanto Earthquake',
				caption: 'The Great Kanto Earthquake, 1923'
			}
		},
		{
			type: 'paragraph',
			text: 'The latter event was captured in the game World Culture, published just three months later by the magazine Shounen (The Boys). Designed by Takao Abe with art by Tokutaro Matsuno, the game was issued to celebrate the magazine’s 20th anniversary. It illustrates significant events year by year from 1903 through 1923.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('japan-post-war-events.jpg'),
				alt: 'Game board for World Culture showing events from 1903 through 1923',
				caption: 'World Culture (1923)'
			}
		},
		{
			type: 'paragraph',
			text: 'Military events include the 1905 Battle of the Sea of Japan, better known as the Battle of Tsushima Straits, where the Japanese Navy obliterated the Russian fleet and effectively ended the Russo-Japanese war of 1904-05.'
		},
		{
			type: 'paragraph',
			text: 'The game marks Japan’s formal annexation of Korea in August, 1909, as well as the assassination two months later of Ito Hirobumi. Ito was killed by An Jung-geun, a Korean-independence activist. Ito had directed the drafting of Japan’s Meiji constitution, which turned the country into a constitutional monarchy. He served four times as Prime Minister and as Resident-General of Korea in the years leading up to annexation.'
		},
		{
			type: 'paragraph',
			text: 'The game records several events through the years of the Great War: the outbreak of war in Europe in 1914; the German U-boat campaign in 1915; the Battle of Jutland in 1916, the death of Field Marshal H.H. Kitchener when the cruiser carrying him to Russia on a diplomatic errand hit a mine; the entry of the United States into the war in 1917; and of course the Armistice in 1918 together with the abdication of Kaiser Wilhelm II.'
		},
		{
			type: 'paragraph',
			text: 'However, economic events get equal billing: the Tokyo Industrial Fair of 1907; the first 12-hour Zeppelin flight in 1908; trade treaties between Japan and Germany, Norway and Switzerland in 1910; the Taisho Expo and opening of the Panama Canal in 1912; and the first non-stop transatlantic airplane flight in 1919.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('alcock-flight.jpg'),
				alt: 'Board illustration of the first non-stop transatlantic flight',
				caption: 'Alcock and Brown’s transatlantic flight'
			}
		},
		{
			type: 'paragraph',
			text: 'British aviators John Alcock and Arthur Brown actually used a converted Vimy bomber for their flight, not the single-seater biplane shown in the game. However, the Vimy did have an open cockpit, and Alcock and Brown had to survive the breakdown of their electricity generator and intercom, the failure of their heating system, and extended periods of flight through thick fog, snow and rain. They made it from St. John’s, Newfoundland to County Galway in Ireland in just under 16 hours.'
		},
		{
			type: 'paragraph',
			text: 'The game gives much attention to royal events in Japan and the United Kingdom. The game highlights the death of Emperor Meiji and the accession of Emperor Konji in 1912, as well as the death of Edward VII and the accession of George V in Great Britain.'
		},
		{
			type: 'paragraph',
			text: 'Also recorded are several royal visits in both directions, notably the European tour by Crown Prince (and WWII emperor) Hirohito in 1921 and the return trip to Japan by British Crown Prince (and later love-struck king) Edward in 1922.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('japan-post-war-centre-coronation.jpg'),
				alt: 'Centre of the World Culture game board showing coronation imagery',
				caption: 'Royal events at the centre of the board'
			}
		},
		{
			type: 'paragraph',
			text: 'The most potent omen of future military slaughter, however, is the first event celebrated in the game: Marie Curie’s discovery of radium in 1904. This was a notable piece of peaceful research. However, like many breakthroughs, it would prove to have important military implications – leading ultimately to the atomic bombing of Hiroshima and Nagasaki in 1945.'
		}
	]
};
