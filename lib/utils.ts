import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Slugger from 'github-slugger';
import { TypedObject } from 'sanity';

const slugger = new Slugger();

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(text: string) {
    return slugger.slug(text);
}


export function blocksToText(blocks: TypedObject[], opts = {}) {
    const defaults = { nonTextBehavior: 'remove' }
    const options = Object.assign({}, defaults, opts)
    return blocks
        .map(block => {
            if (block._type !== 'block' || !block.children) {
                return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
            }
            // @ts-expect-error - children is an array
            return block.children.map((child: { text: any; }) => child.text).join('')
        })
        .join('\n\n')
}