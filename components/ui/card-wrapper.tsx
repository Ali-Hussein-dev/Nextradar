import { cn } from "@/lib/utils"
import * as React from "react"

export const CardWrapper = ({
  children,
  ...rest
}: {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...rest}
    className={cn(
      "rounded-md px-3 sm:px-4 md:px-6 pb-3 pt-6 flex flex-col justify-start w-full dark:bg-zinc-800/50 bg-white shadow animate-in",
      rest.className
    )}
  >
    {children}
  </div>
)
