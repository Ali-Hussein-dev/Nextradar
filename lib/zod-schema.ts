import { z } from "zod"

export const DrafJobFormSchema = z.object({
    jobTitle: z.string(),
    branch: z.string().optional(),
    timeZone: z.array(z.string()).optional(),
    applyUrl: z.union([z.string().url(), z.string().email()]),
    salary: z.object({
        currency: z.string().optional(),
        maximum: z.number().optional(),
        minimum: z.number().optional(),
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
        z.literal("Internship"),
        z.literal("Other"),
    ]),
})

export type JobFormSchema = {
    jobTitle: string;
    description: string;
    timeZone?: Array<string>;
    branch?: string;
    contractType: "Full-time" | "Part-time" | "Freelance" | "Contract" | "Internship" | "Other";
    applyUrl: string;
    workplaceType: "Remote" | "Onsite" | "Hybrid";
    benefits?: Array<string>;
    longDescription?: any[];
    isReactjsOnly?: boolean;
    company?: {
        name?: string;
        website?: string;
        recruiterName?: string;
        recruiterEmail?: string;
        isHiringAgency?: boolean;
    };
    salary?: {
        /**
         * @deprecated
         */
        maximum?: number;
        /**
         * @deprecated
         */
        minimum?: number;
        currency?: "USD" | "EUR" | "GBP" | "CAD";
        range?: string;
    }
    // location?: string;
}

// const slugSchema = z.object({
//     _type: z.literal("slug"),
//     current: z.string().optional(),
//     source: z.string().optional(),
// });

// const salarySchema = z.object({
//     minimum: z.string().optional(),
//     maximum: z.string().optional(),
//     currency: z.string().optional(),
// });

// const companySchema = z.object({
//     name: z.string().optional(),
//     website: z.string().optional(),
//     isHiringAgency: z.boolean().optional(),
//     recruiterName: z.string().optional(),
//     recruiterEmail: z.string().optional(),
// });

