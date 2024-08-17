import { getJobPosts } from "@/sanity/lib/getters"
import { getFormattedTime } from "@/lib/get-formatted-time"
import { Button } from "@/components/button"
import { type TypedObject } from "sanity"
import { CardWrapper } from "@/components/ui/card-wrapper"
import React from "react"
import Link from "next/link"

export type JobPost = {
  jobTitle: string
  companyName: string
  location: string
  branch: string
  salaryMin: number
  salaryMax: number
  currency: string
  applyUrl: string
  jobType: string[]
  shortDescription: string
  contractType: string
  publishedAt: string
  longDescription: TypedObject[]
  slug: string
}
//======================================
export const JobCard = (props: JobPost) => {
  const {
    jobTitle,
    companyName,
    location,
    branch,
    salaryMin,
    salaryMax,
    currency,
    applyUrl,
    jobType,
    shortDescription,
    contractType,
    publishedAt,
    slug,
  } = props
  return (
    <CardWrapper>
      <div className="grow">
        <span className="text-lg font-bold">{jobTitle}</span>
        <div className="flex-row-between dark:text-zinc-600 text-zinc-500">
          <div className="flex-col-start gap-1 text-sm">
            <span>{companyName}</span>
            <span>{location}</span>
            <span>{branch}</span>
          </div>
          <div className="flex-col-end gap-1 text-sm">
            <span className="capitalize">{contractType}</span>
            <span className="capitalize">{jobType}</span>
            {salaryMax && salaryMin ? (
              <div className="flex-row-end gap-1">
                <span>{salaryMin / 1000}K</span>-
                <span>{salaryMax / 1000}K</span>
                <span>{currency}</span>
              </div>
            ) : null}
          </div>
        </div>
        <p className="dark:text-zinc-400 text-lg line-clamp-2">
          {shortDescription}
        </p>
      </div>
      <div className="flex-row-between gap-4 border-t pt-4 dark:border-zinc-800 border-dashed w-full">
        <span className="dark:text-zinc-500 text-zinc-600 text-sm">
          Published {getFormattedTime(publishedAt)}
        </span>
        <div className="flex-row-end gap-2">
          {/* <JobPostDrawer {...props} /> */}
          <Button asChild size="sm" variant="ghost">
            <Link href={`/docs/j/${slug}`} prefetch={false}>
              View Job
            </Link>
          </Button>
          <Button asChild size="sm">
            <a href={applyUrl}>Apply</a>
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}
const TextHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="dark:bg-zinc-800/50 px-0.5 dark:text-green-300 backdrop-blur-lg text-green-500 bg-green-100/80 font-medium">
    {children}
  </span>
)
//======================================
export const JobPostsSection = async () => {
  const list = await getJobPosts()
  return (
    <>
      <section className="mx-auto">
        <div className="mb-8 pl-2 md:pl-6">
          <h2 className="mb-1 text-xl mt-0 md:text-2xl text-center">
            Fresh job opportunities <br /> only for{" "}
            <TextHighlight>Nextjs</TextHighlight> &{" "}
            <TextHighlight>React</TextHighlight> devs
          </h2>
          {/* <h3 className="dark:text-zinc-400 font-medium text-base">
            Bypass the middleman and apply directly to startups and employers.
          </h3> */}
        </div>
        <div className="grid gap-5">
          {list.map((job, i) => (
            <React.Suspense key={i}>
              <JobCard {...job} />
            </React.Suspense>
          ))}
        </div>
      </section>
    </>
  )
}
