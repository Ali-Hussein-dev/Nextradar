import type { Metadata } from "next"
import { getJobPostMetaSlug } from "@/sanity/lib/getters"
import { FullJobPost } from "@/components/full-job-post"

export const revalidate = 3600

export default async function JobPage({
  params,
}: {
  params: { slug: string }
}) {
  // const post = await getJobPostBy_Id({ slug: params.slug })
  return <FullJobPost slug={params.slug} />
}

export async function generateMetadata({ params }: { params: { slug?: string } }) {
  const data = await getJobPostMetaSlug({ slug: params.slug! })

  return {
    title: data.jobTitle,
    description: data.shortDescription,
  } satisfies Metadata
}
