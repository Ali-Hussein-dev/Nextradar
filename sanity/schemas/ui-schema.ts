import { defineField } from "sanity"

const UiComponentsSchema = {
    name: "ui",
    title: "UI Components",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "list",
                list: [
                    { title: 'Tailwindcss', value: 'tailwindcss' },
                    { title: 'Animation', value: 'animation' },
                ],
            },
        }),
        defineField({
            name: "thumbnail",
            title: "Thumbnail URL",
            type: "url",
        }),
        defineField({
            name: "rel",
            title: "Rel",
            type: "string",
            initialValue: "nofollow",
            options: {
                list: [
                    { title: "No Follow", value: "nofollow" },
                    { title: "Sponsored", value: "sponsored" },
                    { title: "dofollow", value: "dofollow" },
                ],
            },
        }),
        defineField({
            name: "sponsored",
            title: "Sponsored",
            type: "boolean",
            initialValue: false,
        }),
    ]
}

export default UiComponentsSchema