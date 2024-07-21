import { client } from "./client";

export const getSites = async () => (
    client.fetch(`*[_type == "sites"] | order(_createdAt asc) {
        owner, name, category, tags, createdBy, description, homepage
        }`
    )
)

export const getReposList = async () => (
    client.fetch(`*[_type == "repos"] | order(_createdAt asc) {
        owner, repoName, name, stars, category, tags
        }`
    )
)

// used in toc
export const getSitesNames = async () => (
    client.fetch(`*[_type == "sites"] | order(_createdAt asc) {
        name, category
        }`
    )
)
// used in toc
export const getReposNames = async () => (
    client.fetch(`*[_type == "repos"] | order(_createdAt asc) {
        name, category
        }`
    )
)

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