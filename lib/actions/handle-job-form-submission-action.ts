"use server"
import { createServerAction, } from "zsa"
import { DrafJobFormSchema } from "@/lib/zod-schema"
import { redirect } from "next/navigation"
import { createDraftJobPost } from "@/sanity/lib/setters"
import { createCheckout } from "../creem/create-checkout"

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

        console.log("🚀 ~ .handler ~ input:", input)

        // @ts-expect-error not defined in Sanity schema
        delete input.agreement
        // @ts-expect-error longDescription type should be fixed
        const metadata = await createDraftJobPost(input)
        console.log("🚀 ~ .handler ~ metadata:", metadata)

        // create checkout session
        const checkoutObject = await createCheckout(metadata)

        console.log("🚀 ~ .handler ~ checkoutObject:", checkoutObject)
        const checkoutUrl = checkoutObject?.data.checkout_url
        return redirect(checkoutUrl)
    })
