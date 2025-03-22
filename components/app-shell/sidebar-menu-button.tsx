"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button } from "@/components/ui/button";

//======================================
export function SidebarMenutBtn({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  const segment = useSelectedLayoutSegment();
  const linkSegment = url.split("/")[2];
  return (
    <Button
      asChild
      variant={linkSegment == segment ? "secondary" : "ghost"}
      className="w-full justify-start dark:text-muted-foreground"
    >
      <Link prefetch={false} href={url}>
        {/* <icon /> */}
        <span>{label}</span>
      </Link>
    </Button>
  );
}
