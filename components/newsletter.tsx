import { Button } from "./button"

//======================================
export function Newsletter() {
  return (
    <div className="py-12 px-2">
      <div className="flex-col-center gap-1 p-8 border rounded-lg max-w-2xl mx-auto border-dashed">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold tracking-tighter text-center">
          Biweekly Newsletter
        </h3>
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
    <div className="pb-3 max-w-2xl mx-auto">
      <div className="px-4 py-5 border w-full border-dashed rounded dark:bg-zinc-900/50 bg-white">
        <div className="flex-col lg:items-end flex lg:flex-row justify-between gap-4 w-full prose-p:mt-0 md:gap-12">
          <div className="">
            <h2 className="text-xl lg:text-start mt-0 mb-1 font-bold tracking-tighter text-center">
              Biweekly Newsletter
            </h2>
            <p className="text-center lg:text-start dark:text-zinc-400 text-zinc-800 my-0 text-pretty">
              Get the latest Next.js resources by industry experts in your inbox
            </p>
          </div>
          <Button asChild className="rounded-lg font-medium">
            <a href="https://nextradar.substack.com/">Subscribe</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
