import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { SidebarMenutBtn } from "@/components/app-shell/sidebar-menu-button"
import { ThemeToggle } from "@/components/app-shell/toggle-theme"
import { urls } from "@/constants/urls"
import Link from "next/link"

type SidebarLink = {
  label: string
  url: string
  /**
   * Use for SEO
   */
  title: string
  /**
   * Use for SEO
   */
  description: string
  items?: SidebarLink[]
  isActive?: boolean
}
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
    label: "Integrations",
    // url: "/content/latest",
    items: [
      {
        label: "Hosting Providers",
        url: urls.hosting,
        title: "Top Vercel Alternatives",
        description:
          "Discover top Vercel alternataives such as Netlify, Coolify, Deno deploy, Render and more",
      },
      {
        label: "Headless CMS",
        url: urls.headlessCms,
        title: "Headless CMS for Next.js",
        description:
          "Discover top headless CMS for Next.js such as Strapi, Sanity, Contentful, DatoCMS and more",
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
    ],
    // icon: Settings,
    title: "",
    description: "",
  },
  {
    label: "Others",
    // url: "/content/sponsor",
    items: [
      {
        label: "Sponsor",
        url: urls.sponsor,

        title: "Sponsor Nextradar",
        description:
          "Get your product in front of thousands of Next.js developers",
      },
    ],
    title: "Sponsor Nextradar",
    description: "Get your product in front of thousands of Next.js developers",
  },
]
const GroupLinks = ({
  label,
  list,
}: {
  list: SidebarLink[]
  label: string
}) => {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            {label}
            {/* <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /> */}
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarMenu className="pt-1.5 pl-1.5">
            <div className="space-y-1 border-l pl-2 border-dashed">
              {list.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenutBtn label={item.label} url={item.url} />
                </SidebarMenuItem>
              ))}
            </div>
          </SidebarMenu>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link prefetch={false} href={"/"}>
              Nextradar
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pt-2">
              {sidebarLinks
                .filter((o) => !o.items)
                .map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenutBtn label={item.label} url={item.url} />
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {sidebarLinks
          .filter((o) => !!o.items)
          .map((o) => (
            <GroupLinks key={o.label} label={o.label} list={o.items} />
          ))}
      </SidebarContent>
      <SidebarFooter>
        <div>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
