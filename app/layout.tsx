import { AnalyticsProv } from "@/components/analytics-prov"
import "./global.css"
import { Poppins } from "next/font/google"
import type { ReactNode } from "react"
const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={font.className + " scroll-smooth antialiased"}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <AnalyticsProv />
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
