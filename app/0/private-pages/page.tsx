import { CopyButton } from "@/components/copy-button"
import { getRecentSources } from "@/sanity/lib/getters"

//======================================
export default async function Automation() {
  const sources = (await getRecentSources({
    fields: "name, description, type, href, src, author",
  })) as any[]
  return (
    <div className="pt-10">
      <pre className="max-w-2xl rounded border border-gray-800 p-2 space-y-4 mx-auto">
        <p>Total: {sources.length}</p>
        {sources
          .filter((o) => o.type === "article")
          .map((source, i) => (
            <div key={i} className="space-y-3 border p-3">
              <span className="">{i + 1}</span>
              <div className=" whitespace-pre-wrap">{source.name}</div>
              {source.descrption}
              <div className="">
                <p className="whitespace-pre-wrap">{source.description}</p>
              </div>
              Author: {source.author}
              <div className="flex-row-start gap-3">
                <CopyButton text={"### " + source.name} />
                <CopyButton text={source.description} label="copy desc" />
                <CopyButton label="copy href" text={source.href} />
                <CopyButton
                  label="copy author"
                  text={"Author: " + source.author}
                />
              </div>
            </div>
          ))}
      </pre>
    </div>
  )
}
