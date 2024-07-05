import sites from '@/constant/sites.json';
import { Octokit } from "@octokit/rest"
import repos from "@/constant/repos.json"
import { cache } from "react"

const octokit = new Octokit()

export type Repo = {
    owner: string
    repoName?: string
    name: string
    description: string
    homepage: string
    category: string
    tags: string[]
    createdBy?: string
    stars?: number
}

const getRepos = cache(async (list: Repo[]) => {
    return await Promise.all(
        list.map(async (repo) => {
            const { owner, repoName } = repo
            const { data } = await octokit.repos.get({ owner, repo: repoName! })
            return {
                ...repo,
                stars: data.stargazers_count as number,
                description: data.description,
                homepage: data.homepage || `https://github.com/${owner}/${repoName}`,
            }
        })
    )
})

const groupByCategory = (repos: Repo[]) => {
    return repos.reduce((acc, repo) => {
        ; (acc[repo.category] = acc[repo.category] || []).push(repo)
        return acc
    }, {} as Record<string, Repo[]>)
}

export const getByCategory = async (category: string) => {
    const list = Object.values(repos) as Repo[]
    const filteredRepos = list.filter((repo: Repo) => repo.category === category) as Repo[]

    const fetchedRepos = await getRepos(filteredRepos as Repo[])
    const filteredSites = sites.filter((site) => site.category === category)
    const reposGroupedByCategory = groupByCategory([...filteredSites, ...fetchedRepos] as Repo[])
    return Object.values(reposGroupedByCategory).flat()

}

