import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"
import { getDocumentCount } from "@/sanity/lib/getters"

//======================================
export async function HostingSection() {
  // const count = await getDocumentCount({
  //   docType: "integration",
  //   filter: `category.id == ${categoriesIds.hosting.id}`,
  // })
  return <IntegrationSection categoryId={categoriesIds.hosting.id} />
}
