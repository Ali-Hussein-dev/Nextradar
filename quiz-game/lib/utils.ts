import type { Question } from "../types"
import { questions } from "../constants/questions-bank"

// shuffle array util
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]; // Create a copy to avoid mutating original
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

export function getRandomQuestions(count: number): Question[] {
    const shuffled = shuffle(questions)
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
  