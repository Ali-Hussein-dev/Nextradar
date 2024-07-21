import Slugger from 'github-slugger';

import latest from "@/constant/latest.json"
import recommended from "@/constant/recommended.json"
import archive2024_6 from "@/constant/archive/2024-6.json"
import { CardProps } from "@/components/resource-card"
import { getReposNames, getSitesNames } from '@/sanity/lib/getters';

const slugger = new Slugger();

const reposList = await getReposNames() as { name: string; category: string }[]
const sites = await getSitesNames() as { name: string; category: string }[]

const articlesPages = {
    "/docs/latest": latest,
    "/docs/archive/2024-6": archive2024_6,
    "/docs/recommended": recommended,
}

const pages = {
    "/docs/learn": sites,
    "/docs/plugin": reposList.filter((o) => o.category === "Plugin"),
    "/docs/tools": reposList.filter((o) => o.category === "Tools"),
    "/docs/real-world-apps": reposList.filter((o) => o.category === "real-world-apps"),
    "/docs/jobs": []
}

type KeyPage = keyof typeof pages
type KeyArticlePage = keyof typeof articlesPages

export type Pathname = KeyPage | KeyArticlePage

export const genCustomToc = (key: Pathname) => {

    // Function to filter and map items based on type
    const isArticleTypePage = key.includes("archive") || key.includes("latest")
    const list = (articlesPages[key as KeyArticlePage] ||
        pages[key as KeyPage]) as CardProps[]
    if (!isArticleTypePage) {
        return list.map((item) => ({
            title: item.name,
            depth: 2,
            url: `#${slugger.slug(item.name)}`,
        }))
    } else {

        const filterAndMapByType = (type: string) =>
            list
                .filter((item) => item.type === type)
                .map((item) => ({
                    title: item.name,
                    depth: 3,
                    url: `#${slugger.slug(item.name)}`,
                }))
        const videos = [
            { title: "Videos", depth: 2, url: "#videos" },
            ...filterAndMapByType("youtube"),
        ]
        const articles = [
            { title: "Articles", depth: 2, url: "#articles" },
            ...filterAndMapByType("article"),
        ]
        return [...videos, ...articles]
    }
}
