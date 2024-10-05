import { Newsletter2 } from "@/components/newsletter"
import { Search } from "@/components/search"
import { FeedList } from "./feed-list"
import { Suspense } from "react"

//======================================
export const Feed = async () => {
  return (
    <div>
      <div className="grid gap-5 max-w-2xl mx-auto py-6">
        <Suspense>
          <Search />
        </Suspense>
        <FeedList />
      </div>
      <Newsletter2 />
    </div>
  )
}
