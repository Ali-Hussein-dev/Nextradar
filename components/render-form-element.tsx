// "use client"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Input, InputBlock } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select"
import { ControllerRenderProps } from "react-hook-form"
import { CheckboxProps } from "@radix-ui/react-checkbox"
import { SwitchProps } from "@radix-ui/react-switch"
import { Separator } from "@/components/ui/separator"
import * as React from "react"
import { SeparatorProps } from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"
import { RichTextEditor } from "@/jobs/components/rich-text-editor/rich-text-editor"

type SharedFormProps = {
  label?: string
  description?: string
}

type Textarea = {
  variant: "Textarea"
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  SharedFormProps

type Input = {
  variant: "Input"
} & React.InputHTMLAttributes<HTMLInputElement> &
  SharedFormProps

type Select = {
  variant: "Select"
  /**
   * Options for the select field
   */
  options: { value: string; label: string }[]
  placeholder: string
} & React.SelectHTMLAttributes<HTMLSelectElement> &
  SharedFormProps

type MultiSelect = {
  variant: "MultiSelect"
  /**
   * Options for the multiselect field
   */
  options: { value: string; label: string }[]
  placeholder: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  SharedFormProps

type Checkbox = {
  variant: "Checkbox"
} & CheckboxProps &
  SharedFormProps

type Switch = {
  variant: "Switch"
} & SwitchProps &
  SharedFormProps

type H1 = {
  variant: "H1"
  /**
   * the name is used as a key to identify the field
   */
  name: string
  content: string
  static: true
} & React.HTMLAttributes<HTMLHeadingElement>
type H2 = {
  variant: "H2"
  /**
   * the name is used as a key to identify the field
   */
  name: string
  static: true
  content: string
} & React.HTMLAttributes<HTMLHeadingElement>
type H3 = {
  variant: "H3"
  /**
   * the name is used as a key to identify the field
   */
  name: string
  static: true
  content: string
} & React.HTMLAttributes<HTMLHeadingElement>
type Paragraph = {
  variant: "P"
  /**
   * the name is used as a key to identify the field
   */
  name: string
  static: true
  content: string
} & React.HTMLAttributes<HTMLParagraphElement>

type Divider = {
  variant: "Separator"
  /**
   * the name is used as a key to identify the field
   */
  name: string
  static: true
} & SeparatorProps

type RichText = {
  variant: "RichText"
  /**
   * the name is used as a key to identify the field
   */
  name: string
  placeholder: string
  value: string
  setValue: (name: string, value: string) => void
}

/**
 * StaticFormElement is a type that represents a static form element
 * that is not editable by the user
 */
export type StaticFormElement = H1 | H2 | H3 | Paragraph | Divider

/**
 * FormFieldType is a union type that represents all the possible form fields
 * that can be rendered in a form
 */
export type FormFieldElement =
  | Textarea
  | Input
  | Select
  | Checkbox
  | Switch
  | MultiSelect
  | RichText

type FormItem = FormFieldElement | StaticFormElement

export type FieldsElementsList = FormItem[] | (FormItem[] | FormItem)[]

export const RenderFormElement = (
  field: (FormFieldElement & ControllerRenderProps) | StaticFormElement,
  form: any
): React.ReactElement<any> => {
  switch (field.variant) {
    case "Input":
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && "*"}
          <FormControl>
            <InputBlock
              root={{ className: "bg-background dark:bg-background" }}
            >
              <Input
                {...field}
                className="bg-background dark:bg-background"
                onChange={(e) => {
                  const val = e.target.value
                  field.onChange(field.type == "number" ? +val : val)
                }}
              />
            </InputBlock>
          </FormControl>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )
    case "Checkbox":
      return (
        <FormItem className="flex items-center justify-start space-x-3 space-y-0 rounded-sm border-dashed border p-3 bg-background dark:bg-background">
          <FormControl>
            <Checkbox
              {...field}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{field.label}</FormLabel>
            {/* {field.required && "*"} */}
            <FormDescription>{field.description}</FormDescription>
          </div>
          <FormMessage />
        </FormItem>
      )
    case "MultiSelect":
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel>
          <div className="bg-background dark:bg-background">
          <MultiSelect value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <MultiSelectTrigger className="min-w-full">
                <MultiSelectValue placeholder={field.placeholder} />
              </MultiSelectTrigger>
            </FormControl>
            <MultiSelectContent>
              <MultiSelectList>
                {field.options.map(({ label, value }) => (
                  <MultiSelectItem key={label} value={value}>
                    {label}
                  </MultiSelectItem>
                ))}
              </MultiSelectList>
            </MultiSelectContent>
          </MultiSelect>
          </div>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )
    case "Select":
      return (
        <FormItem className="w-full">
          <FormLabel>{field.label}</FormLabel> {field.required && "*"}
          <Select
            value={field.value}
            onValueChange={field.onChange}
            defaultValue={String(field?.defaultValue ?? "")}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {field.options.map(({ label, value }) => (
                <SelectItem key={label} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )
    case "Switch":
      return (
        <FormItem className="flex flex-col rounded-sm border px-3 py-2 border-dashed justify-center bg-background dark:bg-background">
          <div className="flex items-center justify-between h-full ">
            <FormLabel className="w-full">
              {field.label}
              {field.required && "*"}
            </FormLabel>
            <FormControl>
              <Switch
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </div>
          <FormDescription>{field.description}</FormDescription>
        </FormItem>
      )
    case "Textarea":
      return (
        <FormItem>
          <FormLabel>{field.label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={field.placeholder}
              className="resize-none bg-background dark:bg-background"
              {...field}
            />
          </FormControl>
          <FormDescription>{field.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )
    case "RichText":
      return (
        <RichTextEditor
          value={field.value}
          name={field.name}
          setValue={field.setValue}
          placeholder=""
        />
      )
    case "H1":
      return (
        <h1
          key={field.name}
          {...field}
          className={cn("mt-6 font-bold text-3xl", field.className)}
        >
          {field.content}
        </h1>
      )
    case "H2":
      return (
        <h2
          key={field.name}
          {...field}
          className={cn("mt-4 font-bold text-xl", field.className)}
        >
          {field.content}
        </h2>
      )
    case "H3":
      return (
        <h3
          key={field.name}
          {...field}
          className={cn("mt-3 font-semiboldbold text-lg", field.className)}
        >
          {field.content}
        </h3>
      )
    case "P":
      return (
        <p key={field.name} {...field}>
          {field.content}
        </p>
      )
    case "Separator":
      return (
        <div className="py-3">
          <Separator
            key={field.name}
            {...field}
            className={cn("", field.className)}
          />
        </div>
      )
    default:
      return <div>Invalid field type</div>
  }
}
