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
  const { complete, completion, isLoading, data } = useCompletion({
    api: "/api/roast",
    onFinish: (prompt, completion) => {
      // setLoadingFeedback(false)
      console.log("finished roast")
      console.log(completion)
      const data = JSON.parse(completion)
      setFeedback(data.roast || "Well, that wasn't quite right, was it?")
    },
    onError: () => {
      // setLoadingFeedback(false)
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
      complete("", {
        body: {
          question: currentQuestion?.question,
          options: currentQuestion?.options,
          playerChoice: selectedAnswer,
          correctAnswer: currentQuestion?.options?.find((opt) => opt.isRight),
          difficulty: currentQuestion?.difficulty,
          category: currentQuestion?.category,
          playerName,
        },
      })
      const correctAnswer = currentQuestion?.options?.find((opt) => opt.isRight)
      if (correctAnswer) {
        // setLoadingFeedback(true)
      }
    }
  }, [
    showFeedback,
    selectedAnswer,
    currentQuestion,
    currentFeedback,
    isLoading,
    setFeedback,
    // setLoadingFeedback,
    playerName,
  ])
  console.log(data)
  if (gameStatus === "setup") {
    return <QuizSetup />
  }

  if (gameStatus === "finished") {
    return <GameOver finalScore={score} maxPossibleScore={maxPossibleScore} onRestart={resetGame} />
  }

  if (!currentQuestion) return null

  return (
    <div className="space-y-6 mx-auto">
      <ScoreDisplay
        currentScore={score}
        maxPossibleScore={maxPossibleScore}
        questionsAnswered={currentQuestionIndex + (selectedAnswer ? 1 : 0)}
        totalQuestions={questions.length}
        playerName={playerName}
        resetGame={resetGame}
      />
      {showFeedback && selectedAnswer && (
        <FeedbackDisplay
          isCorrect={selectedAnswer?.isRight || false}
          feedback={completion || ""}
          isLoading={isLoading}
          playerName={playerName}
        />
      )}
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onAnswerSelect={selectAnswer}
        selectedAnswer={selectedAnswer}
        showFeedback={showFeedback}
      />
      <div className="flex items-center justify-end pt-2 gap-2">
        <Button
          disabled={isLoading || !selectedAnswer}
          onClick={nextQuestion}
          size="lg"
          className="font-semibold rounded-xl"
        >
          Next Question →
        </Button>
      </div>
    </div>
  )
}
