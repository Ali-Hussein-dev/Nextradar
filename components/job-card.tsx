import { Button } from "./button"
import { JobPostDrawer } from "./job-post-drawer"
import { type TypedObject } from "sanity"

export type JobPostLong = {
  aboutRole: TypedObject[]
  requirements: TypedObject[]
  benefits: TypedObject[]
  responsibilities: TypedObject[]
  aboutCompany: TypedObject[]
  hiringProcess: TypedObject[]
  whyJoinUs: TypedObject[]
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
  contractType,
  // drawer props
  aboutRole,
  aboutCompany,
  benefits,
  responsibilities,
  requirements,
  whyJoinUs,
  hiringProcess,
}: JobPost & JobPostLong) => {
  return (
    <div className="rounded-xl p-4 pt-6 dark:bg-zinc-800/20 shadow">
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
              <span>{salaryMin / 1000}K</span>-<span>{salaryMax / 1000}K</span>
              <span>{currency}</span>
            </div>
          ) : null}
        </div>
      </div>
      <p className="dark:text-zinc-300">{shortDescription}</p>
      <div className="flex-row-end gap-4 border-t pt-4 dark:border-zinc-900 border-dashed">
        <JobPostDrawer
          aboutCompany={aboutCompany}
          aboutRole={aboutRole}
          benefits={benefits}
          responsibilities={responsibilities}
          requirements={requirements}
          whyJoinUs={whyJoinUs}
          hiringProcess={hiringProcess}
          jobTitle={jobTitle}
        />
        <Button asChild size="sm">
          <a href={applyUrl}>Apply</a>
        </Button>
      </div>
    </div>
  )
}
