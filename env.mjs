import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    /*
     * Serverside Environment variables, not available on the client.
     * Will throw if you access these variables on the client.
     */
    server: {
        /**
         * The API key to use when calling the CREEM API
         */
        CREEM_API_KEY: z.string().min(1),
        CREEM_WEBHOOK_SECRET: z.string().min(1),
        ALIYTICS_USERNAME: z.string().min(1),
        ALIYTICS_PASSWORD: z.string().min(1),
        NEXT_PUBLIC_AHREF_KEY: z.string().min(1),
    },
    /*
     * Environment variables available on the client (and server).
     *
     * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
     */
    client: {
        // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    },
    /*
     * Due to how Next.js bundles environment variables on Edge and Client,
     * we need to manually destructure them to make sure all are included in bundle.
     *
     * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
     */
    runtimeEnv: {
        CREEM_API_KEY: process.env.CREEM_API_KEY,
        CREEM_WEBHOOK_SECRET: process.env.CREEM_WEBHOOK_SECRET,
        ALIYTICS_USERNAME: process.env.ALIYTICS_USERNAME,
        ALIYTICS_PASSWORD: process.env.ALIYTICS_PASSWORD,
        NEXT_PUBLIC_AHREF_KEY: process.env.NEXT_PUBLIC_AHREF_KEY,
    },
});