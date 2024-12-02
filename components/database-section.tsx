/* eslint-disable @next/next/no-img-element */
import { getIntegrationsByCategory } from "@/sanity/lib/getters"
import { IntegrationCardProps } from "@/components/integration-card"
import { DatabasesList } from "@/components/databases-list"
import { CardHeading, ExpandableCard } from "@/components/ui/expandable-card"
import categoriesIds from "@/constants/categories.json"
//======================================
export const DatabaseSection = async () => {
  const list = (await getIntegrationsByCategory(
    categoriesIds.database.id
  )) as IntegrationCardProps[]

  return (
    <section className="typography">
      <ExpandableCard className="md:px-6 border-dashed h-full typography mb-6">
        <CardHeading h1="Best Databases for Next.js" />
        <div className="text-zinc-600 dark:text-zinc-400 prose-p:mt-2">
          Next.js is a versatile and powerful framework that can be seamlessly
          integrated with a wide range of databases to suit various application
          needs. Whether you are building a small personal project or a
          large-scale enterprise application, choosing the right database is
          crucial for performance, scalability, and reliability. Here are some
          of the most popular databases that you can use with Next.js:
          <ul>
            <li>
              <strong>PostgreSQL:</strong> A powerful, open-source
              object-relational database system known for its robustness,
              scalability, and SQL compliance. Ideal for complex queries and
              large datasets.
            </li>
            <li>
              <strong>MongoDB:</strong> A leading NoSQL database that uses a
              flexible, JSON-like document model. Perfect for applications that
              require high performance, scalability, and flexibility in data
              modeling.
            </li>
            <li>
              <strong>MySQL:</strong> One of the most widely used relational
              database management systems. Known for its reliability, ease of
              use, and strong community support, making it a great choice for
              web applications.
            </li>
            <li>
              <strong>SQLite:</strong> A lightweight, disk-based database that
              doesn’t require a separate server process. Suitable for small to
              medium-sized applications, development, and testing environments.
            </li>
            <li>
              <strong>Redis:</strong> An in-memory data structure store used as
              a database, cache, and message broker. Excellent for applications
              that require fast, real-time data processing and caching.
            </li>
            <li>
              <strong>ORM:</strong> (Object-Relational Mapping) tool that
              simplifies database access and management. It supports TypeScript
              and JavaScript and integrates seamlessly with databases like
              PostgreSQL, MySQL, and SQLite.
            </li>
            <li>
              <strong>Vector Databases:</strong> Specialized databases designed
              for handling vector data, which is essential for applications
              involving machine learning, AI, and data science. Examples include
              Pinecone and Milvus.
            </li>
          </ul>
          By leveraging these databases, you can optimize your Next.js
          applications for performance, scalability, and reliability, ensuring a
          seamless user experience.
        </div>
      </ExpandableCard>

      <DatabasesList list={list} />
    </section>
  )
}
