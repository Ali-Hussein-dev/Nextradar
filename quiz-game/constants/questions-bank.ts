import type { Question } from "../types"
import { dataFetchingQuestions } from "./data-fetching-questions"
import { functionQuestions } from "./api-function-questions"
import { serverClientComponentQuestions } from "./server-client-components"

export const questions: Question[] = [
  ...serverClientComponentQuestions,
  ...dataFetchingQuestions,
  ...functionQuestions,
]
