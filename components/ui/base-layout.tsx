import { cn } from "@/lib/utils"
import { LuChevronsUpDown } from "react-icons/lu"
import {
  Drawer,
  DrawerContent,
  // DrawerClose,
  // DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export const BaseLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-8 lg:grid-cols-12 mx-auto max-w-7xl w-full gap-4 md:gap-6 lg:gap-8 relative",
        // If right sidebar is present, main content should span 8 columns
        "[&:has(>_[data-slot='right-sidebar'])]:[&_[data-slot='main-content']]:lg:col-span-8",
        className,
      )}
    >
      <>{children}</>
    </div>
  )
}

export const MainContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <main data-slot="main-content" className={cn("p-4 md:col-span-6 lg:col-span-10", className)}>
      {children}
    </main>
  )
}

export const LeftSidebar = ({
  children,
  className,
  collapsibleTrigger,
}: {
  children: React.ReactNode
  className?: string
  collapsibleTrigger: React.ReactNode
}) => {
  return (
    <>
      <div data-slot="left-sidebar" className={cn("hidden md:block md:col-span-2 p-4", className)}>
        {children}
      </div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger className="flex px-4 items-center w-full justify-between rounded-xl py-2.5 bg-secondary">
            <span>{collapsibleTrigger}</span>
            <LuChevronsUpDown />
          </DrawerTrigger>
          <DrawerContent className="px-4">
            <DrawerHeader>
              <DrawerTitle>Select Category</DrawerTitle>
              {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
            </DrawerHeader>
            {children}
            <DrawerFooter>
              {/* <Button>{collapsibleTrigger}</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

export const RightSidebar = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <aside data-slot="right-sidebar" className={cn("hidden lg:block p-4 lg:col-span-2", className)}>
      {children}
    </aside>
  )
}
