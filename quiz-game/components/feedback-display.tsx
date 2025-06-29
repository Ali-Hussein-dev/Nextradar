"use client"

import { Loader2, ThumbsUp } from "lucide-react"
import { motion } from "motion/react"
import Markdown from "react-markdown"
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
  return (
    <div className="text-center">
      {isCorrect ? (
        <motion.div
          className="flex items-center flex-col justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
            <ThumbsUp className="size-5 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-gray-100 ">
            Nice work {playerName ? `, ${playerName}` : ""}!
          </h3>
        </motion.div>
      ) : (
        <div>
          {/* Show roast for wrong answers */}
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-red-600" />
              <span className="text-red-700 dark:text-red-300 font-medium">
                Let me tell you something...
              </span>
            </div>
          ) : feedback ? (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="prose-p:text-red-800 dark:prose-p:text-red-400 font-medium text-base italic leading-relaxed max-w-xl mx-auto text-center"
            >
              <Markdown>{feedback}</Markdown>
            </motion.p>
          ) : (
            <p className="text-red-700 dark:text-red-300 font-medium">
              {"Oops! That's not quite right."}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
