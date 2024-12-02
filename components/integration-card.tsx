/* eslint-disable @next/next/no-img-element */
import { CardWrapper } from "@/components/ui/card-wrapper"
import { Button } from "@/components/button"
import { TbExternalLink } from "react-icons/tb"
import { FaGithub } from "react-icons/fa"

export type IntegrationCardProps = {
  name: string
  description: string
  url: string
  exampleUrl: string
  logoUrl: string
  tags?: string[]
}

//======================================
export const IntegrationCard = ({
  name,
  description,
  url,
  logoUrl,
  exampleUrl,
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
          <h2 className="my-0 font-bold text-xl">{name}</h2>
        </div>
        <p className="mb-2 line-clamp-3">{description}</p>
      </div>
      <div className="flex-row-between pt-2 border-t border-dashed w-full">
        <div className="flex-row-end grow gap-3">
          {exampleUrl && (
            <Button
              asChild
              variant={"outline"}
              size="sm"
              className="rounded-lg gap-3 no-underline"
            >
              <a href={url} rel="nofollow">
                <FaGithub />
                Starter
              </a>
            </Button>
          )}
          {url && (
            <Button
              asChild
              variant={"secondary"}
              size="sm"
              className="rounded-lg gap-3 no-underline dark:text-green-300 text-green-500"
            >
              <a href={url} rel="nofollow">
                <TbExternalLink size="16" />
                Visit
              </a>
            </Button>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}
