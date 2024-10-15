import { type SchemaTypeDefinition } from "sanity"
import JobPost from "@/sanity/job-post-schema"
import RepoSchema from "@/sanity/repos-schema"
import SiteSchema from "@/sanity/site-schema"
import SourceSchema from "@/sanity/source-schema"
import IntegrationSchema from "@/sanity/schemas/integration-schema"
import CompanySchema from "@/sanity/schemas/company-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    JobPost,
    RepoSchema,
    SiteSchema,
    SourceSchema,
    IntegrationSchema,
    CompanySchema,
  ],
}
