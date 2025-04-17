import MainLayout from "@/components/app-shell/main-layout"

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
export const metadata = {
  title: "Nextjs Jobs and Reactjs Jobs - Nextradar.dev",
  description:
    "Find Nextjs jobs and Reactjs jobs for developers in the USA, Canada, Europe, and worldwide.",
}
