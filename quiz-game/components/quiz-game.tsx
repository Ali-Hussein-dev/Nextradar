"use client"

import { useEffect } from "react"
import { useGameStore } from "../hooks/use-game-store"
import { QuestionCard } from "./question-card"
import { ScoreDisplay } from "./score-display"
import { GameOver } from "./game-over"
import { QuizSetup } from "./quiz-setup"
import { Button } from "@/components/ui/button"
import { useCompletion } from "@ai-sdk/react"
import { FeedbackDisplay } from "./feedback-display"
import { motion } from "motion/react"
import { LuChevronRight } from "react-icons/lu"
import { Card } from "@/components/ui/card"

export function QuizGame() {
  const {
    gameStatus,
    currentQuestionIndex,
    questions,
    selectedAnswers,
    score,
    showFeedback,
    currentFeedback,
    playerName,
    selectAnswer,
    nextQuestion,
    resetGame,
    setFeedback,
  } = useGameStore()

  const currentQuestion = questions[currentQuestionIndex] || ""
  const selectedAnswer = selectedAnswers[currentQuestionIndex] || null
  const maxPossibleScore = questions.reduce((sum, q) => {
    const correctAnswer = q.options.find((opt) => opt.isRight)
    return sum + (correctAnswer?.score || 0)
  }, 0)
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/roast",
    onFinish: (prompt, completion) => {
      setFeedback(completion || "Well, that wasn't quite right, was it?")
    },
    onError: () => {
      setFeedback("Even my roast generator is disappointed in that answer.")
    },
  })
  // Handle AI roast when wrong answer is selected
  useEffect(() => {
    if (
      showFeedback &&
      selectedAnswer &&
      !selectedAnswer.isRight &&
      !currentFeedback &&
      !isLoading
    ) {
      const correctAnswer = currentQuestion?.options?.find((opt) => opt.isRight)
      complete("", {
        body: {
          question: currentQuestion?.question,
          options: currentQuestion?.options,
          playerChoice: selectedAnswer.option,
          correctAnswer: correctAnswer?.option,
          difficulty: currentQuestion?.difficulty,
          category: currentQuestion?.category.label,
          playerName,
        },
      })
    }
  }, [showFeedback, selectedAnswer, currentQuestion, currentFeedback, isLoading, setFeedback, playerName, complete])
  if (gameStatus === "setup") {
    return <QuizSetup />
  }

  if (gameStatus === "finished") {
    return <GameOver finalScore={score} maxPossibleScore={maxPossibleScore} onRestart={resetGame} />
  }

  if (!currentQuestion) return null

  return (
    <div className="gap-3 mx-auto grid grid-cols-1 md:grid-cols-4 pb-6 md:pb-20">
      <Card className="w-full shadow-none border-0 pb-4 col-span-3">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswerSelect={selectAnswer}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          FeedbackDisplay={
            showFeedback && selectedAnswer ? (
              <FeedbackDisplay
                isCorrect={selectedAnswer?.isRight || false}
                feedback={completion || ""}
                isLoading={isLoading}
                playerName={playerName}
              />
            ) : null
          }
        />
        {selectedAnswer && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-full px-4"
          >
            <Button
              onClick={nextQuestion}
              size="lg"
              className="font-semibold rounded-xl w-full gap-2"
            >
              Next Question <LuChevronRight />
            </Button>
          </motion.div>
        )}
      </Card>
      <ScoreDisplay
        currentScore={score}
        maxPossibleScore={maxPossibleScore}
        questionsAnswered={currentQuestionIndex + (selectedAnswer ? 1 : 0)}
        totalQuestions={questions.length}
        playerName={playerName}
        resetGame={resetGame}
      />
    </div>
  )
}
