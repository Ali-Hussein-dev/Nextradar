import { Button } from "@/components/button"
import Link from "next/link"
import { Metadata } from "next"
import { Faqs } from "@/components/faqs"
import { Authors } from "@/components/authors"

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
          <h1 className="h1 mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl tracking-tight text-center max-w-lg mx-auto text-pretty">
            Navigate the Next.js Ecosystem with ease
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto font-medium  px-1 dark:text-zinc-400 border rounded-sm border-dashed">
            Awesome-Nextjs Alternative
          </p>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto dark:text-zinc-500 font-medium pt-1">
            Stay up to date with the latest Next.js tools and resources.
          </p>
          <Button
            asChild
            className="mt-4 max-w-[13rem] font-semibold w-full mx-auto"
          >
            <Link href="/docs/latest">Discover</Link>
          </Button>
        </div>
      </div>
      <Authors />
      <Faqs />
      <p className="py-4 text-center dark:text-zinc-500">
        This site is not endorsed by or affiliated with Vercel.
      </p>
      <Footer />
    </main>
  )
}
