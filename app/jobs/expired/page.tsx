import { Button } from "@/components/ui/button"
import { urls } from "@/constants/urls"
import { Metadata } from "next"
import Link from "next/link"

//======================================
export default function ExpiredPage() {
  return (
    <div className="flex-col-center w-full mx-auto gap-2 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-4xl mb-5 font-bold">
        Job post is expired!
      </h1>
      <Button asChild variant="secondary">
        <Link href={urls.jobs} className="no-underline">
          Back to jobs
        </Link>
      </Button>
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Job post is expired!",
    description: "Job post is expired!",
  } satisfies Metadata
}
