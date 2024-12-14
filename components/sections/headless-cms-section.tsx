import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"

/**
 * Filter options
 * - Open-source
 * - Hosting: Self-hosted, Managed
 * - API-type: REST, GraphQL
 * -
 */
//======================================
export async function HeadlessCmsSection() {
  return <IntegrationSection categoryId={categoriesIds.headlessCMS.id} />
}
