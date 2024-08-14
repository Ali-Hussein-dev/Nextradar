import Image from "next/image"

const authors = [
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
    name: "Delba Oliveira",
    subtitle: "Developer advocate",
    company: "Vercel",
    src: "/authors/Delba_Oliveira.png",
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
    name: "Jack Herrington",
    subtitle: "Principal engineer",
    company: "Blue Collar Coder",
    src: "/authors/Jack_Herrington.png",
  },
  {
    name: "Seif Ghezala",
    subtitle: "Co-founder",
    company: "Tinloof",
    src: "/authors/Seif_Ghezala.png",
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

const Card = ({
  name,
  subtitle,
  company,
  src,
}: {
  name: string
  subtitle: string
  company: string
  src: string
}) => (
  <div className="flex-col-center rounded-xl border border-dashed p-4 dark:border-zinc-700 shadow border-zinc-400">
    <div className="aspect-square size-16 relative rounded-full overflow-hidden mb-3">
      <Image src={src} fill alt={name} className="brightness-75" />
    </div>
    <h2 className="text-center font-bold">{name}</h2>
    <p className="text-center dark:text-zinc-500">{subtitle}</p>
    <p className="text-center dark:text-zinc-500">{company}</p>
  </div>
)
//======================================
export const Authors = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 px-2">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center mb-1">
        Expert Voices
      </h2>
      <h3 className="text-center dark:text-zinc-500 text-lg">
        Learn and grow quickly from the best in the industry
      </h3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 pt-8 md:pt-10">
        {authors.map((author, i) => (
          <Card key={i} {...author} />
        ))}
      </div>
    </div>
  )
}
