import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

const summarizePrompt = `Summarize the following job post for job seekers and follow these guidlines
- Max 150 words
- Divided it into 2 sections: Requirments & Benefits and use headings for each section
- Include any additional important detail in the bottom of the post under the heading "Additional Details"
- Use markdown format and make it readable as possible as you can \n\n`

export async function POST(req: Request) {
  const { prompt: JobPost }: { prompt: string } = await req.json()
  const result = await streamText({
    model: openai("gpt-4o-mini"),
    prompt: `${summarizePrompt} ${JobPost}`,
  })

  return result.toDataStreamResponse()
}
