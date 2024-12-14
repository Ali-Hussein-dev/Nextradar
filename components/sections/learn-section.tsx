/* eslint-disable @next/next/no-img-element */
import { getSites } from "@/sanity/lib/getters"
import { CardWrapper } from "@/components/ui/card-wrapper"
import { HiOutlineExternalLink } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import { Repo } from "@/lib/get-repos-github"

type Site = Repo & { ogImage: string; rel: string }
export const SitesList = async () => {
  const list = (await getSites()) as Site[]

  return (
    <div className="grid lg:grid-cols-2 gap-4 w-full">
      {list
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        .map((o, i) => (
          <CardWrapper
            key={o.name}
            className="md:px-3 pt-3 overflow-hidden relative"
          >
            <div>
              <div className="flex-row-start gap-3 mb-3">
                {o.ogImage && (
                  <img
                    src={o.ogImage}
                    className="rounded-md aspect-[8/5] m-0 object-fill max-w-40"
                    alt="opengraph image"
                    loading="lazy"
                  />
                )}
                <div className="flex-col-start gap-0 pt-1">
                  <div className="flex-row-between gap-2 w-full">
                    <h2 className="m-0 font-bold text-lg w-full">{o.name}</h2>
                    {/* {o?.sponsored && (
                      <span className="text-light dark:text-zinc-600 px-1 rounded-sm text-zinc-500">
                        Sponsored
                      </span>
                    )} */}
                  </div>
                  <p className="m-0 p-0 line-clamp-2 dark:text-zinc-400 text-zinc-700">
                    {o.description}
                  </p>
                </div>
              </div>
              <div className="flex-row-between border-t border-dashed gap-3 pt-2 grow">
                <div className="flex-row-start h-full grow gap-1">
                  {o?.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 h-full center text-xs bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 rounded-sm capitalize py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  size="sm"
                  variant={"secondary"}
                  className="rounded-lg gap-3 no-underline dark:text-green-300 text-green-500"
                >
                  <a href={o.homepage} target="_blank" rel={o.rel}>
                    Visit
                    <HiOutlineExternalLink />
                  </a>
                </Button>
              </div>
            </div>
          </CardWrapper>
        ))}
    </div>
  )
}

//======================================
export function LearnSection() {
  return <SitesList />
}
