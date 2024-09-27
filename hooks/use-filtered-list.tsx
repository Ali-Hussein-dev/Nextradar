"use client"

import { parseAsString, useQueryState } from "nuqs"

import * as React from "react"

// Define a generic type for the filter function
type FilterFn<T> = (item: T, filter: string) => boolean

type FilteredProps<T> = {
  list: T[]
  filterFn: FilterFn<T>
  param: {
    name: string
    value: string
  }
}
/**
 * A custom hook to filter a list of items based on a filter function
 * 
 */
export function useFilter<T>({ list, filterFn, param }: FilteredProps<T>) {
  const [current, setCurrent] = useQueryState(
    param.name,
    parseAsString.withDefault(param.value)
  )

  // Memoize the filtered list to avoid unnecessary recalculations
  const filtered = React.useMemo(() => {
    return list.filter((item) => filterFn(item, current))
  }, [list, current, filterFn])

  const setFilter = (filter: string) => {
    setCurrent(filter)
  }

  return { current, filtered, setFilter }
}
