import { getJobsPage } from "@/sanity/lib/getters"
import { getFormattedTime } from "@/lib/get-formatted-time"
import { Button } from "@/components/button"
import { type TypedObject } from "sanity"
import { CardWrapper } from "@/components/ui/card-wrapper"
import React from "react"
import Link from "next/link"
import { PortableText } from "next-sanity"
import { WiStars } from "react-icons/wi"
import { JobList } from "./job-list"
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
  jobHook: TypedObject[]
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
    jobHook,
  } = props
  return (
    <CardWrapper className="border rounded-none dark:bg-transparent border-dashed">
      <div className="grow">
        <span className="text-lg md:text-xl font-bold ">{jobTitle}</span>
        <div className="flex-row-between dark:text-zinc-600 text-zinc-500 pt-2">
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
        <div className="pt-4">
          <div className="dark:text-zinc-300 dark:border-zinc-700 border-dashed border-y pt-1">
            <h3 className="font-semibold dark:text-green-300 flex-row-start gap-1 text-green-600 mt-2">
              <WiStars size="20" />
              Top Benefits
            </h3>
            <PortableText value={jobHook} />
          </div>
        </div>
      </div>
      <div className="flex-row-between gap-4 pt-4 dark:border-zinc-800 border-dashed w-full">
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
            <a href={applyUrl}>Apply for Role</a>
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}
// const TextHighlight = ({ children }: { children: React.ReactNode }) => (
//   <span className="dark:bg-zinc-800/50 px-0.5 dark:text-green-300 backdrop-blur-lg text-green-500 bg-green-100/80 font-medium">
//     {children}
//   </span>
// )
//======================================
export const JobPostsSection = async () => {
  const list = await getJobsPage({ page: 1 })
  return (
    <>
      <div className="border border-dashed p-2 max-w-3xl mx-auto mb-8 pt-6 pb-4">
        <div className="px-2 max-w-2xl mx-auto">
          <h1 className="mb-3 text-xl mt-0 sm:text-2xl text-center text-pretty">
            Remote Jobs for Qualified Next.js Engineers
          </h1>
          <p className="dark:text-zinc-500 tracking-wide text-base text-center my-0">
            Discover top Next.js job opportunities tailored for front-end
            developers seeking exciting roles in wold-class companies.
          </p>
        </div>
        {/* <div className="flex-row-end w-full pr-1 pb-1">
          <Button variant="outline">Post a job</Button>
        </div> */}
      </div>
      <JobList initialList={list} />
    </>
  )
}
