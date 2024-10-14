import { Newsletter2 } from "@/components/newsletter"
import { Search } from "@/components/search"
import { FeedList } from "./feed-list"
import { getSourcesPage } from "@/sanity/lib/getters"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"
import { YtDialog } from "@/components/yt-dialog"
import { CardWrapper } from "@/components/ui/card-wrapper"
import * as React from "react"

export type FeedCardProps = {
  name: string
  src?: string
  description: string
  type: string
  author: string
  href: string
}
//======================================
export const FeedCard = React.memo(
  ({ name, description, author, href, src }: FeedCardProps) => {
    return (
      <CardWrapper className="flex-none p-0 sm:px-0 md:px-0 dark:bg-transparent bg-transparent shadow-none">
        <div className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 w-full">
          {/* --------------------------------YT-Embed */}
          {src && <YtDialog src={src} href={href} />}
          <div className="w-full pt-2 grow flex-col-start md:h-full gap-1">
            <div className="h-full">
              <h3 className="font-semibold tracking-normal my-0 scroll-m-20 dark:text-zinc-400/90 line-clamp-2 text-lg">
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
)

FeedCard.displayName = "FeedCard"
//======================================
export const Feed = async () => {
  const page = await getSourcesPage({ page: 1, pageSize: 10 })
  return (
    <div>
      <div className="grid gap-5 max-w-2xl mx-auto py-6">
        <Search />
        <FeedList initialList={page} />
      </div>
      <Newsletter2 />
    </div>
  )
}
