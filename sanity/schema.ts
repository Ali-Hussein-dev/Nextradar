import { type SchemaTypeDefinition } from 'sanity'
import JobPost from '@/sanity/job-post-schema'
import RepoSchema from '@/sanity/repos-schema'
import SiteSchema from '@/sanity/site-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [JobPost, RepoSchema, SiteSchema],
}
