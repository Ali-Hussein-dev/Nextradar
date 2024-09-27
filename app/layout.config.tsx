import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { pageTree } from "@/app/source"

// shared configuration
export const options: DocsLayoutProps = {
  nav: {
    title: "Nextradar",
  },
  tree: pageTree,
}

// docs layout configuration
export const baseOptions: DocsLayoutProps = {
  ...options,
  sidebar: {
    enabled: true,
    hideSearch: true,
  },
}
