import { z } from "zod"

export const DrafJobFormSchema = z.object({
    jobTitle: z.string(),
    branch: z.string().optional(),
    contractType: z.string().optional(),
    timeZone: z.array(z.string()).optional(),
    agreement: z.boolean(),
    applyUrl: z.union([z.string().url(), z.string().email()]),
    salary: z.object({
        currency: z.string().optional(),
        maximum: z.number().optional(),
        minimum: z.number().optional(),
    }),
    isReactjsOnly: z.boolean().optional(),
    company: z.object({
        name: z.string(),
        website: z.string().url(),
        recruiterName: z.string().optional(),
        recruiterEmail: z.string().email().optional(),
        isHiringAgency: z.boolean().optional(),
    }),
    benefits: z.array(z.string()).optional(),
    // placeholder
    longDescription: z.string().optional(),
})

// type job = {
//     _id: string;
//     jobTitle?: string;
//     slug?: {
//         _type: "slug";
//         current?: string;
//         source?: string;
//     };
//     timeZone?: Array<string>;
//     branch?: string;
//     contractType?: string;
//     applyUrl?: string;
//     workplaceType?: "remote" | "on-site" | "hybrid";
//     benefits?: Array<string>;
//     longDescription?: any[];
//     isReactjsOnly?: boolean;
//     salary?: {
//         minimum?: string;
//         maximum?: string;
//         currency?: string;
//     };
//     company?: {
//         name?: string;
//         website?: string;
//         isHiringAgency?: boolean;
//         recruiterName?: string;
//         recruiterEmail?: string;
//     };
//     publishedAt?: string;
//     jobType?: Array<string>;
//     companyName?: string;
//     location?: string;
// }

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

