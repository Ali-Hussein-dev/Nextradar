import { Repo } from "@/lib/get-repos-github"
// import { slugify } from "@/lib/utils"
import { CiStar } from "react-icons/ci"
import { TbExternalLink } from "react-icons/tb"
import { Button } from "@/components/button"
import { FaGithub } from "react-icons/fa"
import { CardWrapper } from "@/components/ui/card-wrapper"

export const RepoCard = ({ repo }: { repo: Repo }) => {
  // const slug = slugify(repo.name)
  return (
    <CardWrapper>
      <div className="flex-row-between">
        <h3 className="my-0 scroll-m-20 font-bold text-xl capitalize">
          {repo.name}
        </h3>
        {repo?.stars && (
          <span className="flex-row-start gap-1">
            <CiStar size="18" />
            {repo.stars > 1000
              ? `${(repo.stars / 1000).toFixed(1)}k`
              : repo.stars}
          </span>
        )}
      </div>
      <div className="mb-3 max-w-2xl h-full">
        <p className="mt-2 mb-0 dark:text-zinc-300 line-clamp-2">
          {repo.description}
        </p>
        {repo?.createdBy && (
          <span className="text-sm dark:text-zinc-500">{repo.createdBy}</span>
        )}
      </div>
      <div className="flex-row-between pt-2 dark:border-zinc-700 border-t border-dashed">
        {repo?.tags?.map((tag: string) => (
          <span
            key={tag}
            className="p-1 text-xs bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 rounded-sm mr-1"
          >
            {tag}
          </span>
        ))}
        <div className="flex-row-end grow gap-3">
          {repo?.gh && (
            <Button
              size="icon"
              asChild
              variant="outline"
              className="rounded-lg"
            >
              <a href={repo.gh} target="_blank" rel="noopener noreferrer">
                <FaGithub size="17" />
              </a>
            </Button>
          )}
          {repo?.homepage && (
            <Button
              asChild
              variant={"secondary"}
              className="rounded-lg gap-3 no-underline dark:text-green-300 text-green-500"
            >
              <a href={repo.homepage} target="_blank">
                Visit
                <TbExternalLink size="16" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}
