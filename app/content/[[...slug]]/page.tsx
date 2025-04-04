import { DatabaseSection } from "@/components/database-section";
import { Feed } from "@/components/feed";
import { PageHeader } from "@/components/page-header";
import { BaasSection } from "@/components/sections/baas-section";
import { CommerceSection } from "@/components/sections/commerce-section";
import { HeadlessCmsSection } from "@/components/sections/headless-cms-section";
import { HostingSection } from "@/components/sections/hosting-section";
import { LearnSection } from "@/components/sections/learn-section";
import { OpenSourceProjects } from "@/components/sections/os-projects-section";
import { SponsorSection } from "@/components/sections/sponsor-section";
import { TemplatesSection } from "@/components/sections/templates-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { cn } from "@/lib/utils";
import { getDocumentCount, getPageMetadata } from "@/sanity/lib/getters";
import * as React from "react";
import categoriesIds from "@/constants/categories.json";
import { templates } from "@/constants/templates";
import { urls } from "@/constants/urls";

const SharedContainer = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "max-w-5xl mx-auto w-full h-full grow min-h-[88vh]",
      className
    )}
  >
    {children}
  </div>
);

export const revalidate = 3600; // 1 hour

//======================================
export default async function ContentPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const slug = params.slug[0];
  const date = new Date().getFullYear();

  const object = {
    "headless-cms": {
      docType: "integration",
      filter: `category.id == ${categoriesIds.headlessCMS.id}`,
    },
    hosting: {
      docType: "integration",
      filter: `category.id == ${categoriesIds.hosting.id}`,
    },
  };
  const slugKeys = Object.keys(object);
  let count;

  if (slugKeys.includes(slug)) {
    count = await getDocumentCount({
      docType: object[slug as keyof typeof object]?.docType,
      filter: object[slug as keyof typeof object]?.filter,
    });
  }
  switch (slug) {
    case "latest":
      return (
        <React.Suspense
          fallback={
            <div className="py-4 flex-row-center text-lg">Loading...</div>
          }
          key="latest"
        >
          <Feed />
        </React.Suspense>
      );
    case "templates":
      return (
        <SharedContainer className="max-w-7xl">
          <PageHeader
            name="templates"
            date={` - ${date}`}
            count={templates.length}
          />
          <React.Suspense key="templates">
            <TemplatesSection />
          </React.Suspense>
        </SharedContainer>
      );
    case "learn":
      return (
        <SharedContainer>
          <PageHeader name="learn" date={` - ${date}`} />
          <React.Suspense>
            <LearnSection />
          </React.Suspense>
        </SharedContainer>
      );
    case "tools":
      return (
        <SharedContainer>
          {/* <PageHeader name="tools" /> */}
          <React.Suspense key="tools">
            <ToolsSection category="Tools" />
          </React.Suspense>
        </SharedContainer>
      );
    case "real-world-apps":
      return (
        <SharedContainer>
          {/* <PageHeader name="real-world-apps" /> */}
          <OpenSourceProjects />
        </SharedContainer>
      );
    case "baas":
      return (
        <SharedContainer>
          <BaasSection />
        </SharedContainer>
      );
    case "hosting":
      return (
        <SharedContainer>
          <PageHeader name="hosting" date={` - ${date}`} />
          <HostingSection />
        </SharedContainer>
      );
    case "headless-cms":
      return (
        <SharedContainer>
          <PageHeader name="headless-cms" date={` - ${date}`} count={count} />
          <React.Suspense key="cms">
            <HeadlessCmsSection />
          </React.Suspense>
        </SharedContainer>
      );
    case "db":
      return (
        <SharedContainer>
          <PageHeader name="db" />
          <React.Suspense key="db">
            <DatabaseSection />
          </React.Suspense>
        </SharedContainer>
      );
    case "commerce":
      return (
        <SharedContainer>
          <PageHeader name="commerce" />
          <CommerceSection />
        </SharedContainer>
      );
    case "sponsor":
      return (
        <SharedContainer className="max-w-4xl p-2 sm:p-0">
          <SponsorSection />
        </SharedContainer>
      );
    default:
      return <div className="p-3 size-full">not found</div>;
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
    "sponsor",
  ].map((slug) => ({
    slug: [slug],
  }));
}

export const generateMetadata = async (props: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const params = await props.params;
  const slugArray = params.slug;
  const slug = slugArray?.[0] as string;
  const res = await getPageMetadata({ name: slug });
  if (res.length === 0) {
    return {
      title: "Not Found",
      description: "Not Found",
      type: "website",
    };
  }
  const metadata = res[0].metadata;
  const title = metadata.title || "";
  const description = metadata.description || "";
  let ogImage = `${urls.siteUrl}/og?title=${title}`;

  return {
    title,
    description,
    type: "website",
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${urls.siteUrl}/content/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
};
