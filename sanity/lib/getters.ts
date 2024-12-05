import { Repo } from "@/lib/get-repos-github"
import { client } from "./client"
import { defineQuery } from "next-sanity"
//------------------------------------------------------------Sites
export const getSites = async (): Promise<Repo[]> =>
    client.fetch(`*[_type == "sites"] | order(_createdAt asc) {    
    owner,
    name,
    tags,
    createdBy,
    description,
    homepage,
    featured,
    ogImage,
    }`)

// "categoryRef": categoryRef -> { name }
// used in toc
// export const getSitesNames = async () =>
//     client.fetch(`*[_type == "sites"] | order(_createdAt asc) {
//         name, category
//         }`)

export type RepoCategory = "real-world-apps" | "Tools" | "Plugin" | "Learn"
//------------------------------------------------------------Repos
export const getReposList = async ({ recommended, category }: { recommended: boolean; category: RepoCategory }): Promise<Repo[]> => {
    const qRecommended = recommended ? `&& recommended == ${recommended}` : ""
    const qCategory = !!category ? `&& category == '${category}'` : ""
    const repoQuery = defineQuery(`*[_type == "repos" ${qRecommended} ${qCategory}] | order(_createdAt asc) {
    owner,
    repoName,
    description,
    avatar,
    name,
    stars,
    category,
    tags,
    homepage
  }`)
    return client.fetch(repoQuery)
}
export const getTagsList = async ({ category = "Tools" }: { category: RepoCategory }): Promise<Repo[]> => {

    const qCategory = !!category ? `&& category == '${category}'` : ""
    const tagQuery = defineQuery(
        `*[_type == "repos" ${qCategory}] | order(_createdAt asc) {
    tags
  }`)
    return client.fetch(tagQuery)
}
// used in toc
export const getReposNames = async () =>
    client.fetch(`*[_type == "repos"] | order(_createdAt asc) {
        owner, repoName, _id
        }`)

//------------------------------------------------------------Recnet-Resources
export const getRecentSources = async ({
    fields = "name, description, type, href, src, author",
    length = 30
}: {
    /**
     * Select fields to return from the query
     */
        fields: string
        /**
         * The length of time to query for
         */
        length?: number
}) => {
    // Calculate the date range for the last 30 days
    const endDate = new Date().toISOString();
    const startDate = new Date(Date.now() - length * 24 * 60 * 60 * 1000).toISOString();

    const dateQuery = `&& _createdAt >= "${startDate}" && _createdAt < "${endDate}"`;

    return client.fetch(`*[_type == "source" ${dateQuery} ] | order(_createdAt desc) {
    ${fields}
    }`);
}
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
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-based month

    // Check if the month is the current month
    if (year === currentYear && month === currentMonth) {
        return getRecentSources({ fields });
    }
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

    const recommendedQuery = !!recommended
        ? `&& recommended == ${recommended}`
        : ""
    const dateQuery = `&& _createdAt >= "${startDate}" && _createdAt < "${endDate}"`
    return client.fetch(`*[_type == "source" ${dateQuery} ${recommendedQuery} ] | order(_createdAt desc) {
    ${fields}
    }`)
}
export const getSourcesPage = async ({
    page = 1,
    pageSize = 10,
    fields = "name, description, type, href, src, author",
}: {
    page?: number;
    pageSize?: number;
    recommended?: boolean | null;
    /**
     * Select fields to return from the query
     */
    fields?: string;
}) => {
    const offset = (page - 1) * pageSize;

    return client.fetch(`*[_type == "source"] | order(_createdAt desc) [${offset}...${offset + pageSize}] {
        ${fields}
    }`);
};
//------------------------------------------------------------Resources-By-Term
export const getResourcesByTerm = async ({
    q,
}: {
    /**
     * The search term to query
    */
    q: string
}) => {
    // Construct the query to search for the term in the title or description
    const termQuery = `&& (
  lower(title) match "*${q}*" || 
  lower(description) match "*${q}*"
)`;

    return client.fetch(`*[_type == "source" ${termQuery}] | order(_createdAt desc) [0...10] {
    name, description, type, href, src, author
    }`);
};

export const getRecommendedSources = async (
    fields = "name, description, type, href, src, author"
) =>
    client.fetch(`*[_type == "source" && recommended==true ] | order(_createdAt desc) {
    ${fields}
}`)


//------------------------------------------------------------Integrations

export const getIntegrationsByCategory = async (categoryId: number) => {
    return client.fetch(`*[_type == "integration" && category.id == ${categoryId}] {
        name, description, logoUrl, url, tags, sponsored, exampleUrl
        }`)
}

export const getLatestRepos = async () => {
    const date = new Date()
    date.setDate(date.getDate() - 10)
    const dateString = date.toISOString()
    return client.fetch(`*[_type == "repos" && _createdAt > "${dateString}"] | order(_createdAt desc) {
        owner, repoName, name, stars, category, tags, homepage, recommended
        }`)
}

export const getDocumentCount = ({ docType, filter="" }: { docType: string, filter?: string }) => {
    return client.fetch(`count(*[_type == "${docType}" ${filter ? `&& ${filter}` : ""}])`)
}