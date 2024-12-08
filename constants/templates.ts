import { Template } from "@/components/sections/templates-section"

/**
 * backenend param
 * 1.
 * backend=firebase,prisma
 * specs.backend=["firebase","prisma", "supabase"]
 * result: true
 * 2.
 * backend=firebase,prisma
 * specs.backend=["firebase","prisma"]
 * result: true
 * 3.
 * backend=firebase,prisma,supabase
 * specs.backend=["firebase","prisma"]
 * result: false
 */
export const filterLabels = {
    cost: {
        name: "Cost",
        list: {
            free: { label: "Free", value: "free" },
            premium: { label: "Premium", value: "premium" },
        },
    },
    payment: {
        name: "Payment",
        list: {
            stripe: { label: "Stripe", value: "stripe" },
            paypal: { label: "PayPal", value: "paypal" },
            lemonSqueezy: { label: "LemonSqueezy", value: "lemonSqueezy" },
            paddle: { label: "Paddle", value: "paddle" },
            chargebee: { label: "Chargebee", value: "chargebee" },
        },
    },
    cms: {
        name: "Headless CMS",
        list: {
            // strapi: { label: "Strapi", value: "strapi" },
            sanity: { label: "Sanity", value: "sanity" },
            medusa: { label: "Medusa", value: "medusa" },
            wordpress: { label: "WordPress", value: "wordpress" },
            keystatic: { label: "KeyStatic", value: "keystatic" },
        },
    },
    backend: {
        name: "Backend",
        list: {
            supabase: { label: "Supabase", value: "supabase" },
            firebase: { label: "Firebase", value: "firebase" },
            nextAuth: { label: "NextAuth", value: "nextauth" },
            clerk: { label: "Clerk", value: "clerk" },
            prisma: { label: "Prisma", value: "prisma" },
            drizzle: { label: "Drizzle", value: "drizzle" },
            neon: { label: "Neon", value: "neon" },
            express: { label: "Express", value: "express" },
            vercelPostgres: { label: "Vercel Postgres", value: "vercelPostgres" },
            upstash: { label: "upstash", value: "upstash" },
            mongodb: { label: "MongoDB", value: "mongodb" },
            sqLite: { label: "SqLite", value: "sqlite" },
            zenstack: { label: "ZenStack", value: "zenstack" },
            postgres: { label: "Postgres", value: "postgres" },
            mysql: { label: "MySQL", value: "mysql" },
        },
    },
    email: {
        name: "Email",
        list: {
            sendgrid: { label: "SendGrid", value: "sendgrid" },
            mailgun: { label: "Mailgun", value: "mailgun" },
            postmark: { label: "Postmark", value: "postmark" },
            mailchimp: { label: "Mailchimp", value: "mailchimp" },
            resend: { label: "Resend", value: "resend" },
            nodemailer: { label: "Nodemailer", value: "nodemailer" },
            loops: { label: "Loops", value: "loops" },
            plunk: { label: "Plunk", value: "plunk" },
            mailjet: { label: "Mailjet", value: "mailjet" },
            hubspot: { label: "HubSpot", value: "hubspot" },
            awsses: { label: "AWS SES", value: "awsses" },
        },
    },
    analytics: {
        name: "Analytics",
        list: {
            googleAnalytics: { label: "Google Analytics", value: "googleAnalytics" },
            segment: { label: "Segment", value: "segment" },
            mixpanel: { label: "Mixpanel", value: "mixpanel" },
            umami: { label: "Umami", value: "umami" },
            posthog: { label: "Posthog", value: "posthog" },
            builtIn: { label: "Built-in", value: "builtIn" },
            vercelAnalytics: { label: "Vercel Analytics", value: "vercelAnalytics" },
            pirsch: { label: "Pirsch", value: "pirsch" },
            openPanel: { label: "Open Panel", value: "openPanel" },
            plausible: { label: "Plausible", value: "plausible" },
        },
    },
    styling: {
        name: "Styling",
        list: {
            tailwind: { label: "TailwindCSS", value: "tailwindcss" },
            chakra: { label: "Chakra UI", value: "chakra" },
            styledComponents: {
                label: "Styled Components",
                value: "styledComponents",
            },
            shadcn: { label: "Shadcn", value: "shadcn" },
            daisyui: { label: "DaisyUI", value: "daisyui" },
        },
    },
    language: {
        name: "Language",
        list: {
            typescript: { label: "TypeScript", value: "typescript" },
            javascript: { label: "JavaScript", value: "javascript" },
        },
    },
    others: {
        name: "Others",
        list: {
            turborepo: { label: "TurboRepo", value: "turborepo" },
            storybook: { label: "Storybook", value: "storybook" },
            sentry: { label: "Sentry", value: "sentry" },
            pwa: { label: "PWA", value: "pwa" },
            trpc: { label: "tRPC", value: "trpc" },
        },
    },
}
type FilterLabels = typeof filterLabels
type FilterLabelKeys = keyof FilterLabels
type FilterLabel = FilterLabels[FilterLabelKeys]
type ListKey = keyof FilterLabel["list"]

const getPair = (
    param?: FilterLabelKeys,
    listKey?: string[] | string
): { value: string; label: string }[] => {
    if (!param || !listKey || (!listKey && !Array.isArray(listKey))) return []
    if (Array.isArray(listKey)) {
        return listKey.map((n) => {
            // @ts-expect-error - listKey is an array
            return filterLabels[param].list[n]
        })
    }
    // @ts-expect-error - listKey is a string
    return [filterLabels[param].list[listKey]]
}

export const templates: Template[] = [
    {
        url: "https://indie-starter.dev?ref=nextradar-templates",
        name: "Indie Starter",
        description: "Write less code, iterate fast, and earn cash",
        ogImage: "https://indie-starter.dev/opengraph-image.jpg",
        sponsored: false,
        rel: "dofollow",
        specs: {
            cms: getPair("cms", "sanity"),
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "supabase"),
            email: getPair("email", "resend"),
            analytics: getPair("analytics", "umami"),
            styling: getPair("styling", "shadcn"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://anotherwrapper.com?aff=pWOZY",
        name: "AnotherWrapper",
        description:
            "Build and launch your AI app without the headaches and frustration by leveraging customizable demo applications and boilerplate code.",
        ogImage: "https://anotherwrapper.com/og.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "firebase"),
            email: getPair("email", "sendgrid"),
            analytics: getPair("analytics", "googleAnalytics"),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://create.t3.gg/",
        github: "https://github.com/t3-oss/create-t3-app",
        name: "T3 Stack",
        description:
            "We made create-t3-app to do one thing: Streamline the setup of typesafe Next.js apps WITHOUT compromising modularity.",
        ogImage: "https://t3.gg/images/twitter.png",
        rel: "nofollow",
        specs: {
            cms: getPair(),
            cost: getPair("cost", "free"),
            payment: getPair(),
            backend: getPair("backend", ["drizzle", "prisma", "NextAuth"]),
            email: getPair(),
            analytics: getPair(),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://usegravity.app/?ref=nextradar",
        name: "Gravity",
        description:
            "Build a SaaS product at warp speed with a Node.js & React SaaS boilerplate. Works with MySQL, Postgres & MongoDB.",
        ogImage: "https://usegravity.app/images/cards/saas-boilerplate.jpg",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "express"),
            email: getPair("email", ["mailgun", "nodeMailer"]),
            analytics: getPair("analytics", "builtIn"),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "javascript"),
            others: [],
        },
    },
    {
        url: "https://chat.vercel.ai/",
        github: "https://github.com/vercel/ai-chatbot",
        name: "Next.js AI Chatbot",
        description: "An AI-powered chatbot template built with Next.js and Vercel",
        ogImage:
            "https://chat.vercel.ai/opengraph-image-12cog0.png?2503f1158996a16f",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair(),
            backend: getPair("backend", ["nextAuth", "vercelPostgres"]),
            email: getPair(),
            analytics: getPair("analytics", "vercelAnalytics"),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://shipped.club?aff=pWOZY",
        name: "Shipped",
        description: "Build and ship your Startup in days. And make money.",
        ogImage: "https://d2bzf0z2yzi3mc.cloudfront.net/Shipped_OG_image.jpg",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "lemonSqueezy"),
            backend: getPair("backend", ["nextAuth", "supabase", "prisma"]),
            email: getPair("email", ["mailchimp", "loops"]),
            analytics: getPair("analytics", "pirsch"),
            styling: getPair("styling", ["tailwindcss", "shadcn", "chakra"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://directory.indie-starter.dev?ref=nextradar-templates",
        name: "Directory Starter",
        description:
            "Expand your audience, showcase your offerings, and boost your visibility",
        ogImage: "https://directory.indie-starter.dev/opengraph-image.jpg",
        rel: "dofollow",
        specs: {
            cms: getPair("cms", "sanity"),
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "supabase"),
            email: getPair("email", "resend"),
            analytics: getPair("analytics", "umami"),
            styling: getPair("styling", ["shadcn", "tailwindcss"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://makerkit.lemonsqueezy.com?aff=pWOZY",
        name: "makerkit",
        description:
            "Build unlimited SaaS products with any SaaS Starter Kit. Save months of work and focus on building a profitable business.",
        ogImage: "https://makerkit.dev/assets/images/makerkit.webp",
        rel: "nofollow",
        specs: {
            cms: getPair("cms", ["wordpress", "keystatic"]),
            cost: getPair("cost", "premium"),
            payment: getPair("payment", ["stripe", "lemonSqueezy", "paddle"]),
            backend: getPair("backend", ["firebase", "supabase"]),
            email: getPair("email", ["resend", "nodemailer"]),

            analytics: getPair("analytics", ["googleAnalytics", "umami", "posthog"]),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: getPair("others", ["turborepo"]),
        },
    },
    {
        url: "https://demo.vercel.store",
        name: "Next Commerce",
        description:
            "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
        ogImage:
            "https://commerce-shopify-lzmegorad-vercel-solutions-vtest314.vercel.app/opengraph-image",
        github: "https://github.com/vercel/commerce/tree/v1",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "supabase"),
            email: getPair("email", "sendgrid"),
            analytics: getPair(),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: getPair("others", ["turborepo"]),
        },
    },
    {
        url: "https://turbostarter.dev?aff=pWOZY",
        name: "Turbo Starter",
        description:
            "The Next.js, React Native (Expo) and Plasmo SaaS production-ready starter kit. Launch your web, mobile app and browser extension with one-click boilerplate.",
        ogImage:
            "https://www.turbostarter.dev/opengraph-image.png?20038fb30fbd5897",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", ["stripe", "lemonSqueezy", "paddle"]),
            backend: getPair("backend", ["drizzle", "supabase"]),
            email: getPair("email", [
                "sendgrid",
                "postmark",
                "nodemailer",
                "resend",
                "plunk",
            ]),
            analytics: getPair("analytics", [
                "googleAnalytics",
                "openPanel",
                "posthog",
                "vercelAnalytics",
            ]),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://www.next-forge.com/",
        name: "Next-forge",
        description:
            "A monorepo template designed to have everything you need to build your new SaaS app as quick as possible. Authentication, billing, analytics, SEO, database ORM and more",
        ogImage: "https://www.next-forge.com/opengraph-image.png",
        github: "https://github.com/haydenbleasel/next-forge",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", ["prisma"]),
            email: getPair(),
            analytics: getPair("analytics", ["posthog"]),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: getPair("others", ["turborepo", "storybook"]),
        },
    },
    {
        url: "https://paddle-billing.vercel.app/",
        name: "Paddle Starter Kit",
        description: "Paddle Billing subscriptions Next.js starter kit",
        ogImage: "https://paddle-billing.vercel.app/opengraph-image.png",
        github: "https://github.com/PaddleHQ/paddle-nextjs-starter-kit",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair("payment", "paddle"),
            backend: getPair("backend", ["supabase"]),
            email: getPair(),
            analytics: getPair(),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://v1.run",
        name: "Create v1",
        description:
            "A free, open-source starter kit for your next project, built with insights from Midday.",
        ogImage: "https://v1.run/opengraph-image.png?48d3af510e85915e",
        github: "https://github.com/midday-ai/v1",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", ["supabase", "upstash"]),
            email: getPair(),
            analytics: getPair("analytics", ["openPanel", "vercelAnalytics"]),
            styling: getPair("styling", ["tailwindcss"]),
            language: getPair("language", "typescript"),
            others: getPair("others", ["turborepo", "sentry"]),
        },
    },
    {
        url: "https://nextselfhost.dev/",
        github: "https://github.com/leerob/next-self-host",
        name: "Self-Hosted Next.js",
        description:
            "This is a demo of a Next.js application hosted on Ubuntu Linux. It also includes a Postgres database and an Nginx proxy",
        ogImage:
            "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/4JmubmYDJnFtstwHbaZPev/0c3576832aae5b1a4d98c8c9f98863c3/Vercel_Home_OG.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair(),
            backend: getPair("backend", ["drizzle"]),
            email: getPair(),
            analytics: getPair(),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://saas-ui.dev?aff=pWOZY",
        name: "Saas UI",
        description:
            "Modern React component library and starter kit for SaaS, B2B and internal tools. Built with Chakra UI and Next.js.",
        ogImage: "https://saas-ui.dev/og-image.jpg",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", ["supabase", "nextAuth"]),
            email: getPair(),
            analytics: getPair(),
            styling: getPair("styling", "chakra"),
            language: getPair("language", "typescript"),
            others: getPair("others", ["turborepo"]),
        },
    },
    {
        url: "https://achromatic.dev",
        name: "Achromatic",
        description:
            "Get all the tools you need to build and scale your SaaS, AI tool or web application with our comprehensive feature set and straightforward pricing.",
        ogImage: "https://achromatic.dev/og.jpg",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", ["supabase", "nextAuth", "prisma"]),
            email: getPair("email", "resend"),
            analytics: getPair(),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://shipixen.com?aff=pWOZY",
        name: "Shipixen",
        description:
            "Custom, branded codebases for your app, website, product or blog. Get an SEO optimized Markdown blog running Next.js 14, TypeScript, TailwindCSS + Shadcn UI. Deploy to Vercel with 1 click without touching the code.",
        ogImage: "https://shipixen.com/static/images/ogImg.jpg",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair(),
            backend: getPair(),
            email: getPair(),
            analytics: getPair("analytics", ["vercelAnalytics", "posthog"]),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://www.marblism.com/",
        name: "Marblism",
        description: "Marblism uses AI to generate Next.js apps from prompts",
        ogImage:
            "https://cdn.prod.website-files.com/6581b414af882653e8f914a5/65f730d984038dee30e69cae_405.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "zenstack"),
            email: getPair("email", "mailjet"),
            analytics: getPair("analytics", ["posthog"]),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: getPair("others", ["pwa"]),
        },
    },
    {
        url: "https://www.newcult.co/",
        name: "cult",
        description:
            "The fastest way to build a startup is to buy 9. Customizable Next.js apps featuring Tailwindcss & Supabase.API snips, ai dev tools and more.",
        ogImage: "https://www.newcult.co/og.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "supabase"),
            email: getPair(),
            analytics: getPair(),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://next-master.vercel.app/",
        name: "NextMaster",
        description:
            "A highly performant replica of McMaster-Carr using Next.js 15",
        github: "https://github.com/ethanniser/NextMaster",
        ogImage: "https://next-master.vercel.app/opengraph-image.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", ["drizzle", "vercelPostgres"]),
            email: getPair(),
            analytics: getPair("analytics", ["vercelAnalytics"]),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://code-templates.lemonsqueezy.com?aff=pWOZY",
        name: "LaunchFast",
        description:
            "Comprehensive Astro, Next.js and SvelteKit Starter Kits for SEO, Analytics, Storage, Auth, Payments, Blogs, and Email - everything a developer needs to kickstart their project.",
        ogImage: "https://ik.imagekit.io/vjeqenuhn/launchfast-website/seo.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", ["stripe", "lemonSqueezy"]),
            backend: getPair("backend", ["supabase", "firebase", "upstash", "mongodb"]),
            email: getPair("email", ["resend", "nodeMailer", "hubspot"]),
            analytics: getPair("analytics", ["googleAnalytics", "pirsch", "posthog"]),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://turso-per-user-starter.vercel.app/",
        name: "Turso Starter (SqLite)",
        description:
            "A Next.js application that demonstrates how to use the Turso Platforms API to create a database per user.",
        ogImage:
            "https://turso-per-user-starter.vercel.app/opengraph-image.png?e75c3357d04a5579",
        github: "https://github.com/notrab/turso-per-user-starter",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair(),
            backend: getPair("backend", ["sqLite", "drizzle", "clerk"]),
            email: getPair(),
            analytics: getPair(),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://gofast.live/",
        name: "GoFast",
        description:
            "The Ultimate Foundation for High-Performance, Scalable Web Applications with the Power of Golang and Next.js / SvelteKit. Backed by a powerful CLI.",
        ogImage: "https://bucket.gofast.live/hero.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", ["stripe", "lemonSqueezy"]),
            backend: getPair("backend", ["sqlite", "postgres"]),
            email: getPair("email", ["sendgrid", "resend", "postmark", "awsses"]),
            analytics: getPair("analytics", ["googleAnalytics", "umami", "posthog"]),
            styling: getPair(),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://munchies-tinloof.vercel.app/",
        name: "Medusa B2C Starter",
        description:
            "A glimpse into the future of online shopping using Next.js 15, Medusa and Sanity.io",
        ogImage:
            "https://cdn.sanity.io/images/1wtf7iqx/production/0ebbdf446bb2d4e4287c722fb82fe385d13d6dea-2400x1260.png?w=1200&fit=max&auto=format",
        github: "https://github.com/tinloof/medusa-dtc-starter-munchies",
        rel: "nofollow",
        specs: {
            cms: getPair("cms", ["medusa", "sanity"]),
            cost: getPair("cost", "free"),
            payment: getPair("payment", "stripe"),
            backend: getPair("backend", "supabase"),
            email: getPair("email", "resend"),
            analytics: getPair("analytics", ["vercelAnalytics"]),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://nextfolio-template.vercel.app/",
        name: "Nextfolio",
        description:
            "A clean, fast, & lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS for optimal performance",
        ogImage: "https://nextfolio-template.vercel.app/opengraph-image.png",
        github: "https://github.com/1msirius/Nextfolio",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "free"),
            payment: getPair(),
            backend: getPair(),
            email: getPair(),
            analytics: getPair("analytics", "vercelAnalytics"),
            styling: getPair("styling", "tailwindcss"),
            language: getPair("language", "typescript"),
            others: [],
        },
    },
    {
        url: "https://supastarter.dev?aff=pWOZY",
        name: "supastarter",
        description:
            "supastarter is a production-ready SaaS boilerplate for Nuxt 3 and Next.js 14. It includes authentication, billing, internationalization, multi-tenancy, and more.",
        ogImage: "https://supastarter.dev/images/meta.png",
        rel: "nofollow",
        specs: {
            cms: [],
            cost: getPair("cost", "premium"),
            payment: getPair("payment", ["stripe", "lemonSqueezy", "chargebee"]),
            backend: getPair("backend", ["mongodb", "supabase", "mysql", "postgres", "prisma"]),
            email: getPair("email", ["resend", "postmark", "plunk", "nodemailer"]),
            analytics: getPair("analytics", ["googleAnalytics", "umami", "posthog", "plausible", "pirsch"]),
            styling: getPair("styling", ["tailwindcss", "shadcn"]),
            language: getPair("language", "typescript"),
            others: getPair("others", ["turborepo", "trpc"]),
        },
    },
    // {
    //     url: "next-saas-start.vercel.app",
    //     name: "Next.js SaaS Starter",
    //     description:
    //         "Get started quickly with Next.js, Postgres, Stripe, and shadcn/ ui.",
    // !note no open graph image
    //     ogImage: "",
    //     github: "https://github.com/leerob/next-saas-starter",
    // rel: "nofollow",
    //  specs: {{value:{value:{value:{value:{value:{value: {value:
    // cms: [],
    // cost: ["free"],
    // payment: ["stripe"],
    // backend: ["firebase"],
    // email: ["sendgrid"],
    // analytics: ["googleAnalytics"],
    // styling: ["tailwindcss"],
    // language: ["typescript"],
    // }}}}}}}},},
    // !note no open graph image
    // {
    //     url: "https://nextjs-boilerplate.com/",
    //     github: "https://github.com/ixartz/Next-js-Boilerplate",
    //     name: "cult",
    //     description:
    //         "The fastest way to build a startup is to buy 9. Customizable Next.js apps featuring Tailwindcss & Supabase.API snips, ai dev tools and more.",
    //     ogImage: "https://www.newcult.co/og.png",
    // rel: "nofollow",
    // specs: {value:{value:{value:{value:{value:{value: {
    // cms: [],
    // cost: [{value: "free"}],
    //     payment: ["stripe"],
    //         backend: ["firebase"],
    //             email: ["sendgrid"],
    //                 analytics: ["googleAnalytics"],
    //                     styling: ["tailwindcss"],
    //                         language: ["typescript"],
    //     }}}}}}},
    //     },
]

// https://smashing.tools
