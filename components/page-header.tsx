import { getPageHeader } from "@/sanity/lib/getters"
import { CardHeading, ExpandableCard } from "./ui/expandable-card"
import { PortableText } from "next-sanity"
type PageHeaderName =
  | "templates"
  | "tools"
  | "latest"
  | "learn"
  | "real-world-apps"
  | "jobs"
  | "reactjs-jobs"
  | "nextjs-jobs"
  | "db"
  | "hosting"
  | "baas"
  | "commerce"
  | "headless-cms"

export const PageHeader = async ({ name }: { name: PageHeaderName }) => {
  const header = await getPageHeader({ name })

  return (
    <ExpandableCard height="8rem" className="md:px-6 typography mb-6 pt-4">
      <div>
        <CardHeading h1={header.title} p={header.subtitle} />
        <div className="typography">
          <PortableText value={header.description} />
        </div>
      </div>
    </ExpandableCard>
  )
}
