import { create } from "zustand"
import type { GameState, QuestionOption } from "../types"
import { getQuestionsByCategory, getRandomQuestions } from "../lib/utils"

interface GameActions {
  setPlayerName: (name: string) => void
  setSelectedTopic: (topic: string | null) => void
  startGame: () => void
  selectAnswer: (answer: QuestionOption) => void
  nextQuestion: () => void
  resetGame: () => void
  setFeedback: (feedback: string) => void
  setLoadingFeedback: (loading: boolean) => void
  hideFeedback: () => void
  loadFromStorage: () => void
  saveToStorage: () => void
}

const initialState: GameState = {
  currentQuestionIndex: 0,
  score: 0,
  questions: [],
  selectedAnswers: [],
  gameStatus: "setup",
  showFeedback: false,
  currentFeedback: null,
  isLoadingFeedback: false,
  playerName: "",
  selectedTopic: null,
}

// Helper function to sort questions by difficulty
const sortQuestionsByDifficulty = (questions: any[]) => {
  const difficultyOrder = { easy: 1, medium: 2, hard: 3, expert: 4 }
  return questions.sort((a, b) => {
    const aOrder = difficultyOrder[a.difficulty as keyof typeof difficultyOrder] || 5
    const bOrder = difficultyOrder[b.difficulty as keyof typeof difficultyOrder] || 5
    return aOrder - bOrder
  })
}

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,

  setPlayerName: (name: string) => {
    set({ playerName: name })
    get().saveToStorage()
  },

  setSelectedTopic: (topic: string | null) => {
    set({ selectedTopic: topic })
    get().saveToStorage()
  },

  startGame: () => {
    const state = get()
    let questions

    if (state.selectedTopic && state.selectedTopic !== "all") {
      // Get all questions from the selected category
      questions = getQuestionsByCategory(state.selectedTopic)
      // Sort by difficulty (easy -> medium -> hard -> expert)
      questions = sortQuestionsByDifficulty(questions)
    } else {
      // For "all" topics, get random questions from all categories
      questions = getRandomQuestions(15)
    }

    // Take up to 15 questions (or all if less than 15)
    questions = questions.slice(0, 15)

    set({
      questions,
      selectedAnswers: new Array(questions.length).fill(null),
      currentQuestionIndex: 0,
      score: 0,
      gameStatus: "playing",
      showFeedback: false,
      currentFeedback: null,
    })
  },

  selectAnswer: (answer: QuestionOption) => {
    const state = get()
    const newSelectedAnswers = [...state.selectedAnswers]
    newSelectedAnswers[state.currentQuestionIndex] = answer

    const newScore = answer.isRight ? state.score + answer.score : state.score

    set({
      selectedAnswers: newSelectedAnswers,
      score: newScore,
      showFeedback: true,
    })
  },

  nextQuestion: () => {
    const state = get()
    const nextIndex = state.currentQuestionIndex + 1

    if (nextIndex >= state.questions.length) {
      set({
        gameStatus: "finished",
        showFeedback: false,
        currentFeedback: null,
      })
    } else {
      set({
        currentQuestionIndex: nextIndex,
        showFeedback: false,
        currentFeedback: null,
      })
    }
  },

  resetGame: () => {
    set({
      ...initialState,
      playerName: get().playerName,
      selectedTopic: get().selectedTopic,
      gameStatus: "setup",
    })
  },

  setFeedback: (feedback: string) => {
    set({ currentFeedback: feedback, isLoadingFeedback: false })
  },

  setLoadingFeedback: (loading: boolean) => {
    set({ isLoadingFeedback: loading })
  },

  hideFeedback: () => {
    set({ showFeedback: false, currentFeedback: null })
  },

  loadFromStorage: () => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("quiz-player-name")
      const savedTopic = localStorage.getItem("quiz-selected-topic")

      if (savedName) {
        set({ playerName: savedName })
      }
      if (savedTopic) {
        set({ selectedTopic: savedTopic })
      }
    }
  },

  saveToStorage: () => {
    if (typeof window !== "undefined") {
      const state = get()
      localStorage.setItem("quiz-player-name", state.playerName)
      if (state.selectedTopic) {
        localStorage.setItem("quiz-selected-topic", state.selectedTopic)
      }
    }
  },
}))
