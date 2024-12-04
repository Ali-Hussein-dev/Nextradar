import { env } from "@/env.mjs"
import ky from "ky"
import { unstable_cache as cache } from "next/cache"

const getStartEndDate = () => {
  const endAt = new Date()
  const startAt = new Date()
  startAt.setDate(endAt.getDate() - 90)
  return { startAt: startAt.getTime(), endAt: endAt.getTime() }
}
const username = env.ALIYTICS_USERNAME
const password = env.ALIYTICS_PASSWORD
//======================================
export const AdStats = async () => {

  const getCachedAuthResponse = cache(
    async () =>
      await ky
        .post("https://aliytics.ali-hussein.com/api/auth/login", {
          json: {
            username,
            password,
          },
        })
        .json()
        .catch(console.error),
    ["ad-stats"],
    {
      revalidate: 43200, // 12 hours
    }
  )
  const authResponse = (await getCachedAuthResponse()) as { token: string }
  const token = authResponse?.token
  if (!token) {
    console.warn("Couldn't fetch token", token)
    return <div>Couldn{"'"}t fetch stats</div>
  }
  const { startAt, endAt } = getStartEndDate()
  // DOCS: https://umami.is/docs/api/website-stats#get-/api/websites/:websiteid/pageviews
  const getStats = (await ky
    .get(
      `https://aliytics.netlify.app/api/websites/176aa3d6-7cb7-4bef-af6a-644d42b42833/stats?unit=month&startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .json()) as {
    pageviews: { value: number }
    visits: { value: number }
    visitors: { value: number }
    totaltime: { value: number }
  }
  const visitDuration = getStats.totaltime.value / getStats.visits.value
  const formatedVisitDuration = `${Math.ceil(visitDuration / 60)}m ${Math.ceil(visitDuration % 60)}s`
  return (
    <ul>
      <li>
        Page views <b>{(getStats.pageviews.value / 1000).toFixed(1)}K</b>
      </li>
      <li>
        Visits <b>{(getStats.visits.value / 1000).toFixed(1)}K</b>
      </li>
      <li>
        Visit duration <b>{formatedVisitDuration}</b>
      </li>
    </ul>
  )
}
