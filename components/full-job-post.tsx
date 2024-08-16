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
      <div className="flex-row-between border-b pb-2">
        <Button asChild size="sm" variant={"ghost"}>
          <Link href={"/docs/jobs"} className="gap-2">
            <FaArrowLeft /> Back to jobs
          </Link>
        </Button>
        <Button asChild size="sm">
          <a href={post.applyUrl}>Apply</a>
        </Button>
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
