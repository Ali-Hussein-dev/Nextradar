/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { MdOutlineArrowOutward } from "react-icons/md"
// import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type IntegrationCardProps = {
  name: string
  description: string
  url: string
  exampleUrl: string
  logoUrl: string
  tags?: string[]
  sponsored?: boolean
  features?: string[]
  extended?: boolean
  pricing?: PricingCatalogProps
}

type PricingCatalogProps = {
  pricingUrl: string
  currency: string
  tiers: {
    name: string
    monthlyPrice: number
    yearlyPrice: number
    isTrial: boolean
    trialDurationDays: number
  }[]
}

function PriceFormat({ price, currency }: { price: number; currency: string }) {
  return (
    <div className="">
      {price === 0 ? (
        "Free"
      ) : price === -1 ? (
        "Custom"
      ) : (
        <span>
          {currency}
          {price.toLocaleString()}
        </span>
      )}
    </div>
  )
}
function PricingCatalog({ pricingUrl, currency, tiers }: PricingCatalogProps) {
  const hasYearlyPlan = tiers.find((o) => o.yearlyPrice && o.yearlyPrice > 0)
  return (
    <div className="pt-4">
      <div
        className={`border border-dashed rounded-xl overflow-hidden ${hasYearlyPlan ? "pt-4" : ""}`}
      >
        <Tabs defaultValue="monthly" className="justify-center">
          {hasYearlyPlan && (
            <TabsList className="mx-auto flex w-fit mt-0 mb-3">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          )}
          <TabsContent className="mt-0" value="monthly">
            <div className={`flex w-full border-dashed ${hasYearlyPlan ? "border-y" : "border-b"}`}>
              {tiers.map((o, i) => (
                <div
                  className={`px-3 flex gap-0.5 grow flex-col flex-wrap items-start justify-start py-1.5 ${i < tiers.length - 1 && "border-r border-dashed"}`}
                  key={o.name}
                >
                  <span className="text-lg text-muted-foreground">{o.name}</span>
                  <span>
                    <PriceFormat price={o.monthlyPrice} currency={currency} />
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="mt-0" value="yearly">
            <div className="flex w-full border-y border-dashed">
              {tiers.map((o, i) => (
                <div
                  className={`px-3 flex gap-0.5 grow flex-col flex-wrap items-start justify-start py-1.5 ${i < tiers.length - 1 && "border-r border-dashed"}`}
                  key={o.name}
                >
                  <span className="text-lg text-muted-foreground">{o.name}</span>
                  <span>
                    <PriceFormat price={o.yearlyPrice} currency={currency} />
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <Button
          variant="link"
          asChild
          className="mx-auto flex gap-1 items-center justify-center w-fit pt-3"
        >
          <a href={pricingUrl} rel="noopener noreferrer" target="_blank">
            Pricing details <MdOutlineArrowOutward size="16" />
          </a>
        </Button>
      </div>
    </div>
  )
}
//======================================
export const IntegrationCard = ({
  name,
  description,
  url,
  logoUrl,
  exampleUrl,
  sponsored = false,
  features,
  extended,
  pricing,
}: IntegrationCardProps) => {
  return (
    <Card
      className={`animate-in ${sponsored ? "dark:border-green-300/30 border-green-300/60" : ""}`}
    >
      <CardHeader className="flex-row-between ">
        <div className="flex-row-start gap-2">
          <img
            src={logoUrl}
            alt="logo"
            className="size-8 my-0 rounded-full object-contain"
            loading="lazy"
          />
          <CardTitle>{name}</CardTitle>
        </div>
        {sponsored ? <span className="text-muted-foreground">Sponsored</span> : null}
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm">{description}</p>
        {pricing && extended && <PricingCatalog {...pricing} />}
        {features && extended && (
          <div className="pt-5 space-y-2">
            <span className="font-bold text-secondary-foreground">⭐ Additional Features</span>
            <ul className="list-none prose-li:pl-0 text-secondary-foreground/70 typography ">
              {features.map((feature) => (
                <li key={feature} className="flex-row-start gap-2 font-light">
                  <span className="border rounded-full p-1">
                    <Check className="size-4" />
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-row-between w-full">
        <div className="flex-row-end grow gap-3">
          {/* {exampleUrl && (
            <Button
              asChild
              variant={"outline"}
              size="sm"
              className="gap-2 no-underline"
            >
              <a href={url} rel="nofollow">
                Starter
                <FaGithub />
              </a>
            </Button>
          )} */}
          {url && (
            <Button asChild variant={"secondary"} size="sm" className="gap-1.5 no-underline">
              <a href={url} rel="nofollow">
                Visit
                <MdOutlineArrowOutward size="16" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
