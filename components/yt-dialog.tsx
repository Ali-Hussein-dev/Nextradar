/* eslint-disable @next/next/no-img-element */
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { FaPlay } from "react-icons/fa"

const PlayBtn = ({ videoId }: { videoId: string }) => (
  <div className="relative size-full">
    <img
      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      alt="YouTube video thumbnail"
      className="absolute inset-0 size-full object-cover m-0"
    />
    <div className="z-10 size-full center isolate dark:bg-zinc-900/20">
      <button className="size-full relative">
        <div className="bg-black absolute bottom-2 right-2 shadow-lg rounded-3xl center p-2.5 center">
          <FaPlay className="size-3 text-white" />
        </div>
      </button>
    </div>
  </div>
)
//======================================
export const YtDialog = ({ href, src }: { src: string; href: string }) => {
  // src= https://img.youtube.com/vi/75oXnWzhJts/hqdefault.jpg
  const videoId = href.split("v=")[1].split("&")[0]
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlayBtn videoId={videoId} />
      </DialogTrigger>
      <DialogContent className="w-full max-w-7xl h-full max-h-[760px] p-0 dark:bg-zinc-900 bg-zinc-100 overflow-hidden aspect-video">
        <iframe
          src={src + "&autoplay=1"}
          width={560}
          height={315}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded size-full"
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  )
}
