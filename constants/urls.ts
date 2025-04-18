/**
 * This file contains all the urls used in the application
 */

const siteUrl = {
    development: "http://localhost:3000",
    preview: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    production: "https://nextradar.dev",
};
export const devEnv = (process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development") as keyof typeof siteUrl;

export const urls = {
  siteUrl: siteUrl[devEnv],
  learn: "/content/learn",
  tools: "/content/tools",
  latest: "/content/nextjs",
  nextjsAuth: "/content/nextjs-auth",
  sponsor: "/content/sponsor",
  templates: "/content/templates",
  osProjects: "/content/real-world-apps",
  // Integrations
  hosting: "/content/hosting",
  vercelAlternatives: "/content/vercel-alternatives",
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
  sponsorship: {
    topPosition: "https://www.creem.io/payment/prod_3oF1TawDRPo5JVhmcC7m3G",
    premiumSpot: "https://www.creem.io/payment/prod_1G1bpyvLWhleW71xriyCBB",
  },
  chatgptAlternatives: "https://chatgptalternatives.app",
  indieStarter: "https://indie-starter.dev",
  deepReact: "https://deepreact.dev",
  newsletter:"https://nextradar.substack.com",
  portfolio:"https://ali-hussein.com",
  github:"https://github.com/Ali-Hussein-dev/Nextradar",
  githubDiscussions:"https://github.com/Ali-Hussein-dev/Nextradar/discussions"
};

export const urlsSitemap = Object.values(urls).filter(
  (url) => typeof url === "string" && !url.startsWith("https://")
);
