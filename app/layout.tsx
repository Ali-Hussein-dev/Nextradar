import { AnalyticsProv } from "@/components/analytics-prov"
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className + " scroll-smooth antialiased"}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <AnalyticsProv />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
