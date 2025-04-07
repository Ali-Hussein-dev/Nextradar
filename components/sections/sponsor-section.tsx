import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { urls } from "@/constants/urls";
import { cn } from "@/lib/utils";
import { getStats } from "@/lib/stats";

// const Testimonials = () => (
//   <div className="typography">
//     <h2>Testimonials</h2>
//     <blockquote>
//       Nice one, https://nextradar.dev is pretty cool -{" "}
//       <div className="text-muted-forground inline-block font-light">
//         Seif Ghezala, co-founder of Tinloof
//       </div>
//     </blockquote>
//     <blockquote>
//       Great idea! I would love to sign up for a newsletter or roundup of new
//       additions. -{" "}
//       <div className="text-muted-forground inline-block font-light">
//         Reddit user
//       </div>
//     </blockquote>
//     <blockquote>
//       Wow! Thank you so much. 😍 This website has pretty good resources links
//       along with a job section and OSS project resources as well! 🎉 -{" "}
//       <div className="text-muted-forground inline-block font-light">
//         Reddit user
//       </div>
//     </blockquote>
//     <blockquote>
//       It is amazing. I like it! also, may I know how did you implemented the
//       global search? Any resources? Im planning to add it on our dashboard.
//       Thanks -{" "}
//       <div className="text-muted-forground inline-block font-light">
//         Reddit user
//       </div>
//     </blockquote>
//     <blockquote>
//       Its really helpful. Thanks for sharing -{" "}
//       <div className="text-muted-forground inline-block font-light">
//         Reddit user
//       </div>
//     </blockquote>
//   </div>
// );
interface StatsCardProps {
  title: string;
  count: number | string;
  className?: string;
}
export function StatsCard({ title, count, className }: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-2xl border-solid", className)}>
      <CardContent className="p-6 ">
        <h2 className="text-3xl font-bold tracking-tight mt-2 mb-1 text-center">
          {count.toLocaleString()}
        </h2>
        <p className="text-sm font-medium text-muted-foreground text-center">
          {title}
        </p>
      </CardContent>
    </Card>
  );
}

//======================================
export async function SponsorSection() {
  const res = await getStats();

  return (
    <section className="">
      <div className="max-w-3xl mx-auto py-4">
        <div className="pb-6">
          <h2 className="text-2xl pt-8 font-bold">Advertise on Nextradar</h2>
          <p className="text-muted-foreground pt-1">
            Promote your business or software and reach a wide audience of
            React/Next developers.
          </p>
        </div>
        <div className="space-y-4">
          <Card className="">
            <CardHeader className="p-5">
              <CardTitle className="flex justify-between">
                Sponsor Product
                <span className="text-muted-foreground font-normal">
                  99$/month
                </span>
              </CardTitle>
              <CardDescription className="text-base pt-1">
                Sponsor your product at the top of the relevant list page
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end items-center p-5">
              <Button asChild>
                <a
                  className="no-underline"
                  href={urls.sponsorProduct}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Checkout
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader className="p-5">
              <CardTitle className="flex justify-between">
                Sponsor Article{" "}
                <span className="text-muted-foreground font-normal">
                  99$/month
                </span>
              </CardTitle>
              <CardDescription className="text-base pt-1">
                Sponsor an article with top placement at the {`'latest'`} page
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end items-center p-5">
              <Button asChild>
                <a
                  className="no-underline"
                  href={urls.sponsorArticle}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Checkout
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 py-10 gap-6">
          <StatsCard title="Minimum sales made for products" count={"$2,170"} />
          <StatsCard
            title="Page views 2025"
            count={12_360 + (res?.pageviews?.value || 0)}
          />
          <StatsCard title="Average visit duration" count={"3m 47s"} />
        </div>
      </div>
    </section>
  );
}
