import { CreateDraftJobForm } from "@/components/jop-post-form/create-draft-job-form"

// const SideBar = () => {
//   return (
//     <div className="md:col-span-2 p-2">
//       <h1 className="text-2xl font-extrabold mb-4 mt-6 text-center text-pretty animate-in dark:text-zinc-100">
//         Hire Experineced Developers in Reactjs & Nextjs framework
//       </h1>
//     </div>
//   )
// }

//======================================
export default function CreateJobPostPage() {
  return (
    <div className="max-w-4xl mx-auto p-1.5 sm:p-4 w-full">
      <div className=" md:grid-cols-8 gap-4">
        <div className="p-3 md:p-6 rounded-sm md:shadow-inner border border-dashed md:col-span-6">
          <h1 className="text-2xl mb-4 mt-6 text-center text-pretty animate-in dark:text-zinc-200 font-bold">
            Hire qualified Reactjs & Nextjs developers
          </h1>
          <CreateDraftJobForm />
        </div>
        <div className="md:col-span-2 p-2">
          {/* <div>
            <div className="flex-row-center gap-3">
              {["str", "str"].map((o, i) => (
                <div
                  key={i}
                  className="size-12 dark:bg-zinc-800 rounded-sm"
                ></div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Create Job Post",
  description: "Hire qualified Reactjs & Nextjs developers",
}
