import { getAllJobPostSlugs, getJobPostMetaSlug } from "@/sanity/lib/getters";
import { type MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = headers();
    const host = headersList.get("host");
    let url = `https://${host}`
    url = url.replace(/\/$/, "");
    const lastModified = new Date();
    const jobPostsSlugs = (await getAllJobPostSlugs())
    const jobPostsPaths = jobPostsSlugs.map(o => `/docs/j/${o.slug}`);
    const paths = [
        "",
        "/docs/latest",
        "/docs/recommendations",
        "/docs/learn",
        "/docs/templates",
        "/docs/tools",
        "/docs/plugin",
        "/docs/real-world-apps",
        "/docs/integrations/headless-cms",
        "/docs/integrations/databases",
        "/docs/integrations/hosting",
        "/docs/integrations/testing",
        "/docs/jobs",
        "/docs/sponsor",
        ...jobPostsPaths,
    ];

    return paths.map(path => ({
        url: `${url}${path}`,
        lastModified,
    }));
}
