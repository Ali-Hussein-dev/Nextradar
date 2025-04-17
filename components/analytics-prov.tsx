import { headers } from "next/headers"
import Script from "next/script"

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"

//======================================
export const AnalyticsProv = async () => {
  if (isDev) return null

  const headersList = await headers()
  const pathname = headersList.get("x-pathname")

  if (!pathname || pathname.includes("/studio")) {
    console.info("No analytics for this path", pathname)
    return null
  }

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="XZvZQAylBpQaYiQbo5TKkA"
      />
      <Script
        async
        strategy="afterInteractive"
        src="https://alityics.netlify.app/script.js"
        data-website-id="67493152-9f8c-4d3e-806b-7781045212c0"
      />
    </>
  )
}
