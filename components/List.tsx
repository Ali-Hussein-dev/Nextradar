import { Repo, getByCategory } from "@/lib/repos"
import { CiStar } from "react-icons/ci"
import { TbExternalLink } from "react-icons/tb"

//======================================
export const ItemsList = async ({ category }: { category: string }) => {
  const list = (await getByCategory(category)) as Repo[]
  return (
    <div className="space-y-4 mx-auto">
      {list.map((repo, i) => (
        <div key={i} className="rounded-lg border dark:border-zinc-900 p-4">
          <div className="flex-row-between">
            <span className="font-bold text-xl capitalize">{repo.name}</span>
            {repo?.stars && (
              <span className="flex-row-start gap-1">
                <CiStar size="18" />
                {repo.stars > 1000
                  ? `${(repo.stars / 1000).toFixed(1)}k`
                  : repo.stars}
              </span>
            )}
          </div>
          <div className="mb-3 max-w-xl">
            <p className="mt-2 mb-0 dark:text-zinc-300">{repo.description}</p>
            {repo?.createdBy && (
              <span className="text-sm dark:text-zinc-500">
                {repo.createdBy}
              </span>
            )}
          </div>
          <div className="flex-row-between pt-2">
            {repo?.tags?.map((tag: string) => (
              <span
                key={tag}
                className="p-1 text-xs bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 rounded-sm mr-1"
              >
                {tag}
              </span>
            ))}
            <div className="flex-row-end grow">
              <a
                href={repo.homepage}
                className="py-1.5 flex items-center no-underline gap-2 border rounded-full px-4"
                target="_blank"
              >
                Learn more
                <TbExternalLink size="15" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
