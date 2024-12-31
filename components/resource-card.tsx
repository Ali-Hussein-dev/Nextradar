import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "@/components/button"
import { YtDialog } from "@/components/yt-dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <Card className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 animate-in">
      <CardHeader>
        {/* --------------------------------YT-Embed */}
        {src && <YtDialog src={src} href={href} />}
        <CardTitle>{name}</CardTitle>

        {/* --------------------------------Description-only for articles */}
        {!src && (
          <CardDescription className="mb-0.5 dark:text-zinc-500 text-pretty line-clamp-2 text-zinc-700">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex-row-between gap-2 border-t border-dashed">
        <div className="">
          <span className="dark:text-zinc-500 text-zinc-500">{author}</span>
          {!src && (
            <Button
              variant="secondary"
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
      </CardFooter>
    </Card>
  )
}
