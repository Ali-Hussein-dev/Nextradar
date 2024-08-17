"use client"

import { useCompletion } from "ai/react"
import { Button } from "@/components/button"
import { type TypedObject } from "sanity"
import { Markdown } from "@/components/markdown"
import { blocksToText } from "@/lib/utils"
import { BsStars } from "react-icons/bs"

//======================================
export const TldrJobPost = ({ jobPost }: { jobPost: TypedObject[] }) => {
  const { handleSubmit, isLoading, complete, completion } = useCompletion({
    api: "/api/summarize",
  })
  const plainText = blocksToText(jobPost)
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex-row-end w-full p-2 mb-2">
        <Button
          type="submit"
          disabled={isLoading || !!completion}
          onClick={() => complete(plainText)}
          className="gap-2"
          size="sm"
          variant={"secondary"}
        >
          <BsStars />
          {isLoading ? "Summarizing..." : "Summarize with AI"}
        </Button>
      </form>
      {completion && (
        <div className="sm:px-6 px-3 pb-5 pt-8 dark:bg-zinc-900 rounded mb-8">
          <Markdown>{completion}</Markdown>
        </div>
      )}
    </div>
  )
}
