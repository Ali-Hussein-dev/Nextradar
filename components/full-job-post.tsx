import { getFullJobPostBySlug } from "@/sanity/lib/getters"
import { Button } from "./button"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { PortableText } from "next-sanity"

//======================================
export const FullJobPost = async ({ slug }: { slug: string }) => {
  const post = await getFullJobPostBySlug({ slug })
  return (
    <section className="py-12 px-2 mx-auto">
      <div className="flex-row-between border-b pb-2 mb-4">
        <Button asChild size="sm" variant={"ghost"}>
          <Link href={"/docs/jobs"} className="gap-2">
            <FaArrowLeft /> Back to jobs
          </Link>
        </Button>
        <Button asChild size="sm">
          <a href={post.applyUrl}>Apply</a>
        </Button>
      </div>
      <div className="flex-row-between pt-4 dark:text-zinc-400 border rounded border-dashed text-zinc-700 p-3">
        <div className="flex-col-start gap-3 text-sm">
          <span>{post.companyName}</span>
          <span>{post.location}</span>
          <span>{post.branch}</span>
        </div>
        <div className="flex-col-end gap-3 text-sm">
          <span className="capitalize">{post.contractType}</span>
          <span className="capitalize">{post.jobType}</span>
          {post.salaryMax && post.salaryMin ? (
            <div className="flex-row-end gap-1">
              <span>{post.salaryMin / 1000}K</span>-
              <span>{post.salaryMax / 1000}K</span>
              <span>{post.currency}</span>
            </div>
          ) : null}
        </div>
      </div>

      <article className="max-w-3xl mx-auto w-fit pt-10 animate-in">
        <div className="dark:text-zinc-400 text-zinc-700 prose-strong:dark:text-zinc-400 prose-strong:text-zinc-700 prose-zinc prose prose-headings:dark:text-zinc-400 prose-h1:text-2xl prose-a:dark:text-zinc-400 prose-a:underline-offset-4 prose-a:text-zinc-700">
          <h1>{post.jobTitle}</h1>
          <PortableText value={post.longDescription} />
        </div>
      </article>
    </section>
  )
}
