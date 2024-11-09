import { JobPost } from "@/sanity/types"
import { client } from "@/sanity/lib/client"
import { genSanityDocumentId } from "@/sanity/lib/gen-sanity-document-id"
import slugify from "slugify"
import { JobFormSchema } from "@/lib/zod-schema"
import { formatDate } from "date-fns"

/**
 * Initialize a Job Post Document
 */
export const createDraftJobPost = async (
    jobPost: JobFormSchema
): Promise<any> => {

    const publishedAt = new Date().toISOString()
    const date = formatDate(publishedAt, "yyyy-MM-dd-HH")
    
    const fields: Omit<JobPost, "_createdAt" | "_rev" | "_updatedAt"> = {
        ...jobPost,
        slug: {
            _type: "slug",
            current: slugify(`${jobPost.jobTitle}-${date}`, {
                lower: true,
                trim: true,
            }),
        },
        publishedAt,
        salary: {
            minimum:
                typeof jobPost.salary?.minimum === "number"
                    ? (jobPost.salary.minimum % 1000) + "K"
                    : undefined,
            maximum:
                typeof jobPost.salary?.maximum === "number"
                    ? (jobPost.salary.maximum % 1000) + "K"
                    : undefined,
            currency: jobPost.salary?.currency,
        },
        _id: genSanityDocumentId(true),
        _type: "jobPost",
    }
    return await client
        .create(fields, {
            returnDocuments: true,
        })
        .then((res) => ({ _id: res._id, company: res.company }))
}

/**
 * Update Job Document
 */
export const publishDocument = async (
    /**
     * Draft ID: id is prefixed with drafts.
     */
    draftId: string,
    orderId: string
): Promise<void> => {
    const draftDoc = await client.getDocument(draftId)
    if (!draftDoc) return
    // update & publish document
    const publishedId = draftId.split(".")[1]
    client
        .action([
            {
                actionType: 'sanity.action.document.edit',
                draftId,
                publishedId,
                patch: {
                    set: {
                        orderId
                    }
                },
            },
            {
                actionType: 'sanity.action.document.publish',
                draftId,
                publishedId,
            },
        ])
        .catch((err: { message: any }) => {
            console.error('Edit draft failed: ', err.message)
        })
}
