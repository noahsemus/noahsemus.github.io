import { writable } from 'svelte/store';
import { localStorageStore } from 'fractils';

export const outroEnded = writable(true);
export const indexOutroEnded = writable(false);
export const firstLoad = writable(true);
export const darkMode = localStorageStore('darkMode', true);
