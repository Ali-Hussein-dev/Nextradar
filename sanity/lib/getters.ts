import { start } from "repl"
import { client } from "./client"


//------------------------------------------------------------Sites
export const getSites = async () =>
    client.fetch(`*[_type == "sites"] | order(_createdAt asc) {
        owner, name, category, tags, createdBy, description, homepage
        }`)
// used in toc
export const getSitesNames = async () =>
    client.fetch(`*[_type == "sites"] | order(_createdAt asc) {
        name, category
        }`)
//------------------------------------------------------------Repos
export const getReposList = async () =>
    client.fetch(`*[_type == "repos"] | order(_createdAt asc) {
        owner, repoName, name, stars, category, tags
        }`)
// used in toc
export const getReposNames = async () =>
    client.fetch(`*[_type == "repos"] | order(_createdAt asc) {
        name, category
        }`)
//------------------------------------------------------------Resources
export const getSources = async ({
    year,
    month,
    recommended = null,
    fields = "name, description, type, href, src, author",
}: {
    year: number
    month: number
    recommended?: boolean | null
    /**
     * Select fields to return from the query
     */
    fields?: string
}) => {
    // Sanity stores dates in ISO format, so we need to format the month and year for comparison
    // Ensure month is in two-digit format for consistency
    const monthPadded = month.toString().padStart(2, "0")
    // Start of the month
    const startDate = `${year}-${monthPadded}-01T00:00:00Z`
    // End of the month - we don't need to calculate the exact last day, just use the start of the next month
    const nextMonth = month === 12 ? 1 : month + 1
    const nextMonthPadded = nextMonth.toString().padStart(2, "0")
    const nextYear = month === 12 ? year + 1 : year
    const endDate = `${nextYear}-${nextMonthPadded}-01T00:00:00Z`

    const recommendedQuery = !!recommended ? `&& recommended == ${recommended}` : "";
    const dateQuery = `&& _createdAt >= "${startDate}" && _createdAt < "${endDate}"`
    return client.fetch(`*[_type == "source" ${dateQuery} ${recommendedQuery} ] | order(_createdAt desc) {
    ${fields}
    }`)
}

export const getRecommendedSources = async (fields = "name, description, type, href, src, author") => client.fetch(`*[_type == "source" && recommended==true ] | order(_createdAt desc) {
    ${fields}
}`)


//------------------------------------------------------------Jobs-Posts
export const getJobPosts = async (): Promise<any[]> => {
    return client.fetch(`*[_type == "jobPost"] | order(publishedAt desc) {
        _id,
        jobTitle,
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
        aboutRole,
        shortDescription,
        longDescription,
        requirements,
        aboutCompany,
        requirements,
        benefits,
        responsibilities,
        hiringProcess,
        whyJoinUs,
        }`)
}


//------------------------------------------------------------Integrations

export const getIntegrationsByCategory = async (categoryId: number) => {
    return client.fetch(`*[_type == "integration" && category.id == ${categoryId}] {
        name, description, logoUrl, url, paid, sponsored
        }`)
}

export const getLatestRepos = async () => {
    const date = new Date()
    date.setDate(date.getDate() - 10)
    const dateString = date.toISOString()
    return client.fetch(`*[_type == "repos" && _createdAt > "${dateString}"] | order(_createdAt desc) {
        owner, repoName, name, stars, category, tags
        }`)
}