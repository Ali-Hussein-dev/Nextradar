import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"

//======================================
export function BaasSection() {
  return (
    <section>
      <ExpandableCard className="md:px-6 border-dashed h-full typography mb-6">
        <CardHeading h2={`Top BaaS Integrations for Next.js`} />
        <div>
          <p>
            Backend as a Service (BaaS) is a cloud computing service model that
            serves as a middleware between your app and its backend. BaaS
            providers offer a wide range of services, including user
            authentication, database management, and push notifications.
          </p>
          <p>
            The list doesn&apos;t include Firebase, despite being a popular
            choice for many developers with many excellent features, allowing
            developers to create an MVP quickly. However, it is vendor lock-in
            is one of the biggest concerns among developers and the main
            shortcoming of Firebase. A closed-source platform does not allow the
            adjustment of the source code to specific needs or environment
            customization to achieve maximum performance.
          </p>
          <p>
            Here are some of the top best alternative to Firebase for Next.js:
          </p>
        </div>
      </ExpandableCard>
      <IntegrationSection categoryId={categoriesIds.baas.id} />
    </section>
  )
}
