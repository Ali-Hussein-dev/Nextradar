"use client"
import * as React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { JobPostCardProps, JobCard } from "@/jobs/components/job-card"

//======================================
export function JobsList({ initialList }: { initialList: JobPostCardProps[] }) {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: async ({ pageParam }) =>
      fetch(`/api/jobs?page=${pageParam}`).then((res) => res.json()),
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    initialData: { pages: [initialList], pageParams: [1] },
  })
  const jobsCards = data?.pages.flat()
  return (
    <section>
      <div className="max-w-3xl mx-auto mb-5">
        {jobsCards.map((o, i) => (
          <JobCard key={o.jobTitle} isLast={jobsCards.length - 1 == i} {...o} />
        ))}
      </div>
      <div className="flex-row-center w-full">
        <Button
          type="button"
          variant={"outline"}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          data-umami-event="fetch jobs"
        >
          {isFetchingNextPage ? "Fetching jobs..." : "Load more jobs"}
        </Button>
      </div>
    </section>
  )
}
