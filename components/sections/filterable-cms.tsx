"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight, InfoIcon } from "lucide-react"
import { IntegrationCard } from "@/components/integration-card"
import { ToggleView, usePreferencesStore } from "../ui/toggle-view"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { cmsFilterLabels } from "@/constants/cms-filter"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const TooltipWrapper = ({ description }: { description: string }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="opacity-0 group-hover:opacity-100 transition-all">
        <InfoIcon />
      </TooltipTrigger>
      <TooltipContent>{description}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

interface FilterAccordionProps {
  filterLabels: typeof cmsFilterLabels.categories
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
        {filterLabels.map((filterSection) => {
          const count = activeQueryState[filterSection.value].length
          return (
            <AccordionItem key={filterSection.name} value={filterSection.name}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex-row-start gap-2">
                  {filterSection.name}
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
                {filterSection.tags
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .map(({ label, value, description }) => (
                    <Label
                      key={value}
                      className="flex justify-start items-center gap-2 bg-muted/50 rounded-sm px-2 py-3 grow text-sm group"
                      htmlFor={value}
                    >
                      <Checkbox
                        key={value}
                        id={value}
                        checked={activeQueryState[filterSection.value].includes(value)}
                        onCheckedChange={(val) => {
                          if (val) {
                            setActiveQueryStates({
                              [filterSection.value]: [
                                ...activeQueryState[filterSection.value],
                                value,
                              ],
                            })
                          } else {
                            setActiveQueryStates({
                              [filterSection.value]: activeQueryState[filterSection.value].filter(
                                (item: string) => item !== value,
                              ),
                            })
                          }
                        }}
                      />
                      <div className="flex-1">{label}</div>
                      <TooltipWrapper description={description} />
                    </Label>
                  ))}
              </AccordionContent>
            </AccordionItem>
          )
        })}
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

//======================================

export function FilterableCms({ list }: { list: any[] }) {
  const params = cmsFilterLabels.categories.reduce(
    (acc: Record<string, any>, filterSection) => {
      acc[filterSection.value] = parseAsArrayOf(parseAsString).withDefault([])
      return acc
    },
    {} as Record<string, any>,
  )
  const [activeQueryState, setActiveQueryStates] = useQueryStates(params, {
    clearOnDefault: true,
  })
  const urlHasParams = Object.values(activeQueryState).some((v) => v.length > 0)
  const mergedParams = Object.values(activeQueryState).flat()
  let filtered = list
  if (urlHasParams) {
    filtered = list.filter(({ tags, name }) => {
      // const mergedSpecs = tags;
      const selectedTagsSet = new Set(mergedParams.map((s) => s.toLowerCase()))
      const cmsTagsSet = new Set(tags)
      const common = [...selectedTagsSet].filter((str) => cmsTagsSet.has(str as string))
      // Do template specs have at least all serach params
      return common.length >= mergedParams.length
    })
  }
  const { view } = usePreferencesStore()
  const isMobile = useIsMobile()
  return (
    <div className="lg:grid lg:grid-cols-8 gap-6">
      {isMobile && (
        <Collapsible
          id="filterable-cms-mobile"
          className="lg:hidden border w-full rounded-sm col-span-2 border-dashed py-1 px-3 mb-3"
        >
          <CollapsibleTrigger className="w-full pt-1">
            <div className="flex-row-between w-full">
              Filter {filtered && urlHasParams && `- ${filtered.length}`} <ChevronRight />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FilterAccordion
              filterLabels={cmsFilterLabels.categories}
              activeQueryState={activeQueryState}
              setActiveQueryStates={setActiveQueryStates}
              urlHasParams={urlHasParams}
              filtered={filtered}
              className="py-2"
            />
          </CollapsibleContent>
        </Collapsible>
      )}
      <div
        className={cn(
          "grid gap-5 lg:col-span-6 h-fit lg:px-0 w-full grid-cols-1",
          view === "grid" ? "lg:grid-cols-2" : "",
        )}
      >
        {filtered
          .sort((a, b) => (b.sponsored ? 1 : 0) - (a.sponsored ? 1 : 0))
          .map((o) => (
            <div className={o.sponsored && view === "grid" ? "lg:col-span-2" : ""} key={o.name}>
              <IntegrationCard key={o.name} {...o} extended={view === "list"} />
            </div>
          ))}
      </div>
      {!isMobile && (
        <div
          id="filterable-cms-desktop"
          className="lg:col-span-2 px-4 border border-dashed rounded-xl py-4 h-fit hidden lg:block sticky top-5"
        >
          <div className="pb-2">
            <ToggleView />
          </div>
          <FilterAccordion
            filterLabels={cmsFilterLabels.categories}
            activeQueryState={activeQueryState}
            setActiveQueryStates={setActiveQueryStates}
            urlHasParams={urlHasParams}
            filtered={filtered}
          />
        </div>
      )}
    </div>
  )
}
