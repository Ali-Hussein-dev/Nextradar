/* eslint-disable @next/next/no-img-element */
import { getIntegrationsByCategory } from "@/sanity/lib/getters"
import { IntegrationCardProps } from "@/components/integration-card"
import { DatabasesList } from "@/components/databases-list"

//======================================
export const DatabaseSection = async ({
  categoryId,
}: {
  categoryId: number
}) => {
  const list = (await getIntegrationsByCategory(
    categoryId
  )) as IntegrationCardProps[]
  return <DatabasesList list={list} />
}
