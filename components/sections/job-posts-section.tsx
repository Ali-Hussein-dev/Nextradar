import { getJobsPage } from "@/sanity/lib/getters"
import { getFormattedTime } from "@/lib/get-formatted-time"
import { Button } from "@/components/button"
import { CardWrapper } from "@/components/ui/card-wrapper"
import React from "react"
import Link from "next/link"
import { JobList } from "../job-list"
import { IoTimeOutline } from "react-icons/io5"
import { JobPost } from "@/sanity/types"
import { urls } from "@/constants/urls"

export type JobPostCardProps = Pick<
  JobPost,
  | "jobTitle"
  | "companyName"
  | "location"
  | "branch"
  | "currency"
  | "applyUrl"
  | "jobType"
  | "contractType"
  | "publishedAt"
  | "slug"
  | "jobHook"
  | "benefits"
  | "salary"
  | "timeZone"
  | "company"
  | "workplaceType"
>
//======================================
export const JobCard = (props: JobPostCardProps) => {
  const {
    jobTitle,
    companyName = "",
    branch,
    applyUrl,
    jobType,
    contractType,
    publishedAt,
    slug,
    benefits,
    salary,
    timeZone = "",
    company,
    location,
    workplaceType,
  } = props
  return (
    <CardWrapper className="rounded-none dark:bg-transparent border-dashed py-5 shadow-none md:shadow">
      <div className="grow">
        <span className="text-lg md:text-xl font-bold ">{jobTitle}</span>
        <div className="flex-row-between dark:text-zinc-600 text-zinc-500 pt-2">
          <div className="flex-col-start gap-1 text-sm">
            <span>{companyName || company?.name}</span>
            <span>{timeZone || location}</span>
            <span>{branch}</span>
          </div>
          <div className="flex-col-end gap-1 text-sm">
            <span className="capitalize">{contractType}</span>
            <span className="capitalize">{jobType || workplaceType}</span>
            {salary && (
              <div className="flex-row-end gap-1">
                <span>
                  {salary.minimum}- {salary.maximum}
                </span>
                <span className="uppercase">{salary.currency}</span>
              </div>
            )}
          </div>
        </div>
        <div className="pt-4">
          {benefits && (
            <div className="dark:text-zinc-300 dark:border-zinc-700 border-dashed border-b pb-2">
              <div className="flex-row-start gap-2 flex-wrap">
                <span className="font-semibold dark:text-green-300 flex-row-start gap-1 text-green-600">
                  Perks:
                </span>
                {benefits?.slice(0, 3).map((str) => (
                  <span key={str} className="px-1">
                    {str}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-row-between gap-4 pt-4 dark:border-zinc-800 border-dashed w-full">
        <div className="dark:text-zinc-500 text-zinc-600 text-sm flex-row-start gap-1">
          <IoTimeOutline className="size-5" />{" "}
          {getFormattedTime(publishedAt as string)}
        </div>
        <div className="flex-row-end gap-2">
          {/* <JobPostDrawer {...props} /> */}
          <Button asChild size="sm" variant="ghost">
            <Link href={`${urls.jobs}/${slug}`} prefetch={false}>
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
  return <JobList initialList={list} />
}
