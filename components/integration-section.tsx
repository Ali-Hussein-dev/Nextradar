/* eslint-disable @next/next/no-img-element */
import { getIntegrationsByCategory } from "@/sanity/lib/getters"
import { Button } from "@/components/button"
import { TbExternalLink } from "react-icons/tb"
import { CardWrapper } from "@/components/ui/card-wrapper"

type IntegrationCardProps = {
  name: string
  description: string
  url: string
  logoUrl: string
}

//======================================
export const IntegrationCard = ({
  name,
  description,
  url,
  logoUrl,
}: IntegrationCardProps) => {
  return (
    <CardWrapper>
      <div className="grow">
        <div className="flex-row-start gap-2 mb-2">
          <img
            src={logoUrl}
            alt="logo"
            className="size-8 my-0 rounded-full object-contain"
            loading="lazy"
          />
          <h3 className="my-0 font-bold text-xl">{name}</h3>
        </div>
        <p className="mt-0 text-base dark:text-zinc-300">{description}</p>
      </div>
      <div className="flex-row-between pt-2 border-t border-dashed w-full">
        <div className="flex-row-end grow gap-3">
          {url && (
            <Button
              asChild
              variant={"secondary"}
              className="rounded-lg gap-2 no-underline px-3"
              size="sm"
            >
              <a href={url} target="_blank">
                Visit
                <TbExternalLink size="15" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}

//======================================
export const IntegrationSection = async ({
  categoryId,
}: {
  categoryId: number
}) => {
  const list = (await getIntegrationsByCategory(
    categoryId
  )) as IntegrationCardProps[]
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {list.map((o, i) => (
        <IntegrationCard key={i} {...o} />
      ))}
    </div>
  )
}
