import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "@/components/button"
import { slugify } from "@/lib/utils"
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
  const slug = slugify(name)
  return (
    <CardWrapper className="flex-none p-3 md:p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 w-full">
        <div className="w-full">
          <h3 className="text-xl font-extrabold mt-0 mb-1 text-pretty scroll-m-20 md:text-xl dark:text-zinc-300/90">
            {name}
          </h3>
          <p className="mb-1 dark:text-zinc-500 text-pretty line-clamp-3 text-zinc-700">
            {description}
          </p>
          {/* --------------------------------Bottom */}
          <div className="flex-row-between gap-2 w-full pt-1">
            <span className="dark:text-zinc-500 text-zinc-400">{author}</span>
            <Button
              variant={"secondary"}
              asChild
              size="sm"
              className="gap-3 no-underline"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                Visit
                <FaExternalLinkAlt size="14" />
              </a>
            </Button>
          </div>
        </div>
        {/* --------------------------------YT-Embed */}
        {src && (
          <div className="aspect-[560/315] grow size-fit rounded-md overflow-hidden w-full md:max-w-[18rem] order-first sm:order-last">
            <YtDialog src={src} href={href} />
          </div>
        )}
      </div>
    </CardWrapper>
  )
}
