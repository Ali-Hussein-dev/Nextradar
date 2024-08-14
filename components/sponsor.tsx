import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "./button"

//======================================
export const Sponsor = () => {
  return (
    <div className="relative overflow-hidden rounded-xl dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-[0.5px] w-fit mx-auto">
      <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
      <Button
        // {...props}
        className={cn(
          "h-10 px-6 w-full rounded-xl font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900"
          // props.className
        )}
      >
        <a
          href={"https://indie-starter.dev/?ref=nextradar"}
          target={"_blank"}
          className="flex-row-start gap-4 no-underline"
        >
          <span className="border-r pr-3">Indie Starter</span>
          <span className="font-light">Focus on what matters</span>
        </a>
      </Button>
    </div>
  )
}
