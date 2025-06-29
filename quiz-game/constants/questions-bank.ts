import type { Question } from "../types"
import { dataFetchingQuestions } from "./data-fetching-questions"

export const questions: Question[] = [...dataFetchingQuestions]
