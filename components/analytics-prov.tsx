const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"

//======================================
export const AnalyticsProv = () => {
  if (isDev) return null
  return (
    <script
      defer
      src="https://aliytics.netlify.app/script.js"
      data-website-id="176aa3d6-7cb7-4bef-af6a-644d42b42833"
    ></script>
  )
}
