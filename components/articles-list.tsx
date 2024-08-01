import { getRecommendedSources, getSources } from "@/sanity/lib/getters"
import { CardProps, ResourceCard } from "./resource-card"

//======================================
export const ArticlesList = async ({
  filterBy = "youtube",
  recommended,
  currentMonth,
}: {
  filterBy: "youtube" | "article"
  recommended: boolean
  currentMonth?: number
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
  const month = currentMonth ?? date.getMonth() + 1

  const list = (await getSources({ year, month })) as CardProps[]
  return (
    <div className="space-y-4">
      {list.length > 0 ? (
        list
          .filter((o) => o.type == filterBy)
          .map((o) => <ResourceCard key={o.name} {...o} />)
      ) : (
        <div className="text-lg dark:text-zinc-500">
          <p>
            No resources have been published for{" "}
            <span className="font-semibold dark:text-zinc-400">
              {month}/{year}
            </span>{" "}
            yet. Please check back later or explore the archive section for
            resources from previous months
          </p>
        </div>
      )}{" "}
    </div>
  )
}
