import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { Navbar } from "./navbar/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { urls } from "@/constants/urls"

const LogoLink = () => (
  <Link href="/" prefetch={false} className="font-medium select-none">
    Nextradar
  </Link>
)

const linksList = [
  { name: "Feed", href: urls.latest },
  { name: "Templates", href: urls.templates },
  { name: "Courses", href: urls.learn },
  { name: "Jobs", href: urls.jobs },
  { name: "Tools", href: urls.tools },
  { name: "Hosting", href: urls.hosting },
]

const icons = [
  {
    name: "Twitter",
    icon: <FaXTwitter size="14" />,
    href: urls.twitter,
  },
  {
    name: "GitHub",
    icon: <FaGithub size="14" />,
    href: "https://github.com",
  },
]

const MobileItems = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void
}) => (
  <>
    {linksList.map((link) => (
      <Button
        key={link.href}
        asChild
        variant={"outline"}
        className="w-full rounded-xl justify-center"
        size="lg"
        onClick={() => setIsOpen(false)}
      >
        <Link href={link.href}>{link.name}</Link>
      </Button>
    ))}
    <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
      {icons && (
        <div className="flex-row-center grow gap-2">
          {icons.map((icon) => (
            <Button
              key={icon.name}
              size="icon"
              className="rounded-full"
              variant={"outline"}
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link href={icon.href}>{icon.icon}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  </>
)
const NavLink = (props: { href: string; name: string }) => {
  return <Link href={props.href}>{props.name}</Link>
}
export const HomepageNavbar = ({
  variant = "default",
}: {
  variant: "default" | "centered"
}) => (
  <Navbar
    Logo={<LogoLink />}
    desktopItems={
      <>
        {linksList.map((link, i) => (
          <NavLink key={i} href={link.href} name={link.name} />
        ))}
      </>
    }
    mobileItems={({ setIsOpen }) => (
      <>
        {linksList.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={"outline"}
            className="w-full rounded-xl justify-center"
            size="lg"
            onClick={() => setIsOpen(false)}
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
        <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
          {icons && (
            <div className="flex-row-center grow gap-2">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={"outline"}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={icon.href}>{icon.icon}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </>
    )}
  />
)
