import { handToHandCombat } from './assault-and-battery';
import { battleOfBritain } from './battle-of-britain';
import { battleOfTheAtlantic } from './battle-of-the-atlantic';
import { blitzkrieg } from './blitzkrieg';
import { fogOfWar } from './fog-of-war';
import { bombingTheReich } from './bombing-the-reich';
import { communistsAndContrasLatinAmerica } from './communists-and-contras-latin-america';
import { communistPlotting } from './communist-plotting';
import { despotsAndDecolonializationAfrica } from './despots-and-decolonialization-africa';
import { heartsAndMindsVietNam } from './hearts-and-minds-viet-nam';
import { jetsComeOfAge } from './jets-come-of-age';
import { liberatingEurope } from './liberating-europe';
import { madAboutWar } from './mad-about-war';
import { missivesAndMissilesTheFalklands } from './missives-and-missiles-the-falklands';
import { religionAndOilTheMiddleEast } from './religion-and-oil-the-middle-east';
import { theRaceForSpace } from './the-race-for-space';
import { warInThePacific } from './war-in-the-pacific';
import { worldsOfIf } from './worlds-of-if';
import type { StoryContent } from './types';
import { combinedAims } from './combined-aims';
import { enthusiasmForWar } from './enthusiasm-for-war';
import { francoPrussianWar } from './franco-prussian-war';
import { girdingForGlobalWar } from './girding-for-global-war';
import { inventingForWar } from './inventing-for-war';
import { peaceForATime } from './peace-for-a-time';
import { personalTouches } from './personal-touches';
import { preparingForWar } from './preparing-for-war';
import { preventingWar } from './preventing-war';
import { roadsToWar } from './roads-to-war';
import { recruitingForWar } from './recruiting-for-war';
import { russoJapaneseWar } from './russo-japanese-war';
import { shootingBlind } from './shooting-blind';
import { sinewsOfWar } from './sinews-of-war';
import { theAgeOfEmpires } from './the-age-of-empires';
import { theBigPicture } from './the-big-picture';
import { theAngloBoerWars } from './the-anglo-boer-wars';
import { theColdWar } from './the-cold-war';
import { theGreatGame } from './the-great-game';
import { theNapoleonicEra } from './the-napoleonic-era';
import { theSpanishAmericanWar } from './the-spanish-american-war';
import { theUSCivilWar } from './the-u-s-civil-war';
import { theVictorianEra } from './the-victorian-era';
import { unevenOdds } from './ready-aim-fire';
import { warAndPieces } from './war-and-pieces';
import { warAndRemembrance } from './war-and-remembrance';
import { wargameFirsts } from './wargame-firsts';
import { warAtSea } from './war-at-sea';
import { warInTheAir } from './war-in-the-air';
import { warInTheTrenches } from './war-in-the-trenches';
import { worldWarI } from './world-war-i';
import { worldWarIi } from './world-war-ii';

const storiesBySlug: Record<string, StoryContent> = {
	'assault-and-battery': handToHandCombat,
	'battle-of-britain': battleOfBritain,
	'battle-of-the-atlantic': battleOfTheAtlantic,
	'blitzkrieg': blitzkrieg,
	'bombing-the-reich': bombingTheReich,
	'communists-and-contras-latin-america': communistsAndContrasLatinAmerica,
	'communist-plotting': communistPlotting,
	'combined-aims': combinedAims,
	'despots-and-decolonialization-africa': despotsAndDecolonializationAfrica,
	'enthusiasm-for-war': enthusiasmForWar,
	'fog-of-war': fogOfWar,
	'franco-prussian-war': francoPrussianWar,
	'girding-for-global-war': girdingForGlobalWar,
	'hearts-and-minds-viet-nam': heartsAndMindsVietNam,
	'inventing-for-war': inventingForWar,
	'jets-come-of-age': jetsComeOfAge,
	'liberating-europe': liberatingEurope,
	'mad-about-war': madAboutWar,
	'missives-and-missiles-the-falklands': missivesAndMissilesTheFalklands,
	'personal-touches': personalTouches,
	'preparing-for-war': preparingForWar,
	'preventing-war': preventingWar,
	'roads-to-war': roadsToWar,
	'russo-japanese-war': russoJapaneseWar,
	'shooting-blind': shootingBlind,
	'sinews-of-war': sinewsOfWar,
	'the-anglo-boer-wars': theAngloBoerWars,
	'the-napoleonic-era': theNapoleonicEra,
	'the-spanish-american-war': theSpanishAmericanWar,
	'the-u-s-civil-war': theUSCivilWar,
	'the-victorian-era': theVictorianEra,
	'war-and-pieces': warAndPieces,
	'war-and-remembrance': warAndRemembrance,
	'the-great-game': theGreatGame,
	'the-age-of-empires': theAgeOfEmpires,
	'the-big-picture': theBigPicture,
	'wargame-firsts': wargameFirsts,
	'war-at-sea': warAtSea,
	'war-in-the-air': warInTheAir,
	'war-in-the-pacific': warInThePacific,
	'war-in-the-trenches': warInTheTrenches,
	'world-war-i': worldWarI,
	'peace-for-a-time': peaceForATime,
	'ready-aim-fire': unevenOdds,
	'recruiting-for-war': recruitingForWar,
	'religion-and-oil-the-middle-east': religionAndOilTheMiddleEast,
	'world-war-ii': worldWarIi,
	'the-cold-war': theColdWar,
	'the-race-for-space': theRaceForSpace,
	'worlds-of-if': worldsOfIf
};

export function getStoryContent(slug: string): StoryContent | null {
	return storiesBySlug[slug] ?? null;
}

export { storyCatalog, getStoriesWithChapters, getStoryListItem, getStoryNav, getStoryParent, getStoryChapters, type StoryListItem, type StoryNav, type StoryWithChapters } from './catalog';
export { type StoryBlock, type StoryContent, type StoryFigure } from './types';
