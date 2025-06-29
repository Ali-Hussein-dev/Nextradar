import type { Question } from "../types"
import { questions } from "../constants/questions-bank"

export function getRandomQuestions(count: number): Question[] {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(count, questions.length))
  }
  
  export function getQuestionsByDifficulty(difficulty: Question["difficulty"]): Question[] {
    return questions.filter((q) => q.difficulty === difficulty)
  }
  
  export function getQuestionsByCategory(categoryId: string): Question[] {
    return questions.filter((q) => q.category.id === categoryId)
  }
  
  export function getAllQuestions(): Question[] {
    return questions
  }
  
  export function getQuestionCountByCategory(categoryId: string): number {
    return questions.filter((q) => q.category.id === categoryId).length
  }
  