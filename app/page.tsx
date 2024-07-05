import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-extrabold md:text-4xl lg:text-6xl tracking-tighter">
          Find the Right Thing <br /> in Seconds, not Hours
        </h1>
        <p className="text-lg">
          Hand-picked resources for every <b>Nextjs devs</b>
        </p>
        <Link href="docs">Discover</Link>
      </div>
      <div className="mx-auto max-w-xl py-12">
        <h2 className="mb-2 text-2xl font-bold">Why I built this project?</h2>
        <p className="">
          The Nextjs ecosystem is growing rapidly. It's hard to keep up with the
          latest resources. The Social media is distracting environement, and
          it's hard to find the right thing in short time without being
          distracted.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-10">
        {[
          { href: "/docs/learn", label: "Learn" },
          { href: "/docs/utility", label: "Utility" },
          { href: "/docs/plugin", label: "Plugin" },
          { href: "/docs/built-with-nextjs", label: "Built with Nextjs" },
        ].map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="rounded-lg px-8 py-4 border"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </main>
  )
}
