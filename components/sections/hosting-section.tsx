import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"

//======================================
export async function HostingSection() {
  return <IntegrationSection categoryId={categoriesIds.hosting.id} />
}
