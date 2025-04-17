import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export const Markdown = ({ children, className }: { children: string; className?: string }) => {
  return (
    <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]} className={className}>
      {children}
    </ReactMarkdown>
  )
}
