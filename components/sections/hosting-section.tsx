import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { IntegrationSection } from "./integration-section"
import categoriesIds from "@/constants/categories.json"

//======================================
export function HostingSection() {
  return (
    <section>
      <ExpandableCard className="md:px-6 border-dashed h-full typography mb-6">
        <CardHeading
          h1={`Best Next.js Hosting Providers for ${new Date().getFullYear()}`}
          p="Top Vercel Alternatives"
        />
        <div>
          <p>
            Great hosting is key to your Next.js site&apos;s success. It affects
            everything speed, performance, scalability, budget, and overall user
            experience. So, to help you make proper decisions, we have listed
            the key factors to consider while hosting the Next.js app:
          </p>
          <ul>
            <li>
              <strong>Pricing</strong>: Understanding the cost structure helps
              manage expenses and ensure the hosting provider aligns with your
              budget.
            </li>
            <li>
              <strong>Developer Experience</strong>: Vercel is the best choice
              for Next.js hosting when it comes to DX and ease of use. Look for
              providers that offer a user-friendly interface, easy deployment
              processes, and good documentation.
            </li>
            <li>
              <strong>Compatibility</strong>: Make sure the hosting provider
              supports Next.js features like server-side rendering, static site
              generation, and API routes.
            </li>
            <li>
              <strong>Performance</strong>: Fast server speed and response time
              are critical for a seamless user experience. Look for hosting
              providers with a reputation for high-performance servers and low
              response times.
            </li>
            <li>
              <strong>CDN Integration</strong>: CDN integration is crucial for
              distributing content globally, reducing latency, and ensuring
              faster page loads for users across different geographical
              locations. Choose a hosting provider that seamlessly integrates
              with CDN services. Confirm the coverage of the CDN network to
              ensure overall content distribution.
            </li>
            <li>
              <strong>Scalable</strong>: The ability to scale resources is
              crucial for handling traffic spikes and adapting the growth of
              your Next.js app. Evaluate the hosting provider&apos;s scalability
              options, including vertical and horizontal scaling. Check if the
              provider has a track record of effectively handling increased
              workloads without compromising performance.
            </li>
            <li>
              <strong>Security</strong>: It is essential to protect your Next.js
              app, user data, and sensitive information from potential threats.
              Look for hosting providers prioritizing security measures such as
              SSL/TLS encryption. Check for additional security features like
              DDoS protection and regular security updates.
            </li>
          </ul>
        </div>
      </ExpandableCard>
      <IntegrationSection categoryId={categoriesIds.hosting.id} />
    </section>
  )
}
