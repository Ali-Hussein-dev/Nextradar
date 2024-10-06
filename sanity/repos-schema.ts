const RepoSchema = {
    name: "repos",
    title: "Repos",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "owner",
            title: "Owner",
            type: "string",
        },
        {
            name: "repoName",
            title: "Repo Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags"
            },
        },
        {
            name: "homepage",
            title: "Homepage URL",
            type: "url",
        },
        {
            name: "avatar",
            title: "Avatar URL",
            type: "url",
        },
        {
            name: "recommended",
            title: "Recommended",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "stars",
            title: "Stars",
            type: "number",
            initialValue: 0,
        }
    ]
}

export default RepoSchema