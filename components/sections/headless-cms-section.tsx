import categoriesIds from "@/constants/categories.json";
import { getIntegrationsByCategory } from "@/sanity/lib/getters";
import { IntegrationCardProps } from "@/components/integration-card";
import { FilterableCms } from "@/components/sections/filterable-cms";
/**
 * Filter options
 * - Open-source
 * - Hosting: Self-hosted, Managed
 * - API-type: REST, GraphQL
 * -
 */
//======================================
export async function HeadlessCmsSection() {
  const list = (await getIntegrationsByCategory(
    categoriesIds.headlessCMS.id as number
  )) as IntegrationCardProps[];
  return <FilterableCms list={list} />;
}
