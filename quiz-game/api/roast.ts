import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { NextRequest } from "next/server"

const prompt = ({
  playerName,
  category,
  difficulty,
  playerChoice,
  correctAnswer,
  question,
}: {
  playerName: string
  category: string
  difficulty: string
  playerChoice: string
  correctAnswer: string
  question: string
}) => `${playerName || "Someone"} picked "${playerChoice}", the right answer was "${correctAnswer}".
the player's question was "${question}" in ${category} category and ${difficulty} difficulty.
Give them a light, funny roast about their choice. Keep it simple and good-natured.
`
const systemPrompt = `You are a friendly but sarcastic React/Next.js developer who roasts developers when they get quiz questions wrong.
        Your personality:
        - Use simple, clear language
        - Be playful and funny, not mean or harsh
        - Make jokes about common coding mistakes
        - Keep it to exactly ONE sentence
        - Use everyday words, avoid complex technical jargon in the roast
        - Be like a friend who's teasing you, not a mean critic
        - feel free to add one face emoji to the roast`
export async function RoastPOST(req: NextRequest) {
  try {
    const { question, playerChoice, correctAnswer, difficulty, category, playerName } =
      await req.json()

    const result = await streamText({
      model: openai("gpt-4-turbo"),
      system: systemPrompt,
      prompt: prompt({playerName, category, difficulty, playerChoice, correctAnswer, question}),
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error generating roast:", error)
    return Response.json({ error: "Failed to generate roast" }, { status: 500 })
  }
}
