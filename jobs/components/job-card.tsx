import { getFormattedTime } from "@/lib/get-formatted-time";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { IoTimeOutline } from "react-icons/io5";
import { JobPost } from "@/sanity/types";
import { urls } from "@/constants/urls";

export type JobPostCardProps = Pick<
  JobPost,
  | "jobTitle"
  | "companyName"
  | "location"
  | "branch"
  | "currency"
  | "applyUrl"
  | "jobType"
  | "contractType"
  | "publishedAt"
  | "slug"
  | "jobHook"
  | "benefits"
  | "salary"
  | "timeZone"
  | "company"
  | "workplaceType"
>;
export const JobCard = (props: JobPostCardProps & { isLast: boolean }) => {
  const {
    jobTitle,
    publishedAt,
    slug,
    isLast,
    companyName,
    timeZone,
    location = "",
  } = props;
  const isTimezone = (timeZone ?? []).length > 0;
  return (
    <div
      className={`rounded-none dark:bg-transparent md:border-t md:border-x border-dashed py-5 md:py-6 sm:px-4 md:px-6 flex flex-col justify-start w-full animate-in ${isLast ? "md:border-b" : ""}`}
    >
      <div className="grow">
        <div className="flex-col-start  mb-1">
          <h2 className="sm:text-lg md:text-xl font-bold dark:text-zinc-300/90 text-zinc-800 pr-2">
            {jobTitle}
          </h2>
          <span className="dark:text-zinc-600 text-zinc-500 pr-2">
            {companyName}
            {isTimezone
              ? `, ${timeZone?.join(", ")}`
              : location && `, ${location}`}
          </span>
        </div>
      </div>
      <div className="flex-row-between gap-4 pt-1 dark:border-zinc-800 border-dashed w-full">
        <div className="dark:text-zinc-500 text-zinc-600 text-sm flex-row-start gap-1">
          <IoTimeOutline className="size-5" />{" "}
          {getFormattedTime(publishedAt as string)}
        </div>
        <div className="flex-row-end gap-2">
          {/* <JobPostDrawer {...props} /> */}
          <Button asChild size="sm" variant="secondary" className="rounded-sm">
            <Link
              href={`${urls.jobs}/${slug}`}
              prefetch={false}
              data-umami-event="view-job"
            >
              View Job
            </Link>
          </Button>
          {/* <Button asChild size="sm">
            <a href={applyUrl}>Apply for Role</a>
          </Button> */}
        </div>
      </div>
    </div>
  );
};
