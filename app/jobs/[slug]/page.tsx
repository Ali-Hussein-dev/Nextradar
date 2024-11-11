import type { Metadata } from "next"
import { getFullJobPostBySlug, getJobPostMetaSlug } from "@/sanity/lib/getters"
import { FullJobPost } from "@/components/full-job-post"
import { redirect } from "next/navigation"
import { urls } from "@/constants/urls"
import * as React from "react"
import { StructuredDataScript } from "@/lib/seo"
import type { JobPosting, WithContext } from "schema-dts"
import { formatDate } from "date-fns"

export const revalidate = 3600

export default async function JobPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getFullJobPostBySlug({ slug: params.slug })
  if (!post) {
    redirect(urls.jobsExpired)
  }
  // Doc: https://developers.google.com/search/docs/appearance/structured-data/job-posting
  const structuredData: WithContext<JobPosting> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: post.jobTitle,
    description: post.description,
    // image: post.imageUrl,
    employmentType: post.contractType,
    // validThrough: "2024-03-18T00:00",
    datePosted: formatDate(post.publishedAt as string, "yyyy-MM-dd"),
    industry: post.branch,
    hiringOrganization: {
      "@type": "Organization",
      name: post?.company?.name!,
      // sameAs: "https://www.google.com",
      // logo: "https://www.example.com/images/logo.png",
    },
    jobLocation:
      post.workplaceType === "Remote"
        ? "TELECOMMUTE"
        : {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: post?.location,
            },
          },
    // jobBenefits: post.benefits,
  }
  return (
    <>
      <StructuredDataScript data={structuredData} />
      <div className="max-w-5xl mx-auto h-full">
        <FullJobPost post={post} />
      </div>
    </>
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
