import type { StoryContent } from './types';

const img = (name: string) => `/images/stories/the-race-for-space/${name}`;

export const theRaceForSpace: StoryContent = {
	slug: 'the-race-for-space',
	title: 'The Race for Space',
	blocks: [
		{
			type: 'paragraph',
			text: 'On Oct. 4, 1957, the Soviet Union kicked off the public space race when it launched the world’s first satellite, Sputik I. This prompted the launch of a much more vigorous American space program, and at least three games bearing its name.'
		},
		{
			type: 'paragraph',
			text: 'Mit Sputnik in den Weltraum became the German title for the French game Anno 2000 (a detail of the box art is shown below). This game was all mid-century science fiction art and optimism. The rules begin: "According to the latest scientific research, it will be possible at the latest in about 50 years, to voyage to the Moon, to other planets and even to stars much further away."'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('anno-cover-art-closeup.jpg'),
				alt: 'Anno Cover Art Closeup',
				caption: 'Anno Cover Art Closeup'
			}
		},
		{
			type: 'paragraph',
			text: 'Underneath the beautiful artwork, it is a roll-and-move game, but with one twist. Up to four players try to move their rocket ships from Earth around the board and home. Another player controls the fearsome Robot, which starts somewhere on a separate network of lines between stars.'
		},
		{
			type: 'paragraph',
			text: 'The Robot network and player track intersect at various points, and if the Robot can land exactly on top of a rocket, that player is out of the game. If all rocket ships are killed, the Robot player wins.'
		},
		{
			type: 'paragraph',
			text: 'Mit den Sputniks um die Erde was also published in Germany, by SPIKA in 1958. It was a roll and move game, with plastic rockets or satellites as playing pieces. However, in addition to the orbital movement tracks, three early television sets circle the globe. What appears on each TV screen is driven by cardboard wheels mounted on the rear of the board that are rotated each turn.'
		},
		{
			type: 'paragraph',
			text: 'The USSR waited until 1961 to publish its own game about socialist satellites in space. Nash Sputnik (Our Sputnik) had cover art that resembled the more recent Sputnik 3 satellite. It is a dexterity game.'
		},
		{
			type: 'paragraph',
			text: 'There is a spinning wheel mounted on the playing board. Players toss “satellites” (small balls), and gain points based on where the balls settle in the holes spaced around the wheel.'
		},
		{
			type: 'paragraph',
			text: 'Having launched the first satellite, the Soviet Union initially kept its lead in the space race. Yuri Gagarin became the first human to orbit the Earth on April 12, 1961. His Vostok I craft launched from the Baikonur Cosmodrome at 9:07 a.m. Moscow time.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('kosmonauti-sputnik.jpg'),
				alt: 'Kosmonauti Sputnik',
				caption: 'Kosmonauti Sputnik'
			}
		},
		{
			type: 'paragraph',
			text: 'His flight lasted all of 108 minutes, and he completed only a single orbit. He did not actually return to Earth in his capsule. As planned, he ejected from the capsule at an altitude of 7,000 meters and landed by parachute. His brief flight won him a promotion to major while still in orbit and recognition as a Hero of the Soviet Union. He became an international star, visiting 30 different countries in the year after his flight. President John F. Kennedy pointedly refused to let him visit the United States.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('kosmonauti-box-cover.jpg'),
				alt: 'Kosmonauti Box Cover',
				caption: 'Kosmonauti Box Cover'
			},
				{
				src: img('kosmonauti-board-a.jpg'),
				alt: 'Kosmonauti Board A',
				caption: 'Kosmonauti Board A'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Gagarin’s colleague Gherman Titov is all but unknown in comparison, and yet compiled quite a few firsts of his own. Gagarin’s job was to get to space and back. Titov’s was to prove that humans could stay in space. Both men are featured on the cover of this Bulgarian edition of the Soviet game Kosmonavti. Russians used the term cosmonauts for people who ventured into space rather than the American word astronaut.'
		},
		{
			type: 'paragraph',
			text: 'Titov’s flight in Vostok 2, launched on Aug. 6, 1961, made him the second human in space. But he was the first to complete multiple orbits, 17 of them. He was the first to actually pilot a spacecraft and to spend more than a day in space (25.3 hours). He was the first to sleep in space. He was the first person to take both still photographs and movies from space. And as weightlessness had its way with his body, he became the first person to vomit in space. Still shy of his 26th birthday, he remains the youngest person ever to orbit the earth.'
		},
		{
			type: 'paragraph',
			text: 'Gagarin got most of the fame, but died young. He was flying a Mig-17 training jet in March 1968 with instructor Vladimir Seryogin when all contact was suddenly lost. The wreckage at the crash site was so complete that there were no identifiable bodies. Titov, on the other hand, retired as a Colonel-General in 1992, and died of a heart attack in his sauna at the age of 65.'
		},
		{
			type: 'paragraph',
			text: 'There is nothing spectacular about the game play, which just involves rolling dice to move. However, players must deal with three phases of space flight, the launch from Earth into orbit, the shift onto paths that will take them to the moon and other planets, and then orbiting and landing on those other bodies before making the return trip. The board art includes fairly accurate representation of spacewalking and a Sputnik image, but adds futuristic frills in terms of spaceship and space station design.'
		},
		{
			type: 'paragraph',
			text: 'A later Soviet trivia game, Vsegda Gotov! (Всегда Готов or Always Ready), includes a card that covers the full story of Soviet space achievements from the 19th century through the Soyuz space station.'
		},
		{
			type: 'paragraph',
			text: 'Two individuals are featured. The first is Konstantin Tsiolkovsky - the original Russian rocket scientist. In 1897, he came up with the formula linking a rocket\'s change in speed to its exhaust velocity and change in mass.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('vsegda-box.jpg'),
				alt: 'Vsegda Box',
				caption: 'Vsegda Box'
			}
		},
		{
			type: 'paragraph',
			text: 'His 1903 paper Exploration of Outer Space by Means of Rocket Devices calculated the velocity needed to reach Earth orbit and said it could be achieved with a multistage rocket powered by liquid oxygen and hydrogen.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('vsegda-space-card.jpg'),
				alt: 'Vsegda Space Card',
				caption: 'Vsegda Space Card'
			}
		},
		{
			type: 'paragraph',
			text: 'The second man shown is Sergei Korolev, who survived the gulag and then developed Soviet intercontinental ballistic missiles and supervised the Sputnik and Vostok projects including Gagarin\'s flight.'
		},
		{
			type: 'paragraph',
			text: 'Other spaces on the card show Laika, the dog who became the first living creature to reach orbit (and to die there) and a sequence of Soviet spacecraft including the first Sputnik, Luna-3, which took the first photos of the dark side of the moon, the Venera-3 probe to Venus, and Lunokhod-1, the unmanned rover that explored the lunar surface in 1970.'
		},
		{
			type: 'paragraph',
			text: 'Also shown are the first spacewalk by Alexi Leonov in March 1965, and the Apollo-Soyuz link-up in 1975 to form the first space station.'
		},
		{
			type: 'paragraph',
			text: 'Early American space games tended to mix fact and science-fiction art and themes like imminent flights around the solar system. Games that reflected actual progress by the U.S. space program did not appear until the second half of the 1960s, by which time the Americans were aiming to reach the moon.'
		},
		{
			type: 'paragraph',
			text: 'The most comprehensive view of the American space program can be found in the 1967 game Count Down. The cover of the box shows the launch of a Saturn V rocket, and one side bears a photograph of the first three Americans in space: Virgil “Gus” Grissom, John Glenn and Alan Shepard.'
		},
		{
			type: 'paragraph',
			text: 'Shepard had been scheduled to be the first man in space on April 26, 1960, but his flight was postponed six times. By the time he finally launched in Freedom 7 on May 5, 1961, Yuri Gagarin had already made his first orbit. Shepard became the first American in space, but did not even make it to orbit.'
		},
		{
			type: 'paragraph',
			text: 'He made another space flight 10 years later as commander of the Apollo 14 moon landing. That made him the fifth man on the moon; at age 47, the oldest to walk on the moon; and the only Mercury program astronaut to make it to the moon. He was also the first moon golfer. He attached a Wilson six-iron head to the handle of a lunar scoop. Swinging one handed, he hit two golf balls, the second one going “miles and miles and miles”.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('count-box-top.jpg'),
				alt: 'Count Box Top',
				caption: 'Count Box Top'
			}
		},
		{
			type: 'paragraph',
			text: 'Gus Grissom in Liberty Bell 7 was pilot for the second suborbital flight on July 21, 1961. He almost died. After splashing down in the Atlantic Ocean, the capsule\'s emergency bolts unexpectedly blew off the hatch. As water flooded into the capsule, Grissom made it out into the ocean. The capsule sank, and Grissom’s space suit began taking on water through an open air vent. He managed to stay afloat just long enough for the rescue helicopter to reach him. He became the first American to get to space twice when he commanded the Gemini 3 mission on March 23, 1965.'
		},
		{
			type: 'paragraph',
			text: 'John Glenn became the first American to orbit the earth on Feb. 20, 1962. That made him America’s answer to Gagarin as a celebrity. But a few months later, he quit the space program to run for public office. He eventually served four terms as a U.S. Senator. He then capped his career by returning to space in 1998 in the space shuttle Discovery, making him the oldest man to reach space at 77.'
		},
		{
			type: 'paragraph',
			text: 'Astronauts are also featured on some of the game\'s cards. Grissom\'s card is shown here beside that of L. Gordon Cooper Jr., who piloted the last of the Mercury flights in 1963. That flight made him the first American to spend an entire day in space, the first to sleep in space and the last American to orbit solo.'
		},
		{
			type: 'paragraph',
			text: 'Cooper went on to become the first astronaut to make a second orbital flight when he commanded Gemini 5, setting a space endurance record of almost eight days and 3.3 million miles travelled.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('count-astronauts.jpg'),
				alt: 'Count Astronauts',
				caption: 'Count Astronauts'
			}
		},
		{
			type: 'paragraph',
			text: 'Count Down is explicit in its aims beyond being a good game. “Count Down is designed to acquaint young and old with the American project Apollo – Man’s first flight to the Moon. Simplified and limited to essentials, the game communicates understanding of this complex and costly undertaking – the most daring adventure Mankind has ever undertaken. We hope that Count Down will offer not only many hours of play – fun and stimulating competition, but will also contribute to your understanding of the complexity and challenge in Man’s planned travel to the planets.”'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('count-contents.jpg'),
				alt: 'Count Contents',
				caption: 'Count Contents'
			}
		},
		{
			type: 'paragraph',
			text: 'The rules open with a touching tribute. In a box with a thick black border, it says: “This game is dedicated to those men who have given so much of themselves to launch our civilization into outer space – and, especially, to the brave few who have sacrificed their lives.”'
		},
		{
			type: 'paragraph',
			text: 'While the space race was a peaceful contest between the superpowers, it was not without casualties on both sides.'
		},
		{
			type: 'paragraph',
			text: 'The launch of the first Apollo mission had been scheduled for Feb. 21, 1967, but the craft never made it into space. During a test run of the launch on Jan. 27, a fire broke out in the capsule. Gus Grissom, Ed White and Roger Chaffee were all suffocated by the smoke. They became the first fatalities of the American space program.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('count-board-2.jpg'),
				alt: 'Count Board 2',
				caption: 'Count Board 2'
			}
		},
		{
			type: 'paragraph',
			text: 'Count Down captures the details and difficulty of reaching the moon in several ways. Players move by rolling dice, and must collect cards satisfying the nine conditions for a successful launch on their “control pad” as well as all four components of a Saturn rocket (Stages I, II, III and Space Capsule).'
		},
		{
			type: 'paragraph',
			text: 'Only then can they attempt a launch, where they roll the pair of dice three times and must reach a total of 25 or more. (They may try again on the following turn.)'
		},
		{
			type: 'paragraph',
			text: 'The components are not free. Each card has a cost measured in Mio (millions of dollars). These range from 30 Mio for a rocket transport to 350 Mio for a Space Station.'
		},
		{
			type: 'paragraph',
			text: 'The rocket parts also cost money: 200 Mio for the first stage; 100 Mio each for the second and third stages; and 300 Mio for the capsule. There is a Saturn V Rocket space on the board that allows a player to buy all four parts at once for 500 Mio.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('count-photo-card-examples.jpg'),
				alt: 'Count Photo Card Examples',
				caption: 'Count Photo Card Examples'
			}
		},
		{
			type: 'paragraph',
			text: 'The 36 cards have either detailed artwork or actual photographs of the mission elements they portray. They include individual photos of astronauts Gus Grissom, M. Scott Carpenter and L. Gordon Cooper, Jr., as well as a group portrait of Grissom with John Young, Walter M. Schirra and Thomas P. Stafford.'
		},
		{
			type: 'paragraph',
			text: 'Not all players have the same requirements. They all require a Control Center, Astronaut, Space Probe, Successful Launch, Moon Landing and Return to Earth.'
		},
		{
			type: 'paragraph',
			text: 'The remaining three requirements vary by player. These may include Fuel, Rocket Transport, Radiotelescope, Launch Site, Weightlessness, Manned Space Flight, Rendezvous in Space and even a Space Station.'
		},
		{
			type: 'paragraph',
			text: 'The total cost of the cards for each player is highest for the player who gets to move first, and drops along with the turn order. Player 1 must accumulate cards worth 1330 Mio. That drops to 1180 Mio for Player 2, 1100 for Player 3, and 1060 Mio for Player 4.'
		},
		{
			type: 'paragraph',
			text: 'The backs of each card have a narrative about that aspect of the Apollo program. Some offer detailed information. The back of one Control Center card, for instance, notes that the test start of an Atlas rocket includes 36,000 checks on an 80-page checklist, including whether the measuring instrument recorders have ink. Another card credits Russian Alexej Leonow as the first man to move freely in space on Mar. 18, 1965, and notes that he was followed three months later by Edward H. White. “White left the Gemini IV 110 miles above the Pacific and travelled almost 6,000 miles during his 20-minute ‘walk’.”'
		},
		{
			type: 'paragraph',
			text: 'The four Space Probe cards all reference space-program firsts:'
		},
		{
			type: 'paragraph',
			text: 'Mariner II. Launched on Aug. 27, 1962, it was the first robotic space probe to make a successful rendezvous with another planet. It reached Venus on Dec. 14.​​'
		},
		{
			type: 'paragraph',
			text: 'Ranger VII. This was the first U.S. space probe to transmit close images of the surface of the Moon. It sent back more than 4,300 images during the last 17 minutes of its flight in July 1964. It then ploughed into the lunar surface at 1.62 miles per second.'
		},
		{
			type: 'paragraph',
			text: 'Surveyor/Luna 9. Soviet probe Luna 9 was the first spacecraft to achieve a soft landing on the moon on Feb. 3, 1966. It was followed by seven U.S. Surveyor craft, of which 5 landed safely between June 1966 and January 1968.'
		},
		{
			type: 'paragraph',
			text: 'Luna 10. This Soviet craft was the first satellite to successfully orbit the moon. It was battery powered and sent back transmissions through 460 lunar orbits between Apr. 3 and May 30, 1966.'
		},
		{
			type: 'paragraph',
			text: 'The Cold War element of the space race is not forgotten in this game.'
		},
		{
			type: 'figure-stack',
			align: 'right',
			figures: [
				{
				src: img('count-info-on-photo-backs.jpg'),
				alt: 'Count Info On Photo Backs',
				caption: 'Count Info On Photo Backs'
			},
				{
				src: img('count-chance-spy-and-sabotage.jpg'),
				alt: 'Count Chance Spy And Sabotage',
				caption: 'Count Chance Spy And Sabotage'
			}
			]
		},
		{
			type: 'paragraph',
			text: 'Players may also obtain Espionage and Sabotage cards. Espionage cards allow a player to get one or more cards for free. The Sabotage cards allow a player to destroy one or more parts of an opponent’s rocket.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('blast-off-box-cover.jpg'),
				alt: 'Blast Off Box Cover',
				caption: 'Blast Off Box Cover'
			}
		},
		{
			type: 'paragraph',
			text: 'In Britain, John Waddington Ltd. managed to cash in on the successful moon landing with Blast-Off! in 1969. The box artwork shows all the elements of the lunar landing craft as well as astronauts on the moon. The rules include an actual photograph of Tranquility Base – taken by Neil Armstrong and showing Buzz Aldrin – on July 21. The game must have been rushed out in time for the Christmas market.'
		},
		{
			type: 'paragraph',
			text: 'It is less about leaving earth than about orbital movement once in space. Players first launch a satellite and then a capsule. After the two rendezvous to make a spaceship, they head for the moon and then on to each other planet in the solar system.'
		},
		{
			type: 'figure',
			align: 'right',
			figure: {
				src: img('blast-off-tranquility-photo.jpg'),
				alt: 'Blast Off Tranquility Photo',
				caption: 'Blast Off Tranquility Photo'
			}
		},
		{
			type: 'paragraph',
			text: 'While the rules include a photo of Tranquility Base that matches the box cover art, game play departs from both physical and historical facts.'
		},
		{
			type: 'paragraph',
			text: 'The plastic moon piece orbits the earth, moving each turn. The planets are fixed on the board, but are set up as orbiting the earth rather than the sun. Each planetary trip starts from the moon and requires moving to the correct orbit as well as to the planet’s location by an exact move.'
		},
		{
			type: 'paragraph',
			text: 'The game therefore challenges players to understand the physics of orbital movement. It also introduces limited fuel, which is used to modify the die rolls in order reach a planet.'
		},
		{
			type: 'paragraph',
			text: 'While the space race was a peaceful contest for prestige and knowledge, Cold War military games in the Soviet Union focused on courage and equipment for dealing death on the surface and in the skies.'
		}
	]
};
