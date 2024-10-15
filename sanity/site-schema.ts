const SiteSchema = {
    name: "sites",
    title: "Sites",
    type: "document",
    fields: [
        {
            name: "owner",
            title: "Owner or Author",
            type: "string",
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "homepage",
            title: "Homepage",
            type: "url",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "createdBy",
            title: "Created By",
            type: "string",
        },
        {
            name: "featured",
            title: "Featured",
            type: "boolean",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags"
            }
        }
    ]
}

export default SiteSchema