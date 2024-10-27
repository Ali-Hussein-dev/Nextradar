import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import { ItemsList } from "@/components/List"

//======================================
export function LearnSection() {
  return (
    <div>
      <ExpandableCard
        className="md:px-6 border-dashed mb-4 md:mb-8 typography"
        height="6rem"
      >
        <CardHeading
          h2={`
          Best Next.js Courses and Tutorials ${new Date().getFullYear()}
        `}
        />
        <div>
          <p>
            Discover the best courses and tutorials to master the Next.js
            framework. Our hand-picked resources are designed to help you learn
            Next.js efficiently, whether you are a beginner or an experienced
            developer.
          </p>
          <p>
            Explore both <b>free and premium courses</b> from industry experts,
            covering a wide range of topics including server-side rendering,
            static site generation, API routes, and more. Stay up-to-date with
            the latest trends and best practices in Next.js development to
            enhance your skills and advance your career.
          </p>
        </div>
      </ExpandableCard>
      <ItemsList category="Learn" />
    </div>
  )
}
