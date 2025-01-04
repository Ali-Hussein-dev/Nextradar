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
            name: 'src',
            title: 'Embed src url from YouTube',
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
        },
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
        }
    ]
}

export default SourceSchema