/* eslint-disable @next/next/no-img-element */
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
        <h2 className="my-0 scroll-m-20 font-bold text-xl capitalize">
          {repo.avatar && (
            <img
              src={repo.avatar}
              alt={repo.name}
              className="size-6 mr-2 inline-block rounded-full my-0"
            />
          )}
          {repo.name}
        </h2>
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 dark:border-zinc-700 border-t border-dashed">
        <div className="flex-row-between grow h-full gap-3">
          <div className="flex-row-start h-full grow gap-1">
            {repo?.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 h-full center text-xs bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 rounded-[2px] capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex-row-end gap-2">
            {repo?.owner && repo.repoName && (
              <Button
                size="icon"
                asChild
                variant="outline"
                className="rounded-lg"
              >
                <a
                  href={`https://github.com/${repo.owner}/${repo.repoName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
      </div>
    </CardWrapper>
  )
}
