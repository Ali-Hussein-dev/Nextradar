"use client"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Input, InputBlock } from "@/components/ui/input"
import { MdOutlineClear } from "react-icons/md"
import { useForm, SubmitHandler } from "react-hook-form"
import { FeedCard, type FeedCardProps } from "@/components/feed-list"
import { ImSearch } from "react-icons/im"
import { useQueryState, parseAsString } from "nuqs"
import { PiSpinnerGap } from "react-icons/pi"

type Input = {
  q: string
}
const useSearch = () => {
  const { register, handleSubmit, watch, setValue } = useForm<Input>()
  const inputValue = watch("q")
  const [q, setQ] = useQueryState("q", parseAsString.withDefault(inputValue))
  const { data, refetch, fetchStatus } = useQuery({
    queryKey: ["search", q],
    queryFn: async () => fetch(`/api/search?q=${q}`).then((res) => res.json()),
    enabled: false,
  })
  const onSubmit: SubmitHandler<Input> = () => {
    if (!inputValue) return
    setQ(inputValue)
    if (!q) return
    refetch()
  }
  const closeResults = () => {
    setQ("")
  }
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
    closeResults,
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
    closeResults,
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
            placeholder="Search for top resources"
            // defaultValue={}
            {...register("q", { required: true })}
          />
        </InputBlock>
      </form>
      {data && !data.error && (
        <div className="py-5 md:px-3 animate-in px-2 border border-dashed rounded-sm mt-5">
          <div className="flex-row-between">
            {
              <p className="my-0">
                {data.length == 0
                  ? "No results found"
                  : "Found " + data.length + " results"}
              </p>
            }
            <Button variant="outline" size="icon" className="rounde-md size-7">
              <MdOutlineClear onClick={closeResults} />
            </Button>
          </div>
          <div className="space-y-4">
            {data.map((o: FeedCardProps) => (
              <FeedCard key={o.name} {...o} />
            ))}
          </div>
        </div>
      )}
      {data && data.error && (
        <div className="py-5 md:px-3 animate-in px-2 border border-dashed rounded-sm mt-5">
          <p className="my-0">{data.error.message}</p>
        </div>
      )}
    </div>
  )
}
