"use client";
import { ControllerRenderProps, useForm } from "react-hook-form";
import {
  RenderFormElement,
  FormFieldElement,
  FieldsElementsList,
} from "@/components/render-form-element";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { DrafJobFormSchema } from "@/jobs/sanity/job-payload-z-schema";
import { useServerActionMutation } from "@/jobs/lib/hooks/server-actions-hooks";
import { handleJobFormSubmission } from "@/jobs/lib/actions/handle-job-form-submission-action";
import { products } from "@/constants/creem";
import dynamic from "next/dynamic";

const benefits = [
  "4 day workweek",
  "401(k)",
  "401k matching",
  "Async",
  "Company retreats",
  "Competitive salary",
  "Coworking budget",
  "Dental insurance",
  "Distributed team",
  "Equity compensation",
  "Free gym membership",
  "Home office budget",
  "Learning budget",
  "Medical insurance",
  "Mental wellness budget",
  "No monitoring system",
  "No politics at work",
  "No whiteboard interview",
  "Flexible time off",
  "Paid time off",
  "Pay in crypto",
  "Profit sharing",
  "Pseudonymous",
  "Stock options",
  "Unlimited vacation",
  "Vision insurance",
  // "Comprehensive Health, Dental, and Vision insurance",
  "We hire old (and young)",
];

type FormDrafJob = z.infer<typeof DrafJobFormSchema>;
//======================================
export function CreateDraftJobForm() {
  const form = useForm<FormDrafJob>({
    defaultValues: {
      contractType: "Full-time",
      workplaceType: "Remote",
      salary: {
        currency: "$",
      },
      timeZone: [],
      benefits: [],
      company: {},
    },
    resolver: zodResolver(DrafJobFormSchema),
  });
  const { handleSubmit } = form;
  const { mutate, status } = useServerActionMutation(handleJobFormSubmission, {
    mutationKey: ["createDraftJobPost-1"],
  });
  const onSubmit: (data: FormDrafJob) => void = (data) => {
    mutate(data);
  };
  const fields: FieldsElementsList = [
    {
      variant: "H2",
      static: true,
      content: "JOB DETAILS",
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
        label: "Industry",
      },
    ],
    {
      variant: "Textarea",
      name: "description",
      placeholder: "Type here",
      label: "Short description",
    },
    [
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
        label: "Employment type",
        placeholder: "e.g Full-time",
        defaultValue: "Full-time",
      },
      {
        variant: "Select",
        options: [
          { value: "Remote", label: "Remote" },
          { value: "Onsite", label: "Onsite" },
          { value: "Hybrid", label: "Hybrid" },
        ],
        name: "workplaceType",
        label: "Workplace type",
        placeholder: "e.g Remote",
        defaultValue: "Remote",
      },
    ],
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
        type: "string",
        name: "salary.range",
        label: "Annual salary range",
        placeholder: "e.g 50k-95k or +50k",
      },
      {
        variant: "Select",
        options: [
          { value: "$", label: "USD ($)" },
          { value: "€", label: "EUR (€)" },
          { value: "£", label: "GBP (£)" },
          { value: "CAD", label: "CAD" },
        ],
        defaultValue: "USD",
        name: "salary.currency",
        label: "Salary currency",
        placeholder: "e.g USD",
      },
    ],
    [
      {
        variant: "MultiSelect",
        options: [
          { label: "Africa", value: "Africa" },
          { label: "Asia", value: "Asia" },
          { label: "Australia", value: "Australia" },
          { label: "Europe", value: "Europe" },
          { label: "North America", value: "North America" },
          { label: "South America", value: "South America" },
          { label: "Worldwide", value: "Worldwide" },
        ],
        name: "timeZone",
        label: "Select time zone",
        placeholder: "e.g Europe, worldwide",
        required: true,
      },
      {
        variant: "Input",
        name: "location",
        placeholder: "e.g Berlin, Germany",
        label: "Location",
      },
    ],
    {
      name: "benefits",
      variant: "MultiSelect",
      placeholder: "e.g 4 day workweek, 401(k)",
      label: "Select job benefits",
      options: benefits.map((o) => ({ value: o, label: o })),
    },
    {
      variant: "Switch",
      name: "isReactjsOnly",
      label: "React.js only job",
      description: "Check this if the job doesn't Next.js experience",
    },
    {
      variant: "RichText",
      name: "longDescription",
      value: form.watch("longDescription") ?? "",
      setValue: form.setValue as (name: string, value: string) => void,
      placeholder: "Type here",
    },
    {
      variant: "H2",
      static: true,
      content: "COMPANY DETAILS",
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
  ];
  return (
    <div className="max-w-[38rem] mx-auto animate-in">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:gap-6 mx-auto w-full"
        >
          {fields.map((item, i) => {
            if (item instanceof Array) {
              return (
                <div
                  key={item[i]?.name}
                  className="flex items-center justify-between flex-wrap sm:flex-nowrap w-full gap-2"
                >
                  {item.map((element) => {
                    if ("static" in element) {
                      return RenderFormElement(element, form);
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
                    );
                  })}
                </div>
              );
            }
            if ("static" in item) {
              return RenderFormElement(item, form);
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
            );
          })}
          <div className="flex-row-between">
            <div className="p-2 text-lg dark:text-zinc-300">
              Price {products.jobPost.priceLabel}{" "}
              {/* <span className="line-through">1400€</span> */}
            </div>
            {/* <Button type="button" onClick={() => form.reset()}>
              Reset
            </Button> */}
            <Button type="submit" disabled={status === "pending"}>
              {status === "pending" ? (
                <span className="animate-in">Redirecting...</span>
              ) : (
                <span className="animate-in">Continue to checkout</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
      {/* <pre className="max-w-xl">{JSON.stringify(form.watch(), null, 2)} </pre> */}
    </div>
  );
}

export const CreateDraftJobFormDynamic = dynamic(
  () =>
    import("@/jobs/components/create-draft-job-form").then(
      (mod) => mod.CreateDraftJobForm
    ),
  { ssr: false }
);
