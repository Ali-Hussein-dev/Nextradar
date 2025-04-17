import { getResourcesByTerm } from "@/sanity/lib/getters"
import { type NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const query = (searchParams.get("q") || "").trim().replace(/"/g, '\\"').toLowerCase()
  // Return an empty array if the query is empty
  if (!query) {
    return NextResponse.json([])
  }
  if (query.length > 100) {
    return NextResponse.json(
      { error: { message: "Query too long! Max 100 chars is allowed" } },
      { status: 400 },
    )
  }
  const results = await getResourcesByTerm({ q: query })
  return NextResponse.json(results)
}
