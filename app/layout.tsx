import { AnalyticsProv } from "@/components/analytics-prov"
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Poppins } from "next/font/google"
import type { ReactNode } from "react"
import { NuqsAdapter } from "nuqs/adapters/next/app"
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
      </head>
      <body>
        <RootProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </RootProvider>
      </body>
    </html>
  )
}
