"use client"
import { ControllerRenderProps, useForm } from "react-hook-form"
import {
  RenderFormElement,
  FormFieldElement,
  StaticFormElement,
} from "@/components/render-form-element"
import { z } from "zod"
import { Form, FormField } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { DrafJobFormSchema } from "@/lib/zod-schema"

type FormItem = FormFieldElement | StaticFormElement
type FieldsElementsList = FormItem[] | (FormItem[] | FormItem)[]

const benefits = [
  "Async",
  "401(k)",
  "401k matching",
  "Vision insurance",
  "Dental insurance",
  "Medical insurance",
  "Distributed team",
  "Unlimited vacation",
  "4 day workweek",
  "Paid time off",
  "Company retreats",
  "Learning budget",
  "Coworking budget",
  "Home office budget",
  "Mental wellness budget",
  "Free gym membership",
  "Pay in crypto",
  "Pseudonymous",
  "Profit sharing",
  "Equity compensation",
  "No whiteboard interview",
  "No monitoring system",
  "No politics at work",
  "We hire old (and young)",
]
const fields: FieldsElementsList = [
  {
    variant: "H2",
    static: true,
    content: "Job Details",
    name: "job-details",
  },
  [
    {
      variant: "Input",
      name: "jobTitle",
      placeholder: "e.g Senior Frontend Developer",
      label: "Job title",
      required: true,
    },
    {
      variant: "Input",
      name: "branch",
      placeholder: "e.g Software Development",
      label: "Branch",
    },
  ],
  {
    variant: "Select",
    options: [
      { value: "Full-time", label: "Full-time" },
      { value: "Part-time", label: "Part-time" },
      { value: "Freelance", label: "Freelance" },
      { value: "Contract", label: "Contract" },
      { value: "Internship", label: "Internship" },
    ],
    name: "contractType",
    label: "Select contract type",
    placeholder: "e.g Full-time",
    defaultValue: "Full-time",
  },
  {
    variant: "Input",
    name: "applyUrl",
    placeholder: "https://acme.com/xxx or email",
    label: "Application URL",
    type: "string",
    required: true,
  },
  [
    {
      variant: "Input",
      type: "number",
      name: "salary.minimum",
      label: "Minimum salary per year",
      placeholder: "e.g 50,000",
      step: 1000,
    },
    {
      variant: "Input",
      type: "number",
      name: "salary.maximum",
      label: "Minimum salary per year",
      placeholder: "e.g 100,000",
      step: 1000,
    },
  ],
  {
    variant: "Select",
    options: [
      { value: "$", label: "USD" },
      { value: "€", label: "EUR" },
      { value: "£", label: "GBP" },
    ],
    name: "salary.currency",
    label: "Select currency",
    placeholder: "e.g USD",
  },
  {
    variant: "MultiSelect",
    options: [
      { label: "Africa", value: "Africa" },
      { label: "Asia", value: "Asia" },
      { label: "Europe", value: "Europe" },
      { label: "Australia", value: "Australia" },
      { label: "North America", value: "North America" },
      { label: "South America", value: "South America" },
    ],
    name: "timeZone",
    placeholder: "Select time zone",
  },
  {
    name: "benefits",
    variant: "MultiSelect",
    placeholder: "Select job benefits",
    options: benefits.map((o) => ({ value: o, label: o })),
  },
  {
    variant: "Switch",
    name: "isReactjsOnly",
    label: "Reactjs only job",
    description: "Check this if the job is only for Reactjs developers",
  },
  {
    variant: "Textarea",
    name: "longDescription",
    label: "Job post body",
    description: "",
  },
  // {
  //   variant: "Separator",
  //   static: true,
  //   decorative: true,
  //   name: "separator-1",
  // },
  {
    variant: "H2",
    static: true,
    content: "Company Details",
    name: "company-details",
  },
  [
    {
      variant: "Input",
      name: "company.name",
      placeholder: "Acme Inc",
      label: "Company name",
    },
    {
      variant: "Input",
      name: "company.website",
      placeholder: "https://acme.com",
      label: "Company website",
      type: "url",
    },
  ],
  [
    {
      variant: "Input",
      name: "company.recruiterName",
      placeholder: "e.g John Doe",
      label: "Recruiter name",
    },
    {
      variant: "Input",
      name: "company.recruiterEmail",
      placeholder: "e.g jd@acme.com",
      label: "Recruiter email",
      type: "email",
    },
  ],
  {
    variant: "Switch",
    name: "company.isHiringAgency",
    label: "Hiring agency",
    description: "Check this if you are a hiring agency",
  },
  {
    variant: "Checkbox",
    name: "agreement",
    label: "I agree to the terms and conditions",
    required: true,
  },
]

type FormDrafJob = z.infer<typeof DrafJobFormSchema>

//======================================
export function CreateDraftJobForm() {
  const form = useForm<FormDrafJob>({
    defaultValues: {},
    resolver: zodResolver(DrafJobFormSchema),
  })
  const { watch, handleSubmit } = form
  const onSubmit: (data: FormDrafJob) => void = (data) => {
    console.log(data)
  }
  return (
    <div className="p-3 md:p-6 border max-w-xl rounded-sm">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mx-auto w-full "
        >
          {fields.map((item, i) => {
            if (item instanceof Array) {
              return (
                <div
                  key={item[i]?.name}
                  className="flex items-center justify-between w-full gap-2"
                >
                  {item.map((element) => {
                    if ("static" in element) {
                      return RenderFormElement(element, form)
                    }
                    return (
                      <FormField
                        key={element.name}
                        control={form.control}
                        name={element.name as keyof FormDrafJob}
                        render={({ field }) =>
                          RenderFormElement(
                            {
                              ...element,
                              ...field,
                            } as FormFieldElement & ControllerRenderProps,
                            form
                          )
                        }
                      />
                    )
                  })}
                </div>
              )
            }
            if ("static" in item) {
              return RenderFormElement(item, form)
            }
            return (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof FormDrafJob}
                render={({ field }) =>
                  RenderFormElement(
                    {
                      ...item,
                      ...field,
                    } as FormFieldElement & ControllerRenderProps,
                    form
                  )
                }
              />
            )
          })}
          <div className="py-4 flex-row-end gap-4">
            <Button type="button" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit">Publish</Button>
          </div>
        </form>
      </Form>

      {/* <pre className="max-w-xl p-2">{JSON.stringify(watch(), null, 2)} </pre> */}
    </div>
  )
}
