/* eslint-disable @next/next/no-img-element */
import { getIntegrationsByCategory } from "@/sanity/lib/getters"
import { IntegrationCardProps } from "@/components/integration-card"
import { DatabasesList } from "@/components/databases-list"
import categoriesIds from "@/constants/categories.json"
//======================================
export const DatabaseSection = async () => {
  const list = (await getIntegrationsByCategory(
    categoriesIds.database.id
  )) as IntegrationCardProps[]

  return <DatabasesList list={list} />
}
