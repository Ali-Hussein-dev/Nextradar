"use client"
import { Button } from "@/components/ui/button"
import {
  IntegrationCardProps,
  IntegrationCard,
} from "@/components/integration-card"
import * as React from "react"
import { useFilter } from "@/hooks/use-filtered-list"

const labels = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "ORM",
    value: "orm",
  },
  {
    label: "Postgres",
    value: "postgres",
  },
  {
    label: "SQL",
    value: "sql",
  },
  {
    label: "NoSQL",
    value: "nosql",
  },
  {
    label: "Vector",
    value: "vector",
  },
  {
    label: "Redis",
    value: "redis",
  },
  {
    label: "GraphQL",
    value: "graphql",
  },
]

//======================================
export function DatabasesList({ list }: { list: IntegrationCardProps[] }) {
  const { current, filtered, setFilter } = useFilter({
    list,
    filterFn: (item, filter) => {
      return filter === "all" || !filter
        ? true
        : !!item?.tags?.map((s) => s.toLocaleLowerCase()).includes(filter)
    },
    param: {
      name: "filter",
      value: "all",
    },
  })

  return (
    <div>
      <div className="flex-row-start gap-3 mb-2">
        {labels.map((label) => (
          <Button
            key={label.value}
            variant={current === label.value ? "default" : "ghost"}
            onClick={() => setFilter(label.value)}
            size="sm"
            className="h-8"
            aria-label={`Show ${label.label}`}
          >
            {label.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((o, i) => (
          <IntegrationCard key={i} {...o} />
        ))}
      </div>
    </div>
  )
}
