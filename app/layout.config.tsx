import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { pageTree } from "@/app/source"

// shared configuration
export const baseOptions: DocsLayoutProps = {
  nav: {
    title: "NextRadar",
  },
  tree: pageTree,
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  sidebar: {
    enabled: true,
  },
}
