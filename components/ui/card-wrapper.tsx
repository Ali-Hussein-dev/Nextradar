import { cn } from "@/lib/utils"
import * as React from "react"

export const CardWrapper = ({
  children,
  ...rest
}: {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-md px-6 pb-3 pt-6 flex-col-center w-full dark:bg-zinc-800/20 bg-white shadow",
      rest.className
    )}
    {...rest}
  >
    {children}
  </div>
)
