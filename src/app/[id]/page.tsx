import { getNamePage } from "../../../sanity/lib/get-name-page";
import { PortableText } from "@portabletext/react";
import { type NamePage } from "@/types/name-project";
import { BackButton } from "@/components/back-button";

const content = {
  source: "المرجع",
};
export const revalidate = 30;

export default async function NamePage({ params }: { params: { id: string } }) {
  const pageRes = await getNamePage(params.id);

  const page = pageRes[0]!;
  return (
    <>
      <div className="mb-4 w-full border-b border-zinc-200 pb-1 flex-row-between">
        <h2 className="text-3xl font-bold text-zinc-700">{page?.title}</h2>
        <BackButton />
      </div>
      <div className="prose prose-zinc w-full max-w-3xl grow border-b border-zinc-200 pb-3 pt-4 prose-h2:text-zinc-700 prose-p:text-lg prose-p:md:text-xl">
        <PortableText value={page.content} />
      </div>
      <p hidden={!page?.source} className="w-full pt-2 italic text-zinc-500">
        {content.source}: {page?.source}
      </p>
    </>
  );
}
