import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//======================================
export function Newsletter() {
  return (
    <div className="py-12 px-2">
      <div className="flex-col-center gap-1 p-8 border rounded-lg max-w-2xl mx-auto border-dashed">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold tracking-tighter text-center">
          Biweekly Newsletter
        </h3>
        <p className="text-center dark:text-zinc-400 text-zinc-800 pb-5">
          Get the latest published high-quality resources about Next.js in your
          inbox
        </p>
        <Button asChild className="w-full">
          <a href="https://nextradar.substack.com/">Subscribe</a>
        </Button>{" "}
      </div>
    </div>
  );
}

//======================================
export function Newsletter2() {
  return (
    <div className="pb-3 max-w-2xl mx-auto">
      <div className="px-4 py-5 border w-full border-dashed rounded dark:bg-zinc-900/50 bg-white">
        <div className="flex-col lg:items-end flex lg:flex-row justify-between gap-4 w-full prose-p:mt-0 md:gap-12">
          <div className="">
            <h2 className="text-xl lg:text-start mt-0 mb-1 font-bold tracking-tighter text-center">
              Biweekly Newsletter
            </h2>
            <p className="text-center lg:text-start dark:text-zinc-400 text-zinc-800 my-0 text-pretty">
              Get the latest Next.js resources by industry experts in your inbox
            </p>
          </div>
          <Button asChild className="rounded-lg font-medium">
            <a href="https://nextradar.substack.com/">Subscribe</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

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
];
const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-medium">
    {children}
  </span>
);
//======================================
export function Newsletter3() {
  return (
    <div className="pt-8 pb-12 px-2">
      <div className="flex-col-center gap-1 p-8 border rounded-lg max-w-2xl mx-auto border-dashed">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-1 font-bold tracking-tighter text-center">
          Biweekly Newsletter
        </h3>
        <p className="pb-6 text-center">
          Quality-first resources straight into your inbox from the minds of{" "}
          <HighlightText>founders</HighlightText>,{" "}
          <HighlightText>lead engineers</HighlightText>,{" "}
          <HighlightText>CTOs</HighlightText>, and{" "}
          <HighlightText>seasoned pros</HighlightText> in the field.
        </p>
        <div className="space-y-3 mb-4">
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
        <Button asChild className="w-full">
          <a href="https://nextradar.substack.com/">Subscribe</a>
        </Button>{" "}
      </div>
    </div>
  );
}
