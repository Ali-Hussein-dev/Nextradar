/* eslint-disable @next/next/no-img-element */
import { Repo } from "@/lib/get-repos-github";
import { CiStar } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <Card className="border-dashed flex flex-col">
      <CardHeader className="flex-row-between">
        <CardTitle>
          {repo.avatar && (
            <img
              src={repo.avatar}
              alt={repo.name}
              className="size-6 mr-2 inline-block rounded-full my-0"
            />
          )}
          {repo.name}
        </CardTitle>
        {repo?.stars && (
          <span className="flex-row-start gap-1">
            <CiStar size="18" />
            {repo.stars > 1000
              ? `${(repo.stars / 1000).toFixed(1)}k`
              : repo.stars}
          </span>
        )}
      </CardHeader>
      <CardContent className="grow">
        <CardDescription>{repo.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:items-center gap-2">
        <div className="flex-row-between grow gap-3 w-full">
          <div className="flex-row-start h-full grow gap-1">
            {repo?.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 h-full center text-xs bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 rounded-[2px] capitalize py-0.5"
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
                className="gap-1.5 no-underline"
                size="sm"
              >
                <a href={repo.homepage} target="_blank">
                  Visit
                  <MdOutlineArrowOutward size="16" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
