import { client } from "@/sanity/lib/client"
import { JobPostCardProps } from "@/jobs/components/initial-job-posts-list"
import { JobPost } from "@/sanity/types"
import { defineQuery } from "next-sanity"
//------------------------------------------------------------Jobs-Posts
export const getJobPosts = async (): Promise<JobPostCardProps[]> => {
    return client.fetch(`*[_type == "jobPost"] | order(publishedAt desc) {
        jobTitle,
        "slug": slug.current,
        companyName,
        location,
        branch,
        salaryMin,
        salaryMax,
        currency,
        publishedAt,
        applyUrl,
        jobType,
        contractType,
        jobHook,
        }`)
}
export const getJobsPage = async ({
    page = 1,
    pageSize = 5,
    fields = `jobTitle,
        "slug": slug.current,
        publishedAt,
        "companyName": company.name,
        timeZone
        `,
    // companyName,
    // location,
    // branch,
    // salaryMin,
    // salaryMax,
    // currency,
    // applyUrl,
    // jobType,
    // contractType,
    // jobHook,
    // benefits,
    // company,
    // workplaceType
}: {
    page?: number;
    pageSize?: number;
    /**
     * Select fields to return from the query
     */
    fields?: string;
}) => {
    const offset = (page - 1) * pageSize;
    const jobPostQuery = defineQuery(`*[_type == "jobPost"] | order(publishedAt desc) [${offset}...${offset + pageSize}] {
        ${fields}
    }`)
    return client.fetch(jobPostQuery);
};
//------------------------------------------------------------Jobs-Posts-By-Slug
export const getFullJobPostBySlug = async ({
    slug,
}: {
    slug: string
}): Promise<JobPost> => {
    const jobPostPageQuery = defineQuery(`*[_type == "jobPost" && slug.current == $slug ][0] {
        jobTitle,
        companyName,
        location,
        branch,
        applyUrl,
        jobType,
        contractType,
        description,
        longDescription,
        company,
        salary,
        benefits,
        timeZone,
        workplaceType,
        publishedAt
        }`)

    return client.fetch(
        jobPostPageQuery,
        { slug }
    )
}
export function getTopHiringCompanies(): Promise<{ name: string }[]> {
    return client.fetch(`*[_type == "jobPost"][0...5] | order(publishedAt desc) {
        "name": company.name
    }`)
}
//------------------------------------------------------------Jobs-Posts-By-Id
export const getJobPostMetaSlug = async ({
    slug,
}: {
    slug: string
}): Promise<Pick<JobPostCardProps, "jobTitle">> => {
    return client.fetch(
        `*[_type == "jobPost" && slug.current == $slug ][0] {
        jobTitle
        }`,
        { slug }
    )
}
// use for generating sitemap
//------------------------------------------------------------Jobs-Posts-By-slug
export const getAllJobPostSlugs = async (): Promise<{ slug: string }[]> => {
    return client.fetch(`*[_type == "jobPost" ] {
        "slug": slug.current,
        }`)
}