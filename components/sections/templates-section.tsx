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

export interface Template {
  name: string
  description: string
  url: string
  ogImage: string
  sponsored?: boolean
  github?: string
  rel: string
  specs: Record<string, { value: string; label: string }[]>
}

export function useFilteredTemplates(templates: Template[], isFree: boolean) {
  const filteredTemplates = React.useMemo(() => {
    return templates.filter((template) => !!template.github === isFree)
  }, [templates, isFree])

  return filteredTemplates
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
          p="Discover High-Quality, Ready-to-Use Templates for Your Next.js Projects"
        />
        <div>
          Explore a wide range of high-quality Next.js templates. Pick from
          free, open-source, and premium options to build stunning and
          functional Next.js websites and web apps effortlessly.
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
          {filtered.map((o) => (
            <CardWrapper
              key={o.name}
              className="md:px-3 pt-3 overflow-hidden relative h-fit"
            >
              <div>
                <div className="flex-row-start gap-3 mb-3">
                  <img
                    src={o.ogImage}
                    className="rounded-md aspect-[8/5] m-0 object-fill max-w-40"
                    alt="opengraph image"
                    loading="lazy"
                  />
                  <div className="flex-col-start gap-0 pt-1">
                    <div className="flex-row-between gap-2 w-full">
                      <h2 className="m-0 font-bold text-lg w-full">{o.name}</h2>
                      {o?.sponsored && (
                        <span className="text-light dark:text-zinc-600 px-1 rounded-sm text-zinc-500">
                          Sponsored
                        </span>
                      )}
                    </div>
                    <p className="m-0 p-0 line-clamp-2 dark:text-zinc-400 text-zinc-700">
                      {o.description}
                    </p>
                  </div>
                </div>
                <div className="flex-row-end border-t border-dashed gap-3 pt-2">
                  {o.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-lg"
                    >
                      <a href={o.github}>
                        <FaGithub />
                      </a>
                    </Button>
                  )}
                  <Button
                    variant={"secondary"}
                    size="sm"
                    className="rounded-lg gap-2 dark:text-green-300 text-green-500"
                    onClick={() => {
                      router.push(o.url)
                    }}
                  >
                    Visit
                    <HiOutlineExternalLink />
                  </Button>
                </div>
              </div>
            </CardWrapper>
          ))}
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

