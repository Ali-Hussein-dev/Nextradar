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
export const getReposList = async ({
  category,
  tags = [],
}: {
  category: RepoCategory;
  tags?: string[];
}): Promise<Repo[]> => {
  const qTags = tags.length > 0 ? `&& ${tags.map((tag) => `'${tag}'`).join(",")} in tags` : "";
  const qCategory = !!category ? `&& category == '${category}'` : "";
  const repoQuery =
    defineQuery(`*[_type == "repos" ${qCategory} ${qTags}] | order(_createdAt asc) {
    owner,
    repoName,
    description,
    avatar,
    name,
    stars,
    category,
    tags,
    homepage
  }`);
  return client.fetch(repoQuery);
};
export const getTagsList = async ({
  category = "Tools",
}: {
  category: RepoCategory;
}): Promise<Repo[]> => {
  const qCategory = !!category ? `&& category == '${category}'` : "";
  const tagQuery = defineQuery(
    `*[_type == "repos" ${qCategory}] | order(_createdAt asc) {
    tags
  }`
  );
  return client.fetch(tagQuery);
};
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
export const getSourcesPage = async ({
    page = 1,
    pageSize = 10,
    fields = "name, description, type, href, author, sponsored, rel, _createdAt",
  }: {
    page?: number;
    pageSize?: number;
    /**
     * Select fields to return from the query
     */
    fields?: string;
  }) => {
    const sponsoredQuery = "&& sponsored == true";
    const nonSponsoredQuery = "&& sponsored != true";
    const offset = (page - 1) * pageSize;
    const sponsoredSources =
      page < 2
        ? await client.fetch(`*[_type == "source" ${sponsoredQuery}] | order(_createdAt desc) {
          ${fields}
      }`)
        : [];
    const nonSponsoredSources =
      await client.fetch(`*[_type == "source" ${nonSponsoredQuery}] | order(_createdAt desc) [${offset}...${offset + pageSize}] {
          ${fields}
      }`);
    return [...sponsoredSources, ...nonSponsoredSources];
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
        name, description, logoUrl, url, tags, sponsored, exampleUrl, features, pricing
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


export const getPageHeader = async ({ name }: { name: string }) => {
    const q = defineQuery(`*[_type == "pageHeader" && name == "${name}"] {
            header
    }`)
    const res = await client.fetch(q)
    return res[0].header
}
/**
 * Get page metadata from Sanity
 */
export const getPageMetadata = async ({ name }: { name: string }) => {
    const q = defineQuery(`*[_type == "pageHeader" && name == "${name}"] {
            metadata
    }`)
    return await client.fetch(q)
    
}

export const getUiCollection = async () => {
    return client.fetch(`*[_type == "ui"] | order(_createdAt desc){name, url, tags, thumbnail, rel}`)
}
