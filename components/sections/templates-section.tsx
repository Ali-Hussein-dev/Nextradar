/* eslint-disable jsx-a11y/alt-text */
"use client"
/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/button"
import { CardWrapper } from "@/components/ui/card-wrapper"
import { HiOutlineExternalLink } from "react-icons/hi"
import { filterLabels, templates } from "@/constants/templates"
import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import * as React from "react"
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export interface Template {
  name: string
  description: string
  url: string
  ogImage: string
  sponsored?: boolean
  github?: string
  rel: string
  specs: Record<string, { value: string; label: string }[]>
  featured?: {
    testimonials: {
      quote: string
      name: string
      role?: string
      avatar: string
      url: string
    }[]
  }
}

export function useFilteredTemplates(templates: Template[], isFree: boolean) {
  const filteredTemplates = React.useMemo(() => {
    return templates.filter((template) => !!template.github === isFree)
  }, [templates, isFree])

  return filteredTemplates
}

const StandardCard = ({
  template,
  router,
}: {
  template: Template
  router: AppRouterInstance
}) => {
  return (
    <CardWrapper className="md:px-3 pt-3 overflow-hidden relative h-fit">
      <div>
        <div className="flex-row-start gap-3 mb-3">
          <img
            src={template.ogImage}
            className="rounded-md aspect-[8/5] m-0 object-fill max-w-40"
            alt="opengraph image"
            loading="lazy"
          />
          <div className="flex-col-start gap-0 pt-1">
            <div className="flex-row-between gap-2 w-full">
              <h2 className="m-0 font-bold text-lg w-full">{template.name}</h2>
              {template?.sponsored && (
                <span className="text-light dark:text-zinc-600 px-1 rounded-sm text-zinc-500">
                  Sponsored
                </span>
              )}
            </div>
            <p className="m-0 p-0 line-clamp-2 dark:text-zinc-400 text-zinc-700">
              {template.description}
            </p>
          </div>
        </div>
        <div className="flex-row-end border-t border-dashed gap-3 pt-2">
          {template.github && (
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-lg"
            >
              <a href={template.github}>
                <FaGithub />
              </a>
            </Button>
          )}
          <Button
            variant={"secondary"}
            size="sm"
            className="rounded-lg gap-2 dark:text-green-300 text-green-500"
            onClick={() => {
              router.push(template.url)
            }}
          >
            Visit
            <HiOutlineExternalLink />
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}
const FeaturedCard = ({
  template,
  router,
}: {
  template: Template
  router: AppRouterInstance
}) => {
  const featured = template.featured!

  return (
    <CardWrapper className="px-3 pt-3 overflow-hidden relative h-fit md:col-span-2 bg-muted/20 border ">
      <div>
        <div className="grid lg:grid-cols-2 lg:gap-3 pb-3 gap-4">
          <div className="flex flex-col gap-3 mb-3 lg:flex-row ">
            <div className="bg-muted relative max-w-full mb-2 lg:mb-0 w-full overflow-hidden aspect-video lg:aspect-[8/5]">
              <img
                src={template.ogImage}
                className="rounded-md m-0 object-cover h-full w-full aspect-video lg:aspect-[8/5]"
                alt="opengraph image"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-0 pt-1">
              <div className="flex-row-between gap-2 w-full">
                <h2 className="m-0 font-bold w-full">{template.name}</h2>
                {/* {template?.sponsored && (
                  <span className="text-light px-1 rounded-sm text-muted-foreground">
                    Sponsored
                  </span>
                )} */}
              </div>
              <p className="m-0 p-0 line-clamp-3 dark:text-zinc-400 text-zinc-700">
                {template.description}
              </p>
            </div>
          </div>

          {featured && (
            <div className="pb-6 lg:pb-4">
              <Carousel className="relative">
                <CarouselContent>
                  {featured.testimonials.map((o, i) => (
                    <CarouselItem key={i}>
                      <div className="flex flex-col gap-1">
                        <q className="text-muted-foreground">{o.quote}</q>
                        <div className="flex-row-start gap-2">
                          <img src={o.avatar} className="rounded-full size-7" />
                          <span className="text-muted-foreground">
                            {o.name}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="top-full -translate-y-2 -translate-x-[4.2rem] size-7 left-full" />
                <CarouselNext className="right-10 top-full -translate-y-2 translate-x-10 size-7" />
              </Carousel>
            </div>
          )}
        </div>

        <div className="flex-row-between border-t border-dashed gap-3 pt-3">
          <span className="rounded-md px-3 py-1.5 text-secondary-foreground bg-muted">
            Featured
          </span>
          <Button
            variant={"secondary"}
            size="sm"
            className="rounded-lg gap-2 dark:text-green-300 text-green-500"
            onClick={() => {
              router.push(template.url)
            }}
          >
            Visit
            <HiOutlineExternalLink />
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}
//======================================
export function TemplatesSection() {
  const params = Object.keys(filterLabels).reduce(
    (acc: Record<string, any>, key) => {
      acc[key] = parseAsArrayOf(parseAsString).withDefault([])
      return acc
    },
    {} as Record<string, any>
  )
  const [activeQueryState, setActiveQueryStates] = useQueryStates(params, {
    clearOnDefault: true,
  })
  const urlHasParams = Object.values(activeQueryState).some((v) => v.length > 0)
  const filtered = React.useMemo(() => {
    if (!urlHasParams) return templates
    return templates.filter(({ specs }) => {
      // loops count of activeQueryState
      const mergedParams = Object.values(activeQueryState).flat()
      const mergedSpecs = Object.values(specs)
        .flat()
        .map((o) => o?.value)
      const pramsSet = new Set(mergedParams)
      const specsSet = new Set(mergedSpecs)
      const common = [...pramsSet].filter((str) => specsSet.has(str as string))
      // Do template specs have at least all serach params
      return common.length >= mergedParams.length
    })
  }, [JSON.stringify(activeQueryState), urlHasParams])
  const router = useRouter()
  return (
    <div>
      {/* <div className="mb-4 md:mb-8"></div> */}
      <ExpandableCard height="8rem" className="md:px-6 typography mb-6 pt-4">
        <CardHeading
          h1={`
            ${templates.length} Best Free and Premium Next.js Templates
          `}
          p="Jumpstart your next project quickly — built with the latest Next.js 15"
        />
        <div>
          Explore a wide range of high-quality Next.js starters. Pick from free,
          open-source, and premium options to build stunning and functional
          Next.js websites and web apps effortlessly.
          <p>
            Discover a diverse collection of handpicked and ready-to-use
            templates and boilerplates to jumpstart your next project quickly —
            built with the latest Next.js 14, React 18, and TypeScript for
            optimal performance and ease of use.
          </p>
          <p>The reviewed Next.js templates meet the following criteria:</p>
          <ul>
            <li>It uses the last features of Next.js such as the App router</li>
            <li>Actively maintained and regularly updated</li>
            <li>The UI is clean and beautiful</li>
            <li>Clean documentation for onboarding and easy setup</li>
          </ul>
        </div>
      </ExpandableCard>
      <div className="grid lg:grid-cols-8 gap-6">
        <div className="grid lg:grid-cols-2 gap-3 lg:col-span-6 h-fit px-4 lg:px-0">
          {filtered.map((o) => {
            // if (o.featured) {
            //   return <FeaturedCard key={o.name} template={o} router={router} />
            // }
            return <StandardCard key={o.name} template={o} router={router} />
          })}
        </div>
        <div className="lg:col-span-2 px-4 border border-dashed rounded-sm py-4 h-fit hidden lg:block">
          <div className="font-semibold text-secondary-foreground/60 flex-row-start gap-2">
            Filter {urlHasParams && `- (${filtered.length})`}
          </div>
          <aside className="py-2">
            <Accordion type="multiple">
              {Object.entries(filterLabels).map(
                ([filterKey, { name: filterName, list: filterOptions }]) => {
                  const count = activeQueryState[filterKey].length
                  return (
                    <AccordionItem key={filterName} value={filterName}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex-row-start gap-2">
                          {filterName}
                          {count > 0 ? (
                            <span className="bg-muted text-muted-forground rounded-full p-1 size-6 center">
                              {count}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        {Object.values(filterOptions)
                          .sort((a, b) => a.label.localeCompare(b.label))
                          .map(({ label, value }) => (
                            <Label
                              key={value}
                              className="flex-row-start gap-2 bg-muted/50 rounded-sm px-2 py-3"
                              htmlFor={value}
                            >
                              <Checkbox
                                key={value}
                                id={value}
                                checked={activeQueryState[filterKey].includes(
                                  value
                                )}
                                onCheckedChange={(val) => {
                                  if (val) {
                                    setActiveQueryStates({
                                      [filterKey]: [
                                        ...activeQueryState[filterKey],
                                        value,
                                      ],
                                    })
                                  } else {
                                    setActiveQueryStates({
                                      [filterKey]: activeQueryState[
                                        filterKey
                                      ].filter(
                                        (item: string) => item !== value
                                      ),
                                    })
                                  }
                                }}
                              />
                              <div>{label}</div>
                            </Label>
                          ))}
                      </AccordionContent>
                    </AccordionItem>
                  )
                }
              )}
            </Accordion>
            <div className="pt-2">
              {urlHasParams && (
                <Button
                  size="sm"
                  className="w-full"
                  type="button"
                  onClick={() => {
                    setActiveQueryStates({
                      ...Object.keys(activeQueryState).reduce(
                        (acc, key) => ({ ...acc, [key]: [] }),
                        {}
                      ),
                    })
                  }}
                  variant={"outline"}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
