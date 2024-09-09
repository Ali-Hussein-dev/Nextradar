import { getPage, getPages } from "@/app/source"
import type { Metadata } from "next"
import {
  DocsPage,
  DocsBody,
} from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import defaultMdxComponents from "fumadocs-ui/mdx"
export const revalidate = 3600
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

  return (
    <DocsPage
      tableOfContent={{
        enabled: false,
      }}
      // toc={toc}
      // full={isBlackList ? true : page.data.full}
      full={page.data.full}
    >
      <DocsBody>
        <div className="max-w-4xl mx-auto w-full">
          <MDX components={{ ...defaultMdxComponents }} />
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
