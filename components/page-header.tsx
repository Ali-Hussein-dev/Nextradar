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
  | "nextjs-auth"
  | "reactjs-jobs"
  | "nextjs-jobs"
  | "db"
  | "hosting"
  | "baas"
  | "commerce"
  | "headless-cms"
  | "ui-components"

export const PageHeader = async ({
  name,
  count,
  date,
}: {
  name: PageHeaderName
  date?: string
  count?: number
}) => {
  const header = await getPageHeader({ name })
  const h1 = `${count ? count : ""} ${header.title} ${date ? `${date}` : ""}`
  return (
    <ExpandableCard height="8rem" className="md:px-6 mb-6 pt-4">
      <div>
        <CardHeading h1={h1} p={header.subtitle} />
        <div className="typography">
          <PortableText value={header.description} />
        </div>
      </div>
    </ExpandableCard>
  )
}
