import { Button } from "@/components/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center text-center animate-in">
        <h1 className="mb-4 text-2xl font-extrabold md:text-4xl lg:text-5xl tracking-tighter text-center max-w-2xl text-balance mx-auto">
          Curated Next.js Tools & Resources for focused devs
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto dark:text-zinc-400">
          Keeping up with Next.js ecosystem can be overwhelming. We filter the
          noise, delivering only what matters.
        </p>
        <Button
          asChild
          className="mt-4 max-w-[13rem] font-semibold w-full mx-auto"
        >
          <Link href="/docs/latest">Discover</Link>
        </Button>
      </div>
    </main>
  )
}
