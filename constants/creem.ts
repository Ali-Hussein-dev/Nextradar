import { ButtonProps } from "@/components/ui/button";

export const devEnv = process.env.VERCEL_ENV !== "production";

const creemHost = devEnv ? "https://test-api.creem.io" : "https://api.creem.io"

export const checkoutUrl = `${creemHost}/v1/checkouts`

export const products = {
    jobPost: {
        id: devEnv ? "prod_5QSspeFD4qbQus0yr8tcC3" : "prod_70f2MeUMOWboHma0QekX54",
        name: "Premium Job Post for 30 days",
        price: 99,
        priceLabel: "99$",
    }
    // sponsorshipTiers: [
    //     {
    //         // todo add real product id
    //         productId: devEnv ? "prod_3bCt0vXSNIgjR9fhBxyze0" : "",
    //         title: "1 Month Display Ad",
    //         description: "Display your product name on top of latest page.",
    //         price: 195,
    //         saved: 0,
    //         buttonText: "Get sponsored",
    //         buttonVariant: "outline" as ButtonProps["variant"],
    //         included: [
    //             "Display ad on latest page",
    //             "Your product name on top of the list",
    //             "Do follow link to your website",
    //         ],
    //     },
    //     {
    //         // todo add real product id
    //         productId: devEnv ? "prod_78f7PyloCXk5SNQMvmZu91" : "prod_6fey83fOhsXr5d1g8y6r24",
    //         title: "Gold Sponsorship",
    //         description: "Get your product name on top of the list for 2 months.",
    //         price: 350,
    //         saved: 40,
    //         buttonText: "Get sponsored",
    //         buttonVariant: "default" as ButtonProps["variant"],
    //         included: [
    //             "Display ad on latest page",
    //             "Do follow link to your website",
    //             "Your product name on top of the list",
    //         ],
    //     },
    // ]
}
