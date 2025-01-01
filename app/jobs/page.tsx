import { InitialJobPostsList } from "@/jobs/components/initial-job-posts-list"
import { getTopHiringCompanies } from "@/jobs/sanity/getters"
import * as React from "react"

// export const dynamic = "auto"

//======================================
export default async function JobsPage() {
  const companies = await getTopHiringCompanies()
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="max-w-3xl mx-auto pt-6">
        <div className="pt-6 border-x border-t border-b md:border-b-transparent border-dashed mb-4 md:mb-0">
          <h1 className="mb-3 text-xl font-extrabold text-center text-pretty">
            Nextjs Jobs and Reactjs Jobs
          </h1>
          <p className="dark:text-zinc-500 text-zinc-700 tracking-wide text-base text-center text-pretty pb-5 px-3 md:px-6">
            Find only relevant job roles, no spam and directly from employers.
          </p>
          <div className="border-y grid md:grid-cols-8 border-dashed">
            <div className="md:col-span-1 hidden md:block"></div>
            <div className="md:col-span-6 md:border-x border-dashed py-6 px-1">
              <p className="text-center font-semibold dark:text-zinc-300 text-zinc-700 text-lg">
                Who is hiring
              </p>
              <div className="flex-row-center gap-3 md:gap-5 lg:gap-6 px-2 pt-3 mx-auto">
                {companies
                  ?.filter((o) => o.name)
                  .map(({ name }, i) => (
                    <div key={i} className="">
                      {/* <Icon className="size-7 dark:text-zinc-300 text-zinc-700" /> */}
                      <span className="dark:text-zinc-500 text-zinc-700">
                        {name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="md:col-span-1 hidden md:block"></div>
          </div>
        </div>
      </div>
      <React.Suspense
        fallback={
          <div className="flex-row-center w-full text-lg">Loading...</div>
        }
      >
        <InitialJobPostsList />
      </React.Suspense>
    </div>
  )
}
