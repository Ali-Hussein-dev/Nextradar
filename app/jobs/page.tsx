import { JobPostsSection } from "@/components/sections/job-posts-section"
import * as React from "react"

//======================================
export default function JobsPage() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="p-2 max-w-[45rem] mx-auto mb-8 pt-6 pb-4">
        <div className="px-2 mx-auto">
          <h1 className="mb-3 text-xl sm:text-2xl font-bold text-center text-pretty">
            Top Jobs Opportunities for Specialized Developers
          </h1>
          <p className="dark:text-zinc-500 tracking-wide text-base text-center ">
            Get hired by companies who are looking for your skills and
            experience in <br /> Next.js and React.js
          </p>
        </div>
        {/* <div className="flex-row-end w-full pr-1 pb-1">
          <Button variant="outline">Post a job</Button>
        </div> */}
      </div>
      <React.Suspense>
        <JobPostsSection />
      </React.Suspense>
    </div>
  )
}
