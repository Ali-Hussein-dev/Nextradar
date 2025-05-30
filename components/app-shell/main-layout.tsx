import { SharedProviders } from "@/components/providers"
import { Footer } from "@/components/shared/footer"
import { BaseLayout, LeftSidebar, MainContent } from "@/components/ui/base-layout"
import { urls } from "@/constants/urls"
import { SidebarMenutBtn } from "@/components/app-shell/sidebar-menu-button"
import { ThemeToggle } from "@/components/app-shell/toggle-theme"
import { Button } from "@/components/ui/button"
import {
  AiOutlineClockCircle,
  AiOutlineCloud,
  AiOutlineDatabase,
  AiOutlineCloudServer,
} from "react-icons/ai"
import { MdOutlineSchool } from "react-icons/md"
import { FaWrench } from "react-icons/fa"
import { RiDatabase2Line } from "react-icons/ri"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { PiShoppingCartLight } from "react-icons/pi"
import { IoBriefcaseOutline } from "react-icons/io5"
import { HiOutlineTemplate } from "react-icons/hi"
import Link from "next/link"
import { Newsletter } from "@/components/newsletter"

type SidebarLink = {
  label: string
  url: string
  icon?: React.ReactNode
}
export const sidebarLinks: SidebarLink[] = [
  {
    label: "Latest",
    url: urls.latest,
    icon: <AiOutlineClockCircle />,
  },
  {
    label: "Tutorials",
    url: urls.learn,
    icon: <MdOutlineSchool />,
  },
  {
    label: "Templates",
    url: urls.templates,
    icon: <HiOutlineTemplate />,
  },
  {
    label: "Tools",
    url: urls.tools,
    icon: <FaWrench />,
  },
  {
    label: "OS Projects",
    url: urls.osProjects,
    icon: <GitHubLogoIcon />,
  },
  {
    label: "Jobs",
    url: urls.jobs,
    icon: <IoBriefcaseOutline />,
  },
  {
    label: "Hosting",
    url: urls.hosting,
    icon: <AiOutlineCloud />,
  },
  {
    label: "CMS",
    url: urls.headlessCms,
    icon: <AiOutlineCloudServer />,
  },
  {
    label: "Commerce",
    url: urls.commerce,
    icon: <PiShoppingCartLight />,
  },
  {
    label: "Database",
    url: urls.db,
    icon: <RiDatabase2Line />,
  },
  {
    label: "BaaS",
    url: urls.baas,
    icon: <AiOutlineDatabase />,
  },
]
function Sidebar() {
  return (
    <div className="space-y-2">
      {sidebarLinks.map((item) => (
        <nav key={item.label}>
          <SidebarMenutBtn url={item.url}>
            {item.icon && <div>{item.icon}</div>}
            <span>{item.label}</span>
          </SidebarMenutBtn>
        </nav>
      ))}
    </div>
  )
}
export default function MainLayout({ children }: { children: React.ReactNode }) {
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
          <BaseLayout>
            <LeftSidebar collapsibleTrigger={"Categories"} className="h-fit lg:sticky lg:top-4">
              <Sidebar />
            </LeftSidebar>
            <MainContent className="border rounded-[2rem] border-dashed sm:p-1 px-2.5">
              <div className="py-6 md:px-6">{children}</div>
              <Newsletter />
            </MainContent>
          </BaseLayout>
        </div>
        <Footer />
      </div>
    </SharedProviders>
  )
}
