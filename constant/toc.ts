import data from './repos.json'

const set = new Set(Object.values(data).map(o => o.category))

export const tocList = Array.from(set).map(c => ({ title: c, depth: 2, url: `#${c}` }))