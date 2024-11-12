"use client"
import {
  BaseDefinition,
  defineSchema,
  PortableTextBlock,
  PortableTextEditable,
  PortableTextEditor,
  RenderAnnotationFunction,
  RenderBlockFunction,
  RenderDecoratorFunction,
  RenderListItemFunction,
  RenderStyleFunction,
  SchemaDefinition,
  useEditor,
  usePortableTextEditor,
  usePortableTextEditorSelection,
} from "@portabletext/editor"
import React, { useEffect } from "react"
import "./editor.css"
import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ItalicIcon,
  LinkIcon,
  ListChecksIcon,
  ListIcon,
  ListOrderedIcon,
  PilcrowIcon,
  StrikethroughIcon,
  TextQuoteIcon,
  UnderlineIcon,
} from "lucide-react"
import { Button } from "@/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Define the schema for the editor
// All options are optional
// Only the `name` property is required, but you can define a `title` and an `icon` as well
// You can use this schema definition later to build your toolbar
const schemaDefinition = defineSchema<
  SchemaDefinition<BaseDefinition & { value?: string; type?: string }>
>({
  // Decorators are simple marks that don't hold any data
  decorators: [
    {
      title: "Strong",
      value: "strong",
      name: "strong",
      icon: BoldIcon,
    },
    { name: "Emphasis", title: "Emphasis", value: "em", icon: ItalicIcon },
    {
      name: "Underline",
      title: "Underline",
      value: "underline",
      icon: UnderlineIcon,
    },
    {
      name: "Strike",
      title: "Strike",
      value: "strike-through",
      icon: StrikethroughIcon,
    },
  ],
  // Annotations are more complex marks that can hold data
  annotations: [
    {
      name: "link",
      type: "object",
      icon: LinkIcon,
    },
  ],
  // Styles apply to entire text blocks
  // There's always a 'normal' style that can be considered the paragraph style
  styles: [
    { name: "normal", title: "Normal", value: "normal", icon: PilcrowIcon },
    { name: "h1", title: "Heading 1", value: "h1", icon: Heading1Icon },
    { name: "h2", title: "Heading 2", value: "h2", icon: Heading2Icon },
    { name: "h3", title: "Heading 3", value: "h3", icon: Heading3Icon },
    { name: "quote", title: "Quote", value: "blockquote", icon: TextQuoteIcon },
  ],
  // Lists apply to entire text blocks as well
  lists: [
    {
      name: "Bulleted list",
      title: "Bulleted list",
      value: "bullet",
      icon: ListIcon,
    },
    {
      name: "Numbered list",
      title: "Numbered list",
      value: "number",
      icon: ListOrderedIcon,
    },
    {
      name: "To-do list",
      title: "To-do list",
      value: "to-do",
      icon: ListChecksIcon,
    },
  ],
  blockObjects: [{ name: "image" }],
})

export function RichTextEditor({
  value = "",
  name,
  setValue,
  placeholder,
}: {
  placeholder: string
  value: string
  name: string
  setValue: (key: string, value: string) => void
}) {
  // Create an editor
  const editor = useEditor({
    schemaDefinition,
  })

  // Subscribe to editor changes
  useEffect(() => {
    const subscription = editor.on("mutation", (mutation) => {
      setValue(name, JSON.stringify(mutation.snapshot))
      // setValue(mutation.snapshot)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [editor, name, setValue])

  return (
    <div className="border border-dashed rounded-sm relative">
      <PortableTextEditor
        // Pass in the `editor` you created earlier
        editor={editor}
        // And an optional value
        value={value ? JSON.parse(value) : []}
      >
        <Toolbar />
        {/* Component that controls the actual rendering of the editor */}
        <PortableTextEditable
          className="pt-3 pb-2 px-4 dark:text-zinc-300 prose prose-zinc dark:prose-invert focus:outline-none max-h-96 overflow-y-auto"
          // style={{ border: "1px solid #999", padding: "0.5em" }}
          // Control how decorators are rendered
          renderDecorator={renderDecorator}
          // Control how annotations are rendered
          renderAnnotation={renderAnnotation}
          // Required to render block objects but also to make `renderStyle` take effect
          renderBlock={renderBlock}
          // Control how styles are rendered
          renderStyle={renderStyle}
          // Control how inline objects are rendered
          // renderChild={renderChild}
          // Rendering lists is harder and most likely requires a fair amount of CSS
          // First, return the children like here
          // Next, look in the imported `editor.css` file to see how list styles are implemented
          renderListItem={renderLists}
          //   renderPlaceholder={() => (
          //     <span className="dark:text-zinc-400 text-lg px-2">
          //       Type something
          //     </span>
          //   )}
          placeholder={placeholder}
        />
      </PortableTextEditor>
    </div>
  )
}
const renderLists: RenderListItemFunction = (props) => {
  return <>{props.children}</>
}
const renderDecorator: RenderDecoratorFunction = (props) => {
  if (props.value === "strong") {
    return <strong>{props.children}</strong>
  }
  if (props.value === "em") {
    return <em>{props.children}</em>
  }
  if (props.value === "underline") {
    return <u>{props.children}</u>
  }
  return <>{props.children}</>
}

const renderAnnotation: RenderAnnotationFunction = (props) => {
  if (props.schemaType.name === "link") {
    return <span style={{ textDecoration: "underline" }}>{props.children}</span>
  }

  return <>{props.children}</>
}

const renderBlock: RenderBlockFunction = (props) => {
  if (props.schemaType.name === "image" && isImage(props.value)) {
    return (
      <div
        style={{
          border: "1px dotted grey",
          padding: "0.25em",
          marginBlockEnd: "0.25em",
        }}
      >
        IMG: {props.value.src}
      </div>
    )
  }

  return <div style={{ marginBlockEnd: "0.25em" }}>{props.children}</div>
}

function isImage(
  props: PortableTextBlock
): props is PortableTextBlock & { src: string } {
  return "src" in props
}

const renderStyle: RenderStyleFunction = (props) => {
  const styleValue = props.schemaType.value
  if (styleValue === "h1") {
    return <h1>{props.children}</h1>
  }
  if (styleValue === "h2") {
    return <h2>{props.children}</h2>
  }
  if (styleValue === "h3") {
    return <h3>{props.children}</h3>
  }
  // if (styleValue === "blockquote") {
  //   return <blockquote>{props.children}</blockquote>
  // }
  return <>{props.children}</>
}

// const renderChild: RenderChildFunction = (props) => {
//   if (props.schemaType.name === "stock-ticker" && isStockTicker(props.value)) {
//     return (
//       <span
//         style={{
//           border: "1px dotted grey",
//           padding: "0.15em",
//         }}
//       >
//         {props.value.symbol}
//       </span>
//     )
//   }

//   return <>{props.children}</>
// }

// function isStockTicker(
//   props: PortableTextChild
// ): props is PortableTextChild & { symbol: string } {
//   return "symbol" in props
// }

function Toolbar() {
  // Obtain the editor instance provided from the `PortableTextEditor` component
  const editor = usePortableTextEditor()
  // Rerender the toolbar whenever the selection changes
  usePortableTextEditorSelection()
  const {
    styles = [],
    decorators = [],
    lists = [],
    annotations = [],
  } = schemaDefinition
  const decoratorButtons = decorators.map((decorator) => {
    const Icon = decorator.icon as React.ElementType
    return (
      <Button
        type="button"
        variant={
          PortableTextEditor.isMarkActive(editor, decorator.name)
            ? "outline"
            : "ghost"
        }
        size="sm"
        key={decorator.name}
        onClick={() => {
          // Toggle the decorator by name
          PortableTextEditor.toggleMark(editor, decorator.name)
          // Pressing this button steals focus so let's focus the editor again
          PortableTextEditor.focus(editor)
        }}
      >
        <Icon className="size-4" />
      </Button>
    )
  })

  const Annotations = annotations.map((annotation) => (
    <Button
      size="sm"
      type="button"
      key={annotation.name}
      variant={
        PortableTextEditor.isAnnotationActive(editor, annotation.name)
          ? "outline"
          : "ghost"
      }
      onClick={() => {
        if (PortableTextEditor.isAnnotationActive(editor, annotation.name)) {
          PortableTextEditor.removeAnnotation(editor, annotation)
        } else {
          PortableTextEditor.addAnnotation(editor, annotation, {
            href: "https://example.com",
          })
        }
        PortableTextEditor.focus(editor)
      }}
    >
      <LinkIcon className="size-4" />
    </Button>
  ))
  function StyleSelector() {
    // const styles = editor.schemaTypes.styles
    const focusBlock = PortableTextEditor.focusBlock(editor)

    const activeStyle = React.useMemo(
      () =>
        focusBlock
          ? (styles.find((style) =>
              PortableTextEditor.hasBlockStyle(editor, style.value!)
            )?.value ?? null)
          : null,
      [focusBlock]
    )
    return (
      <Select
        value={activeStyle ?? "normal"}
        onValueChange={(style) => {
          if (typeof style === "string") {
            PortableTextEditor.toggleBlockStyle(editor, style)
            PortableTextEditor.focus(editor)
          }
        }}
        defaultValue={activeStyle ?? "normal"}
      >
        <SelectTrigger className="w-40 border-solid">
          <SelectValue placeholder="Select Style" />
        </SelectTrigger>
        <SelectContent>
          {styles.map((style) => {
            const Icon = style.icon as React.ElementType
            return (
              <SelectItem
                key={style.value}
                id={style.value}
                value={style.value as string}
              >
                <div className="flex-row-start gap-2">
                  <Icon className="size-4" />
                  <span>{style.title}</span>
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    )
  }

  const listButtons = lists.map((list) => {
    const active = PortableTextEditor.hasListStyle(editor, list.name)
    const Icon = list.icon as React.ElementType
    return (
      <Button
        type="button"
        variant={active ? "outline" : "ghost"}
        size="sm"
        key={list.name}
        onClick={() => {
          PortableTextEditor.toggleList(editor, list.name)
          PortableTextEditor.focus(editor)
        }}
      >
        <Icon className="size-4" />
      </Button>
    )
  })

  return (
    <div className="w-full border-dashed border-b sticky top-0 flex-row-start gap-1 flex-wrap pb-2 z-10 p-2.5 dark:bg-zinc-950 bg-zinc-50">
      <StyleSelector />
      {decoratorButtons}
      {Annotations}
      {listButtons}
    </div>
  )
}
