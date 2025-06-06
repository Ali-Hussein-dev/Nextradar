/* eslint-disable @next/next/no-img-element */
import { MdOutlineArrowOutward } from "react-icons/md"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { getUiCollection } from "@/sanity/lib/getters"
import { Badge } from "../ui/badge"

type UiCardProps = {
  name: string
  url: string
  tags: string[]
  thumbnail: string
  description: string
  rel: string
  sponsored?: boolean
}
const UiCard = ({ thumbnail, name, url, rel, sponsored }: UiCardProps) => (
  <a href={url} target="_blank" rel={rel} className="group">
    <Card className="p-2 bg-secondary/20 hover:bg-secondary/50 transition-colors duration-200">
      <CardContent className="p-0 sm:p-0">
        <CardHeader className="p-0 sm:p-0 relative w-full">
          <img
            src={thumbnail}
            className="rounded-lg aspect-video m-0 object-fill w-full"
            alt="opengraph image"
            loading="lazy"
          />
          {sponsored && (
            <Badge className="bg-zinc-950/90 backdrop-blur-lg text-zinc-50 absolute top-1 right-2 font-normal">
              sponsored
            </Badge>
          )}
        </CardHeader>
        <CardFooter className="flex justify-between items-center gap-3 py-1 border bg-secondary/40 rounded-lg px-2 mt-3 sm:py-1 border-border">
          <CardTitle className="text-lg flex justify-between items-center">{name}</CardTitle>
          <MdOutlineArrowOutward />
        </CardFooter>
      </CardContent>
    </Card>
  </a>
)

export const UiCollectionSection = async () => {
  const uiCollection = await getUiCollection()
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {uiCollection
          .sort((a: UiCardProps, b: UiCardProps) => (b.sponsored ? 1 : 0) - (a.sponsored ? 1 : 0))
          .map((o: UiCardProps, i: number) => (
            <UiCard key={i} {...o} />
          ))}
      </div>
    </div>
  )
}
