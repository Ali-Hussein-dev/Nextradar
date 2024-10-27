import MainLayout from "@/components/app-shell/main-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
