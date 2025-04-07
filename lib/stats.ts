import { env } from "@/env.mjs";
import { unstable_cache as cache } from "next/cache";

const username = env.ALIYTICS_USERNAME;
const password = env.ALIYTICS_PASSWORD;

const baseUrl = "https://alityics.netlify.app";

const getCachedAuthResponse = cache(
  async () =>
    (
      await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
    )
      .json()
      .catch(console.error),
  ["ad-stats"],
  {
    revalidate: 43200, // 12 hours
  }
);

const getStartEndDate = () => {
  const endAt = new Date();
  const startAt = new Date();
  // startAt.setDate(endAt.getDate() - 90);
  startAt.setFullYear(2025, 0, 1);
  return { startAt: startAt.getTime(), endAt: endAt.getTime() };
};

// DOCS: https://umami.is/docs/api/website-stats#get-/api/websites/:websiteid/pageviews
export const getStats = async () => {
  const authResponse = (await getCachedAuthResponse()) as { token: string };
  const token = authResponse?.token;
  if (!token) {
    console.warn("Couldn't fetch token", token);
    return null;
  }
  const { startAt, endAt } = getStartEndDate();

  return (await fetch(
    `${baseUrl}/api/websites/67493152-9f8c-4d3e-806b-7781045212c0/stats?unit=month&startAt=${startAt}&endAt=${endAt}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json())) as {
    pageviews: { value: number };
    visits: { value: number };
    visitors: { value: number };
    totaltime: { value: number };
  };
};
