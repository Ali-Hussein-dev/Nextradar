import { Button } from "@/components/button"
import Link from "next/link"
import { Metadata } from "next"
import { Faqs } from "@/components/faqs"

export const metadata: Metadata = {
  title: "NextRadar",
  description: "Curated Next.js Tools & Resources for focused devs",
}
const Footer = () => (
  <footer className="text-center py-4 border-t text-sm dark:text-zinc-500">
    <p>
      Built by{" "}
      <a
        href="https://x.com/alihussein_20"
        className="text-sky-600 hover:underline font-semibold"
      >
        Ali H
      </a>
    </p>
  </footer>
)

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="h-[80vh] flex-col-center ">
        <div className="flex flex-col justify-center text-center animate-in">
          <h1 className="mb-4 text-2xl font-extrabold md:text-4xl lg:text-5xl tracking-tight text-center max-w-2xl text-balance mx-auto">
            Curated Next.js Tools & Resources for focused devs
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto dark:text-zinc-400">
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
        <p className="pt-2 text-center dark:text-zinc-500">
          This site is not endorsed by or affiliated with Vercel.
        </p>
      </div>
      <Faqs />
      <Footer />
    </main>
  )
}
