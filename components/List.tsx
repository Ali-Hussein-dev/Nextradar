import { Repo } from "@/lib/get-repos-github"
import { RepoCard } from "@/components/repo-card"
import { getReposGitHubByCategory } from "@/lib/get-repos-github"

//======================================
export const ItemsList = async ({ category }: { category: string }) => {
  const list = (await getReposGitHubByCategory(category)) as Repo[]
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {list.map((repo, i) => (
        <RepoCard key={i} repo={repo} />
      ))}
    </div>
  )
}
