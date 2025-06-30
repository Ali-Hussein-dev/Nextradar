"use client"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BsList } from "react-icons/bs"
import { CiGrid41 } from "react-icons/ci"

const VIEW_PREFERENCE_KEY = "viewPreference"

interface PreferencesState {
  view: "grid" | "list"
  setView: (view: "grid" | "list") => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      view: "grid",
      setView: (view) => set({ view }),
    }),
    {
      name: VIEW_PREFERENCE_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

interface ToggleViewProps {
  className?: string
}

export function ToggleView({ className = "" }: ToggleViewProps) {
  const { view, setView } = usePreferencesStore()

  return (
    <Button
      className={cn("flex items-center gap-2 rounded-xl w-full", className)}
      size="sm"
      variant="outline"
      onClick={() => setView(view === "grid" ? "list" : "grid")}
      aria-label={view === "grid" ? "Switch to list view" : "Switch to grid view"}
    >
      {view === "list" ? <CiGrid41 /> : <BsList />}
      <span>{view === "grid" ? "List view" : "Grid view"}</span>
    </Button>
  )
}
