import dynamic from "next/dynamic"
import { SiVercel, SiUpstash, SiSupabase, SiMedusa } from "react-icons/si"
const CreateDraftJobForm = dynamic(
  () =>
    import("@/jobs/components/create-draft-job-form").then(
      (mod) => mod.CreateDraftJobForm
    ),
  { ssr: false }
)
const logos = [
  { Icon: SiUpstash, name: "Upstash" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiSupabase, name: "Supabase" },
  { Icon: SiMedusa, name: "Medusa" },
]
//======================================
export default function CreateJobPostPage() {
  return (
    <div className="max-w-5xl mx-auto p-1.5 md:p-4 w-full lg:relative">
      <div className="grid lg:grid-cols-10 gap-6">
        <div className="p-3 lg:p-6 rounded-sm border border-dashed lg:col-span-7 lg:w-full w-fit ">
          <CreateDraftJobForm />
        </div>
        <div className="lg:col-span-3 animate-in">
          <div className="lg:sticky lg:top-3">
            <h1 className="text-xl text-pretty dark:text-zinc-200 font-bold border-x border-t md:px-6 py-7 border-dashed rounded-sm text-center">
              Hire Top Nextjs & Reactjs Developers
            </h1>
            <div className="prose dark:prose-invert prose-zinc border md:px-6 py-7 border-dashed p-4">
              <h2 className="text-lg font-medium mb-2">
                Why posting your open roles on Nextradar?
              </h2>
              <ul className="space-y-2">
                {[
                  "30-day premium listing visibility",
                  // "Reach Targeted Candidates: Developers who specialize in Next.js and React.js",
                  "Multi-channel distribution across LinkedIn, Reddit, and specialized tech newsletters",
                  "Significantly cheaper than LinkedIn's €1400 for the same duration",
                ].map((str, i) => (
                  <li key={i}>{str}</li>
                ))}
              </ul>
            </div>
            <div className="border-b border-x md:px-6 py-7 border-dashed p-4">
              <h2 className="text-lg text-center font-medium mb-2">
                Featured Companies
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {logos.map((logo, i) => (
                  <div key={i} className="">
                    <logo.Icon className="size-6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Find top Reactjs & Nextjs developers",
  description: "Hire qualified Reactjs & Nextjs developers remotely",
}
