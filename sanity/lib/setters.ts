import { JobPost } from "@/sanity/types"
import { client } from "@/sanity/lib/client"
import { genSanityDocumentId } from "@/sanity/lib/gen-sanity-document-id"
import { useDocumentOperation } from "sanity"
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
     * Document ID: id is prefixed with drafts.
     */
    documentId: string
): Promise<void> => {
    try {
        const draftDoc = await client.getDocument(documentId)
        if (!draftDoc) {
            // return NextResponse.json(
            //     { error: 'Draft document not found' },
            //     { status: 404 }
            // );
            return
        }
        const publishDocumentId = documentId.split(".")[1]
        await client
            .transaction()
            .createOrReplace({ ...draftDoc, _id: publishDocumentId })
            .delete(documentId)
            .commit()
        // console.log("🚀 ~ publishedDoc:", publishedDoc)
    } catch (error) {
        console.error("Failed to update job post:", error)
        throw new Error("Failed to update job post")
    }
}
