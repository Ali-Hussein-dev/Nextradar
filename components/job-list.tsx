"use client"
import * as React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import {
  JobPostCardProps,
  JobCard,
} from "@/components/sections/job-posts-section"

//======================================
export function JobList({ initialList }: { initialList: JobPostCardProps[] }) {
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
          <JobCard key={i} isLast={jobsCards.length - 1 == i} {...o} />
        ))}
      </div>
      <div className="flex-row-center w-full">
        <Button
          type="button"
          variant={"outline"}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Fetching jobs..." : "Load more jobs"}
        </Button>
      </div>
    </section>
  )
}
