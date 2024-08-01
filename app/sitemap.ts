import { type MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = headers();
    const host = headersList.get("host");
    let url = `https://${host}`
    url = url.replace(/\/$/, "");
    const lastModified = new Date();
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
    ];

    return paths.map(path => ({
        url: `${url}${path}`,
        lastModified,
    }));
}
