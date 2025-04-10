import { cache } from "react"
import { Octokit } from "@octokit/rest"

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
    avatar?: string
    featured?: boolean
}

export const getReposInfo = cache(async (list: { owner: string, repoName: string }[]) => {
    return await Promise.all(
        list.map(async (repo) => {
            const { owner, repoName } = repo
            const { data } = await octokit.repos.get({ owner, repo: repoName! })
            return data
        })
    )
})
