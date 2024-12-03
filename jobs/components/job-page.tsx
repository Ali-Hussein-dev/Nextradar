import { Button } from "@/components/button"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { PortableText } from "next-sanity"
import { TldrJobPost } from "@/jobs/components/tldr-job-post"
import { urls } from "@/constants/urls"
import { IoEarthOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { GiMoneyStack } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg"
import { cn } from "@/lib/utils"
import { GoArrowUpRight } from "react-icons/go"
import { JobPost } from "@/sanity/types"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FiExternalLink } from "react-icons/fi"
import { PiHouseLine } from "react-icons/pi"

//======================================
export const FullJobPost = ({ post }: { post: JobPost }) => {
  return (
    <section className="py-6 mx-auto border border-dashed">
      <div className="flex-col-center gap-8 dark:text-zinc-400 text-zinc-700 p-3 py-6 border-b border-dashed">
        <div className="flex-row-center gap-5 text-sm">
          <a href={post?.company?.website || ""} target="_blank">
            {post?.companyName || post?.company?.name}
          </a>
          <span>{post.branch}</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl dark:text-zinc-200 font-bold text-zinc-900 text-center">
          {post.jobTitle}
        </h1>
        <div className="flex-row-center gap-5 text-sm">
          <span className="capitalize flex-row-start gap-2">
            <CgFileDocument size="15" />
            {post.contractType}
          </span>
          <span className="capitalize flex-row-start gap-2">
            <PiHouseLine size="15" />
            {post.workplaceType}
          </span>
          {(post?.timeZone?.length ?? 0 > 0) ? (
            <div className="flex-row-start gap-2">
              <IoEarthOutline size="15" />
              <span>{(post.timeZone as []).join(", ")}</span>
            </div>
          ) : (
            ""
          )}
          {post?.location && (
            <div className="flex-row-start gap-2">
              <CiLocationOn size="15" />
              <span>{post.location}</span>
            </div>
          )}
          {post?.salary && post?.salary.range && (
            <div className="capitalize flex-row-start gap-2">
              <GiMoneyStack size="15" />
              <div className="flex-row-end gap-1">
                <span>{post.salary?.range}</span>
                <span className="uppercase">{post.salary.currency}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <article className="typography px-3 md:px-5 lg:px-12 pt-3 mb-6 animate-in">
        <div className="grid lg:grid-cols-4 lg:gap-8 w-full pt-1">
          <div
            className={cn(
              post?.benefits ? "lg:col-span-3 pr-2" : "lg:col-span-4"
            )}
          >
            <TldrJobPost jobPost={post.longDescription!} />
            <PortableText value={post.longDescription!} />
          </div>
          {post?.benefits && (
            <div className="lg:pt-10">
              <h2>Perks</h2>
              <ul>{post.benefits?.map((str) => <li key={str}>{str}</li>)}</ul>
              <Button asChild size="sm" className="w-full">
                <a href={post.applyUrl}>
                  <span className="mr-1.5">Apply</span>
                  {post.applyUrl?.includes("mailto:") ? (
                    <MdOutlineAlternateEmail />
                  ) : (
                    <FiExternalLink />
                  )}
                </a>
              </Button>
            </div>
          )}
        </div>
        {!post?.benefits && (
          <Button asChild size="sm" className="w-full">
            <a href={post.applyUrl} className="flex-row-center gap-1">
              Apply <GoArrowUpRight className="" size="18" />
            </a>
          </Button>
        )}
      </article>
      <div className="border-t border-dashed pt-4 flex-row-end w-full pr-4">
        <Button asChild variant={"outline"}>
          <Link href={urls.jobs} className="gap-2" prefetch={false}>
            <FaArrowLeft />
            back to jobs
          </Link>
        </Button>
      </div>
    </section>
  )
}
