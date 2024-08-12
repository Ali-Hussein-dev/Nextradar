"use client"
import { TypedObject } from "sanity"
import { Button } from "@/components/button"
import { JobPost } from "@/components/job-posts-section"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { PortableText } from "@portabletext/react"
import { useQueryState } from "nuqs"
import React from "react"
const Block = ({
  title,
  section,
}: {
  title: string
  section: TypedObject[]
}) => {
  if (!section) return null
  return (
    <div>
      <h3 className="font-bold mb-1 mt-8 text-2xl">{title}</h3>
      <div className="dark:text-zinc-400">
        <PortableText value={section} />
      </div>
    </div>
  )
}
//======================================
export const JobPostDrawer = (props: JobPost) => {
  const { jobTitle, applyUrl, longDescription, _id } = props
  const [jp] = useQueryState("jp") // job post id
  const [open, setOpenDrawer] = React.useState(false)

  React.useEffect(() => {
    if (jp == _id) setOpenDrawer(true)
  }, [])
  return (
    <Drawer open={open} onOpenChange={setOpenDrawer}>
      <DrawerTrigger asChild>
        <Button size="sm" variant={"ghost"}>
          View job
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-4xl mx-auto dark:bg-zinc-900 bg-zinc-100">
        <DrawerHeader className="px-6">
          <DrawerTitle>{jobTitle}</DrawerTitle>
        </DrawerHeader>
        <article className="prose max-h-[70vh] overflow-y-scroll px-4 md:px-6">
          <div className="flex-row-between dark:text-zinc-400 text-zinc-700 border-b pb-3">
            <div className="flex-col-start gap-1 text-sm">
              <span>{props.companyName}</span>
              <span>{props.location}</span>
              <span>{props.branch}</span>
            </div>
            <div className="flex-col-end gap-1 text-sm">
              <span className="capitalize">{props.contractType}</span>
              <span className="capitalize">{props.jobType}</span>
              {props.salaryMax && props.salaryMin ? (
                <div className="flex-row-end gap-1">
                  <span>{props.salaryMin / 1000}K</span>-
                  <span>{props.salaryMax / 1000}K</span>
                  <span>{props.currency}</span>
                </div>
              ) : null}
            </div>
          </div>
          <Block title="" section={longDescription} />
        </article>
        <DrawerFooter className="flex-row-end gap-4">
          <DrawerClose>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
          <Button asChild>
            <a href={applyUrl}>Apply</a>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
