import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Slugger from 'github-slugger';

const slugger = new Slugger();

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(text: string) {
    return slugger.slug(text);
}