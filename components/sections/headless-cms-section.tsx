import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"
import { getDocumentCount } from "@/sanity/lib/getters"

//======================================
export async function HeadlessCmsSection() {
  const count = await getDocumentCount({
    docType: "integration",
    filter: `category.id == ${categoriesIds.headlessCMS.id}`,
  })
  return (
    <section>
      <ExpandableCard className="md:px-6 border-dashed h-full typography mb-6">
        <CardHeading
          h1={`${count} Best Headless CMS for Next.js ${new Date().getFullYear()}`}
        />
        <div>
          <p>
            Discover the perfect headless CMS for your Next.js project with our
            comprehensive guide to the top options in {new Date().getFullYear()}
            . We&apos;ve meticulously curated a list of cutting-edge content
            management systems that seamlessly integrate with Next.js,
            empowering developers to create lightning-fast, scalable websites.{" "}
          </p>
          <p>
            From Sanity&apos;s real-time collaboration features to
            Contentful&apos;s robust API-first approach, explore the unique
            strengths of each CMS to find your ideal match. Whether you&apos;re
            building a blog, e-commerce site, or enterprise-level application,
            our in-depth analysis covers key features, pricing, and use cases to
            help you make an informed decision.{" "}
          </p>
          <p>
            Elevate your Next.js development workflow and unlock the full
            potential of headless architecture with our selection of CMS
            solutions. Don&apos;t miss out on the opportunity to streamline your
            content management and boost your site&apos;s performance – dive
            into our guide and revolutionize your Next.js projects today!
          </p>
        </div>
      </ExpandableCard>
      <IntegrationSection categoryId={categoriesIds.headlessCMS.id} />
    </section>
  )
}
