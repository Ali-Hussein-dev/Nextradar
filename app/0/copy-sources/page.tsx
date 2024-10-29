import { CopyButton } from "@/components/copy-button"
import { getRecentSources } from "@/sanity/lib/getters"

//======================================
export default async function CopySources() {
    if (process.env.NODE_ENV !== "development") return null
  const sources = (await getRecentSources({
    fields: "name, description, type, href, src, author",
    length: 15,
  })) as any[]
  const sourceType = "youtube"
  return (
    <div className="pt-10">
      <pre className="max-w-2xl rounded border border-gray-800 p-2 space-y-4 mx-auto">
        <p>Total: {sources.length}</p>
        {sources
          .filter((o) => o.type === sourceType)
          .map((source, i) => (
            <div key={i} className="space-y-3 border p-3">
              <span className="text-xl">
                {i + 1} - {sourceType === "youtube" ? "▶️" : "📄"}
              </span>
              <div className=" whitespace-pre-wrap">{source.name}</div>
              {source.descrption}
              <div>
                <p className="whitespace-pre-wrap">{source.description}</p>
              </div>
              Author: {source.author}
              <div className="flex-row-start gap-3">
                <CopyButton
                  text={`${source.name} ${source.description} - ${source.author}`}
                  label="Copy all"
                />
                <CopyButton label="copy HREF" text={source.href} />
                {source.src && (
                  <CopyButton label="copy Embed src" text={source.src} />
                )}
              </div>
            </div>
          ))}
      </pre>
    </div>
  )
}
