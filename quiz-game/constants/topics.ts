import type { QuizTopic } from "../types"

export const quizTopics: QuizTopic[] = [
  {
    id: "data-fetching",
    label: "Data Fetching",
    description: "client-side, server-side, and API routes",
  },
  {
    id: "api-functions",
    label: "API Functions",
    description: "useRouter, usePathname, redirect, notFound,...etc",
  },
  {
    id: "server-client-components",
    label: "Server & Client Components",
    description: "hydration, use client, nesting", 
  },
]

export function getTopicById(id: string): QuizTopic | undefined {
  return quizTopics.find((topic) => topic.id === id)
}

export function getTopicLabel(id: string): string {
  const topic = getTopicById(id)
  return topic ? topic.label : "Unknown Topic"
}
