import { getFormattedTime } from "@/lib/get-formatted-time"
import { Button } from "./button"
import { JobPostDrawer } from "./job-post-drawer"
import { type TypedObject } from "sanity"
import { CardWrapper } from "@/components/ui/card-wrapper"

export type JobPostLong = {
  aboutRole: TypedObject[]
  requirements: TypedObject[]
  benefits: TypedObject[]
  responsibilities: TypedObject[]
  aboutCompany: TypedObject[]
  hiringProcess: TypedObject[]
  whyJoinUs: TypedObject[]
  longDescription: TypedObject[]
}
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
}
//======================================
export const JobCard = ({
  jobTitle,
  companyName,
  location,
  currency,
  applyUrl,
  branch,
  jobType,
  salaryMax,
  salaryMin,
  shortDescription,
  longDescription,
  contractType,
  // drawer props
  aboutRole,
  aboutCompany,
  benefits,
  responsibilities,
  requirements,
  whyJoinUs,
  hiringProcess,
  publishedAt,
}: JobPost & JobPostLong) => {
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
          <JobPostDrawer
            aboutCompany={aboutCompany}
            aboutRole={aboutRole}
            benefits={benefits}
            responsibilities={responsibilities}
            requirements={requirements}
            whyJoinUs={whyJoinUs}
            hiringProcess={hiringProcess}
            longDescription={longDescription}
            jobTitle={jobTitle}
          />
          <Button asChild size="sm">
            <a href={applyUrl}>Apply</a>
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}
