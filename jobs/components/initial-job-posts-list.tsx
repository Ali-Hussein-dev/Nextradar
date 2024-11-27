import { getJobsPage } from "@/jobs/sanity/getters"
import React from "react"
import { JobsList } from "@/jobs/components/jobs-list"

//======================================
export const InitialJobPostsList = async () => {
  const list = await getJobsPage({ page: 1, pageSize: 8 })
  return <JobsList initialList={list} />
}
