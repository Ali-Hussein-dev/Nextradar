import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export const Markdown = ({
  children,
  tw,
}: {
  children: string
  tw?: string
}) => {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      className={cn(
        "prose prose-zinc mb-2 max-w-full tracking-wide prose-p:mt-2 prose-ul:dark:text-zinc-400 prose-strong:dark:text-zinc-300 dark:text-zinc-400 text-zinc-700",
        tw
      )}
    >
      {children}
    </ReactMarkdown>
  )
}
