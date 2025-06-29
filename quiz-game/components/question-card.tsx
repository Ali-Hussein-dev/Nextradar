"use client"

import type { Question, QuestionOption } from "../types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswerSelect: (answer: QuestionOption) => void
  selectedAnswer: QuestionOption | null
  showFeedback: boolean
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelect,
  selectedAnswer,
  showFeedback,
}: QuestionCardProps) {
  const getScoreForDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return 10
      case "medium":
        return 20
      case "hard":
        return 30
      case "expert":
        return 40
      default:
        return 10
    }
  }
  const handleValueChange = (value: string) => {
    if (!showFeedback) {
      const selectedOption = question.options.find((option, index) => index.toString() === value)
      if (selectedOption) {
        onAnswerSelect(selectedOption)
      }
    }
  }

  const getSelectedValue = () => {
    if (!selectedAnswer) return ""
    const index = question.options.findIndex((option) => option.option === selectedAnswer.option)
    return index !== -1 ? index.toString() : ""
  }
  const getStatusIcon = (option: QuestionOption, index: number) => {
    // if (!showFeedback) return null

    const isSelected = selectedAnswer?.option === option.option
    const isCorrect = option.isRight

    if (isCorrect) {
      return (
        <div className="p-1 rounded-full border border-green-300">
          <Check className="size-5 text-green-600 dark:text-green-400" />
        </div>
      )
    } else if (isSelected) {
      return (
        <div className="p-1 rounded-full border border-red-300">
          <X className="size-5 text-red-600 dark:text-red-400" />
        </div>
      )
    }

    return null
  }
  return (
    <Card className="w-full shadow-none sm:shadow-lg border-0 pb-4">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "text-zinc-100 bg-zinc-700 text-sm font-medium px-2 py-1 rounded-lg capitalize",
                question.difficulty == "easy" && "bg-green-500 dark:bg-green-900",
                question.difficulty == "medium" && "bg-yellow-500 dark:bg-yellow-900",
                question.difficulty == "hard" && "bg-red-500 dark:bg-red-900",
                question.difficulty == "expert" && "bg-purple-500 dark:bg-purple-900",
              )}
            >
              {question.difficulty} • {getScoreForDifficulty(question.difficulty)} pts
            </div>
            <Badge variant="secondary" className="py-1 rounded-lg">
              {question.category.label}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardTitle className="text-xl lg:text-2xl font-bold leading-relaxed text-gray-900 dark:text-gray-200 text-pretty mb-4">
          <h2>{question.question}</h2>
        </CardTitle>
        <RadioGroup
          value={getSelectedValue()}
          onValueChange={handleValueChange}
          disabled={showFeedback}
          className="space-y-2"
        >
          {question.options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className="flex items-center gap-2 p-4 rounded-2xl hover:cursor-pointer hover:border-solid border-dashed border bg-zinc-50 dark:bg-zinc-900 "
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                className="flex-shrink-0 mt-[6px]"
                disabled={showFeedback}
              />
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-base leading-relaxed">{option.option}</div>
                </div>
              </div>
              <div className="grow flex justify-end items-center">
                {showFeedback && getStatusIcon(option, index)}
              </div>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
