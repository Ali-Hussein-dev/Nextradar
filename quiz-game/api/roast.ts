import { generateText, streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { NextRequest } from "next/server"
import { QuestionOption } from "../types"

export async function RoastPOST(req: NextRequest) {
  try {
    const { question, options, playerChoice, correctAnswer, difficulty, category, playerName } = await req.json()

    const result = await streamText({
      model: openai("gpt-4o"),
      system: `You are a friendly but sarcastic coding colleague who roasts developers when they get quiz questions wrong.

        Your personality:
        - Use simple, clear language
        - Be playful and funny, not mean or harsh
        - Make jokes about common coding mistakes
        - Keep it to exactly ONE sentence
        - Use everyday words, avoid complex technical jargon in the roast
        - Be like a friend who's teasing you, not a mean critic
        - You can use the player's name (${playerName || "developer"}) to make it more personal
        - feel free to add one face emoji to the roast
        The player just got a ${difficulty} difficulty question wrong about ${category.label}.`,
        prompt: `The player ${playerName || "someone"} chose "${playerChoice.option} from these options: ${options.map((opt: QuestionOption) => opt.option).join(", ")}" but the correct answer was "${correctAnswer.option}" for the question: "${question}"

        Give the player a simple, funny/bully one-sentence roast that's easy to understand and references their wrong choice. Keep the language simple and friendly.`,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error generating roast:", error)
    return Response.json({ error: "Failed to generate roast" }, { status: 500 })
  }
}
