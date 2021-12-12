import { readFile, writeFile } from 'fs/promises';

import type TiffIfd from 'tiff/lib/tiffIfd';
import type { DataArray } from 'tiff/lib/types';

/* UTILITY */
function getPixelColor(data: DataArray, index: number): number {
    const r = data[4 * index],
        g = data[4 * index + 1],
        b = data[4 * index + 2],
        a = data[4 * index + 3];

    return 1000000 * r + 1000 * g + b;
}

function getSurfaces(page: TiffIfd): Record<number, number> {
    const colors: Record<number, number> = {};

    for (let i = 0; i < page.width; i++) {
        const color = getPixelColor(page.data, i);
        if (color in colors) break;
        colors[color] = i;
    }

    return colors;
}

async function main() {
    const tiff = await import('tiff');
    const file = await readFile('scripts/map.tiff');

    const [page] = tiff.decode(file);
    const { width, height } = page;

    const surfaces = getSurfaces(page);
    const buffer = Buffer.alloc(page.size);

    for (let line = 0; line < height; line++) {
        for (let i = 0; i < width; i++) {
            const pixelIndex = line * width + i;

            const color = getPixelColor(page.data, pixelIndex);
            const colorID = surfaces[color] || 0;

            buffer.writeUInt8(colorID, pixelIndex);
        }
    }

    await writeFile('image.rsk', buffer);
}

main();
