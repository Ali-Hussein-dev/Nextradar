"use client"
import Link from "next/link"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { useParams } from "next/navigation"

//======================================
export function SidebarMenutBtn({
  label,
  url,
}: {
  label: string
  url: string
}) {
  const params = useParams<{ slug: string[] }>()
  const currentParams = params?.slug?.[0]
  return (
    <SidebarMenuButton asChild isActive={label.toLowerCase() == currentParams}>
      <Link prefetch={false} href={url} className="dark:text-muted-foreground">
        {/* <icon /> */}
        <span>{label}</span>
      </Link>
    </SidebarMenuButton>
  )
}
