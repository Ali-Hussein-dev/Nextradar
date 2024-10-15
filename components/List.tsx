import { Repo } from "@/lib/get-repos-github"
import { RepoCard } from "@/components/repo-card"
import { getReposList, getSites, RepoCategory } from "@/sanity/lib/getters"

//======================================
export const ItemsList = async ({
  category,
  recommended = false,
}: {
  category: RepoCategory
  recommended?: boolean
}) => {
  const list =
    category == "Learn"
      ? await getSites()
      : ((await getReposList({ recommended, category })) as Repo[])

  return (
    <div className="grid md:grid-cols-2 gap-4 w-full">
      {list
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        .map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))}
    </div>
  )
}
