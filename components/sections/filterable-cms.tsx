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

// type DatabaseType =
//   | "PostgreSQL"
//   | "MySQL"
//   | "MariaDB"
//   | "MongoDB"
//   | "SQLite"
//   | "Proprietary Content Lake"
//   | (string & {});

// type ApiType = "RestfulAPI" | "GraphQL" | "LocalAPI";

// type CMSFilter = {
//   openSource: boolean;
//   apiType: ApiType[];
//   RealtimeColaboration: boolean;
//   databaseType: DatabaseType[];
//   freeTier: boolean;
//   hosting: ("self-hosting" | "Cloud-based" | "Partial Self-hosting")[];
// } & Record<string, unknown>;

const cmsFilterLabels = {
  hosting: {
    name: "Hosting",
    list: {
      selfhosting: { label: "Self-hosting", value: "self-hosting" },
      cloudBased: { label: "Cloud-based", value: "cloud-based" },
      // partialSelfhosting: {
      //   label: "Partial Self-hosting",
      //   value: "partial-self-hosting",
      // },
    },
  },
  apiType: {
    name: "API type",
    list: {
      restfulapi: { label: "Restful API", value: "restful-api" },
      graphQL: { label: "GraphQL", value: "graphql" },
      localAPI: { label: "Local API", value: "localapi" },
    },
  },
  databaseType: {
    name: "Database Type",
    list: {
      postgresql: { label: "Postgres", value: "postgres" },
      mysql: { label: "MySQL", value: "mysql" },
      sqlite: { label: "SQLite", value: "sqlite" },
      mongodb: { label: "MongoDB", value: "mongodb" },
      proprietaryContentLake: {
        label: "Proprietary Content Lake",
        value: "proprietary-content-lake",
      },
      builtInPersistentDatabase: {
        label: "Built-in Persistent Database",
        value: "built-in-persistent-database",
      },
      gitBased: { label: "Git-based", value: "git-based" },
    },
  },
  others: {
    name: "Others",
    list: {
      freeTier: { label: "Free Tier", value: "free-tier" },
      openSource: { label: "Open Source", value: "open-source" },
      realtimeColaboration: {
        label: "Realtime collaboration",
        value: "realtime-collaboration",
      },
    },
  },
};

interface FilterOption {
  label: string;
  value: string;
}

interface FilterLabel {
  name: string;
  list: Record<string, FilterOption>;
}

interface FilterAccordionProps {
  filterLabels: Record<string, FilterLabel>;
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
        {Object.entries(filterLabels).map(
          ([filterKey, { name: filterName, list: filterOptions }]) => {
            const count = activeQueryState[filterKey].length;
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
                                [filterKey]: [
                                  ...activeQueryState[filterKey],
                                  value,
                                ],
                              });
                            } else {
                              setActiveQueryStates({
                                [filterKey]: activeQueryState[filterKey].filter(
                                  (item: string) => item !== value
                                ),
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
  const params = Object.keys(cmsFilterLabels).reduce(
    (acc: Record<string, any>, key) => {
      acc[key] = parseAsArrayOf(parseAsString).withDefault([]);
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
  const mergedParams = React.useMemo(
    () => Object.values(activeQueryState).flat(),
    [activeQueryState]
  );
  const filtered = React.useMemo(() => {
    if (!urlHasParams) return list;
    return list.filter(({ tags, name }) => {
      // const mergedSpecs = tags;
      const selectedTagsSet = new Set(mergedParams.map((s) => s.toLowerCase()));
      const cmsTagsSet = new Set(tags);
      const common = [...selectedTagsSet].filter((str) =>
        cmsTagsSet.has(str as string)
      );
      console.log({
        name,
        cmsTags: tags,
      });
      // Do template specs have at least all serach params
      return common.length >= mergedParams.length;
    });
  }, [mergedParams, urlHasParams]);
  const { view } = usePreferencesStore();

  return (
    <>
      <Collapsible className="lg:hidden border w-full rounded-sm col-span-2 border-dashed py-1 px-3 mb-3">
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
      <div
        className={cn(
          "grid gap-5 lg:col-span-6 h-fit lg:px-0 w-full",
          view === "grid" ? "lg:grid-cols-2" : "lg:grid-cols-1"
        )}
      >
        {filtered
          .sort((a, b) => (b.sponsored ? 1 : 0) - (a.sponsored ? 1 : 0))
          .map((o) => (
            <div
              className={o.sponsored && view === "grid" ? "col-span-2" : ""}
              key={o.name}
            >
              <IntegrationCard key={o.name} {...o} extended={view === "list"} />
            </div>
          ))}
      </div>
      <div className="lg:col-span-2 px-4 border border-dashed rounded-xl py-4 h-fit hidden lg:block sticky top-5">
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
    </>
  );
}
