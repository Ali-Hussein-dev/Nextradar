"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import * as React from "react";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { IntegrationCard } from "@/components/integration-card";
import { ToggleView, usePreferencesStore } from "../ui/toggle-view";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface FilterSection {
  name: string;
  list: Array<{
    label: string;
    value: string;
  }>;
}

const cmsFilterLabels: FilterSection[] = [
  {
    name: "Hosting",
    list: [
      { label: "Self-hosting", value: "self-hosting" },
      { label: "Cloud-based", value: "cloud-based" },
      // { label: "Partial Self-hosting", value: "partial-self-hosting" }
    ],
  },
  {
    name: "API type",
    list: [
      { label: "Restful API", value: "restful-api" },
      { label: "GraphQL", value: "graphql" },
      { label: "Local API", value: "localapi" },
    ],
  },
  {
    name: "Database Type",
    list: [
      { label: "Postgres", value: "postgres" },
      { label: "MySQL", value: "mysql" },
      { label: "SQLite", value: "sqlite" },
      { label: "MongoDB", value: "mongodb" },
      { label: "Proprietary Content Lake", value: "proprietary-content-lake" },
      {
        label: "Built-in Persistent Database",
        value: "built-in-persistent-database",
      },
      { label: "Git-based", value: "git-based" },
    ],
  },
  {
    name: "Others",
    list: [
      { label: "Free Tier", value: "free-tier" },
      { label: "Open Source", value: "open-source" },
      { label: "Realtime collaboration", value: "realtime-collaboration" },
    ],
  },
];


interface FilterAccordionProps {
  filterLabels: FilterSection[];
  activeQueryState: Record<string, string[]>;
  setActiveQueryStates: (value: Record<string, string[]>) => void;
  urlHasParams: boolean;
  filtered?: any[];
  className?: string;
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
          const count = activeQueryState[filterSection.name].length;
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
                {filterSection.list
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
                        checked={activeQueryState[filterSection.name].includes(
                          value
                        )}
                        onCheckedChange={(val) => {
                          if (val) {
                            setActiveQueryStates({
                              [filterSection.name]: [
                                ...activeQueryState[filterSection.name],
                                value,
                              ],
                            });
                          } else {
                            setActiveQueryStates({
                              [filterSection.name]: activeQueryState[
                                filterSection.name
                              ].filter((item: string) => item !== value),
                            });
                          }
                        }}
                      />
                      <div>{label}</div>
                    </Label>
                  ))}
              </AccordionContent>
            </AccordionItem>
          );
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
                ...Object.keys(activeQueryState).reduce(
                  (acc, key) => ({ ...acc, [key]: [] }),
                  {}
                ),
              });
            }}
            variant={"outline"}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </aside>
  );
}

//======================================

export function FilterableCms({ list }: { list: any[] }) {
  const params = cmsFilterLabels.reduce(
    (acc: Record<string, any>, filterSection) => {
      acc[filterSection.name] = parseAsArrayOf(parseAsString).withDefault([]);
      return acc;
    },
    {} as Record<string, any>
  );
  const [activeQueryState, setActiveQueryStates] = useQueryStates(params, {
    clearOnDefault: true,
  });
  const urlHasParams = Object.values(activeQueryState).some(
    (v) => v.length > 0
  );
  const mergedParams = Object.values(activeQueryState).flat();
  let filtered = list;
  if (urlHasParams) {
    filtered = list.filter(({ tags, name }) => {
      // const mergedSpecs = tags;
      const selectedTagsSet = new Set(mergedParams.map((s) => s.toLowerCase()));
      const cmsTagsSet = new Set(tags);
      const common = [...selectedTagsSet].filter((str) =>
        cmsTagsSet.has(str as string)
      );
      // Do template specs have at least all serach params
      return common.length >= mergedParams.length;
    });
  }
  const { view } = usePreferencesStore();
  const isMobile = useIsMobile();
  return (
    <div className="lg:grid lg:grid-cols-8 gap-6">
      {isMobile && (
        <Collapsible
          id="filterable-cms-mobile"
          className="lg:hidden border w-full rounded-sm col-span-2 border-dashed py-1 px-3 mb-3"
        >
          <CollapsibleTrigger className="w-full pt-1">
            <div className="flex-row-between w-full">
              Filter {filtered && urlHasParams && `- ${filtered.length}`}{" "}
              <ChevronRight />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FilterAccordion
              filterLabels={cmsFilterLabels}
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
          view === "grid" ? "lg:grid-cols-2" : ""
        )}
      >
        {filtered
          .sort((a, b) => (b.sponsored ? 1 : 0) - (a.sponsored ? 1 : 0))
          .map((o) => (
            <div
              className={o.sponsored && view === "grid" ? "lg:col-span-2" : ""}
              key={o.name}
            >
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
            filterLabels={cmsFilterLabels}
            activeQueryState={activeQueryState}
            setActiveQueryStates={setActiveQueryStates}
            urlHasParams={urlHasParams}
            filtered={filtered}
          />
        </div>
      )}
    </div>
  );
}
