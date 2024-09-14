"use client"
import { cn } from "@/lib/utils"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../button"
//======================================
export function ExpandedCard({
  height = "8rem",
  children,
}: {
  /**
   * Height of the card when collapsed
   */
  height?: string
  children: React.ReactNode
}) {
  const [expanded, setExpanded] = React.useState(false)
  return (
    <motion.div
      className={cn(
        "relative border border-dashed rounded-md px-3 md:px-5 pt-4 overflow-hidden"
      )}
      initial={{ height: height }}
      animate={{
        height: expanded ? "auto" : height,
        transition: {
          duration: 0.3,
          type: "tween",
          stiffness: 10,
        },
      }}
    >
      <div className={"pb-10"}>{children}</div>
      <AnimatePresence>
        <motion.div
          className="w-full h-20 absolute bottom-0 inset-x-0 dark:from-zinc-950 dark:to-zinc-950/50 bg-gradient-to-t flex items-center justify-center dark:text-zinc-400 from-zinc-50 to-transparent"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="outline"
            size="sm"
            className="rounded-lg"
          >
            {expanded ? "Collapse" : "Expand"}
          </Button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
