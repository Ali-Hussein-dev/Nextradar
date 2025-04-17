import MainLayout from "@/components/app-shell/main-layout"
import { urls } from "@/constants/urls"
import { StructuredDataScript } from "@/lib/seo"
import type { WithContext, BreadcrumbList } from "schema-dts"

const list = [
  {
    name: "Hosting",
    item: `${urls.siteUrl}/${urls.hosting}`,
  },
  {
    name: "Templates",
    item: `${urls.siteUrl}/${urls.templates}`,
  },
  {
    name: "Headless CMS",
    item: `${urls.siteUrl}/${urls.headlessCms}`,
  },
  {
    name: "Courses",
    item: `${urls.siteUrl}/${urls.learn}`,
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Nextradar.dev",
    url: urls.siteUrl,
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
  return (
    <>
      <StructuredDataScript data={structuredData} />
      <MainLayout>{children}</MainLayout>
    </>
  )
}
