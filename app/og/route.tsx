// import config from '@/configs'
import { urls } from "@/constants/urls"
import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"
// import localFont from "next/font/local";

export const runtime = "edge"
export const contentType = "image/png"

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get("title")
  const fontData = await fetch(new URL(`${urls.siteUrl}/Poppins-Bold.ttf`, import.meta.url)).then(
    (res) => res.arrayBuffer(),
  )
  // const fontData = localFont({ src: "./public/Poppins-Bold.ttf" })

  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col items-center text-center justify-center font-bold capitalize"
        style={{
          // backgroundImage: "url('/public/og-bg.jpg')",
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
            lineHeight: "100px",
            whiteSpace: "pre-wrap",
            // maxWidth: "1000px",
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
          data: fontData!,
          style: "normal",
        },
      ],
    },
  )
}
