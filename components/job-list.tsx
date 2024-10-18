"use client"
import * as React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { JobPostCardProps, JobCard } from "@/components/job-posts-section"

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
  return (
    <section>
      <div className="grid gap-5 md:gap-8 max-w-3xl mx-auto mb-5">
        {data?.pages.flat().map((o, i) => <JobCard key={i} {...o} />)}
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
