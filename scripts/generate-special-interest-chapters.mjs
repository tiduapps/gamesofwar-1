#!/usr/bin/env node
/**
 * Download images and generate Special Interests chapter StoryContent TS files from Wix.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync, spawnSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'frontend/src/lib/data/stories');
const imagesDir = join(root, 'frontend/static/images/stories');
const manifestPath = join(__dirname, '.special-interest-chapter-images.json');

const WIX_BASE = 'https://dspsands.wixsite.com/my-site-2';

const chapters = [
	{
		exportName: 'warAndPieces',
		slug: 'war-and-pieces',
		title: 'War and Pieces',
		wixTitle: 'War and Pieces'
	},
	{
		exportName: 'personalTouches',
		slug: 'personal-touches',
		title: 'Personal Touches',
		wixTitle: 'Personal Touches'
	},
	{
		exportName: 'unevenOdds',
		slug: 'ready-aim-fire',
		title: 'Uneven Odds',
		wixTitle: 'Uneven Odds'
	},
	{
		exportName: 'fogOfWar',
		slug: 'fog-of-war',
		title: 'The Fog of War',
		subtitle: "Hidden Set-Up Games from L'Attaque to Stratego",
		wixTitle: 'The Fog of War'
	},
	{
		exportName: 'shootingBlind',
		slug: 'shooting-blind',
		title: 'Shooting Blind',
		subtitle: 'Battleships and Beyond',
		wixTitle: 'Shooting Blind'
	},
	{
		exportName: 'handToHandCombat',
		slug: 'assault-and-battery',
		title: 'Hand to Hand Combat',
		subtitle: 'Wartime Dexterity Games',
		wixTitle: 'Hand to Hand Combat'
	},
	{
		exportName: 'wargameFirsts',
		slug: 'wargame-firsts',
		title: 'Wargame Firsts',
		wixTitle: 'Wargame Firsts'
	}
];

function normName(s) {
	const decoded = decodeURIComponent(s.replace(/\.jpg$/i, '').replace(/\.jpeg$/i, ''));
	return (
		decoded
			.replace(/&/g, ' and ')
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '') + '.jpg'
	);
}

function extractImages(html, wixTitle) {
	const start = html.indexOf('>' + wixTitle + '<');
	const article = start >= 0 ? html.slice(start) : html;
	const seen = new Set();
	const images = [];

	for (const m of article.matchAll(/(?:alt|quality_auto)\/([^#"?\s]+\.jpg(?:\s2x)?)/gi)) {
		const wixImg = decodeURIComponent(m[1].replace(/ 2x$/i, ''));
		const filename = normName(wixImg);
		if (!seen.has(filename)) {
			seen.add(filename);
			const mediaMatch = html.match(
				new RegExp(
					`wix:image://[^"']*?/(${wixImg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']*)`,
					'i'
				)
			);
			let mediaId = null;
			if (mediaMatch) {
				const idMatch = mediaMatch[0].match(/v1\/([^/]+)\//);
				if (idMatch) mediaId = idMatch[1];
			}
			if (!mediaId) {
				const staticMatch = html.match(
					new RegExp(
						`static\\.wixstatic\\.com/media/([^/]+)/[^"']*${wixImg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
						'i'
					)
				);
				if (staticMatch) mediaId = staticMatch[1];
			}
			if (!mediaId) {
				const broad = html.match(
					new RegExp(
						`static\\.wixstatic\\.com/media/([^/]+)/[^"']*${filename.replace('.jpg', '').slice(0, 12)}`,
						'i'
					)
				);
				if (broad) mediaId = broad[1];
			}
			images.push({ filename, wixImg, mediaId });
		}
	}
	return images;
}

async function downloadImage(mediaId, destPath) {
	const url = `https://static.wixstatic.com/media/${mediaId}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	const buf = Buffer.from(await res.arrayBuffer());
	await writeFile(destPath, buf);
}

async function downloadChapterImages(slug, wixTitle, html) {
	const dir = join(imagesDir, slug);
	mkdir(dir, { recursive: true }, () => {});
	const extracted = extractImages(html, wixTitle);
	const filenames = [];

	for (const { filename, wixImg, mediaId } of extracted) {
		if (!mediaId) {
			const altMatch = [...html.matchAll(/wix:image:\/\/v1\/([^/#]+)\/[^#]*#originWidth/g)].find(
				(m) => html.includes(wixImg) && html.indexOf(m[0]) < html.indexOf(wixImg) + 5000
			);
			throw new Error(`No media ID for ${slug}/${filename} (${wixImg})`);
		}
		const dest = join(dir, filename);
		await downloadImage(mediaId, dest);
		filenames.push(filename);
		console.log(`  ${slug}/${filename}`);
	}
	return filenames;
}

function esc(s) {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function captionFromFilename(filename) {
	return filename
		.replace(/\.jpg$/i, '')
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

function fig(src, alt, caption) {
	const c = caption ? `,\n\t\t\t\tcaption: '${esc(caption)}'` : '';
	return `{\n\t\t\t\tsrc: img('${src}'),\n\t\t\t\talt: '${esc(alt)}'${c}\n\t\t\t}`;
}

function generateBlocksTs(blocks) {
	return blocks
		.map((b) => {
			if (b.type === 'paragraph') {
				return `{\n\t\t\ttype: 'paragraph',\n\t\t\ttext: '${esc(b.text)}'\n\t\t}`;
			}
			if (b.type === 'figure') {
				const cap = captionFromFilename(b.src);
				return `{\n\t\t\ttype: 'figure',\n\t\t\talign: 'right',\n\t\t\tfigure: ${fig(b.src, cap, cap)}\n\t\t}`;
			}
			if (b.type === 'figure-stack') {
				const figs = b.figures
					.map((f) => {
						const cap = captionFromFilename(f);
						return fig(f, cap, cap);
					})
					.join(',\n\t\t\t\t');
				return `{\n\t\t\ttype: 'figure-stack',\n\t\t\talign: 'right',\n\t\t\tfigures: [\n\t\t\t\t${figs}\n\t\t\t]\n\t\t}`;
			}
			throw new Error(`unknown block type: ${b.type}`);
		})
		.join(',\n\t\t');
}

function generate(ch) {
	const subtitleLine = ch.subtitle ? `\n\tsubtitle: '${esc(ch.subtitle)}',` : '';
	return `import type { StoryContent } from './types';

const img = (name: string) => \`/images/stories/${ch.slug}/\${name}\`;

export const ${ch.exportName}: StoryContent = {
\tslug: '${ch.slug}',
\ttitle: '${esc(ch.title)}',${subtitleLine}
\tblocks: [
\t\t${generateBlocksTs(ch.blocks)}
\t]
};
`;
}

function verifyImages(slug, blocks, manifest) {
	const used = new Set();
	for (const b of blocks) {
		if (b.type === 'figure') used.add(b.src);
		if (b.type === 'figure-stack') b.figures.forEach((f) => used.add(f));
	}
	const missing = manifest.filter((n) => !used.has(n));
	const extra = [...used].filter((n) => !manifest.includes(n));
	if (missing.length) console.warn(`${slug}: unused manifest images: ${missing.join(', ')}`);
	if (extra.length) throw new Error(`${slug}: images not in manifest: ${extra.join(', ')}`);
}

function parseWixPage(slug, wixTitle, html, manifest) {
	const result = spawnSync(
		'python3',
		[join(__dirname, 'parse-wix-story.py'), slug, wixTitle, JSON.stringify(manifest)],
		{ input: html, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
	);
	if (result.status !== 0) {
		throw new Error(`parse failed for ${slug}: ${result.stderr}`);
	}
	return JSON.parse(result.stdout.trim());
}

const allImages = {};

async function main() {
for (const ch of chapters) {
	console.log(`Fetching ${ch.slug}...`);
	const html = execSync(`curl -sL "${WIX_BASE}/${ch.slug}"`, {
		encoding: 'utf8',
		maxBuffer: 10 * 1024 * 1024
	});

	const dir = join(imagesDir, ch.slug);
	mkdirSync(dir, { recursive: true });

	const start = html.indexOf('>' + ch.wixTitle + '<');
	const article = start >= 0 ? html.slice(start) : html;
	const seen = new Set();
	const filenames = [];

	for (const m of article.matchAll(
		/static\.wixstatic\.com\/media\/([^/]+)\/[^"']*quality_auto\/([^"']+\.jpg)/gi
	)) {
		const mediaId = m[1];
		const wixImg = decodeURIComponent(m[2].replace(/ 2x$/i, ''));
		const filename = normName(wixImg);
		if (seen.has(filename)) continue;
		seen.add(filename);

		const dest = join(dir, filename);
		await downloadImage(mediaId, dest);
		filenames.push(filename);
		console.log(`  ${ch.slug}/${filename}`);
	}

	allImages[ch.slug] = filenames;
	ch.blocks = parseWixPage(ch.slug, ch.wixTitle, html, filenames);
	verifyImages(ch.slug, ch.blocks, filenames);
	const path = join(outDir, `${ch.slug}.ts`);
	writeFileSync(path, generate(ch));
	console.log(`  Wrote ${path} (${ch.blocks.length} blocks)`);
}

writeFileSync(manifestPath, JSON.stringify(allImages, null, 2));
console.log('Done.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
