"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"
import Confetti from "react-confetti"
import { GiLaurelsTrophy } from "react-icons/gi"
import { useGameStore } from "../hooks/use-game-store"
import { useCompletion } from "@ai-sdk/react"
import { Markdown } from "@/components/markdown"

interface GameOverProps {
  finalScore: number
  maxPossibleScore: number
  onRestart: () => void
}

export function GameOver({ finalScore, maxPossibleScore, onRestart }: GameOverProps) {
  const percentage = Math.round((finalScore / maxPossibleScore) * 100)
  const { questions, playerName } = useGameStore()
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
  const { complete, isLoading, completion } = useCompletion({
    api: "/api/reward",
  })
  useEffect(() => {
    complete("", {
      body: {
        category: questions[0].category.label,
        results: percentage,
        playerName,
      },
    })
  }, [])

  return (
    <>
      {showConfetti && percentage >= 70 && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.2}
        />
      )}
      <Card className="w-full max-w-4xl mx-auto shadow-none sm:border-0 mb-16">
        <CardHeader className="text-center pt-12 pb-4">
          <div className="flex justify-center mb-6">
            <div className="border-2 p-1 rounded-full border-yellow-400 dark:border-yellow-600/30 border-dotted">
              <div className="p-6 bg-yellow-100 dark:bg-yellow-600/10 rounded-full">
                <GiLaurelsTrophy className="size-24 text-yellow-500 " />
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Quiz Over!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-8 pb-8">
          {isLoading ? (
            <div>Wait for it...</div>
          ) : (
            <div className="typography max-w-xl mx-auto">
              <Markdown>{completion}</Markdown>
            </div>
          )}

          <div className="space-y-6">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {finalScore}
              <span className="text-xl text-gray-500 dark:text-gray-400">/{maxPossibleScore}</span>
            </div>
            <div
              className={`${performance.color} text-white text-xl px-6 py-3 font-bold w-fit mx-auto rounded-sm`}
            >
              {performance.message}
            </div>
          </div>

          {/* <div className="p-6 rounded-lg border border-gray-100 dark:border-gray-700 mb-4">
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">
              📊 Performance Breakdown
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-1 leading-relaxed">
              <p>You tackled challenging questions across multiple categories</p>
              <div className="flex justify-center gap-4 mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
                  Easy: 5pts
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-medium">
                  Medium: 15pts
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm font-medium">
                  Hard: 25pts
                </span>
              </div>
            </div>
          </div> */}
          <div className="flex gap-4 justify-center">
            <Button onClick={onRestart} size="lg" className="px-8 py-4 text-lg font-semibold">
              <RotateCcw className="size-5 mr-2" />
              Play Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
