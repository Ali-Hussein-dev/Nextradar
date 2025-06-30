import { type NextRequest } from "next/server"
import { RoastPOST } from "@/quiz-game/api/roast"
export const POST = async (req: NextRequest) => {
  return RoastPOST(req)
}
