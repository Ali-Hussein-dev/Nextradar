"use client"
import { Button } from "@/components/ui/button"
import * as React from "react"
//======================================
export function CopyButton({ text: text, label = "copy" }: { text: string; label?: string }) {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }
  return (
    <Button variant={"secondary"} size="sm" onClick={copyToClipboard}>
      {isCopied ? "copied" : label}
    </Button>
  )
}
