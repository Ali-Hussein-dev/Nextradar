import { Repo } from "@/lib/get-repos-github"
import { RepoCard } from "@/components/repo-card"
import { getReposGitHubByCategory } from "@/lib/get-repos-github"

//======================================
export const ItemsList = async ({
  category,
  recommended = false,
}: {
  category: string
  recommended?: boolean
}) => {
  const list = (await getReposGitHubByCategory(category, recommended)) as Repo[]
  return (
    <div className="grid md:grid-cols-2 gap-4 w-full">
      {list.map((repo, i) => (
        <RepoCard key={i} repo={repo} />
      ))}
    </div>
  )
}
