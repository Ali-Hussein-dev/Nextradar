import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "./button"
import { slugify } from "@/lib/utils"

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
  name = "",
  description = "",
  author = "",
  href = "",
  src = "",
}: CardProps) => {
  const slug = slugify(name)
  return (
    <div className="border dark:border-zinc-800/80 px-3 pt-4 pb-1 rounded-md shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full pb-2">
        <div className="w-full">
          <h3
            id={`${slug}`}
            className="text-lg font-extrabold mt-0 mb-1 tracking-tight text-balance scroll-m-20"
          >
            <a href={`#${slug}`}>{name}</a>
          </h3>
          <p className="mb-1 dark:text-zinc-400 text-zinc-700">{description}</p>
          {/* --------------------------------Bottom */}
          <div className="flex-row-between gap-2 w-full">
            <span className="dark:text-zinc-500 text-zinc-400">{author}</span>
            <Button
              variant={"outline"}
              asChild
              size="sm"
              className="rounded-lg gap-2 no-underline"
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
          <div className="aspect-[560/315] grow size-fit rounded overflow-hidden w-full md:max-w-[18rem] order-first sm:order-last">
            <iframe
              src={src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded size-full"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}
