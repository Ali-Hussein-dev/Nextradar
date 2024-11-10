import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: isDev ? 'previewDrafts' : 'published',
  token: process.env.SANITY_API_TOKEN,
}).withConfig({
  useCdn: false
})
