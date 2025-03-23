import { SharedProviders } from "@/components/providers";
import { Footer } from "@/components/shared/footer";
import { BaseLayout, LeftSidebar, MainContent } from "../ui/base-layout";

import { urls } from "@/constants/urls";
import { SidebarMenutBtn } from "./sidebar-menu-button";
import Link from "next/link";
import { ThemeToggle } from "./toggle-theme";
import { Button } from "../ui/button";

type SidebarLink = {
  label: string;
  url: string;
  /**
   * Use for SEO
   */
  title: string;
  /**
   * Use for SEO
   */
  description: string;
  items?: SidebarLink[];
  isActive?: boolean;
};
export const sidebarLinks = [
  {
    label: "Latest",
    url: urls.latest,
    // icon: Home,
    title: "Latest Next.js Articles & Tutorials",
    description:
      "Next.js mastery: From beginner to enterprise-level expertise by tech leaders",
  },
  {
    label: "Learn",
    url: urls.learn,
    // icon: Inbox,
    title: "Learn Nexjs with the top courses and tutorials",
    description: "Learn Nextjs with the best courses and tutorials",
  },
  {
    label: "Templates",
    url: urls.templates,
    // icon: Calendar,
    title: "Top Next.js Templates and Examples",
    description: "Discover top Next.js examples and templates",
  },
  {
    label: "Tools",
    url: urls.tools,
    title: "Top Next.js Tools & Plugins",
    description: "Discover top used Next.js tools and plugins",
  },
  {
    label: "OS Projects",
    url: urls.osProjects,
    title: "Top Open Source Next.js Projects",
    description: "Discover top open-source projects built with Next.js",
  },
  {
    label: "Jobs",
    url: urls.jobs,
    title: "Nextjs Jobs and Reactjs Jobs",
    description:
      "Find remote Next.js and React.js developer jobs in the USA, Canada, Europe, and worldwide.",
  },

  {
    label: "Hosting",
    url: urls.hosting,
    title: "Top Vercel Alternatives with Example Starters",
    description:
      "Discover top Vercel alternataives such as Netlify, Coolify, Deno deploy, Render and more.",
  },
  {
    label: "Headless CMS",
    url: urls.headlessCms,
    title: "Top Headless CMS Platform for Next.js with Example Starters",
    description:
      "Discover top headless CMS platforms for Next.js such as Strapi, Sanity, Contentful, DatoCMS and more",
  },
  {
    label: "Commerce",
    url: urls.commerce,
    title: "E-commerce Platforms for Next.js",
    description:
      "Find top e-commerce platforms for Next.js such as Medusa, Shopify, BigCommerce, Snipcart, Commerce.js and more",
  },
  {
    label: "Databases",
    url: urls.db,
    title: "Databases for Next.js",
    description:
      "Discover top databases for Next.js such as Upstash, FaunaDB, Prisma, Supabase, Firebase, MongoDB and more",
  },
  {
    label: "BaaS",
    url: urls.baas,
    title: "Backend as a Service for Next.js",
    description:
      "Discover top BaaS for Next.js such as Supabase, PlantScale, Convex, and more",
  },
];
function Sidebar() {
  return (
    <div className="space-y-2">
      {sidebarLinks.map((item) => (
        <div key={item.label}>
          <SidebarMenutBtn label={item.label} url={item.url} />
        </div>
      ))}
    </div>
  );
}
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedProviders>
      <div className="px-2 lg:px-0">
        <nav className="py-4 w-full flex justify-between items-center px-4 md:px-8 lg:px-12">
          <Link className="font-bold" href={urls.latest}>
            Nextradar
          </Link>
          <div className="flex-row-end gap-2">
            <Button variant={"link"}>
              <Link href={urls.sponsor}>Sponsor</Link>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
        <div className="py-10 relative">
          <BaseLayout className="">
            <LeftSidebar
              collapsibleTrigger={"Categories"}
              className=" rounded-sm h-fit border-dashed lg:sticky lg:top-4"
            >
              <Sidebar />
            </LeftSidebar>
            <MainContent className="border rounded-sm border-dashed">
              {children}
            </MainContent>
          </BaseLayout>
        </div>
        <Footer />
      </div>
    </SharedProviders>
  );
}
