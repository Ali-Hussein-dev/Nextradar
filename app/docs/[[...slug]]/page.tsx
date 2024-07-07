import { getPage, getPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { Pathname, genCustomToc } from "@/lib/toc"

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default
  const currentPage = page.url as Pathname

  // const defaultToc = page.data.exports.toc
  const toc = genCustomToc(currentPage)
  return (
    <DocsPage toc={toc} full={page.data.full}>
      <DocsBody>
        {/* <h1 className="text-lg">{page.data.title}</h1> */}
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
