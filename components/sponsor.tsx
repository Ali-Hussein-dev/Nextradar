import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

//======================================
export const Sponsor = () => {
  return (
    <div className="w-fit mx-auto ">
      <div className="relative overflow-hidden rounded-xl dark:bg-zinc-900 bg-white border border-dashed dark:border-zinc-700 group border-zinc-400 p-[0.5px] w-fit mx-auto">
        <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />

        <Button
          // {...props}
          className={cn(
            "h-fit py-3 md:py-0 px-5 w-full rounded-xl font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
            // props.className
          )}
        >
          <a
            href="https://indie-starter.dev"
            target="_blank"
            className="flex flex-col justify-center md:flex-row h-full md:items-center gap-1 sm:gap-2 no-underline overflow-hidden"
            data-umami-event="sponsor-card"
          >
            <span className="md:border-r pr-2 sm:gap-2 font-semibold text-sm sm:text-base">
              Indie Starter
            </span>
            <span className="font-light">Next.js starter for indie makers</span>
          </a>
        </Button>
      </div>
    </div>
  )
}

//======================================
export function Promote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex-row-center pt-6 border-t-[0.5px] max-w-5xl mx-auto
   mt-8"
    >
      <Button
        asChild
        variant={"outline"}
        className="rounded-lg border-dashed dark:text-green-300 text-green-500 gap-2 group font-normal"
      >
        <Link prefetch={false} href="/docs/sponsor">
          {children}
          <FaArrowRight className="group-hover:translate-x-2 duration-200" />
        </Link>
      </Button>
    </div>
  )
}



/**
 * Premium Listing:
 * - price per month: $220
 * - price per quarter: $610 (save $50)
 * Scope: integrations, templates, courses, open-source projects. 
 * 
 * Top Listing:
 * - price per month: $1200
 * - price per quarter: $3200 (save $400)
 * 
 */