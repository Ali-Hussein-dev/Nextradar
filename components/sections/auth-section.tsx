import { Repo } from "@/lib/get-repos-github"
import { RepoCard } from "../repo-card"
import { getReposList } from "@/sanity/lib/getters"

//======================================
export async function AuthSection() {
  const list = (await getReposList({
    category: "Tools",
    tags: ["auth"],
  })) as Repo[]
  return (
    <div className="grid lg:grid-cols-2 gap-4 w-full pt-8">
      {list
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        .map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))}
    </div>
  )
}
