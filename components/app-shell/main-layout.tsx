import { SharedProviders } from "@/components/providers";
import { Footer } from "@/components/shared/footer";
import { BaseLayout, LeftSidebar, MainContent } from "../ui/base-layout";

import { urls } from "@/constants/urls";
import { SidebarMenutBtn } from "./sidebar-menu-button";
import Link from "next/link";
import { ThemeToggle } from "./toggle-theme";
import { Button } from "../ui/button";
import { BsShop } from "react-icons/bs";

type SidebarLink = {
  label: string;
  url: string;
  icon?: React.ReactNode;
};
export const sidebarLinks: SidebarLink[] = [
  {
    label: "Latest",
    url: urls.latest,
    // icon: Home,
  },
  {
    label: "Learn",
    url: urls.learn,
    // icon: 
  },
  {
    label: "Templates",
    url: urls.templates,
    // icon: Calendar,
  },
  {
    label: "Tools",
    url: urls.tools,
  },
  {
    label: "OS Projects",
    url: urls.osProjects,
  },
  {
    label: "Jobs",
    url: urls.jobs,
  },

  {
    label: "Hosting",
    url: urls.hosting,
  },
  {
    label: "CMS",
    url: urls.headlessCms,
  },
  {
    label: "Commerce",
    url: urls.commerce,
  },
  {
    label: "Databases",
    url: urls.db,
  },
  {
    label: "BaaS",
    url: urls.baas,
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
          <BaseLayout>
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
