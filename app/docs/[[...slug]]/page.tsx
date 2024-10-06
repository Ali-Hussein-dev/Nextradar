import { getPage, getPages } from "@/app/source"
import type { Metadata } from "next"
import {
  DocsPage,
  DocsBody,
} from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { Suspense } from "react"

export const revalidate = 43200 // 12 hours

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.body
  const isFolder = page.url.split("/").length > 3
  return (
    <DocsPage
      tableOfContent={{
        enabled: false,
      }}
      // toc={toc}
      // full={isBlackList ? true : page.data.full}
      full={page.data.full}
      breadcrumb={{ enabled: !isFolder }}
    >
      <DocsBody>
        <div className="max-w-5xl mx-auto w-full">
          <Suspense>
            <MDX components={{ ...defaultMdxComponents }} />
          </Suspense>
        </div>
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
