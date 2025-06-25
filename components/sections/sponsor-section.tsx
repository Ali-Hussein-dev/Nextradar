import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { urls } from "@/constants/urls"
import { cn } from "@/lib/utils"
import { getStats } from "@/lib/stats"
import { Check } from "lucide-react"
import { QuoteIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    quote: "Nice one, https://nextradar.dev is pretty cool",
    author: "Seif Ghezala",
    title: "co-founder of Tinloof",
  },
  {
    quote:
      "It is amazing. I like it! also, may I know how did you implemented the global search? Any resources? Im planning to add it on our dashboard. Thanks",
    author: "Reddit user",
  },
  {
    quote: "Thanks for putting this list together! 🤩 ...",
    author: "Creator of PMKIN",
  },
  {
    quote:
      "Wow! Thank you so much. 😍 This website has pretty good resources links along with a job section and OSS project resources as well! 🎉",
    author: "Reddit user",
  },
  {
    quote: "Great idea! I would love to sign up for a newsletter or roundup of new additions.",
    author: "Reddit user",
  },
  // {
  //   quote: "Its really helpful. Thanks for sharing",
  //   author: "Reddit user",
  // },
  {
    quote: `Can you add some filtering on boolean flags? "self-host", and "can be used for free for small projects" being the two i care about.`,
    author: "Reddit user",
  },
]

export function TestimonialCard({
  quote,
  author,
  title,
  avatarUrl,
  avatarFallback,
}: TestimonialProps) {
  // Get initials for avatar fallback if not provided
  const getInitials = () => {
    if (avatarFallback) return avatarFallback
    return author
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card className="bg-secondary/50 border-none">
      <CardContent className="pt-6 flex flex-col">
        <div className="text-green-600 mb-2">
          <QuoteIcon className="size-6" />
        </div>
        <blockquote className="text-base mb-4 text-muted-foreground">{quote}</blockquote>
        <div className="flex items-center mt-2">
          {/* <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarUrl} alt={author} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar> */}
          <div>
            <div className="font-medium">{author}</div>
            {title && <div className="text-sm text-muted-foreground">{title}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
//-------------------------------------------
interface StatsCardProps {
  title: string
  count: number | string
  className?: string
}
function StatsCard({ title, count, className }: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-2xl border-solid", className)}>
      <CardContent className="p-6 ">
        <h2 className="text-3xl font-bold tracking-tight mt-2 mb-1 text-center">
          {count.toLocaleString()}
        </h2>
        <p className="text-sm font-medium text-muted-foreground text-center">{title}</p>
      </CardContent>
    </Card>
  )
}

export interface BenefitItem {
  text: string
}

export interface HighlightCardProps {
  title: string
  price?: string
  benefits: BenefitItem[]
  buttonText?: string
  isHighlighted?: boolean
  checkoutUrl: string
  // onCheckout?: () => void
}
export interface TestimonialProps {
  quote: string
  author: string
  title?: string
  avatarUrl?: string
  avatarFallback?: string
}

function PlanCard({
  title,
  price,
  benefits,
  buttonText = "Get more visibility",
  isHighlighted = false,
  checkoutUrl,
}: HighlightCardProps) {
  return (
    <Card
      className={`w-full transition-all flex flex-col p-4 ${isHighlighted ? "border border-solid border-green-600 shadow-lg" : ""}`}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {price && <span className="text-lg font-semibold text-primary">{price}</span>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-1">
        <ul className="space-y-2 text-zinc-300/70">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="size-5 text-primary shrink-0 mt-0.5 border rounded-full p-0.5" />
              <span>{benefit.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant={isHighlighted ? "default" : "outline"} className="w-full">
          <a href={checkoutUrl}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
const plans = [
  {
    title: "Top position",
    price: "75$/month",
    benefits: [
      { text: "One-page presence: feed OR category pages" },
      { text: "Target users interested in your category" },
      { text: "Lifetime backlink" },
    ],
    buttonText: "Boost Visibility Now",
    isHighlighted: false,
    checkoutUrl: urls.sponsorship.topPosition,
  },
  {
    title: "Premium Spot",
    price: "$99/month",
    benefits: [
      { text: "Multi-page presence: feed and category pages" }, // [[1]] (condensed multi-page presence)
      { text: "Featured at the top of your category page" }, // [[2]] (simplified category dominance)
      { text: "Lifetime backlink" }, // [[3]] (shortened SEO explanation)
      { text: "Target users interested in your category" }, // [[4]] (streamlined audience focus)
    ],
    buttonText: "Boost Visibility Now",
    isHighlighted: true,
    checkoutUrl: urls.sponsorship.premiumSpot,
  },
]
//======================================
export async function SponsorSection() {
  const res = await getStats()

  return (
    <section className="">
      <div className="max-w-4xl mx-auto pt-6 pb-10 space-y-10 ">
        <div className="mx-auto flex flex-col justify-center pt-8 gap-4">
          <Badge variant="outline" className="rounded-full mx-auto">
            Reach React & Next.js Developers
          </Badge>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
              Advertising on Nextradar
            </h1>
            <p className="text-muted-foreground text-center">
              Connect with thousands of React/Next.js developers and showcase your product where it
              matters most.
            </p>
          </div>
        </div>
        <div className="py-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Stats</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
            <StatsCard
              title=" in sales achieved by products featured on Nextradar"
              count={"+$5,095"}
            />
            <StatsCard title="Page views 2025" count={14_360 + (res?.pageviews?.value || 0)} />
            <StatsCard title="Average visit duration" count={"3m 47s"} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
        <div className="pt-10">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Testimonials</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
