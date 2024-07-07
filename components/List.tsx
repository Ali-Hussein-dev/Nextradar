import { Repo, getByCategory } from "@/lib/repos"
import { RepoCard } from "@/components/repo-card"

//======================================
export const ItemsList = async ({ category }: { category: string }) => {
  const list = (await getByCategory(category)) as Repo[]
  return (
    <div className="space-y-4 mx-auto">
      {list.map((repo, i) => (
        <RepoCard key={i} repo={repo} />
      ))}
    </div>
  )
}
