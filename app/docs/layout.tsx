import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from "../layout.config"
import { ReactQueryProv } from "@/components/providers"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions}>
      <ReactQueryProv>{children}</ReactQueryProv>
    </DocsLayout>
  )
}
