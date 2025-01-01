"use client"
import * as React from "react"
import { useInfiniteQuery, useQuery, FetchStatus } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { JobPostCardProps, JobCard } from "@/jobs/components/job-card"
import {
  // parseAsArrayOf,
  parseAsBoolean,
  parseAsString,
  useQueryStates,
  UseQueryStatesKeysMap,
  UseQueryStatesReturn,
  createSerializer,
} from "nuqs"
import { ToggleGroupItem, ToggleGroup } from "@/components/ui/toggle-group"
import { VscSettings } from "react-icons/vsc"
import Link from "next/link"
import { urls } from "@/constants/urls"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { nullifyObject } from "../lib/utils"
import { AnimatePresence, motion } from "framer-motion"

type QueryStates = {
  reactjs: boolean
  workplaceType: string
  isHiringAgency: boolean
}
const checkboxList = [
  {
    name: "reactjs", // param key
    label: "Exclude Next.js framework",
  },
  {
    name: "isHiringAgency", // param key
    label: "Include hiring agencies",
  },
]
const JobFilter = ({
  onApplyFilter,
  resetFilter,
  queryStatesReturn: [queryStates, setQueryStates],
  status,
}: {
  onApplyFilter: () => void
  queryStatesReturn: UseQueryStatesReturn<UseQueryStatesKeysMap<QueryStates>>
  resetFilter: () => void
  status: FetchStatus
  // shouldRender: boolean
}) => {
  const CustomLabel = ({ text }: { text: string }) => (
    <div className="text-muted-foreground">{text}</div>
  )
  return (
    <motion.div
      className="border-x border-dashed"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
    >
      <div className="px-5 py-5 flex-col-start gap-3 border-t border-dashed  bg-muted/10">
        <div className="flex-col-start gap-2">
          <CustomLabel text="Workplace type" />
          <ToggleGroup
            type="single"
            value={queryStates.workplaceType as unknown as string}
            onValueChange={(val) => {
              setQueryStates({ workplaceType: val })
            }}
            variant="default"
            className="border gap-0 rounded-sm divide-x"
          >
            {["Remote", "Onsite", "Hybrid"].map((str, i) => (
              <ToggleGroupItem
                key={str}
                value={str}
                className="capitalize rounded-none"
              >
                {str}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <CustomLabel text="Other" />
        <div className="flex-col-start gap-4">
          {checkboxList.map((o, i) => (
            <div key={i} className="flex-row-start gap-2">
              <Checkbox
                id={o.name}
                checked={
                  queryStates[o.name as keyof QueryStates] as unknown as boolean
                }
                onCheckedChange={(val) =>
                  setQueryStates({ [o.name]: val as unknown as boolean })
                }
              />
              <Label htmlFor={o.name}>{o.label}</Label>
            </div>
          ))}
        </div>
        <div className="flex-row-between w-full pt-4">
          <Button
            variant="outline"
            type="button"
            size="sm"
            onClick={resetFilter}
          >
            Reset filter
          </Button>
          <Button variant="secondary" size="sm" onClick={() => onApplyFilter()}>
            {status === "fetching" ? "fetching..." : "Apply filter"}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
//======================================
export function JobsList({ initialList }: { initialList: JobPostCardProps[] }) {
  const searchParams = {
    reactjs: parseAsBoolean,
    isHiringAgency: parseAsBoolean.withDefault(true),
    workplaceType: parseAsString,
    // workplaceType: parseAsArrayOf(parseAsString).withDefault([]),
  }
  const queryStatesReturn = useQueryStates(searchParams, {
    clearOnDefault: true,
  })
  const serialize = createSerializer(searchParams)
  const serialized = serialize(queryStatesReturn[0])

  const filterQuery = useQuery({
    queryKey: ["jobs", serialized],
    queryFn: async () =>
      fetch(`/api/jobs${serialized}`).then((res) => res.json()),
    enabled: false,
  })
  const infiniteQuery = useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: async ({ pageParam }) =>
      fetch(`/api/jobs?page=${pageParam}`).then((res) => res.json()),
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    initialData: { pages: [initialList], pageParams: [1] },
  })
  const { fetchNextPage, isFetchingNextPage } = infiniteQuery
  const [jobs, setJobs] = React.useState(infiniteQuery.data?.pages.flat())

  React.useEffect(() => {
    if (filterQuery.data) {
      setJobs(filterQuery.data)
    }
  }, [filterQuery.data])

  React.useEffect(() => {
    if (infiniteQuery.data) {
      setJobs(infiniteQuery.data.pages.flat())
    }
  }, [infiniteQuery.data])

  const [queryStates, setQueryStates] = queryStatesReturn

  const [isFilterOpen, setIsFilterOpen] = React.useState(false)
  const resetFilter = () => {
    setQueryStates(nullifyObject(queryStates))
    setJobs(infiniteQuery.data?.pages.flat())
  }
  return (
    <section>
      <div className="max-w-3xl mx-auto mb-5">
        <div className="flex-row-between w-full px-4 py-4 border-x border-dashed">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            <VscSettings className="size-4 mr-2" />
            {isFilterOpen ? "Hide filter" : "Filter"}
          </Button>
          <Button variant="default" asChild>
            <Link href={urls.createJob}>Post a job</Link>
          </Button>
        </div>
        <AnimatePresence mode="wait">
          {isFilterOpen && (
            <JobFilter
              onApplyFilter={() => filterQuery.refetch()}
              queryStatesReturn={queryStatesReturn}
              resetFilter={resetFilter}
              status={filterQuery.fetchStatus}
            />
          )}
        </AnimatePresence>
        {jobs.map((o, i) => (
          <JobCard key={i+1} isLast={jobs.length - 1 == i} {...o} />
        ))}
      </div>
      <div className="flex-row-center w-full">
        {!serialized && (
          <Button
            type="button"
            variant={"outline"}
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            data-umami-event={`fetch jobs ${infiniteQuery.data.pageParams.length}`}
          >
            {isFetchingNextPage ? "Fetching jobs..." : "Load more jobs"}
          </Button>
        )}
      </div>
    </section>
  )
}