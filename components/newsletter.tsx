import { Button } from "./button"

//======================================
export function Newsletter() {
  return (
    <div className="py-12 px-2">
      <div className="flex-col-center gap-1 p-8 border rounded-lg max-w-2xl mx-auto border-dashed">
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold tracking-tighter text-center">
          Biweekly Newsletter
        </h2>
        <p className="text-center dark:text-zinc-400 text-zinc-800 pb-5">
          Get the latest published high-quality resources about Next.js in your
          inbox
        </p>
        <Button asChild className="w-full">
          <a href="https://nextradar.substack.com/">Subscribe</a>
        </Button>{" "}
      </div>
    </div>
  )
}

//======================================
export function Newsletter2() {
  return (
    <div className="pb-3">
    <div className="px-4 py-5 border w-full border-dashed rounded">
      <div className="flex-row-between gap-2 w-full prose-p:mt-0">
        <p className="text-center dark:text-zinc-400 text-zinc-800 my-0">
          Get the latest published high-quality resources about Next.js in your
          inbox
        </p>
        <Button asChild className="rounded-lg font-medium">
          <a href="https://nextradar.substack.com/">Subscribe</a>
        </Button>
      </div>
    </div>
    </div>
  )
}
