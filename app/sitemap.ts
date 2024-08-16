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
        "/docs/tools",
        "/docs/real-world-apps",
        "/docs/plugin",
        "/docs/integrations/headless-cms",
        "/docs/integrations/hosting",
        "/docs/integrations",
        "/docs/latest",
        "/docs/learn",
        "/docs/jobs",
        ...jobPostsPaths,
    ];

    return paths.map(path => ({
        url: `${url}${path}`,
        lastModified,
    }));
}
