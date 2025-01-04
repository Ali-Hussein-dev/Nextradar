/* eslint-disable @next/next/no-img-element */
import { getSites } from "@/sanity/lib/getters"
import { MdOutlineArrowOutward } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { Repo } from "@/lib/get-repos-github"
import {
  Card,
  // CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
type Site = Repo & { ogImage: string; rel: string }
export const SitesList = async () => {
  const list = (await getSites()) as Site[]

  return (
    <div className="grid lg:grid-cols-2 gap-4 w-full">
      {list
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        .map((o, i) => (
          <Card
            key={o.name}
            className="flex-col-start w-full border-dashed rounded-sm"
          >
            <CardHeader className="flex-row-start gap-2 py-4">
              {o.ogImage && (
                <img
                  src={o.ogImage}
                  className="rounded-md aspect-[8/5] m-0 object-fill max-w-40"
                  alt="opengraph image"
                  loading="lazy"
                />
              )}
              <div className="flex-col-start gap-1">
                <CardTitle>{o.name}</CardTitle>
                <CardDescription>{o.createdBy}</CardDescription>
                <CardDescription className="line-clamp-2 pt-1">
                  {o.description}
                </CardDescription>
              </div>
            </CardHeader>
            {/* <CardContent className="grow"></CardContent> */}
            <CardFooter className="flex-row-between border-t border-dashed gap-3 w-full py-3">
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
                className="gap-1.5 no-underline"
              >
                <a href={o.homepage} target="_blank" rel={o.rel}>
                  Visit
                  <MdOutlineArrowOutward />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  )
}

//======================================
export function LearnSection() {
  return <SitesList />
}
