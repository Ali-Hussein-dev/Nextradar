/* eslint-disable @next/next/no-img-element */
import { urls } from "@/constants/urls"
import Link from "next/link"

const links = {
  externalProjects: [
    {
      label: "MyPrompts",
      url: urls.myPrompts,
    },
    {
      label: "Indie Starter",
      url: urls.indieStarter,
    },
    {
      label: "Chatgpt Alternatives",
      url: urls.chatgptAlternatives,
    },
    {
      label: "Personal site",
      url: urls.portfolio,
    },
  ],
  legal: [
    {
      label: "Privacy",
      url: urls.privacy,
    },
    {
      label: "Terms of Service",
      url: urls.terms,
    },
  ],
  internal: [
    {
      label: "Nextjs Auth",
      url: urls.nextjsAuth,
    },
    {
      label: "Next.js Starters",
      url: urls.templates,
    },
    {
      label: "Next.js Tutorials",
      url: urls.learn,
    },
    {
      label: "Next.js CMS",
      url: urls.headlessCms,
    },
    {
      label: "Vercel Alternatives",
      url: urls.vercelAlternatives,
    },
    {
      label: "Managed Database for Next.js",
      url: urls.db,
    },
  ],
  quickLinks: [
    {
      label: "Sponsor",
      url: urls.sponsor,
    },
    {
      label: "Newsletter",
      url: urls.newsletter,
    },
    {
      label: "Nextjs Jobs",
      url: urls.jobs,
    },
  ],
}
const LinksCol = ({
  links,
  title,
}: {
  links: Array<{ label: string; url: string }>
  title: string
}) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="font-semibold dark:text-zinc-300 text-zinc-800">{title}</h3>
      <ul className="flex flex-col items-start gap-2 list-none">
        {links.map(({ label, url }) => (
          <li key={label}>
            <Link href={url}>
              <span className="dark:text-zinc-400 text-zinc-700">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const Footer = () => (
  <footer className="text-center py-4 border-t text-sm dark:text-zinc-500 w-full px-3">
    <div className="grid xs:grid-cols-2 gap-y-5 md:grid-cols-4 gap-4 mx-auto max-w-6xl border-b border-dashed pb-4">
      <LinksCol links={links.internal} title="Browse" />
      <LinksCol links={links.quickLinks} title="Quick Links" />
      <LinksCol links={links.legal} title="Legal" />
      <LinksCol links={links.externalProjects} title="Other Projects" />
      <a
        href="https://startupfa.me/s/nextradar?utm_source=nextradar.dev"
        target="_blank"
        className="w-fit max-w-fit pointer-events-none"
      >
        <img
          src="https://startupfa.me/badges/featured-badge.webp"
          alt="Featured on Startup Fame"
          width="171"
          height="54"
          className=""
        />
      </a>
    </div>
    <div className="pt-2">{new Date().getFullYear()} Nextradar.</div>
  </footer>
)
