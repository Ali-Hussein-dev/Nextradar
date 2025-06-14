import { Search } from "@/components/search"
import { FeedList } from "@/components/feed-list"
import { getPageHeader, getSourcesPage } from "@/sanity/lib/getters"
import { YtDialog } from "@/components/yt-dialog"
import * as React from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"
import { MdOutlineArrowOutward } from "react-icons/md"

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
    <Card className="shadow-none p-3 sm:p-4">
      <CardHeader className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 w-full p-0 sm:p-0">
        {/* --------------------------------YT-Embed */}
        {isYoutube && <YtDialog href={href} />}
        <div className="w-full pt-2 grow flex-col-start md:h-full gap-1.5 py-2">
          <CardTitle className="flex justify-between items-center w-full gap-3 dark:text-zinc-300/80 text-zinc-700 tracking-normal">
            <h2 className="line-clamp-1">{name}</h2>
            {sponsored && <span className="text-xs font-light">Sponsored</span>}
          </CardTitle>
          <CardDescription className="mb-1.5">
            {sponsored && <p className="line-clamp-2">{description}</p>}
            <span className="font-light text-sm text-muted-foreground/60">{author}</span>
          </CardDescription>
        </div>
      </CardHeader>
      {!isYoutube && (
        <CardFooter className="flex justify-end items-center gap-2 w-full sm:p-0 py-0">
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
      )}
    </Card>
  )
}

//======================================
export const Feed = async () => {
  const page = await getSourcesPage({ page: 1, pageSize: 16 })
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
