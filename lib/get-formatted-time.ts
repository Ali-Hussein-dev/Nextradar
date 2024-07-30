import { formatDistanceToNow, parseISO } from "date-fns"

export const getFormattedTime = (date: string) => {
    if (!date) return null
    const d = parseISO(date)
    const timeAgo = formatDistanceToNow(d, { addSuffix: true })
    return timeAgo
}