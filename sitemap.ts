import { type MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = headers();
    const host = headersList.get("host");

    return [
        {
            url: `https://${host}`,
            lastModified: new Date(),
        },
    ];
}
