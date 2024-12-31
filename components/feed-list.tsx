"use client"
import { FeedCard, FeedCardProps } from "@/components/feed"
import * as React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { SponsoredCard } from "@/components/sponsor"

//======================================
export const FeedList = ({ initialList }: { initialList: FeedCardProps[] }) => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: async ({ pageParam }) =>
      fetch(`/api/feed?page=${pageParam}`).then((res) => res.json()),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    },
    initialData: { pages: [initialList], pageParams: [1] },
  })

  return (
    <>
      {/* <div className="text-center">
        {fetchStatus == "fetching" && !data && "fetching data..."}
      </div> */}
      <div className="space-y-5 md:space-y-7 px-2">
        {data?.pages.flat().map((o, i) => {
          if (i == 2 || i == 11) {
            return (
              <div key={i}>
                <SponsoredCard />
                <FeedCard key={i} {...o} />
              </div>
            )
          }
          return <FeedCard key={i} {...o} />
        })}
      </div>
      <div className="flex-row-center w-full">
        <Button
          type="button"
          variant={"outline"}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      </div>
    </>
  )
}
