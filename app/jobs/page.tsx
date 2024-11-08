import { JobPostsSection } from "@/components/sections/job-posts-section"
import { Button } from "@/components/ui/button"
import { urls } from "@/constants/urls"
import Link from "next/link"
import * as React from "react"

//======================================
export default function JobsPage() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="max-w-3xl mx-auto mb-4 pt-6">
        <div className="pb-2">
          <h1 className="mb-3 text-xl font-extrabold text-center text-pretty">
            Top Jobs Opportunities for Specialized Developers
          </h1>
          <p className="dark:text-zinc-500 tracking-wide text-base text-center  text-pretty">
            Get hired by companies who are looking for your skills and
            experience in Next.js and React.js
          </p>
        </div>
        <div className="flex-row-end w-full">
          <Button variant="outline" asChild>
            <Link href={urls.createJob}>Post a job</Link>
          </Button>
        </div>
      </div>
      <React.Suspense>
        <JobPostsSection />
      </React.Suspense>
    </div>
  )
}
