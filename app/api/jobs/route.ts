import { getFilteredJobPosts, getJobsPage } from "@/jobs/sanity/getters"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (req: NextRequest) => {
  try {
    const url = req.nextUrl
    const pageParam = url.searchParams.get("page")
    let data = { page: [] }
    if (pageParam) {
      const page = pageParam ? Number(pageParam) : 1

      // Validate page parameter
      if (isNaN(page) || page < 1) {
        return NextResponse.json({ error: "Invalid page parameter" }, { status: 400 })
      }

      data = await getJobsPage({ page, pageSize: 5 })
      // Add security headers
    } else {
      const reactjs = !!url.searchParams.get("reactjs")
      const isHiringAgency = !!url.searchParams.get("isHiringAgency")
      const workplaceType = url.searchParams.get("workplaceType")
      data = await getFilteredJobPosts({ workplaceType, isHiringAgency, reactjs })
    }

    const response = NextResponse.json(data)

    response.headers.set("Content-Security-Policy", "default-src 'self'")
    response.headers.set("X-Content-Type-Options", "nosniff")
    response.headers.set("X-Frame-Options", "DENY")
    response.headers.set("X-XSS-Protection", "1; mode=block")

    return response
  } catch (error) {
    console.error("Error fetching sources:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
