import type { Map } from '@/types/map';
import { writable } from 'svelte/store';

export const map = writable<Map>({
    width: 160,
    height: 144,
    scale: 3,
    surfaceSource: '/maps/1/surfaces.rsk',
    imageSource: '/maps/1/background.webp',
});
