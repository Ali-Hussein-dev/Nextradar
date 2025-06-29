import type { Question } from "../types"
import { dataFetchingQuestions } from "./data-fetching-questions"
import { functionQuestions } from "./api-function-questions"

export const questions: Question[] = [...dataFetchingQuestions, ...functionQuestions]
