import { getRecommendedSources, getSources } from "@/sanity/lib/getters"
import { CardProps, ResourceCard } from "./resource-card"

//======================================
export const ArticlesList = async ({
  filterBy = "youtube",
  recommended,
}: {
  filterBy: "youtube" | "article"
  recommended: boolean
}) => {
  if (recommended) {
    const list = (await getRecommendedSources()) as CardProps[]
    return (
      <div className="space-y-4">
        {list
          .filter((o) => o.type == filterBy)
          .map((o) => (
            <ResourceCard key={o.name} {...o} />
          ))}{" "}
      </div>
    )
  }
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const list = (await getSources({ year, month })) as CardProps[]
  return (
    <div className="space-y-4">
      {list
        .filter((o) => o.type == filterBy)
        .map((o) => (
          <ResourceCard key={o.name} {...o} />
        ))}{" "}
    </div>
  )
}
