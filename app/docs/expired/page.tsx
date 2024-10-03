import { Button } from "@/components/ui/button"
import { DocsPage, DocsBody } from "fumadocs-ui/page"
import { Metadata } from "next"
import Link from "next/link"

//======================================
export default function ExpiredPage() {
  return (
    <DocsPage
      tableOfContent={{
        enabled: false,
      }}
    >
      <DocsBody className="h-screen p-10 md:pb-44 center">
        <div className="flex-col-center w-full mx-auto gap-2 py-6 sm:py-10">
          <h1 className="text-2xl sm:text-4xl mb-5 font-bold">
            Job Posting Has Expired!
          </h1>
          <Button asChild variant="secondary">
            <Link href="/docs/jobs" className="no-underline">
              Back to jobs
            </Link>
          </Button>
        </div>
      </DocsBody>
    </DocsPage>
  )
}

export function generateMetadata() {
  return {
    title: "Job Posting Has Expired!",
    description: "Job Posting Has Expired!",
  } satisfies Metadata
}
