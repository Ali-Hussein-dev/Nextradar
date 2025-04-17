"use client"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Input, InputBlock } from "@/components/ui/input"
import { MdOutlineClear } from "react-icons/md"
import { useForm, SubmitHandler } from "react-hook-form"
import { FeedCard, type FeedCardProps } from "@/components/feed"
import { ImSearch } from "react-icons/im"
// import { useQueryState, parseAsString } from "nuqs"
import { PiSpinnerGap } from "react-icons/pi"
import * as React from "react"
import Link from "next/link"
import { urls } from "@/constants/urls"

type Input = {
  q: string
}
const useSearch = () => {
  const { register, handleSubmit, watch, setValue } = useForm<Input>()
  const inputValue = watch("q")
  // const [q, setQ] = useQueryState("q", parseAsString.withDefault(inputValue))
  const { data, refetch, fetchStatus } = useQuery({
    queryKey: ["search", inputValue],
    queryFn: async () => fetch(`/api/search?q=${inputValue}`).then((res) => res.json()),
    enabled: false,
  })
  const onSubmit: SubmitHandler<Input> = () => {
    if (inputValue) {
      refetch()
    }
  }
  // const closeResults = () => {
  //   setQ("")
  // }
  const cleanInput = () => {
    setValue("q", "")
  }
  return {
    register,
    handleSubmit,
    inputValue,
    data,
    fetchStatus,
    onSubmit,
    cleanInput,
    // closeResults,
  }
}
const recommendation = {
  jobs: {
    queries: ["jobs", "careers", "work", "employment", "software dev"],
    name: "Jobs",
    href: urls.jobs,
  },
  courses: {
    name: "Courses",
    href: urls.learn,
    queries: ["course", " learning", " education", "learn", "tutorial"],
  },
  templates: {
    name: "Templates",
    href: "/templates",
    queries: ["template", "starter", "boilerplate", "scaffold"],
  },
  cms: {
    name: "CMS",
    href: urls.headlessCms,
    queries: ["cms", "content management system", "headless"],
  },
  hosting: {
    name: "Hosting",
    href: urls.hosting,
    queries: ["hosting", "deploy", "deployment", "cloud"],
  },
  tools: {
    name: "Tools",
    href: urls.tools,
    queries: ["tool", "software", "utility", "plugin"],
  },
  openSource: {
    name: "Open Source",
    href: urls.osProjects,
    queries: ["open source", "real world app", "example", "project"],
  },
}
const NoResults = ({ query }: { query: string }) => {
  const recommend = Object.values(recommendation).find((o) => {
    return o.queries.some((q) => q.toLowerCase().startsWith(query.trim().toLowerCase()))
  })
  // console.log("🚀 ~ NoResults ~ recommend:", recommend)
  return (
    <div>
      No results found
      <div>
        {recommend ? (
          <div className="py-1 border-t mt-2">
            Related secion:{" "}
            <Button variant="link" size="sm">
              <Link href={recommend.href}>{recommend.name}</Link>
            </Button>
          </div>
        ) : (
          <div className="pt-2">Try different keywords</div>
        )}
      </div>
    </div>
  )
}
//======================================
export function Search() {
  const {
    register,
    handleSubmit,
    inputValue,
    data,
    fetchStatus,
    onSubmit,
    cleanInput,
    // closeResults,
  } = useSearch()

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-row-start gap-1 w-full">
        <InputBlock
          root={{
            className: "rounded-full md:pl-3 lg:pl-4",
            size: "lg",
          }}
          rightSection={
            <div className="flex-row-end gap-2">
              {inputValue ? (
                <Button
                  type="button"
                  size="icon"
                  variant={"ghost"}
                  onClick={cleanInput}
                  className="rounded-full size-9"
                >
                  <MdOutlineClear />
                </Button>
              ) : undefined}
              <Button
                type="submit"
                size="icon"
                data-umami-event="search"
                variant="secondary"
                className="rounded-full size-9"
                disabled={fetchStatus == "fetching" || !inputValue}
              >
                {fetchStatus == "fetching" ? (
                  <PiSpinnerGap className="animate-spin" />
                ) : (
                  <ImSearch className="size-4" />
                )}
              </Button>
            </div>
          }
        >
          <Input
            placeholder="Search top resources"
            // defaultValue={}
            {...register("q", { required: true })}
          />
        </InputBlock>
      </form>
      {data && (
        <div className="py-5 md:px-4 animate-in px-2 border border-dashed rounded-2xl mt-5">
          {!data.error ? (
            <div>
              <div>
                {data.length == 0 ? (
                  <NoResults query={inputValue} />
                ) : (
                  data.length + " results found"
                )}
              </div>
              <div className="space-y-4">
                {data.map((o: FeedCardProps) => (
                  <FeedCard key={o.name} {...o} />
                ))}
              </div>
            </div>
          ) : (
            <div>{data.error.message}</div>
          )}
        </div>
      )}
    </div>
  )
}
