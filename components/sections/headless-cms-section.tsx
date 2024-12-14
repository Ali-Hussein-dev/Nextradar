import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"
import { getDocumentCount } from "@/sanity/lib/getters"

/**
 * Filter options
 * - Open-source
 * - Hosting: Self-hosted, Managed
 * - API-type: REST, GraphQL
 * - 
 */
//======================================
export async function HeadlessCmsSection() {
  const count = await getDocumentCount({
    docType: "integration",
    filter: `category.id == ${categoriesIds.headlessCMS.id}`,
  })
  return <IntegrationSection categoryId={categoriesIds.headlessCMS.id} />
    
}
