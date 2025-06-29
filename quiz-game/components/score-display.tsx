import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

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
    <Card className="w-full mb-4 shadow-none border bg-zinc-50 dark:bg-zinc-900">
      <CardContent className="pt-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
              <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
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
        </div>
      </CardContent>
    </Card>
  )
}
