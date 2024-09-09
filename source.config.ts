// source.config.ts

import { defineDocs, defineConfig } from "fumadocs-mdx/config"

export const { docs, meta } = defineDocs({
  meta: {
    dir: "./content"
  },
  docs: {
    dir: "./content"
  },
})

export default defineConfig({
  mdxOptions: {
    baseUrl: "/docs",
  },
})
