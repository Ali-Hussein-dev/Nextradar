"use client";

import { useCompletion } from "ai/react";
import { Button } from "@/components/ui/button";
import { type TypedObject } from "sanity";
import { Markdown } from "@/components/markdown";
import { blocksToText } from "@/lib/utils";
import { BsStars } from "react-icons/bs";

//======================================
export const TldrJobPost = ({ jobPost }: { jobPost: TypedObject[] }) => {
  const { handleSubmit, isLoading, complete, completion } = useCompletion({
    api: "/api/summarize",
  });
  const plainText = blocksToText(jobPost);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex-row-start w-full">
        <Button
          type="submit"
          disabled={isLoading || !!completion}
          onClick={() => complete(plainText)}
          className="gap-2"
          size="sm"
          variant="outline"
        >
          <BsStars />
          {isLoading ? "Summarizing..." : "Summarize with AI"}
        </Button>
      </form>
      {completion && (
        <div className="py-4 border-b border-dashed">
          <Markdown>{completion}</Markdown>
        </div>
      )}
    </div>
  );
};
