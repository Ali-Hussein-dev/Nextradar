"use server"
import { createServerAction, } from "zsa"
import { DrafJobFormSchema } from "@/lib/zod-schema"
import { redirect } from "next/navigation"
import { createDraftJobPost } from "@/sanity/lib/setters"
import { createCheckout } from "@/lib/creem/create-checkout"

/**
 * - form fields
 * -> zod validation
 * -> submit to Sanity with private fields
 * -> do sth
 */
export const handleJobFormSubmission = createServerAction()
    .input(DrafJobFormSchema)
    .onError((e: any) => {
        console.error(e.data?.issues)
        return "An error occurred while submitting the job post"
    })
    .onSuccess((onSuccess) => {
        // notify me or send an email
        console.log(onSuccess)
        return "Job post submitted successfully"
    })
    .handler(async ({ input }) => {

        // @ts-expect-error not defined in Sanity schema
        delete input.agreement
        input = {
            ...input,
            longDescription: JSON.parse(input.longDescription)
        }
        // @ts-expect-error longDescription type should be fixed
        const metadata = await createDraftJobPost(input)

        // create checkout session
        const checkoutObject = await createCheckout(metadata)

        const checkoutUrl = checkoutObject?.data.checkout_url
        return redirect(checkoutUrl)
    })
