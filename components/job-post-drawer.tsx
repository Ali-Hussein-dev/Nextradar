import { TypedObject } from "sanity"
import { Button } from "@/components/button"
import { JobPostLong } from "@/components/job-card"
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
export const JobPostDrawer = ({
  aboutRole,
  requirements,
  benefits,
  responsibilities,
  aboutCompany,
  jobTitle,
  hiringProcess,
  whyJoinUs,
}: JobPostLong & { jobTitle: string }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm" variant={"outline"}>
          Read More
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-4xl mx-auto dark:bg-zinc-900 bg-zinc-100">
        <DrawerHeader>
          <DrawerTitle>{jobTitle}</DrawerTitle>
        </DrawerHeader>
        <article className="prose max-h-[70vh] overflow-y-scroll px-4 md:px-6">
          <Block title="About Role" section={aboutRole} />
          <Block title="Requirements" section={requirements} />
          <Block title="Benefits" section={benefits} />
          <Block title="Qualifications" section={responsibilities} />
          <Block title="Hiring Process" section={hiringProcess} />
          <Block title="Why work with us" section={whyJoinUs} />
          <Block title="About Company" section={aboutCompany} />
        </article>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
