/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/button"
import { CardWrapper } from "@/components/ui/card-wrapper"
import { HiOutlineExternalLink } from "react-icons/hi"
import { templates } from "@/constants/templates"
import { ExpandableCard } from "@/components/ui/expandable-card"

//======================================
export function StartersSection() {
  return (
    <div className="space-y-8">
      <div className="">
        <ExpandableCard height="9rem" className="md:px-6 border-dashed">
          <h2 className="text-2xl font-bold mb-2 mt-2">
            {templates.length} Best Free and Premium Next.js Templates
          </h2>
          <div className="text-zinc-600 dark:text-zinc-400 prose-p:my-0">
            <p>
              Explore a wide range of high-quality Next.js templates. Pick from
              free, open-source, and premium options to build stunning and
              functional Next.js websites and web apps effortlessly. <br />
              Discover a diverse collection of handpicked and ready-to-use
              templates and boilerplates to jumpstart your next project quickly
              — built with the latest Next.js 14, React 18, and TypeScript for
              optimal performance and ease of use.
            </p>
            <p>The reviewed Next.js templates meet the following criteria:</p>
            <ul>
              <li>
                It uses the last features of Next.js such as the App router
              </li>
              <li>Actively maintained and regularly updated</li>
              <li>The UI is clean and beautiful</li>
              <li>Clean documentation for onboarding and easy setup</li>
            </ul>
            <p>
              I might have missed some great ones, so if you have a suggestion,
              please{" "}
              <a
                href="https://x.com/alihussein_20"
                // className="text-blue-500 dark:text-blue-400"
              >
                let me know
              </a>
              .
            </p>
          </div>
        </ExpandableCard>
      </div>
      <div className="grid lg:grid-cols-2 gap-3">
        {templates.map((o, i) => (
          <CardWrapper key={i} className="md:px-2 pt-3 overflow-hidden">
            <div className="">
              <div className="flex-row-start gap-3 mb-3">
                <img
                  src={o.ogImage}
                  className="rounded-md aspect-[8/5] m-0 object-fill max-w-40"
                  alt="opengraph image"
                  loading="lazy"
                />
                <div className="flex-col-start gap-0 pt-1">
                  <div className="flex-row-between gap-2 w-full">
                    <h3 className="m-0 font-bold text-lg w-full">{o.name}</h3>
                    {o.sponsored && (
                      <span className="text-light dark:text-zinc-600 px-1 rounded-sm text-zinc-500">
                        Sponsored
                      </span>
                    )}
                  </div>
                  <p className="m-0 p-0 line-clamp-2">{o.description}</p>
                </div>
              </div>
              <div className="flex-row-end border-t border-dashed gap-3 pt-2">
                {o.github && (
                  <Button
                    asChild
                    variant={"secondary"}
                    size="icon"
                    className="rounded-lg"
                  >
                    <a href={o.github}>
                      <FaGithub />
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant={"secondary"}
                  size="icon"
                  className="rounded-lg"
                >
                  <a href={o.url} target="_blank">
                    <HiOutlineExternalLink />
                  </a>
                </Button>
              </div>
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  )
}
