"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input, InputBlock } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useGameStore } from "../hooks/use-game-store"
import { quizTopics } from "../constants/topics"
import { getQuestionCountByCategory } from "../lib/utils"

export function QuizSetup() {
  const { playerName, selectedTopic, setPlayerName, setSelectedTopic, startGame, loadFromStorage } =
    useGameStore()
  const [localName, setLocalName] = useState("")
  const [localTopic, setLocalTopic] = useState<string>("data-fetching")

  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])

  useEffect(() => {
    setLocalName(playerName)
    setLocalTopic(selectedTopic as string)
  }, [playerName, selectedTopic])

  const handleStartQuiz = () => {
    if (localName.trim()) {
      setPlayerName(localName.trim())
      setSelectedTopic(localTopic)
      startGame()
    }
  }

  const isReadyToStart = localName.trim().length > 0

  const getQuestionInfo = (topicId: string) => {
    if (topicId === "all") {
      return "15 questions from mixed topics"
    }
    const count = getQuestionCountByCategory(topicId)
    return `${count} questions`
  }

  return (
    <Card className="w-full shadow-none border-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold mb-4">Quiz Game 🤓</CardTitle>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto">
          Test your knowledge of fundamentals, best practices, performance optimization, and common
          pitfalls
        </p>
      </CardHeader>
      <CardContent className="space-y-8 pb-8">
        <div className="mb-4 flex gap-4 flex-col w-full">
          {/* Player Name Input */}
          <div className="space-y-1 w-full">
            <Label htmlFor="playerName" className="font-semibold">
              What should we call you?
            </Label>
            <InputBlock root={{ variant: "default", className: "w-full rounded-lg" }}>
              <Input
                id="playerName"
                type="text"
                placeholder="Enter your name or nickname..."
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
              />
            </InputBlock>
          </div>

          {/* Topic Selection */}
          <div className="space-y-1 w-full">
            <Label className="font-semibold">Choose your challenge topic</Label>
            <Select value={localTopic} onValueChange={setLocalTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select a topic to focus on...">
                  {localTopic && (
                    <div className="flex items-center gap-2">
                      <span>{quizTopics.find((t) => t.id === localTopic)?.label}</span>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {quizTopics.map((topic) => (
                  <SelectItem key={topic.id} value={topic.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="font-semibold">
                          {topic.label}{" "}
                          <span className="font-normal text-gray-600 dark:text-gray-400">
                            {"// "} {getQuestionInfo(topic.id)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {topic.description}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* {localTopic && localTopic !== "all" && (
              <p className="text-sm">
                📚 {getQuestionInfo(localTopic)} • Questions sorted by difficulty (Easy → Hard)
              </p>
            )} */}
          </div>
        </div>

        {/* Game Info */}
        <div className="p-6 rounded-2xl border border-dashed border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
            🎯 What to expect:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>
                Wrong answers get you a <b>friendly AI roast</b>! 🔥
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                {localTopic === "all"
                  ? "15 random questions from all categories"
                  : localTopic
                    ? `All ${quizTopics.find((t) => t.id === localTopic)?.label} questions sorted by difficulty`
                    : "Questions from your selected topic"}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>
                Points: <b>Easy (5pts) | Medium (15pts) | Hard (25pts)</b>
              </span>
            </li>
            {/* <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Learn from detailed explanations when you need them</span>
            </li> */}
          </ul>
        </div>

        {/* Start Button */}
        <div className="pb-2 text-center">
          <Button
            onClick={handleStartQuiz}
            disabled={!isReadyToStart}
            size="lg"
            className="text-lg px-8 py-4 font-bold shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isReadyToStart ? `Start Quiz, ${localName}!` : "Enter your name to start"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
