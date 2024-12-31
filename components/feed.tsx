import { Newsletter2 } from "@/components/newsletter"
import { Search } from "@/components/search"
import { FeedList } from "./feed-list"
import { getPageHeader, getSourcesPage } from "@/sanity/lib/getters"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"
import { YtDialog } from "@/components/yt-dialog"
import * as React from "react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      <Card className="shadow-none">
        <CardHeader className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 w-full">
          {/* --------------------------------YT-Embed */}
          {src && <YtDialog src={src} href={href} />}
          <div className="w-full pt-2 grow flex-col-start md:h-full gap-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription
              className={cn(
                "mb-1.5 dark:text-zinc-500 text-pretty line-clamp-2 text-zinc-700",
                src ? "hidden md:line-clamp-2" : ""
              )}
            >
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
        <CardFooter className="flex-row-between gap-2 w-full text-sm pt-0">
          <span className="text-muted-foreground/80">{author}</span>
          {!src && (
            <Button
              variant="ghost"
              asChild
              className="gap-2 no-underline dark:text-green-300 text-green-500"
              size="sm"
            >
              <a href={href} target="_blank" rel="nofollow">
                Visit
                <FaExternalLinkAlt size="14" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }
)

FeedCard.displayName = "FeedCard"
//======================================
export const Feed = async () => {
  const page = await getSourcesPage({ page: 1, pageSize: 10 })
  const header = await getPageHeader({ name: "latest" })
  return (
    <div>
      <div className="grid gap-5 max-w-2xl mx-auto pb-6 pt-3">
        <div className="space-y-1">
          <h1 className="font-bold text-center">{header.title}</h1>
          <p className="text-center">{header.subtitle}</p>
        </div>
        <Search />
        <FeedList initialList={page} />
      </div>
      <Newsletter2 />
    </div>
  )
}
