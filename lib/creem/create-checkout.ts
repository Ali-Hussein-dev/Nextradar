"use server"

import axios from 'axios';
import { env } from "@/env.mjs"
import { redirect } from 'next/navigation';
import { checkoutUrl, products } from '@/constants/creem';

export const createCheckout = async () => {

    const checkoutSessionRes = await axios.post(
        checkoutUrl,
        {
            product_id: products.jobPost.id,
            // "success_url": "https://example.com/",
        },
        {
            headers: { "x-api-key": env.CREEM_API_KEY },
        },
    ).catch(console.error)
    const checkout_url = checkoutSessionRes?.data.checkout_url
    if (!checkout_url) {
        console.error("Failed to create checkout")
        return
    }
    return redirect(checkout_url)
}


