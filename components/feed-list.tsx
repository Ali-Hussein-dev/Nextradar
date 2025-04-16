"use client";
import { FeedCard, FeedCardProps } from "@/components/feed";
import * as React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

//======================================
export const FeedList = ({ initialList }: { initialList: FeedCardProps[] }) => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: async ({ pageParam }) =>
      fetch(`/api/feed?page=${pageParam}`).then((res) => res.json()),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
    initialData: { pages: [initialList], pageParams: [1] },
  });

  return (
    <>
      <div className="space-y-2 md:space-y-3 px-2">
        {Object.entries(
          data?.pages?.flat()?.reduce(
            (result, item) => {
              const date = new Date(item._createdAt);
              const month = date.toLocaleString("default", {
                month: "short",
              });
              const year = date.getFullYear();
              const monthYear = `${month} ${year}`;

              if (!result[monthYear]) {
                result[monthYear] = [];
              }
              result[monthYear].push(item);
              return result;
            },
            {} as { [key: string]: FeedCardProps[] }
          )
        ).map(([month, items], i) => (
          <React.Fragment key={i}>
            <div className="pb-4 border-b border-dashed">
              <div
                id={`#${month}`}
                className="flex items-center font-medium pt-2 text-secondary-foreground/80"
              >
                <CalendarIcon className="mr-2 size-5" />
                {month}
              </div>
              <div className="space-y-4">
                {(items as FeedCardProps[])
                  .sort(
                    (a, b) => (b.sponsored ? 1 : -1) - (a.sponsored ? 1 : -1)
                  )
                  .map((o, j) => (
                    <FeedCard key={j} {...o} />
                  ))}
              </div>
            </div>
          </React.Fragment>
        ))}
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
  );
};
