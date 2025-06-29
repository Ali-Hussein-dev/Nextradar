export interface QuestionOption {
    option: string
    description?: string
    score: number
    isRight: boolean
  }
  
  export interface Question {
    id: string
    question: string
    options: QuestionOption[]
    difficulty: "easy" | "medium" | "hard" | "expert"
    category: { label: string; id: string }
    explanation: string
  }
  
  export interface GameState {
    currentQuestionIndex: number
    score: number
    questions: Question[]
    selectedAnswers: (QuestionOption | null)[]
    gameStatus: "setup" | "playing" | "finished"
    showFeedback: boolean
    currentFeedback: string | null
    isLoadingFeedback: boolean
    playerName: string
    selectedTopic: string | null
  }
  
  export interface QuizTopic {
    id: string
    label: string
    description: string
  }
  