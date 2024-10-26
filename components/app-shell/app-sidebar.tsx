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
    url: "/content/latest",
    // icon: Home,
    title: "Latest Next.js Articles & Tutorials",
    description: "",
  },
  {
    label: "Learn",
    url: "/content/learn",
    // icon: Inbox,
    title: "Top Next.js Courses & Tutorials",
    description: "",
  },
  {
    label: "Templates",
    url: "/content/templates",
    // icon: Calendar,
    title: "Top Next.js Templates",
    description: "",
  },
  {
    label: "Tools",
    url: "/content/tools",
    title: "Top Next.js Tools & Plugins",
    description: "",
  },
  {
    label: "OS Projects",
    url: "/content/real-world-apps",
    title: "Top Open Source Next.js Projects",
    description: "Discover top open-source projects built with Next.js",
  },
  {
    label: "Jobs",
    url: "/content/jobs",
    title: "Next.js Jobs",
    description: "Find the best Next.js jobs for developers",
  },
  {
    label: "Integrations",
    // url: "/content/latest",
    items: [
      {
        label: "Hosting Providers",
        url: "/content/hosting",
        title: "Top Hosting Providers for Next.js",
        description: "",
      },
      {
        label: "Headless CMS",
        url: "/content/headless-cms",
        title: "Headless CMS for Next.js",
        description: "",
      },
      {
        label: "Commerce",
        url: "/content/commerce",
        title: "E-commerce Platforms for Next.js",
        description: "",
      },
      {
        label: "Databases",
        url: "/content/databases",
        title: "Databases for Next.js",
        description: "",
      },
      {
        label: "BaaS",
        url: "/content/baas",
        title: "Backend as a Service for Next.js",
        description: "",
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
        url: "/content/sponsor",

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
          <SidebarGroupLabel>Nextradar</SidebarGroupLabel>
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
