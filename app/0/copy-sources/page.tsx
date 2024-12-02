/* eslint-disable @next/next/no-img-element */
import { CopyButton } from "@/components/copy-button"
import { getRecentSources } from "@/sanity/lib/getters"
import { formatDate } from "date-fns"
import { redirect } from "next/navigation"

async function getLastPublishedVideo(channelName: string) {
  if (process.env.NODE_ENV !== "development") return null
  const api_key = process.env.YouTube_API_KEY
  try {
    // First, we need to get the channel ID using the channel name
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${channelName}&key=${api_key}`
    )
    if (!channelResponse.ok) {
      throw new Error(`HTTP error! status: ${channelResponse.status}`)
    }
    const channelData = await channelResponse.json()
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found")
    }
    const channelId = channelData.items[0].id.channelId

    // Now we can use the channel ID to get the latest video
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=1&key=${api_key}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.items && data.items.length > 0) {
      const videoItem = data.items[0]
      const videoId = videoItem.id.videoId
      return {
        title: videoItem.snippet.title,
        href: `https://www.youtube.com/watch?v=${videoId}`,
        src: `https://www.youtube.com/embed/${videoId}?si=pBIyOegFmLlKSWaw`,
        description: videoItem.snippet.description,
        thumbnailUrl: videoItem.snippet.thumbnails.default.url,
        publishedAt: videoItem.snippet.publishedAt,
      }
    } else {
      return null
    }
  } catch (error) {
    console.error("Error fetching last published video:", error)
    return null
  }
}
const YT = async () => {
  const channelsNames = [
    "@wesbos",
    "@t3dotgg",
    "@codewithantonio",
    "@WebDevCody",
    "@joshtriedcoding",
    "@VercelHQ",
    "@ByteGrad",
    "@Delba",
    "@jherr",
    "@hamedbahram",
    "@nikolovlazar",
    "@beyondfireship",
    "@DaveGrayTeachesCode", // Dave Gray
    //  "@leerob",
  ]

  const fetchAll = async () =>
    Promise.all(channelsNames.map(getLastPublishedVideo)).then((results) => {
      results.forEach((result, index) => {
        if (result) {
          return result
        } else {
          console.log(
            `${channelsNames[index]}: No video found or error occurred`
          )
        }
      })
      return results
    })

  const res = await fetchAll()
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="space-y-5">
        {res.map((o, i) => (
          <div key={i} className="space-y-3 border border-dashed p-3">
            <iframe src={o?.src} className="" />
            <div>{o?.title}</div>
            <div className="flex-row-start gap-2">
              <CopyButton label="copy title" text={o?.title} />
              <CopyButton label="copy src" text={o?.src as string} />
              <CopyButton label="copy href" text={o?.href as string} />
              <CopyButton label="copy description" text={o?.description} />
            </div>
            <div>{formatDate(new Date(o?.publishedAt), "yyyy-MM-dd")}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
const Newsletter = async () => {
  const sources = (await getRecentSources({
    fields: "name, description, type, href, src, author",
    length: 15,
  })) as any[]
  let sourceType = "article"
  const emoji = sourceType === "youtube" ? "▶️" : "📄"
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <p>Total: {sources.length}</p>
      <div className="space-y-4">
        {sources
          .filter((o) => o.type === sourceType)
          .map((source, i) => (
            <div key={i} className="space-y-3 border border-dashed p-3">
              <span className="text-xl">
                {i + 1} - {emoji}
              </span>
              <div className=" whitespace-pre-wrap">{source.name}</div>
              {source.descrption}
              <div>
                <p className="whitespace-pre-wrap">{source.description}</p>
              </div>
              Author: {source.author}
              <div className="flex-row-start gap-3">
                <CopyButton
                  text={`${emoji} ${source.name} ${source.description} - ${source.author}`}
                  label="Copy all"
                />
                <CopyButton label="copy HREF" text={source.href} />
                {source.src && (
                  <CopyButton label="copy Embed src" text={source.src} />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
//======================================
export default async function CopySources() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/")
  }

  // const current: string = "youtube"
  const current: string = "newsletter"
  switch (current) {
    case "youtube":
      return <YT />
    case "newsletter":
      return <Newsletter />
    default:
      break
  }
}
