import { client } from "./client"

export const getJobPosts = async (): Promise<any[]> => {
    return client.fetch(`*[_type == "jobPost"] | order(_createdAt desc) {
        jobTitle,
        companyName,
        location,
        branch,
        salaryMin,
        salaryMax,
        currency,
        applyUrl,
        jobType,
        contractType,
        aboutRole,
        shortDescription,
        requirements,
        aboutCompany,
        requirements,
        benefits,
        responsibilities,
        hiringProcess,
        whyJoinUs,
        }`)
}