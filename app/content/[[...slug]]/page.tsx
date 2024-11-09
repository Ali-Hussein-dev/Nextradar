import { sidebarLinks } from "@/components/app-shell/app-sidebar"
import { DatabaseSection } from "@/components/database-section"
import { Feed } from "@/components/feed"
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
import * as React from "react"

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
export default function ContentPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const slug = params.slug[0]

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
          <React.Suspense>
            <TemplatesSection />
          </React.Suspense>
        </SharedContainer>
      )
    case "learn":
      return (
        <SharedContainer>
          <React.Suspense>
            <LearnSection />
          </React.Suspense>
        </SharedContainer>
      )
    case "tools":
      return (
        <SharedContainer>
          <React.Suspense>
            <ToolsSection category="Tools" />
          </React.Suspense>
        </SharedContainer>
      )
    case "real-world-apps":
      return (
        <SharedContainer>
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
          <HostingSection />
        </SharedContainer>
      )
    case "headless-cms":
      return (
        <SharedContainer>
          <HeadlessCmsSection />
        </SharedContainer>
      )
    case "db":
      return (
        <SharedContainer>
          <React.Suspense>
            <DatabaseSection />
          </React.Suspense>
        </SharedContainer>
      )
    case "commerce":
      return (
        <SharedContainer>
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

export const generateMetadata = ({
  params,
}: {
  params: { slug?: string[] }
}) => {
  const slugArray = params.slug
  const slug = slugArray?.[0]

  let appSidebarItem = sidebarLinks.find((o) => {
    if (o?.url) {
      return o.url === `/content/${slug}`
    } else {
      return o.items?.find((oo) => oo.url === `/content/${slug}`)
    }
  })
  appSidebarItem = appSidebarItem?.items
    ? appSidebarItem?.items?.find((oo) => oo.url === `/content/${slug}`)
    : appSidebarItem
  return {
    title: appSidebarItem?.title || "",
    description: appSidebarItem?.description || "",
    type: "website",
  }
}
