import { CreateDraftJobForm } from "@/components/jop-post-form/create-draft-job-form"

//======================================
export default function CreateJobPostPage() {
  return (
    <div className="max-w-4xl mx-auto p-1.5 sm:p-4 md:p-8">
      
      <div className="p-3 md:p-6 rounded-sm md:shadow-inner border border-dashed">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-center text-pretty animate-in">
          Hire Experineced Developers in Reactjs & Nextjs framework
        </h1>
        <CreateDraftJobForm />
      </div>
    </div>
  )
}

export const metadata = {
  title: "Create Job Post",
  description: "Hire experienced developers in Reactjs & Nextjs framework",
}
