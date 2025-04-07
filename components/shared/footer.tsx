import { urls } from "@/constants/urls";
import Link from "next/link";

const links = {
  jobs: [
    {
      label: "Chatgpt Alternatives",
      url: urls.chatgptAlternatives,
    },
    {
      label: "Indie Starter",
      url: urls.indieStarter,
    },
    {
      label: "DeepReact",
      url: urls.deepReact,
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
};
export const Footer = () => (
  <footer className="text-center py-4 border-t text-sm dark:text-zinc-500 w-full">
    <div className="flex-row-center flex-wrap mx-auto px-3">
      <div className="flex-row-center gap-2 flex-wrap">
        {links.jobs.map(({ label, url }) => (
          <Link key={label} prefetch={false} href={url}>
            <span className="dark:text-zinc-500 text-zinc-700">{label}</span>
          </Link>
        ))}
        <div className="flex-row-center gap-2 flex-wrap ">
          {links.legal.map(({ label, url }) => (
            <Link key={label} prefetch={false} href={url}>
              <span className="dark:text-zinc-500 text-zinc-700">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
