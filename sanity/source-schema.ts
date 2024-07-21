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
            title: 'Type: article or video',
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
        }
    ]
}

export default SourceSchema