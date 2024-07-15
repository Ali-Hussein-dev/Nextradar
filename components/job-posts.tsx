import { getJobPosts } from "@/sanity/lib/get-job-posts"
import { JobCard } from "./job-card"


export const revalidate = 10000
//======================================
export const JobPosts = async () => {
  const list = await getJobPosts()
  return (
    <>
      <section className="max-w-2xl mx-auto">
        <h2 className="mb-4 text-center text-lg">
          Awesome{" "}
          <span className="bg-orange-800/60 px-0.5">job opportunities</span> for
          professional Nextjs devs{" "}
          <span className="bg-teal-800/70 px-0.5">everyday</span>.
        </h2>
        <div className="grid gap-5">
          {list.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </section>
    </>
  )
}
