/* eslint-disable @next/next/no-img-element */
import { getIntegrationsByCategory } from "@/sanity/lib/getters";
import {
  IntegrationCard,
  IntegrationCardProps,
} from "@/components/integration-card";

//======================================
export const IntegrationSection = async ({
  categoryId,
}: {
  categoryId: number;
}) => {
  const list = (await getIntegrationsByCategory(
    categoryId
  )) as IntegrationCardProps[];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {list
        .sort((a, b) => (b.sponsored ? 1 : 0) - (a.sponsored ? 1 : 0))
        .map((o, i) => (
          <IntegrationCard key={i} {...o} />
        ))}
    </div>
  );
};
