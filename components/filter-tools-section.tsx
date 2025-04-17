"use client"
import { Repo } from "@/lib/get-repos-github"
import { useFilter } from "@/hooks/use-filtered-list"
import { RepoCard } from "@/components/repo-card"
import { Button } from "@/components/ui/button"

//======================================
export function FilterToolsSection({ list, tags }: { list: Repo[]; tags: string[] }) {
  const { current, filtered, setFilter } = useFilter({
    list: list,
    filterFn: (item, filter) => {
      if (filter === "All") return true
      return item.tags?.includes(filter)
    },
    param: {
      name: "tag",
      value: "All",
    },
  })
  return (
    <div className="w-full py-6 px-2 md:px-5">
      <div className="flex flex-wrap w-full gap-2 px-1 border-b border-dashed pb-4">
        <Button
          size="sm"
          onClick={() => setFilter("All")}
          variant={current == "All" ? "default" : "ghost"}
        >
          All
        </Button>
        {tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag, i) => (
            <Button
              key={tag}
              size="sm"
              variant={current == tag ? "default" : "ghost"}
              onClick={() => setFilter(tag)}
              className="capitalize"
            >
              {tag}
            </Button>
          ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-4 w-full pt-8">
        {filtered
          .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          .map((repo, i) => (
            <RepoCard key={i} repo={repo} />
          ))}{" "}
      </div>
    </div>
  )
}
