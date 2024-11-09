import dynamic from "next/dynamic"

const CreateDraftJobForm = dynamic(
  () =>
    import("@/components/jop-post-form/create-draft-job-form").then(
      (mod) => mod.CreateDraftJobForm
    ),
  { ssr: false }
)

//======================================
export default function CreateJobPostPage() {
  return (
    <div className="max-w-6xl mx-auto p-1.5 md:p-4 w-full lg:relative">
      <div className="grid lg:grid-cols-10 gap-6">
        <div className="p-3 lg:p-6 rounded-sm border border-dashed lg:col-span-7 lg:w-full">
          <CreateDraftJobForm />
        </div>
        <div className="lg:col-span-3 animate-in">
          <div className="lg:sticky lg:top-5">
            <h1 className="text-xl text-pretty dark:text-zinc-200 font-bold border-x border-t md:px-6 py-7 border-dashed rounded-sm text-center">
              Spcialized job board <br /> for Reactjs & Nextjs engineers
            </h1>
            <div className="prose dark:prose-invert prose-zinc border md:px-6 py-7 border-dashed p-4">
              <h2 className="text-lg font-medium mb-2">
                Why List on Nextradar?
              </h2>
              <ul className="space-y-3 mt-1">
                {[
                  "30-day premium listing visibility",
                  "Reach Targeted Candidates: Developers who specialize in Next.js and React.js",
                  "Multi-channel distribution across LinkedIn, Reddit, and specialized tech newsletters",
                  "Significantly cheaper than LinkedIn's €1400 for the same duration",
                ].map((str, i) => (
                  <li key={i} className="">
                    {/* <TiInputChecked className="size-6" /> */}
                    {str}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Hire Reactjs & Nextjs developers",
  description: "Hire qualified Reactjs & Nextjs developers remotely",
}
