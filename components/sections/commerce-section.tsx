import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"

//======================================
export function CommerceSection() {
  return <IntegrationSection categoryId={categoriesIds.commerce.id} />
}
