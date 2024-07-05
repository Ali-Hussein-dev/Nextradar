import { FaExternalLinkAlt } from "react-icons/fa"

//======================================

export const CardBottom = ({
  author,
  href,
}: {
  author: string
  href: string
}) => {
  return (
    <div className="flex justify-between text-lg gap-2 item-center border-t pt-3">
      <span className="dark:text-zinc-500 text-zinc-400">{author}</span>
      <a
        href={href}
        target="_blank"
        className="no-underline flex items-center gap-2 border px-5 py-1 rounded-full w-fit"
      >
        Visit
        <FaExternalLinkAlt size="15" />
      </a>{" "}
    </div>
  )
}
