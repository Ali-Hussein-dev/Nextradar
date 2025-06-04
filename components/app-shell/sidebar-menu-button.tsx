"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

//======================================
export function SidebarMenutBtn({
  children,
  icon,
  url,
}: {
  url: string
  children: React.ReactNode
  icon?: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment()
  const linkSegment = url.split("/")[2]
  const isActive = linkSegment == segment
  return (
    <Button
      asChild
      variant="outline"
      className="w-full justify-start dark:text-secondary-foreground/80 gap-2 items-center hover:dark:bg-transparent hover:border-secondary border-hidden"
    >
      <Link href={url}>
        <div
          className={cn(
            "size-8 group-hover:border-transparent border rounded-lg group-hover:bg-secondary grid place-items-center shrink-0",
            isActive && "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900",
          )}
        >
          <div className="size-4">{icon}</div>
        </div>
        <span className="">{children}</span>
      </Link>
    </Button>
  )
}
