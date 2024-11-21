import { JobPostsSection } from "@/components/sections/job-posts-section"
import { Button } from "@/components/ui/button"
import { urls } from "@/constants/urls"
import { getTopHiringCompanies } from "@/sanity/lib/getters"
import Link from "next/link"
import * as React from "react"

export const dynamic = "force-dynamic"

//======================================
export default async function JobsPage() {
  const companies = await getTopHiringCompanies()
  return (
              <h1 className="mb-3 text-xl font-extrabold text-center text-pretty md:text-2xl">
                Nextjs Jobs and Reactjs Jobs
              </h1>
              <p className="dark:text-zinc-500 text-zinc-700 tracking-wide text-base text-center text-pretty pb-5 px-3 md:px-6">
                Get hired by companies who are looking for professional
                engineers in Nextjs and Reactjs.
              </p>
    </div>
  )
}
