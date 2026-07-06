#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const STATIC = join(ROOT, 'frontend/static/images/stories');

const chapters = {
	'combined-aims': {
		'fortifications-title.jpg': '71a761_c7b2530bab454d35b04b0cd7ef98675c~mv2.jpg',
		'fortifications-dedication.jpg': '71a761_cc7a3a3e92cb44b4b20937aee6f06b72~mv2.jpg'
	},
	'recruiting-for-war': {
		'be-an-airman-cover.jpg': '71a761_698140677be044658ea5e6e5fa216eff~mv2.jpg',
		'be-an-airman-board.jpg': '71a761_9a37a728fe444304b8b1cb9b7e3afd3c~mv2.jpg',
		'be-an-airman-illustration.jpg': '71a761_d13e6f455b1d4ea6b1a499c3c7bcdf0b~mv2.jpg',
		'welche-box-cover.jpg': '71a761_e5266e597f9049179492c3b10a164b76~mv2.jpg',
		'welche-board.jpg': '71a761_c2a3b303ab8249dc8a78c7d8d7589ff4~mv2.jpg',
		'soldaten-swimming.jpg': '71a761_47ff52a91d6b43638490fcd2322a341e~mv2.jpg',
		'soldaten-food-and-dance.jpg': '71a761_553a3babb3eb4e10912e6359f9a9d10d~mv2.jpg',
		'gloria-envelope-cover.jpg': '71a761_c6c59a7cf34e45649c3b425e49199f6c~mv2.jpg',
		'gloria-uncut-red.jpg': '71a761_64e1b8fe7db94768b5682a319eec8ef9~mv2.jpg',
		'boys-navy-complete.jpg': '71a761_a3625899cc3b4dba9a790928bc56ffa5~mv2.jpg',
		'child-soldiers-thinking.jpg': '71a761_0b0bb6b1ab0c46ae92515dc963a69b82~mv2.jpg',
		'child-signals.jpg': '71a761_7d4cf5efbe7e45c298eb41995b0b6031~mv2.jpg',
		'child-basic.jpg': '71a761_d9acc6ee9bc24ad9a596fa3050e96abb~mv2.jpg',
		'west-point-cadet-box.jpg': '71a761_0eb0cbe620104bddac004e661697a56e~mv2.jpg',
		'west-point-cadet-board.jpg': '71a761_1aa98747539a4d5f9bad49b3c4b1ea76~mv2.jpg',
		'successful-army-career.jpg': '71a761_adfdf1e1737745f1870e5b9948a276de~mv2.jpg',
		'german-through-the-ranks.jpg': '71a761_75282824db184b948ed27bbcb323f9ab~mv2.jpg',
		'soldier-boy-box.jpg': '71a761_86eb5da87da1464094d2a35e3dabaadd~mv2.jpg',
		'soldier-boy-board.jpg': '71a761_3758122ff4b043e393963036b26deafb~mv2.jpg',
		'salute-box.jpg': '71a761_601978c27c514a39b03a04f0344c38ba~mv2.jpg',
		'militaire-backs.jpeg': '71a761_4bef01e14f7748e092f39c78480c0591~mv2.jpeg',
		'militaire-sgtmaj.jpeg': '71a761_ff52257ff1bd4684ad6405ee28e57f21~mv2.jpeg',
		'militaire-rank-cards.jpeg': '71a761_4282f41574444776ad75d2136f1732f2~mv2.jpeg'
	}
};

async function download(chapter, files) {
	const dir = join(STATIC, chapter);
	await mkdir(dir, { recursive: true });
	for (const [name, mediaId] of Object.entries(files)) {
		const url = `https://static.wixstatic.com/media/${mediaId}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
		const buf = Buffer.from(await res.arrayBuffer());
		await writeFile(join(dir, name), buf);
		console.log(`  ${chapter}/${name}`);
	}
}

for (const [chapter, files] of Object.entries(chapters)) {
	console.log(chapter);
	await download(chapter, files);
}
