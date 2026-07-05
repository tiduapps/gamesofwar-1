const DEFAULT_MAX_WIDTH = 800;
const DEFAULT_QUALITY = 0.8;

export type CompressOptions = {
	maxWidth?: number;
	quality?: number;
};

type OutputFormat = {
	mime: 'image/webp' | 'image/jpeg' | 'image/png';
	ext: 'webp' | 'jpg' | 'png';
	quality?: number;
};

const OUTPUT_FORMATS: OutputFormat[] = [
	{ mime: 'image/webp', ext: 'webp', quality: DEFAULT_QUALITY },
	{ mime: 'image/jpeg', ext: 'jpg', quality: DEFAULT_QUALITY },
	{ mime: 'image/png', ext: 'png' }
];

function canvasToBlob(
	canvas: HTMLCanvasElement,
	type: string,
	quality?: number
): Promise<Blob | null> {
	return new Promise((resolve) => {
		canvas.toBlob((result) => resolve(result), type, quality);
	});
}

/** Resize and compress an image in the browser (WebP preferred, PNG/JPEG fallback). */
export async function compressImageFile(file: File, options: CompressOptions = {}): Promise<File> {
	const maxWidth = options.maxWidth ?? DEFAULT_MAX_WIDTH;
	const quality = options.quality ?? DEFAULT_QUALITY;

	if (!file.type.startsWith('image/')) {
		throw new Error('Please choose an image file.');
	}

	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, maxWidth / bitmap.width);
	const width = Math.max(1, Math.round(bitmap.width * scale));
	const height = Math.max(1, Math.round(bitmap.height * scale));

	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		bitmap.close();
		throw new Error('Could not process image.');
	}

	ctx.drawImage(bitmap, 0, 0, width, height);
	bitmap.close();

	const formats: OutputFormat[] = OUTPUT_FORMATS.map((format) =>
		format.quality !== undefined ? { ...format, quality } : format
	);

	for (const format of formats) {
		const blob = await canvasToBlob(canvas, format.mime, format.quality);
		if (!blob) continue;

		const baseName = file.name.replace(/\.[^.]+$/i, '') || 'photo';
		return new File([blob], `${baseName}.${format.ext}`, { type: format.mime });
	}

	throw new Error('Image compression failed.');
}

export async function compressFormImage(formData: FormData, fieldName = 'image'): Promise<void> {
	const file = formData.get(fieldName);
	if (!(file instanceof File) || file.size === 0) return;

	const compressed = await compressImageFile(file);
	formData.delete(fieldName);
	formData.set(fieldName, compressed, compressed.name);
}
