import MainLayout from "@/components/app-shell/main-layout"

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
export const metadata = {
  title: "Nextjs Jobs and Reactjs Jobs",
  description:
    "Find remote Next.js and React.js developer jobs in the USA, Canada, Europe, and worldwide.",
}