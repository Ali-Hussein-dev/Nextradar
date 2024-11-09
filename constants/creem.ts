
export const devEnv = process.env.VERCEL_ENV !== "production";

const creemHost = devEnv ? "https://test-api.creem.io" : "https://api.creem.io"

export const checkoutUrl = `${creemHost}/v1/checkouts`

export const products = {
    jobPost: {
        id: devEnv ? "prod_5QSspeFD4qbQus0yr8tcC3" : "prod_70f2MeUMOWboHma0QekX54",
        name: "Premium Job Post for 30 days",
        price: 325,
        priceLabel: "325€",
    }
}