import { cache } from "react"
import { Octokit } from "@octokit/rest"
import { getSites, getReposList, } from '@/sanity/lib/getters';

const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN as string
})

export type Repo = {
    owner: string
    repoName?: string
    name: string
    description: string
    homepage?: string
    gh?: string
    category: string
    tags: string[]
    createdBy?: string
    stars?: number
}


export const getRepos = cache(async (list: Repo[]) => {
    return await Promise.all(
        list.map(async (repo) => {
            const { owner, repoName } = repo
            const { data } = await octokit.repos.get({ owner, repo: repoName! })
            return {
                ...repo,
                stars: data.stargazers_count as number,
                description: data.description,
                homepage: data.homepage,
                gh: `https://github.com/${repo.owner}/${repo.repoName}`
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

export const getReposGitHubByCategory = async (category: string) => {
    const list = await getReposList()
    const filteredRepos = list.filter((repo: Repo) => repo.category === category) as Repo[]
    const sites = category === "Learn" ? await getSites() : []
    const fetchedRepos = await getRepos(filteredRepos as Repo[])
    const reposGroupedByCategory = groupByCategory([...fetchedRepos, ...sites] as Repo[])
    return Object.values(reposGroupedByCategory).flat()
}