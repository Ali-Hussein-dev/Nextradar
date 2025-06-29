"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Loader2, ThumbsUp } from "lucide-react"

interface FeedbackDisplayProps {
  isCorrect: boolean
  feedback?: string
  isLoading: boolean
  playerName?: string
}

export function FeedbackDisplay({
  isCorrect,
  feedback,
  isLoading,
  playerName,
}: FeedbackDisplayProps) {
  // if (showOnlyExplanationAndButton) {
  //   return (
  //     <Card className="w-full shadow-lg border-0">
  //       <CardContent className="pt-6 pb-6">
  //         <div className="text-center space-y-6">
  //           {/* Show explanation only for wrong answers */}
  //           {!isCorrect && explanation && (
  //             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
  //               <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-lg">
  //                 💡 Explanation
  //               </h4>
  //               <p className="text-blue-800 dark:text-blue-200 leading-relaxed">{explanation}</p>
  //             </div>
  //           )}
  //         </div>
  //       </CardContent>
  //     </Card>
  //   )
  // }

  // Original feedback display for correct answers
  return (
    <Card className="mx-auto max-w-3xl w-full shadow-none sm:border-0">
      <CardContent className="pt-6 pb-6">
        <div className="text-center space-y-6">
          {isCorrect ? (
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <ThumbsUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Nice work {playerName ? `, ${playerName}` : ""}!
              </h3>
            </div>
          ) : (
            <div>
              {/* Show roast for wrong answers */}
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin text-red-600" />
                  <span className="text-red-700 dark:text-red-300 font-medium">
                    Let me tell you something...
                  </span>
                </div>
              ) : feedback ? (
                <p className="text-red-800 dark:text-red-200 font-semibold text-base italic leading-relaxed">
                  {feedback}
                </p>
              ) : (
                <p className="text-red-700 dark:text-red-300 font-medium">
                  {"Oops! That's not quite right."}
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
