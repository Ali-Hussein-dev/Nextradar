import { ItemsList } from "@/components/List"
import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"

//======================================
export function OpenSourceProjects() {
  return (
    <div className="">
      <ExpandableCard height="6rem" className="md:px-6 mb-4 md:mb-6 typography">
        <CardHeading h2="Top Open-source Projects built with Next.js" />
        <div>
          If you’re a seasoned developer wanting to polish your coding skills or
          just starting out and keen to learn the basics. his collection has it
          all—from intermediate projects to complex enterprise Next.js apps.
          Diving into open-source projects is a great way to practice and
          sharpen your coding skills. Explore a handy list of top open-source
          projects that reveal important lessons about React.js and Next.js
          development.
          <p>
            Here is what you can learn from open-source projects built with
            Next.js:
          </p>
          <ul>
            <li>Handling SEO in Next.js</li>
            <li>Handling Authentication in real-world apps</li>
            <li>Architecting applications with Next.js</li>
            <li>Managing state and data fetching in Next.js</li>
            <li>
              How to use Next.js features like SSG, ISR, SSR, and API routes
            </li>
            <li>
              Use the Next.js built-in optimizations and performance
              enhancements.
            </li>
            <li>Adopting best practices and design patterns</li>
            <li>
              Integrating third-party services and tools, and how to deploy your
              applications effectively.
            </li>
            <li>Reading and understanding code written by other developers.</li>
          </ul>
        </div>
      </ExpandableCard>
      <ItemsList category="real-world-apps" />
    </div>
  )
}
