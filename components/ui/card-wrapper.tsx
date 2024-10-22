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
      "rounded-[2px] sm:px-4 md:px-6 py-3 md:pt-6 flex flex-col justify-start w-full border-dashed md:border shadow animate-in",
      rest.className
    )}
  >
    {children}
  </div>
)
