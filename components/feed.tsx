import { Search } from "@/components/search";
import { FeedList } from "@/components/feed-list";
import { getPageHeader, getSourcesPage } from "@/sanity/lib/getters";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { YtDialog } from "@/components/yt-dialog";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type FeedCardProps = {
  name: string;
  src?: string;
  description: string;
  type: string;
  author: string;
  href: string;
  sponsored: boolean;
  rel: string;
};
//======================================
export const FeedCard = ({
  name,
  description,
  author,
  href,
  src,
  sponsored,
  rel = "nofollow",
}: FeedCardProps) => {
  return (
    <Card
      className={`shadow-none ${
        sponsored
          ? "dark:border-green-300/30 border-green-300/60 bg-muted/30"
          : ""
      }`}
    >
      <CardHeader className="flex flex-col md:flex-row items-start h-full sm:items-start md:gap-3 w-full">
        {/* --------------------------------YT-Embed */}
        {src && <YtDialog src={src} href={href} />}
        <div className="w-full pt-2 grow flex-col-start md:h-full gap-1.5">
          <CardTitle className="flex-row-between w-full gap-5 dark:text-zinc-300 text-zinc-700">
            <span className="line-clamp-1">{name}</span>
            {sponsored && (
              <span className="text-xs text-green-300 font-light">
                Sponsored
              </span>
            )}
          </CardTitle>
          <CardDescription
            className={cn(
              "mb-1.5 dark:text-zinc-500 text-pretty line-clamp-2 text-zinc-700",
              src ? "hidden md:line-clamp-2" : ""
            )}
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
      <CardFooter className="flex-row-between gap-2 w-full text-sm pt-0">
        <span className="text-muted-foreground/80">{author}</span>
        {!src && (
          <Button
            variant="outline"
            asChild
            className="gap-1.5 no-underline bg-transparent"
            size="sm"
          >
            <a href={href} target="_blank" rel={rel}>
              Visit
              <MdOutlineArrowOutward size="14" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

//======================================
export const Feed = async () => {
  const page = await getSourcesPage({ page: 1, pageSize: 10 });
  const header = await getPageHeader({ name: "latest" });
  return (
    <div>
      <div className="grid gap-5 max-w-2xl mx-auto pb-6 pt-3">
        <div className="space-y-1">
          <h1 className="font-bold text-center">{header.title}</h1>
          <p className="text-center">{header.subtitle}</p>
        </div>
        <Search />
        <FeedList initialList={page} />
      </div>
    </div>
  );
};
