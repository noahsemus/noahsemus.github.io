import { writable } from 'svelte/store';

export const outroEnded = writable(true);
export const indexOutroEnded = writable(false);
export const firstLoad = writable(true);
