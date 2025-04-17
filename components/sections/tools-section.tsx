import { Repo } from "@/lib/get-repos-github"
import { getReposList, getTagsList, RepoCategory } from "@/sanity/lib/getters"
import { FilterToolsSection } from "@/components/filter-tools-section"
//======================================
export const ToolsSection = async ({ category }: { category: RepoCategory }) => {
  const list = (await getReposList({ category })) as Repo[]
  const tags = await getTagsList({ category })

  const uniqueTags = Array.from(
    new Set(
      tags
        .map((o) => o.tags)
        .flat()
        .filter((tag): tag is string => tag !== undefined && tag !== null),
    ),
  )
  return <FilterToolsSection tags={uniqueTags} list={list} />
}
