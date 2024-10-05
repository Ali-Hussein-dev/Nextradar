import { getSources } from "@/sanity/lib/getters"

import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"
import { YtDialog } from "@/components/yt-dialog"
import { CardWrapper } from "@/components/ui/card-wrapper"

type CardProps = {
  name: string
  src?: string
  description: string
  type: string
  author: string
  href: string
}
//======================================
export const FeedCard = ({
  name,
  description,
  author,
  href,
  src,
}: CardProps) => {
  return (
    <CardWrapper className="flex-none p-0 sm:px-0 md:px-0 dark:bg-transparent bg-transparent shadow-none">
      <div className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 w-full">
        {/* --------------------------------YT-Embed */}
        {src && <YtDialog src={src} href={href} />}
        <div className="w-full pt-2 grow flex-col-start md:h-full gap-1">
          <div className="h-full">
            <h3 className="font-medium tracking-tight my-0 text-pretty scroll-m-20 dark:text-zinc-300 line-clamp-2 text-lg">
              {name}
            </h3>

            {/* --------------------------------Description-only for articles */}
            <p
              className={cn(
                "mb-1.5 dark:text-zinc-500 text-pretty line-clamp-2 text-zinc-700",
                src ? "hidden md:line-clamp-1" : ""
              )}
            >
              {description}
            </p>
          </div>
          {/* --------------------------------Bottom */}
          <div className="flex-row-between gap-2 w-full border-t border-dashed pt-1 text-sm">
            <span className="dark:text-zinc-500 text-zinc-500">{author}</span>
            {!src && (
              <Button
                variant="ghost"
                asChild
                className="rounded-lg gap-3 no-underline dark:text-green-300 text-green-500"
                size="sm"
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

//======================================
export const FeedList = async () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const list = (await getSources({ year, month })) as CardProps[]
  return (
    <>
      {list
        // .filter((o) => o.type == "youtube")
        .map((o) => (
          <FeedCard key={o.name} {...o} />
        ))}
    </>
  )
}
