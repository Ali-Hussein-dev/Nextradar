import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"
import { YtDialog } from "@/components/yt-dialog"
import { CardWrapper } from "@/components/ui/card-wrapper"

export type CardProps = {
  name: string
  src?: string
  description: string
  type: string
  author: string
  href: string
}
//======================================
export const ResourceCard = ({
  name,
  description,
  author,
  href,
  src,
}: CardProps) => {
  // const slug = slugify(name)
  return (
    <CardWrapper className="flex-none p-0 md:px-0">
      <div className="flex flex-col md:flex-row items-start h-full sm:items-start gap-3 w-full py-3 px-4">
        {/* --------------------------------YT-Embed */}
        {src && <YtDialog src={src} href={href} />}
        <div className="w-full pt-2 grow flex-col-start gap-1">
          <div className="h-full">
            <h3 className="font-medium tracking-tight my-0 text-pretty scroll-m-20 dark:text-zinc-300 line-clamp-2">
              {name}
            </h3>

            {/* --------------------------------Description-only for articles */}
            {!src && (
              <p
                className={cn(
                  "mb-0.5 dark:text-zinc-500 text-pretty line-clamp-2 text-zinc-700"
                  // src ? "hidden md:line-clamp-1" : ""
                )}
              >
                {description}
              </p>
            )}
          </div>
          {/* --------------------------------Bottom */}
          <div
            className={cn(
              "flex-row-between gap-2 w-full",
              !src && "border-t border-dashed pt-2 "
            )}
          >
            <span className="dark:text-zinc-500 text-zinc-500">{author}</span>
            {!src && (
              <Button
                variant="secondary"
                asChild
                className="rounded-lg gap-3 no-underline dark:text-green-300 text-green-500"
              >
                <a href={href} target="_blank">
                  Visit
                  <FaExternalLinkAlt size="14" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
