const RepoSchema = {
    name: "repos",
    title: "Repos",
    type: "document",
    fields: [
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
            name: "name",
            title: "Name",
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
            name: "stars",
            title: "Stars",
            type: "number",
            initialValue: 0,
        }
    ]
}

export default RepoSchema