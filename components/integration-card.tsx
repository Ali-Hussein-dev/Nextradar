/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export type IntegrationCardProps = {
  name: string;
  description: string;
  url: string;
  exampleUrl: string;
  logoUrl: string;
  tags?: string[];
  sponsored?: boolean;
  features?: string[];
  extended?: boolean;
};

//======================================
export const IntegrationCard = ({
  name,
  description,
  url,
  logoUrl,
  exampleUrl,
  sponsored = false,
  features,
  extended
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
        {sponsored ? (
          <span className="text-muted-foreground">Sponsored</span>
        ) : null}
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm">{description}</p>
        {features && extended && (
          <ul className="list-none pl-1 pt-2 text-secondary-foreground/70 typography ">
            {features.map((feature) => (
              <li key={feature} className="flex-row-start gap-2 font-light">
                <span className="border rounded-full p-1 ">
                  <Check className="size-4" />
                </span>{" "}
                {feature}
              </li>
            ))}
          </ul>
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
            <Button
              asChild
              variant={"secondary"}
              size="sm"
              className="gap-1.5 no-underline"
            >
              <a href={url} rel="nofollow">
                Visit
                <MdOutlineArrowOutward size="16" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
