import { Newsletter2 } from "@/components/newsletter"
import { Search } from "@/components/search"
import { FeedList } from "./feed-list"

//======================================
export const Feed = async () => {
  return (
    <div>
      <div className="grid gap-5 max-w-2xl mx-auto py-6">
        <Search />
        <FeedList />
      </div>
      <Newsletter2 />
    </div>
  )
}
