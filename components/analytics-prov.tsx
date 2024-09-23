import { headers } from "next/headers"
const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"

//======================================
export const AnalyticsProv = () => {
  if (isDev) return null

  const headersList = headers()
  
  const pathname = headersList.get("x-pathname")

  if (!pathname || pathname.includes("/studio")) {
    console.info("No analytics for this path", pathname)
    return null
  }

  return (
    <script
      defer
      src="https://aliytics.netlify.app/script.js"
      data-website-id="176aa3d6-7cb7-4bef-af6a-644d42b42833"
    ></script>
  )
}
