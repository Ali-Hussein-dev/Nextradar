import { type NextRequest } from "next/server"
import { RewardPOST } from "@/quiz-game/api/reward"
export const POST = async (req: NextRequest) => {
  return RewardPOST(req)
}
