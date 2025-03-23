"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button } from "@/components/ui/button";

//======================================
export function SidebarMenutBtn({
  children,
  url,
}: {
  url: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const linkSegment = url.split("/")[2];
  return (
    <Button
      asChild
      variant={linkSegment == segment ? "secondary" : "ghost"}
      className="w-full justify-start dark:text-secondary-foreground/80 gap-2 items-center"
    >
      <Link href={url}>
        <>{children}</>
      </Link>
    </Button>
  );
}
