import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { MobileNavbar } from "./mobile-navbar"
import { cn } from "@/lib/utils"

const navVariants = cva("mx-auto", {
  variants: {
    variant: {
      default: "max-w-7xl",
      centered:
        "max-w-4xl rounded-full mt-2 border shadow-lg dark:border-zinc-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NavProps extends VariantProps<typeof navVariants> {
  sticky?: boolean
  Logo: React.ReactNode
  /**
   * Items to be displayed on mobile
   */
  mobileItems: (props: {
    setIsOpen: (open: boolean) => void
  }) => React.ReactNode
  /**
   * Items to be displayed on desktop
   */
  desktopItems: React.ReactNode
}

//======================================
export const Navbar = ({
  Logo,
  sticky,
  variant,
  mobileItems,
  desktopItems,
}: NavProps) => {
  return (
    <header
      className={cn(
        "w-full dark:bg-zinc-950/50 backdrop-blur bg-zinc-50",
        sticky && variant == "centered" && "md:sticky top-3",
        sticky && variant == "default" && "md:sticky top-0"
      )}
    >
      <div className={cn("hidden md:block", navVariants({ variant }))}>
        <div className="flex-row-start px-6 pb-2 pt-3 w-full gap-2">
          {Logo}
          <nav className="grow flex-row-end gap-3 lg:gap-8">{desktopItems}</nav>
        </div>
      </div>
      {/* <MobileNavbar Logo={Logo}>{mobileItems}</MobileNavbar> */}
    </header>
  )
}
