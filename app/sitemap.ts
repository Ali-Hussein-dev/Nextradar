import { urls } from "@/constants/urls";
import { getAllJobPostSlugs } from "@/jobs/sanity/getters";
import { type MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = headers();
    const host = headersList.get("host");
    let url = `https://${host}`
    url = url.replace(/\/$/, "");
    const lastModified = new Date();
    const jobPostsSlugs = (await getAllJobPostSlugs())
    const jobPostsPaths = jobPostsSlugs.map(o => `${urls.jobs}/${o.slug}`);
    const paths = [
        "",
        urls.latest,
        // "/docs/recommendations",
        urls.learn,
        urls.tools,
        urls.templates,
        urls.osProjects,
        urls.baas,
        urls.headlessCms,
        urls.hosting,
        urls.commerce,
        urls.db,
        // "/content/testing",
        urls.sponsor,
        urls.jobs,
        ...jobPostsPaths,
    ];

    return paths.map(path => ({
        url: `${url}${path}`,
        lastModified,
    }));
}
