import { z } from "zod"

export const DrafJobFormSchema = z.object({
    jobTitle: z.string(),
    branch: z.string().optional(),
    timeZone: z.array(z.string()).optional(),
    applyUrl: z.union([z.string().url(), z.string().email()]),
    salary: z.object({
        currency: z.string().optional(),
        maximum: z.string().optional(),
        minimum: z.string().optional(),
        range: z.string().optional(),
    }).optional(),
    isReactjsOnly: z.boolean().optional(),
    company: z.object({
        name: z.string(),
        recruiterEmail: z.string().email(),
        website: z.string().url().optional(),
        recruiterName: z.string().optional(),
        isHiringAgency: z.boolean().optional(),
    }),
    benefits: z.array(z.string()).optional(),
    longDescription: z.string(),
    description: z.string(),
    agreement: z.boolean(),
    workplaceType: z.union([z.literal("Remote"), z.literal("Onsite"), z.literal("Hybrid")]).optional(),
    contractType: z.union([
        z.literal("Full-time"),
        z.literal("Part-time"),
        z.literal("Freelance"),
        z.literal("Contract"),
        z.literal("Intern"),
        z.literal("Other"),
    ]),
})