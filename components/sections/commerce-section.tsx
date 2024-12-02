import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"

//======================================
export function CommerceSection() {
  return (
    <section>
      <ExpandableCard className="md:px-6 border-dashed h-full typography mb-6">
        <CardHeading
          h1={`Top Next.js Commerce Providers for ${new Date().getFullYear()}`}
        />
        <div>
          <p>
            Next.js Commerce is a powerful e-commerce template that integrates
            seamlessly with various commerce providers, offering developers a
            flexible and performant solution for building online stores.
          </p>

          <h2>Key Benefits</h2>
          <ul>
            <li>
              <strong>Performance</strong>: Leverages Next.js features for
              optimal speed and user experience.
            </li>
            <li>
              <strong>Flexibility</strong>: Allows customization to fit specific
              business needs.
            </li>
            <li>
              <strong>SEO Optimization</strong>: Built-in features enhance
              search engine visibility.
            </li>
            <li>
              <strong>Responsive Design</strong>: Ensures a consistent
              experience across devices.
            </li>
          </ul>

          <h2>Integration Process</h2>
          <p>The integration process typically involves:</p>
          <ul>
            <li>Selecting a commerce provider</li>
            <li>Setting up API credentials</li>
            <li>Configuring environment variables</li>
            <li>Customizing the storefront as needed</li>
          </ul>

          <p>
            By integrating Next.js with commerce providers, developers can
            create high-performance, customizable online stores that leverage
            the strengths of both the Next.js framework and the chosen
            e-commerce platform.
          </p>
        </div>
      </ExpandableCard>
      <IntegrationSection categoryId={categoriesIds.commerce.id} />
    </section>
  )
}
