import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { Progress } from "@/components/ui/progress"
interface ScoreDisplayProps {
  currentScore: number
  maxPossibleScore: number
  questionsAnswered: number
  totalQuestions: number
  playerName?: string
  resetGame: () => void
}

export function ScoreDisplay({
  currentScore,
  maxPossibleScore,
  questionsAnswered,
  totalQuestions,
  playerName,
  resetGame,
}: ScoreDisplayProps) {
  const percentage = maxPossibleScore > 0 ? Math.round((currentScore / maxPossibleScore) * 100) : 0

  return (
    <Card className="w-full shadow-none border hidden md:block bg-zinc-50 dark:bg-zinc-900/30">
      <div className="py-2 h-full">
        <div className="flex items-center justify-between flex-col h-full">
          <div className="flex items-start gap-3 grow w-full px-2">
            <div className="w-full flex flex-col gap-2 ">
              <div className="flex items-center gap-3 w-full">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                  <Trophy className="size-4 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="w-full">
                  <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {currentScore}
                  </span>
                  {maxPossibleScore > 0 && (
                    <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">
                      / {maxPossibleScore} ({percentage}%)
                    </span>
                  )}
                </div>
              </div>
              <Progress value={percentage} className="w-full dark:bg-zinc-800" />
            </div>
          </div>
          <Button onClick={resetGame} className="" variant="outline">
            Reset
          </Button>
        </div>
      </div>
    </Card>
  )
}
