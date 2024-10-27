import MainLayout from "@/components/app-shell/main-layout"

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
export const metadata = {
  title: "Remote Jobs for Next.js and React.js developers",
  description: "Find remote jobs for Next.js and React.js developers",
}
