"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, RotateCcw, Share2 } from "lucide-react"
import Confetti from "react-confetti"

interface GameOverProps {
  finalScore: number
  maxPossibleScore: number
  onRestart: () => void
}

export function GameOver({ finalScore, maxPossibleScore, onRestart }: GameOverProps) {
  const percentage = Math.round((finalScore / maxPossibleScore) * 100)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(percentage >= 70)

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)

    // Only show confetti for 70% or higher, and stop after 5 seconds
    if (percentage >= 70) {
      const timer = setTimeout(() => {
        setShowConfetti(false)
      }, 5000)

      return () => {
        window.removeEventListener("resize", updateWindowDimensions)
        clearTimeout(timer)
      }
    } else {
      return () => {
        window.removeEventListener("resize", updateWindowDimensions)
      }
    }
  }, [percentage])

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return { message: "🚀 Absolute Legend!", color: "bg-purple-500" }
    if (percentage >= 80) return { message: "🔥 Senior Dev Material!", color: "bg-green-500" }
    if (percentage >= 70) return { message: "💪 Solid Developer!", color: "bg-blue-500" }
    if (percentage >= 60) return { message: "📚 Keep Learning!", color: "bg-yellow-500" }
    if (percentage >= 40) return { message: "🌱 Junior Dev Vibes", color: "bg-orange-500" }
    return { message: "😅 Time to Hit the Docs!", color: "bg-red-500" }
  }

  const performance = getPerformanceMessage(percentage)

  const shareScore = () => {
    const text = `I just scored ${finalScore}/${maxPossibleScore} (${percentage}%) on the Developer Quiz Game! 🚀`
    if (navigator.share) {
      navigator.share({ text })
    } else {
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <>
      {showConfetti && percentage >= 70 && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      <Card className="w-full max-w-4xl mx-auto shadow-2xl border-0">
        <CardHeader className="text-center pt-8 pb-4">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full animate-bounce">
              <Trophy className="size-40 text-yellow-500" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Quiz Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-8 pb-8">
          <div className="space-y-6">
            <div className="text-5xl font-bold text-gray-900 dark:text-gray-100">
              {finalScore}
              <span className="text-3xl text-gray-500 dark:text-gray-400">/{maxPossibleScore}</span>
            </div>
            <div className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
              {percentage}% Accuracy
            </div>
            <Badge
              className={`${performance.color} text-white text-xl px-6 py-3 font-bold shadow-lg`}
            >
              {performance.message}
            </Badge>
          </div>

          <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-700 mb-4">
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">
              📊 Performance Breakdown
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-1 leading-relaxed">
              <p>You tackled 15 challenging questions across multiple categories</p>
              <div className="flex justify-center gap-4 mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
                  Easy: 10pts
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-medium">
                  Medium: 20pts
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm font-medium">
                  Hard: 30pts
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={onRestart}
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
            >
              <RotateCcw className="size-5 mr-2" />
              Play Again
            </Button>
            {/* <Button
              onClick={shareScore}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share Score
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
