import { defineField } from "sanity"

const PageSchema = {
    name: "pageHeader",
    title: "Page Header & Metadata",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "page name",
            type: "string",
            options: {
                list: [
                    { title: "Latest", value: "latest" },
                    { title: "Quiz Game", value: "quiz-game" },
                    { title: "Nextjs", value: "nextjs" },
                    { title: "Auth", value: "nextjs-auth" },
                    { title: "Learn", value: "learn" },
                    { title: "Templates", value: "templates" },
                    { title: "Tools", value: "tools" },
                    { title: "Real World Apps", value: "real-world-apps" },
                    { title: "UI Components Collection", value: "ui-components" },

                    { title: "Jobs", value: "jobs" },
                    { title: "Reactjs Jobs", value: "reactjs-jobs" },
                    { title: "Nextjs Jobs", value: "nextjs-jobs" },

                    { title: "Database", value: "db" },
                    { title: "Headless CMS", value: "headless-cms" },
                    { title: "Hosting", value: "hosting" },
                    { title: "Baas", value: "baas" },
                    { title: "Commerce", value: "commerce" },
                    { title: "Sponsor", value: "sponsor" },
                ],
            },
            // validation: Rule => Rule.unique()
        }),
        defineField({
            name: "metadata",
            title: "Metadata",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                }),
                defineField({
                    name: "keywords",
                    title: "Keywords",
                    type: "array",
                    of: [{ type: "string" }],
                    options: {
                        layout: "tags",
                    },
                }),
                defineField({
                    name: "ogImage",
                    title: "Opengraph Image",
                    type: "image",
                }),
            ],
        }),
        defineField({
            name: "header",
            title: "Header",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    title: "Title (h1)",
                    type: "string",
                }),
                defineField({
                    name: "subtitle",
                    title: "Subtitle",
                    type: "string",
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "array",
                    of: [{ type: "block" }],
                }),
            ],
        }),
    ],
}

export default PageSchema
