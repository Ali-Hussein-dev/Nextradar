// import config from '@/configs'
import { urls } from "@/constants/urls";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const fontData = await fetch(
    new URL(`${urls.siteUrl}/Poppins-Bold.ttf`, import.meta.url)
  )
    .then((res) => res.arrayBuffer())
    .catch(console.error);
  
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col items-center text-center justify-center font-bold capitalize"
        style={{
          backgroundImage: `url(${urls.siteUrl}/og-bg.jpg)`,
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontFamily: "Poppins",
            fontSize: 72,
            fontStyle: "normal",
            color: "white",
            letterSpacing: "0.02em",
            lineHeight: "86px",
            whiteSpace: "pre-wrap",
            maxWidth: "968px",
            textAlign: "center",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Poppins",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
