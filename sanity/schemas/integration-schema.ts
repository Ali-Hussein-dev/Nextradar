import { defineField, defineType } from "sanity";

const IntegrationSchema = defineType({
  name: "integration",
  title: "Integration",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "object",
      fields: [
        { name: "id", type: "number", title: "cateogry ID" },
        { name: "name", type: "string", title: "Category name" },
      ],
      // 'reference' is a type that allows us to reference another document
      // to: { type: 'string' },
    }),
    defineField({
      name: "pricing",
      title: "Pricing Catalog 💰",
      type: "object",
      fields: [
        { name: "pricingUrl", type: "url", title: "Pricing URL" },
        {
          name: "currency",
          type: "string",
          title: "Currency",
          initialValue: "$",
        },
        {
          name: "tiers",
          type: "array",
          title: "Tiers",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string" },
                {
                  name: "monthlyPrice",
                  type: "number",
                  title: "Monthly Price -1 for custom price",
                },
                {
                  name: "yearlyPrice",
                  type: "number",
                  title: "Yearly Price -1 for custom price",
                },
                { name: "isTrial", type: "boolean" },
                { name: "trialDurationDays", type: "number" },
              ],
            },
          ],
        },
      ],
      // 'reference' is a type that allows us to reference another document
      // to: { type: 'string' },
    }),
    defineField({
      name: "logoUrl",
      title: "Logo URL",
      type: "url",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      initialValue: "https://",
    }),
    defineField({
      name: "exampleUrl",
      title: "Example URL",
      type: "url",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "list",
      },
    }),
    defineField({
      name: "sponsored",
      title: "Is Sponsored?",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export default IntegrationSchema;
