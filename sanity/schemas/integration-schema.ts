const IntegrationSchema = {
  name: "integration",
  title: "Integration",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "category",
      title: "Category",
      type: "object",
      fields: [
        { name: "id", type: "number", title: "cateogry ID" },
        { name: "name", type: "string", title: "Category name" },
      ],
      // 'reference' is a type that allows us to reference another document
      // to: { type: 'string' },
    },
    {
      name: "logoUrl",
      title: "Logo URL",
      type: "url",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      initialValue: "https://",
    },
    {
      name: "exampleUrl",
      title: "Example URL",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "list",
      },
    },
    {
      name: "sponsored",
      title: "Is Sponsored?",
      type: "boolean",
      intialValue: false,
    },
  ],
}

export default IntegrationSchema
