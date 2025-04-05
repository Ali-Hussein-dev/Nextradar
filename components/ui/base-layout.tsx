import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LuChevronsUpDown } from "react-icons/lu";

export const BaseLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-8 lg:grid-cols-12 mx-auto max-w-7xl w-full gap-4 md:gap-6 lg:gap-8",
        // If right sidebar is present, main content should span 8 columns
        "[&:has(>_[data-slot='right-sidebar'])]:[&_[data-slot='main-content']]:lg:col-span-8",
        className
      )}
    >
      <>{children}</>
    </div>
  );
};

export const MainContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      data-slot="main-content"
      className={cn("p-4 md:col-span-6 lg:col-span-10", className)}
    >
      {children}
    </main>
  );
};

export const LeftSidebar = ({
  children,
  className,
  collapsibleTrigger,
}: {
  children: React.ReactNode;
  className?: string;
  collapsibleTrigger: React.ReactNode;
}) => {
  return (
    <>
      <div
        data-slot="left-sidebar"
        className={cn("hidden md:block md:col-span-2 p-4", className)}
      >
        {children}
      </div>
      <Collapsible className={cn("md:hidden", className)}>
        <CollapsibleTrigger className="flex px-4 items-center w-full justify-between rounded-sm py-3 bg-secondary">
          <span>{collapsibleTrigger}</span>
          <LuChevronsUpDown />
        </CollapsibleTrigger>
        <CollapsibleContent className="py-2">{children}</CollapsibleContent>
      </Collapsible>
    </>
  );
};

export const RightSidebar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <aside
      data-slot="right-sidebar"
      className={cn("hidden lg:block p-4 lg:col-span-2", className)}
    >
      {children}
    </aside>
  );
};
