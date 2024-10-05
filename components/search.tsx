"use client"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Input, InputBlock } from "@/components/ui/input"
import { MdOutlineClear } from "react-icons/md"
import { useForm, SubmitHandler } from "react-hook-form"
import { FeedCard, type FeedCardProps } from "@/components/feed-list"
import { ImSearch } from "react-icons/im"
// import { useQueryState, parseAsString } from "nuqs"
import { PiSpinnerGap } from "react-icons/pi"
import * as React from "react"
type Input = {
  q: string
}
const useSearch = () => {
  const { register, handleSubmit, watch, setValue } = useForm<Input>()
  const inputValue = watch("q")
  // const [q, setQ] = useQueryState("q", parseAsString.withDefault(inputValue))
  const { data, refetch, fetchStatus } = useQuery({
    queryKey: ["search", inputValue],
    queryFn: async () =>
      fetch(`/api/search?q=${inputValue}`).then((res) => res.json()),
    enabled: false,
  })
  const onSubmit: SubmitHandler<Input> = () => {
    if (inputValue) {
      refetch()
    }
  }
  // const closeResults = () => {
  //   setQ("")
  // }
  const cleanInput = () => {
    setValue("q", "")
  }
  return {
    register,
    handleSubmit,
    inputValue,
    data,
    fetchStatus,
    onSubmit,
    cleanInput,
    // closeResults,
  }
}
//======================================
export function Search() {
  const {
    register,
    handleSubmit,
    inputValue,
    data,
    fetchStatus,
    onSubmit,
    cleanInput,
    // closeResults,
  } = useSearch()

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-row-start gap-1 w-full"
      >
        <InputBlock
          root={{ className: "rounded-lg", size: "lg" }}
          rightSection={
            <div className="flex-row-end gap-2">
              {inputValue ? (
                <Button
                  type="button"
                  size="icon"
                  variant={"ghost"}
                  onClick={cleanInput}
                  className="rounded-lg size-9"
                >
                  <MdOutlineClear />
                </Button>
              ) : undefined}
              <Button
                type="submit"
                size="icon"
                variant="secondary"
                className="rounded-lg size-9"
                disabled={fetchStatus == "fetching" || !inputValue}
              >
                {fetchStatus == "fetching" ? (
                  <PiSpinnerGap className="animate-spin" />
                ) : (
                  <ImSearch className="size-4" />
                )}
              </Button>
            </div>
          }
        >
          <Input
            placeholder="Search top resources"
            // defaultValue={}
            {...register("q", { required: true })}
          />
        </InputBlock>
      </form>
      {data && (
        <div className="py-4 md:px-3 animate-in px-2 border border-dashed rounded mt-5 dark:bg-zinc-900/70 bg-white">
          {!data.error ? (
            <div>
              <div>
                {data.length == 0
                  ? "No results found"
                  : "Found " + data.length + " results"}
              </div>
              <div className="space-y-4 pt-1">
                {data.map((o: FeedCardProps) => (
                  <FeedCard key={o.name} {...o} />
                ))}
              </div>
            </div>
          ) : (
            <div>{data.error.message}</div>
          )}
        </div>
      )}
    </div>
  )
}
