import { generateText, streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { NextRequest } from "next/server"
import { QuestionOption } from "../types"

const prompt= ({playerName, category, results}: {playerName: string, category: string, results: number})=> {
  return `
## Input Variables:
- **playerName**: ${playerName}
- **results**: ${results} (this could be a score, percentage, or results object)
- **category**: ${category} (the quiz topic/category)

## Instructions:
- Address the player by name in a casual, friendly way
- Keep the response short (10-15 words max)
- Don't exaggerate or make things sound too grand
- Reference their specific results and the quiz category
- Keep the tone light-hearted and encouraging, even for lower scores
- Include relevant developer humor, puns, or references related to the category
- Avoid being condescending or overly technical
- End with a motivational note or suggestion for improvement

## Style Guidelines:
- Use casual, conversational language
- Include appropriate emojis (1 max)
- Be supportive regardless of performance level
- Reference the specific quiz category in a clever way
- Don't start with greeting, get straight to the point!

## Example Tone:
- For high scores: Celebrate their expertise with playful confidence
- For medium scores: Acknowledge solid effort with encouraging humor
- For low scores: Stay positive and motivational, maybe joke about the learning curve

Generate a personalized, funny feedback message now.`}
export async function RewardPOST(req: NextRequest) {
  try {
    const { category, playerName, results } = await req.json()
    console.log(playerName, category, results)
    const result = await streamText({
      model: openai("gpt-4o"),
      system:"You are a friendly, witty, snarky AI assistant providing personalized feedback for a developer quiz application. Generate a fun, encouraging response based on the quiz results.",
      prompt: prompt({playerName, category, results}),
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error generating reward:", error)
    return Response.json({ error: "Failed to generate reward" }, { status: 500 })
  }
}
