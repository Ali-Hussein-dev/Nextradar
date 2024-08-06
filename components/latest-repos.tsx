import { getLatestRepos } from "@/sanity/lib/getters"
import { RepoCard } from "./repo-card"
import { getRepos, Repo } from "@/lib/get-repos-github"

//======================================
export const LatestRepos = async () => {
  const list = await getLatestRepos()
  const fullList = (await getRepos(list)) as Repo[]
  return (
    <div className="space-y-4">
      {fullList.map((o, i) => (
        <RepoCard key={i} repo={o} />
      ))}{" "}
    </div>
  )
}
