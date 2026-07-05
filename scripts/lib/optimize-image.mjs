import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import sharp from 'sharp';

const DEFAULT_MAX_WIDTH = Number.parseInt(process.env.IMAGE_MAX_WIDTH ?? '800', 10);
const DEFAULT_QUALITY = Number.parseInt(process.env.IMAGE_QUALITY ?? '80', 10);

/**
 * Resize and compress an image for web delivery (WebP).
 *
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {{ maxWidth?: number; quality?: number }} [options]
 * @returns {Promise<{ width: number; height: number; byteSize: number }>}
 */
export async function optimizeImage(inputPath, outputPath, options = {}) {
	const maxWidth = options.maxWidth ?? DEFAULT_MAX_WIDTH;
	const quality = options.quality ?? DEFAULT_QUALITY;

	mkdirSync(dirname(outputPath), { recursive: true });

	const pipeline = sharp(inputPath, { failOn: 'none' }).rotate().resize({
		width: maxWidth,
		withoutEnlargement: true,
		fit: 'inside'
	});

	const { data, info } = await pipeline
		.webp({ quality, effort: 4 })
		.toBuffer({ resolveWithObject: true });

	await sharp(data).toFile(outputPath);

	return {
		width: info.width,
		height: info.height,
		byteSize: data.length
	};
}

export function optimizedLocalPath(downloadDir, mediaId) {
	return `${downloadDir}/optimized/${mediaId.replace(/[^a-zA-Z0-9._-]/g, '-')}.webp`;
}
