"use client"

import type { Question, QuestionOption } from "../types"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup } from "@/components/ui/radio-group"
import { CheckCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { Markdown } from "@/components/markdown"
import { shuffle } from "../lib/utils"
import * as React from "react"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswerSelect: (answer: QuestionOption) => void
  selectedAnswer: QuestionOption | null
  showFeedback: boolean
  FeedbackDisplay: React.ReactNode
}

const SelectedOption = ({ option, isCorrect }: { option: QuestionOption; isCorrect: boolean }) => {
  return isCorrect ? (
    <div className="flex items-center gap-2 p-4 rounded-2xl hover:cursor-pointer hover:border-solid border-dashed border transition-all duration-100 text-wrap bg-green-500 hover:bg-green-600 border-green-500">
      <div
        className={cn(
          `w-6 h-6 rounded-full border-2 flex items-center justify-center bg-green-100 border-green-500`,
        )}
      >
        <CheckCircle className="w-4 h-4 text-green-600" />
      </div>
      {option.option}
    </div>
  ) : (
    <div className="flex items-center gap-2 p-4 rounded-2xl hover:cursor-pointer hover:border-solid border-dashed border transition-all duration-100 text-wrap bg-red-500 hover:bg-red-600 border-red-500">
      <div
        className={cn(
          `w-6 h-6 rounded-full border-2 flex items-center justify-center bg-red-100 border-red-500`,
        )}
      >
        <XCircle className="w-4 h-4 text-red-600" />
      </div>
      {option.option}
      {/* <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        className="text-sm opacity-90 leading-relaxed pt-2 border-t border-white/20"
      >
        {option.description}
      </motion.div> */}
    </div>
  )
}
export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelect,
  selectedAnswer,
  showFeedback,
  FeedbackDisplay,
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
  const memoizedOptions = React.useMemo(() => shuffle(question.options), [question.options])
  return (
    <div className="">
      <CardHeader className="">
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
      <AnimatePresence mode="wait">
        {FeedbackDisplay}
        <motion.div
          key={question.question}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          <CardContent className="pt-0">
            <CardTitle className="text-xl font-semibold leading-relaxed prose-p:text-gray-900 text-pretty mb-4 typography dark:prose-p:text-gray-200">
              <Markdown>{question.question}</Markdown>
            </CardTitle>

            <RadioGroup
              value={getSelectedValue()}
              onValueChange={handleValueChange}
              disabled={showFeedback}
              className="space-y-2"
            >
              {memoizedOptions.map((option, index) => {
                const optionSelected = selectedAnswer?.option === option.option
                if (optionSelected) {
                  return <SelectedOption key={index} isCorrect={option.isRight} option={option} />
                }
                return (
                  <label
                    //  variant={isSelected ? (option.isRight ? "default" : "destructive") : "outline"}
                    key={index}
                    htmlFor={`option-${index}`}
                    className={cn(
                      `flex items-center gap-2 p-4 rounded-2xl hover:cursor-pointer hover:border-solid border-dashed border bg-zinc-50 dark:bg-zinc-900 transition-all duration-100 text-wrap`,
                    )}
                  >
                    <div className="flex items-start gap-4 w-full">
                      <div className="flex-shrink-0 mt-1">
                        <input
                          id={`option-${index}`}
                          type="radio"
                          name="option"
                          value={index}
                          checked={getSelectedValue() === index.toString()}
                          onChange={() => onAnswerSelect(option)}
                          disabled={showFeedback}
                          className="hidden"
                        />
                        <div
                          className={cn(
                            `w-6 h-6 rounded-full border-2 flex items-center justify-center`,
                          )}
                        ></div>
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-medium text-base mb-2 leading-relaxed">
                          {option.option}
                        </div>
                      </div>
                    </div>
                  </label>
                )
              })}
            </RadioGroup>
          </CardContent>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
