"use client"

import { Button } from "@/components/ui/button"
import { CgClose, CgMenu } from "react-icons/cg"
import * as React from "react"
import { cn } from "@/lib/utils"

export const MobileNavbar = ({
  Logo,
  children,
}: {
  Logo: React.ReactNode
  children: ({
    setIsOpen,
  }: {
    /**
     * Set the open state of the mobile header, use to close the header when a link is clicked
     */
    setIsOpen: (open: boolean) => void
  }) => React.ReactNode | React.ReactNode
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div
      className={cn(
        "md:hidden px-4 pt-2",
        isOpen && "min-h-screen z-40 dark:bg-zinc-950 bg-zinc-50 size-full",
      )}
    >
      <div className="flex-row-between pb-2">
        {Logo}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-xl"
          variant={"outline"}
        >
          {isOpen ? <CgClose /> : <CgMenu />}
        </Button>
      </div>

      <dialog
        open={isOpen}
        className={isOpen ? "animate-popover-in pt-4 h-full px-4 bg-inherit" : "hidden"}
      >
        <nav className="flex flex-col gap-3 w-full">
          {typeof children === "function" ? children({ setIsOpen }) : children}
        </nav>
      </dialog>
    </div>
  )
}
