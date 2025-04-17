import { type MetadataRoute } from "next"
import { headers } from "next/headers"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get("host")

  return {
    rules: [
      {
        userAgent: "Googlebot", // for Googlebot
        allow: ["/$"], // allow the home page and the OG image API
        // disallow: "/", // disallow everything else
      },
      {
        userAgent: "LinkedInBot", // for LinkedInBot
        allow: "/", // allow everything
      },
      {
        userAgent: "AhrefsBot", // for AhrefsBot
        allow: "/", // allow everything
      },
      {
        userAgent: "AhrefsSiteAudit", // for AhrefsSiteAudit
        allow: "/", // allow everything
      },
    ],
    sitemap: `https://${host}/sitemap.xml`,
  }
}
