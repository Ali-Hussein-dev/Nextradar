import { env } from "@/env.mjs";
import { headers } from "next/headers";
import Script from "next/script";

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";

//======================================
export const AnalyticsProv = async () => {
  if (isDev) return null;

  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  if (!pathname || pathname.includes("/studio")) {
    console.info("No analytics for this path", pathname);
    return null;
  }

  return (
    <>
      <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key={env.NEXT_PUBLIC_AHREF_KEY}
        async
      ></script>
      <Script
        async
        strategy="afterInteractive"
        src="https://aliytics.netlify.app/script.js"
        data-website-id="176aa3d6-7cb7-4bef-af6a-644d42b42833"
      ></Script>
    </>
  );
};
