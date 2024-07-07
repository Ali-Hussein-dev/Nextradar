import { CardProps, ResourceCard } from "./resource-card"

//======================================
export const ArticlesList = ({
  list,
  filterBy = "youtube",
}: {
  list: CardProps[]
  filterBy: "youtube" | "article"
}) => {
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
