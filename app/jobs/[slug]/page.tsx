import type { Metadata } from "next"
import { getJobPostMetaSlug } from "@/sanity/lib/getters"
import { FullJobPost } from "@/components/full-job-post"
import { redirect } from "next/navigation"
import { urls } from "@/constants/urls"
import * as React from "react"

export const revalidate = 3600

export default async function JobPage({
  params,
}: {
  params: { slug: string }
}) {
  // const post = await getJobPostBy_Id({ slug: params.slug })
  return (
    <div className="max-w-5xl mx-auto h-full">
      <React.Suspense>
        <FullJobPost slug={params.slug} />
      </React.Suspense>
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string }
}) {
  const data = await getJobPostMetaSlug({ slug: params.slug! })
  if (!data) {
    redirect(urls.jobsExpired)
  }

  return {
    title: data.jobTitle,
    // description: data.shortDescription,
  } satisfies Metadata
}
