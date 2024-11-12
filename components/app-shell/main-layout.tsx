import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-shell/app-sidebar"
import { ReactQueryProv, ThemeProvider } from "@/components/providers"
import { Footer } from "@/components/shared/footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <nav className="px-4 py-1">
            <SidebarTrigger />
          </nav>
          <div className="relative">
            <div className="pt-2 pb-8 h-full px-3 md:px-1">
              <ReactQueryProv>{children}</ReactQueryProv>
            </div>
          </div>
          <Footer />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}
