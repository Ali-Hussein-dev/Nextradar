import { JobPostsSection } from "@/components/sections/job-posts-section"
import * as React from "react"

//======================================
export default function JobsPage() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <React.Suspense>
        <JobPostsSection />
      </React.Suspense>
    </div>
  )
}
