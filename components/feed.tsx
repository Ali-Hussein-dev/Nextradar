import { Search } from "@/components/search"
import { FeedList } from "@/components/feed-list"
import { getPageHeader, getSourcesPage } from "@/sanity/lib/getters"
import { MdOutlineArrowOutward } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { YtDialog } from "@/components/yt-dialog"
import * as React from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export type FeedCardProps = {
  name: string
  src?: string
  description: string
  type: string
  author: string
  href: string
  sponsored: boolean
  rel: string
}
//======================================
export const FeedCard = ({
  name,
  description,
  author,
  href,
  sponsored,
  rel = "nofollow",
}: FeedCardProps) => {
  const isYoutube = href.includes("youtube")
  return (
    <Card className="shadow-none border-none">
      <CardHeader className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 w-full p-0 sm:p-0">
        {/* --------------------------------YT-Embed */}
        {isYoutube && <YtDialog href={href} />}
        <div className="w-full pt-2 grow flex-col-start md:h-full gap-1.5 py-2">
          <CardTitle className="flex justify-between items-start w-full gap-5 dark:text-zinc-300 text-zinc-700">
            <div className="flex flex-col gap-1">
              {isYoutube ? (
                <span className="line-clamp-1">{name}</span>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel={rel}
                  className="no-underline hover:underline underline-offset-2 transition-all duration-500"
                >
                  <span className="line-clamp-1">{name}</span>
                </a>
              )}
              {isYoutube && (
                <span className="font-light text-sm text-muted-foreground/60">{author}</span>
              )}
            </div>
            {sponsored && <span className="text-xs font-light">Sponsored</span>}
          </CardTitle>
          {!isYoutube && (
            <CardDescription className="dark:text-zinc-500 text-zinc-700 mb-1.5">
              <p className="line-clamp-2">{description}</p>
              <span className="font-light text-sm text-muted-foreground/60 pt-2">{author}</span>
            </CardDescription>
          )}
        </div>
      </CardHeader>
      {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
      {/* {!isYoutube && (
        <CardFooter className="flex justify-end items-center gap-2 w-full text-sm pt-0 p-0 sm:pb-4 sm:px-4">
          <Button
            variant="outline"
            asChild
            className="gap-1.5 no-underline bg-transparent"
            size="sm"
          >
            <a href={href} target="_blank" rel={rel}>
              Visit
              <MdOutlineArrowOutward size="14" />
            </a>
          </Button>
        </CardFooter>
      )} */}
    </Card>
  )
}

//======================================
export const Feed = async () => {
  const page = await getSourcesPage({ page: 1, pageSize: 10 })
  const header = await getPageHeader({ name: "latest" })
  return (
    <div>
      <div className="grid gap-5 max-w-2xl mx-auto pb-6 pt-3">
        <div className="space-y-1">
          <h1 className="font-bold text-center">{header.title}</h1>
          <h2 className="text-center">{header.subtitle}</h2>
        </div>
        <Search />
        <FeedList initialList={page} />
      </div>
    </div>
  )
}
