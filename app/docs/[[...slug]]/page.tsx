import { getPage, getPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { Pathname, genCustomToc } from "@/lib/toc"
import { Sponsor } from "@/components/sponsor"

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

  const MDX = page.data.exports.default
  const currentPage = page.url as Pathname
  const isIntegrationPage = currentPage.startsWith("/docs/integrations/")
  const isJobPage = currentPage.startsWith("/docs/jobs")
  const isBlackList = isIntegrationPage || isJobPage
  // const defaultToc = page.data.exports.toc
  const toc = isBlackList ? [] : genCustomToc(currentPage)
  return (
    <DocsPage toc={toc} full={isBlackList ? true : page.data.full}>
      <Sponsor />
      <DocsBody>
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
