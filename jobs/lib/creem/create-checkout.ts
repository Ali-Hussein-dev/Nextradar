"use server"

import axios from 'axios';
import { env } from "@/env.mjs"
import { checkoutUrl, products, devEnv } from '@/constants/creem';
import { urls } from '@/constants/urls';

export const createCheckout = async (metadata: Record<string, any>): Promise<{ data: { checkout_url: string } & any } | void> => {
    const baseUrl = devEnv ? "http://localhost:3000" : "https://nextradar.dev"

    if (!baseUrl) {
        throw new Error(`baseUrl is not defined ${baseUrl}`)
    }
    return await axios.post(
        checkoutUrl,
        {
            product_id: products.jobPost.id,
            // expected post id
            metadata,
            success_url: `${baseUrl + urls.jobs}`,
        },
        {
            headers: { "x-api-key": env.CREEM_API_KEY },
        },
    ).catch(e => console.error(e.response.data))
}
