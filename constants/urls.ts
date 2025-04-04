/**
 * This file contains all the urls used in the application
 */
const siteUrl= {prod: "https://nextradar.io", dev: "http://localhost:3000"}
export const urls = {
    siteUrl: process.env.NODE_ENV === "development" ? siteUrl.dev : siteUrl.prod,
    learn: "/content/learn",
    tools: "/content/tools",
    latest: "/content/latest",
    sponsor: "/content/sponsor",
    templates: "/content/templates",
    osProjects: "/content/real-world-apps",
    // Integrations
    hosting: "/content/hosting",
    headlessCms: "/content/headless-cms",
    baas: "/content/baas",
    db: "/content/db",
    commerce: "/content/commerce",
    // testing: "/content/testing",
    jobs: "/jobs",
    reactJobs: "/jobs/reactjs-jobs",
    nextJobs: "/jobs/nextjs-jobs",
    createJob: "/jobs/create",
    jobsExpired: "/jobs/expired",
    // legal pages
    terms: "/legal/tos",
    privacy: "/legal/privacy",
    // imprint: "/legal/imprint",
    // social media
    twitter: "https://twitter.com/ali_hussein_20",
    sponsorArticle:"https://www.creem.io/payment/prod_X6e6WvvE8HRhnOOkCuvEL",
    sponsorProduct:"https://www.creem.io/payment/prod_4923J97j2SLxwpgyAlRGfr",
    chatgptAlternatives: "https://chatgptalternatives.app",
    indieStarter: "https://indie-starter.dev",
}

export const urlsSitemap = Object.values(urls).filter(url => !url.startsWith("https://"))

