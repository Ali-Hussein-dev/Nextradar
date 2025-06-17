import { defineField } from "sanity"

const SourceSchema = {
    name: 'source',
    title: 'Source',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'href',
            title: 'Href',
            type: 'url',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'type',
            title: 'Type: article or youtube',
            type: 'string',
            options: {
                list: [
                    { title: "Article", value: "article" },
                    { title: "YouTube", value: "youtube" },
                ],
            },
            initialValue: "article",
        },
        defineField({
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'url',
        }),
        defineField({
            name: 'img',
            title: 'Image',
            type: 'image',
        }),
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: "recommended",
            title: "Recommended",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "sponsored",
            title: "Sponsored",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "rel",
            title: "Link rel attribute",
            type: "string",
            options: {
                list: [
                    { title: "No Follow", value: "nofollow" },
                    { title: "Sponsored", value: "sponsored" },
                    { title: "dofollow", value: "dofollow" },
                ],
            },
            initialValue: "nofollow",
        },
        {
            name: 'src',
            title: 'Deprecated: Embed src url from YouTube',
            type: 'url',
        },
    ]
}

export default SourceSchema