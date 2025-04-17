"use client"
import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "@/lib/get-query-client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NuqsAdapter } from "nuqs/adapters/next/app"

export const ReactQueryProv = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ReactQueryProv>{children}</ReactQueryProv>
    </NextThemesProvider>
  )
}

export function SharedProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NuqsAdapter>
        <ReactQueryProv>{children}</ReactQueryProv>
      </NuqsAdapter>
    </ThemeProvider>
  )
}
