import { DatabaseSection } from "@/components/database-section"
import { Feed } from "@/components/feed"
import { PageHeader } from "@/components/page-header"
import { BaasSection } from "@/components/sections/baas-section"
import { CommerceSection } from "@/components/sections/commerce-section"
import { HeadlessCmsSection } from "@/components/sections/headless-cms-section"
import { HostingSection } from "@/components/sections/hosting-section"
import { LearnSection } from "@/components/sections/learn-section"
import { OpenSourceProjects } from "@/components/sections/os-projects-section"
import { SponsorSection } from "@/components/sections/sponsor-section"
import { TemplatesSection } from "@/components/sections/templates-section"
import { ToolsSection } from "@/components/sections/tools-section"
import { cn } from "@/lib/utils"
import { getDocumentCount, getPageMetadata } from "@/sanity/lib/getters"
import * as React from "react"
import categoriesIds from "@/constants/categories.json"
import { templates } from "@/constants/templates"

const SharedContainer = ({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) => (
  <div className={cn("max-w-5xl mx-auto w-full", className)}>{children}</div>
)

export const revalidate = 3600 // 1 hour

//======================================
export default async function ContentPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const slug = params.slug[0]
  const date = new Date().getFullYear()

  const object = {
    "headless-cms": {
      docType: "integration",
      filter: `category.id == ${categoriesIds.headlessCMS.id}`,
    },
    hosting: {
      docType: "integration",
      filter: `category.id == ${categoriesIds.hosting.id}`,
    },
  }
  const slugKeys = Object.keys(object)
  let count

  if (slugKeys.includes(slug)) {
    count = await getDocumentCount({
      docType: object[slug as keyof typeof object]?.docType,
      filter: object[slug as keyof typeof object]?.filter,
    })
  }
  console.info("🚀 ~ content-page", { count, slug })
  switch (slug) {
    case "latest":
      return (
        <React.Suspense>
          <Feed />
        </React.Suspense>
      )
    case "templates":
      return (
        <SharedContainer>
          <PageHeader
            name="templates"
            date={` - ${date}`}
            count={templates.length}
          />
          <React.Suspense>
            <TemplatesSection />
          </React.Suspense>
        </SharedContainer>
      )
    case "learn":
      return (
        <SharedContainer>
          <PageHeader name="learn" date={` - ${date}`} />
          <React.Suspense>
            <LearnSection />
          </React.Suspense>
        </SharedContainer>
      )
    case "tools":
      return (
        <SharedContainer>
          {/* <PageHeader name="tools" /> */}
          <React.Suspense>
            <ToolsSection category="Tools" />
          </React.Suspense>
        </SharedContainer>
      )
    case "real-world-apps":
      return (
        <SharedContainer>
          {/* <PageHeader name="real-world-apps" /> */}
          <OpenSourceProjects />
        </SharedContainer>
      )
    case "baas":
      return (
        <SharedContainer>
          <BaasSection />
        </SharedContainer>
      )
    case "hosting":
      return (
        <SharedContainer>
          <PageHeader name="hosting" date={` - ${date}`} />
          <HostingSection />
        </SharedContainer>
      )
    case "headless-cms":
      return (
        <SharedContainer>
          <PageHeader name="headless-cms" date={` - ${date}`} count={count} />
          <HeadlessCmsSection />
        </SharedContainer>
      )
    case "db":
      return (
        <SharedContainer>
          <PageHeader name="db" />
          <React.Suspense>
            <DatabaseSection />
          </React.Suspense>
        </SharedContainer>
      )
    case "commerce":
      return (
        <SharedContainer>
          <PageHeader name="commerce" />
          <CommerceSection />
        </SharedContainer>
      )
    case "sponsor":
      return (
        <SharedContainer className="max-w-3xl">
          <SponsorSection />
        </SharedContainer>
      )
    default:
      return <div className="p-3 size-full">not found</div>
  }
}

export async function generateStaticParams() {
  return [
    "baas",
    "hosting",
    "headless-cms",
    "db",
    "commerce",
    "latest",
    "templates",
    "learn",
    "tools",
    "real-world-apps",
    "jobs",
  ].map((slug) => ({
    slug: [slug],
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug?: string[] }
}) => {
  const slugArray = params.slug
  const slug = slugArray?.[0] as string
  const res = await getPageMetadata({ name: slug })
  if (res.length === 0) {
    return {
      title: "Not Found",
      description: "Not Found",
      type: "website",
    }
  }
  const metadata = res[0].metadata
  return {
    title: metadata.title || "",
    description: metadata.description || "",
    type: "website",
  }
}
