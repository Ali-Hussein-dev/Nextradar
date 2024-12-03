import { urls } from "@/constants/urls"
import Link from "next/link"

export const Footer = () => (
  <footer className="text-center py-4 border-t text-sm dark:text-zinc-500 w-full">
    <div className="flex-row-center gap-2">
      <div className="flex-row-start gap-2">
        <Link prefetch={false} href={urls.privacy}>
          Privacy
        </Link>
        <Link prefetch={false} href={urls.terms}>
          Terms of Service
        </Link>
      </div>
    </div>
  </footer>
)
