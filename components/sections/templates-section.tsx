/* eslint-disable jsx-a11y/alt-text */
"use client"
/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { MdOutlineArrowOutward } from "react-icons/md"
import { filterLabels, templates } from "@/constants/templates"
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
interface FilterOption {
  label: string
  value: string
}

interface FilterLabel {
  name: string
  list: Record<string, FilterOption>
}

interface FilterAccordionProps {
  filterLabels: Record<string, FilterLabel>
  activeQueryState: Record<string, string[]>
  setActiveQueryStates: (value: Record<string, string[]>) => void
  urlHasParams: boolean
  filtered?: any[]
  className?: string
}

export function FilterAccordion({
  filterLabels,
  activeQueryState,
  setActiveQueryStates,
  urlHasParams,
  filtered,
  className,
}: FilterAccordionProps) {
  return (
    <aside className={className}>
      <div className="hidden lg:block">
        {filtered && (
          <div className="flex-row-start gap-2 mb-2 border-b w-full pb-2 text-muted-foreground">
            Filter {urlHasParams && `- ${filtered.length}`}
          </div>
        )}
      </div>

      <Accordion type="multiple">
        {Object.entries(filterLabels).map(
          ([filterKey, { name: filterName, list: filterOptions }]) => {
            const count = activeQueryState[filterKey].length
            return (
              <AccordionItem key={filterKey} value={filterName}>
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
                          checked={activeQueryState[filterKey].includes(value)}
                          onCheckedChange={(val) => {
                            if (val) {
                              setActiveQueryStates({
                                [filterKey]: [...activeQueryState[filterKey], value],
                              })
                            } else {
                              setActiveQueryStates({
                                [filterKey]: activeQueryState[filterKey].filter(
                                  (item: string) => item !== value,
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
          },
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
                ...Object.keys(activeQueryState).reduce((acc, key) => ({ ...acc, [key]: [] }), {}),
              })
            }}
            variant={"outline"}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </aside>
  )
}

const StandardCard = ({ template, router }: { template: Template; router: AppRouterInstance }) => {
  return (
    <Card
      className={`shadow-none ${
        template.sponsored ? "dark:border-green-300/30 border-green-300/60 md:col-span-2" : ""
      }`}
    >
      <CardHeader className="flex-row-start gap-3">
        <img
          src={template.ogImage}
          className="rounded-md aspect-[8/5] m-0 object-fill max-w-40"
          alt="opengraph image"
          loading="lazy"
        />
        <div className="flex-col-start gap-1 pt-1">
          <div className="flex-row-between gap-2 w-full">
            <CardTitle>{template.name}</CardTitle>
            {/* {template?.sponsored && (
                <span className="text-light dark:text-zinc-600 px-1 rounded-sm text-zinc-500">
                  Sponsored
                </span>
              )} */}
          </div>
          <CardDescription className="line-clamp-2 tracking-tight leading-5 ">
            {template.description}
          </CardDescription>
        </div>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className="flex-row-end gap-3">
        {template.sponsored && (
          <span className="mr-auto px-1 text-card-foreground/60">Sponsored</span>
        )}

        {template.github && (
          <Button asChild variant="outline" size="icon" className="rounded-lg">
            <a href={template.github}>
              <FaGithub />
            </a>
          </Button>
        )}
        <Button
          variant={"secondary"}
          size="sm"
          className="gap-1.5"
          onClick={() => {
            router.push(template.url)
          }}
        >
          Visit
          <MdOutlineArrowOutward />
        </Button>
      </CardFooter>
    </Card>
  )
}

//======================================
export function TemplatesSection() {
  const params = Object.keys(filterLabels).reduce(
    (acc: Record<string, any>, key) => {
      acc[key] = parseAsArrayOf(parseAsString).withDefault([])
      return acc
    },
    {} as Record<string, any>,
  )
  const [activeQueryState, setActiveQueryStates] = useQueryStates(params, {
    clearOnDefault: true,
  })
  const urlHasParams = Object.values(activeQueryState).some((v) => v.length > 0)
  const mergedParams = React.useMemo(
    () => Object.values(activeQueryState).flat(),
    [activeQueryState],
  )
  const filtered = React.useMemo(() => {
    if (!urlHasParams) return templates
    return templates.filter(({ specs }) => {
      const mergedSpecs = Object.values(specs)
        .flat()
        .map((o) => o?.value)
      const pramsSet = new Set(mergedParams)
      const specsSet = new Set(mergedSpecs)
      const common = [...pramsSet].filter((str) => specsSet.has(str as string))
      // Do template specs have at least all serach params
      return common.length >= mergedParams.length
    })
  }, [mergedParams, urlHasParams])

  const router = useRouter()

  return (
    <div className="px-1 relative">
      <div className="lg:grid lg:grid-cols-8 gap-6">
        <Collapsible className="lg:hidden border w-full rounded-sm col-span-2 border-dashed py-1 px-3 mb-3">
          <CollapsibleTrigger className="w-full pt-1">
            <div className="flex-row-between w-full">
              Filter {filtered && urlHasParams && `- ${filtered.length}`}
              <ChevronRight />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FilterAccordion
              filterLabels={filterLabels}
              activeQueryState={activeQueryState}
              setActiveQueryStates={setActiveQueryStates}
              urlHasParams={urlHasParams}
              filtered={filtered}
              className="py-2"
            />
          </CollapsibleContent>
        </Collapsible>
        <div className="grid lg:grid-cols-2 gap-3 lg:col-span-6 h-fit lg:px-0 grid-cols-1 w-full">
          {filtered
            .sort((a, b) => (b.sponsored ? 1 : 0) - (a.sponsored ? 1 : 0))
            .map((o) => (
              <StandardCard key={o.name} template={o} router={router} />
            ))}
        </div>
        <div className="lg:col-span-2 px-4 border border-dashed rounded-xl py-4 h-fit hidden lg:block sticky top-5">
          <FilterAccordion
            filterLabels={filterLabels}
            activeQueryState={activeQueryState}
            setActiveQueryStates={setActiveQueryStates}
            urlHasParams={urlHasParams}
            filtered={filtered}
          />
        </div>
      </div>
    </div>
  )
}
