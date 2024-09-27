/* eslint-disable @next/next/no-img-element */
import { CardWrapper } from "@/components/ui/card-wrapper"
import { Button } from "@/components/button"
import { TbExternalLink } from "react-icons/tb"

export type IntegrationCardProps = {
  name: string
  description: string
  url: string
  logoUrl: string
  tags?: string[]
}

//======================================
export const IntegrationCard = ({
  name,
  description,
  url,
  logoUrl,
}: IntegrationCardProps) => {
  return (
    <CardWrapper className="animate-in">
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
        <p className="mt-0 text-base dark:text-zinc-300 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex-row-between pt-2 border-t border-dashed w-full">
        <div className="flex-row-end grow gap-3">
          {url && (
            <Button
              asChild
              variant={"secondary"}
              className="rounded-lg gap-3 no-underline dark:text-green-300 text-green-500"
            >
              <a href={url} target="_blank">
                Visit
                <TbExternalLink size="16" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}
