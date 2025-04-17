import { Repo } from "@/lib/get-repos-github"
import { RepoCard } from "@/components/repo-card"
import { getReposList, RepoCategory } from "@/sanity/lib/getters"

//======================================
export const ReposList = async ({ category }: { category: RepoCategory }) => {
  const list = (await getReposList({ category })) as Repo[]

  return (
    <div className="grid lg:grid-cols-2 gap-4 w-full">
      {list
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        .sort((a, b) => (b.stars || 0) - (a.stars || 0))
        .map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))}
    </div>
  )
}
