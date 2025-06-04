/* eslint-disable @next/next/no-img-element */
import { MdOutlineArrowOutward } from "react-icons/md"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { getUiCollection } from "@/sanity/lib/getters"
import { Badge } from "../ui/badge"

type UiCardProps = {
  name: string
  url: string
  tags: string[]
  thumbnail: string
  description: string
  isNew?: boolean
}
const UiCard = ({ thumbnail, name, url, isNew }: UiCardProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group">
    <Card className="p-2 bg-secondary/20 hover:bg-secondary/50 transition-colors duration-200">
      <CardContent className="p-0 md:p-0">
        <CardHeader className="p-0 md:p-0 relative">
          <img
            src={thumbnail}
            className="rounded-lg aspect-video m-0 object-fill"
            alt="opengraph image"
            loading="lazy"
          />
          {isNew && <Badge className="bg-green-600 text-white absolute top-1 right-2">new</Badge>}
        </CardHeader>
        <CardFooter className="flex-row-between gap-3 p-0 md:p-0 pt-2 md:pt-2">
          <CardTitle className="text-lg flex justify-between items-center pt-4 md:pt-4">
            {name}
          </CardTitle>
          <Button variant={"ghost"} size="sm" className="gap-1.5" asChild>
            {/* <a href={url + "?ref=nextradar.dev"} target="_blank" rel="noopener noreferrer">
                Visit
                <MdOutlineArrowOutward />
              </a> */}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  </a>
)

export const UiCollectionSection = async () => {
  const uiCollection = await getUiCollection()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uiCollection.map((o: UiCardProps, i: number) => (
          <UiCard key={i} {...o} isNew={i < 2} />
        ))}
      </div>
    </div>
  )
}
