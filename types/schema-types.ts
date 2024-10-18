import { TypedObject } from "sanity"

export type JobPostSchema = {
    _id: string
    jobTitle: string
    companyName: string
    location: string
    branch: string
    salaryMin: number
    salaryMax: number
    currency: string
    applyUrl: string
    jobType: string[]
    shortDescription: string
    contractType: string
    publishedAt: string
    longDescription: TypedObject[]
    jobHook: TypedObject[]
    slug: string
    token?: string | null
}
