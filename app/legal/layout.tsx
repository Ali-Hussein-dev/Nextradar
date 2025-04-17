import { Footer } from "@/components/shared/footer"
import * as React from "react"
// add seo metadata, here
//======================================
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-[40rem] flex-col items-center justify-start px-2 pt-4 md:pt-8">
      {children}
      <Footer />{" "}
    </div>
  )
}
