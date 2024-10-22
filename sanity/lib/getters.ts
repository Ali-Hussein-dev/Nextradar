import { Repo } from "@/lib/get-repos-github"
import { client } from "./client"
import { JobPostCardProps } from "@/components/job-posts-section"
import { JobPostSchema } from "@/types/schema-types"

//------------------------------------------------------------Sites
export const getSites = async (): Promise<Repo[]> =>
    client.fetch(`*[_type == "sites"] | order(_createdAt asc) {    
    owner,
    name,
    tags,
    createdBy,
    description,
    homepage,
    featured
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
    return client.fetch(
        `*[_type == "repos" ${qRecommended} ${qCategory}] | order(_createdAt asc) {
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
}
export const getTagsList = async ({ category = "Tools" }: { category: RepoCategory }): Promise<Repo[]> => {

    const qCategory = !!category ? `&& category == '${category}'` : ""
    return client.fetch(
        `*[_type == "repos" ${qCategory}] | order(_createdAt asc) {
    tags
  }`)
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
        shortDescription,
        jobHook,
        }`)
}
export const getJobsPage = async ({
    page = 1,
    pageSize = 5,
    fields = `jobTitle,
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
        shortDescription,
        jobHook,`,
}: {
    page?: number;
    pageSize?: number;
    /**
     * Select fields to return from the query
     */
    fields?: string;
}) => {
    const offset = (page - 1) * pageSize;

    return client.fetch(`*[_type == "jobPost"] | order(publishedAt desc) [${offset}...${offset + pageSize}] {
        ${fields}
    }`);
};
//------------------------------------------------------------Jobs-Posts-By-Slug
export const getFullJobPostBySlug = async ({
    slug,
}: {
    slug: string
    }): Promise<JobPostSchema> => {
    return client.fetch(
    `*[_type == "jobPost" && slug.current == $slug ][0] {
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
        longDescription,
        }`,
        { slug }
    )
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

//------------------------------------------------------------Integrations

export const getIntegrationsByCategory = async (categoryId: number) => {
    return client.fetch(`*[_type == "integration" && category.id == ${categoryId}] {
        name, description, logoUrl, url, tags, sponsored
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
