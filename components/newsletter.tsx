import { MdOutlineArrowOutward } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { urls } from "@/constants/urls"
const experts = [
  {
    name: "Seif Ghezala",
    subtitle: "Co-founder",
    company: "Tinloof",
    src: "/authors/Seif_Ghezala.png",
  },
  {
    name: "David Mytton",
    subtitle: "CEO",
    company: "Arcjet",
    src: "/authors/David_Mytton.png",
  },
  {
    name: "Jeff Delaney",
    subtitle: "Founder",
    company: "Fireship.io",
    src: "/authors/Jeff_Delaney.png",
  },
  {
    name: "Malte Ubl",
    subtitle: "CTO",
    company: "Vercel",
    src: "/authors/Malte_Ubl.png",
  },
  {
    name: "Jack Herrington",
    subtitle: "Principal engineer",
    company: "Blue Collar Coder",
    src: "/authors/Jack_Herrington.png",
  },
  {
    name: "Lee Robinson",
    subtitle: "VP of Product - Vercel",
    company: "Vercel",
    src: "/authors/Lee_Robinson.png",
  },
  {
    name: "Scott Moss",
    subtitle: "CEO & Co-founder",
    company: "Superfilter AI",
    src: "/authors/Scott_Moss.png",
  },
  {
    name: "Delba Oliveira",
    subtitle: "Developer advocate",
    company: "Vercel",
    src: "/authors/Delba_Oliveira.png",
  },
  {
    name: "Vishwas Gopinath",
    subtitle: "DevRel",
    company: "Builder.io",
    src: "/authors/Vishwas_Gopinath.png",
  },
  {
    name: "Dominik Ferber",
    subtitle: "Founder",
    company: "HappyKit",
    src: "/authors/Dominik_Ferber.png",
  },
]
const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-medium">
    {children}
  </span>
)
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-hidden border-zinc-900 bg-zinc-950 px-1 py-5 mx-auto rounded-[2rem]">
    <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:45px_45px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
        {children}
      </div>
    </div>
  </div>
)
//======================================
export function Newsletter() {
  return (
    <div className="pt-8 md:p-2 dark:p-0">
      <Card>
        <div className="flex-col-center gap-1 p-1 sm:p-3 lg:p-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-1 font-bold tracking-tighter text-center text-zinc-100">
            Biweekly Newsletter
          </h3>
          <p className="pb-8 text-center text-sm max-w-xl mx-auto text-zinc-200">
            Quality-first resources straight into your inbox from the minds of{" "}
            <HighlightText>founders</HighlightText>, <HighlightText>lead engineers</HighlightText>,{" "}
            <HighlightText>CTOs</HighlightText>, and <HighlightText>seasoned pros</HighlightText> in
            the field.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap -space-x-4 overflow-hidden justify-center items-center">
              {experts.map((expert, index) => (
                <Avatar key={index} className="size-12 border-2 border-black">
                  <AvatarImage src={expert.src} alt={expert.name} />
                  <AvatarFallback className="bg-gray-800">
                    {expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <Button asChild className="px-6 rounded-xl gap-2">
            <a href={urls.newsletter}>
              Subscribe
              <MdOutlineArrowOutward size="14" />
            </a>
          </Button>{" "}
        </div>
      </Card>
    </div>
  )
}
