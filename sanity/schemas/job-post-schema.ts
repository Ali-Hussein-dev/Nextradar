import { defineField, defineType } from "sanity"

const JobPost = defineType({
  name: "jobPost",
  title: "Job Post",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "jobTitle",
        maxLength: 200,
      },
    }),
    defineField({
      name: "timeZone",
      title: "Time Zone",
      type: "array",
      options: {
        list: [
          "Worldwide",
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North America",
          "South America",
        ],
      },
      of: [{ type: "string" }],
      initialValue: ["Worldwide"],
    }),
    defineField({
      name: "location",
      title: "Location [city,country]",
      type: "string",
    }),
    defineField({
      name: "branch",
      title: "Branch E.g ecommerce, fintech, etc",
      type: "string",
    }),
    defineField({
      name: "contractType",
      title: "Contract Type e.g Full-time, Part-time, etc",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Freelance", value: "Freelance" },
          { title: "Contract", value: "Contract" },
          { title: "Internship", value: "Internship" },
          { title: "Other", value: "Other" },
        ],
      },
      initialValue: "Full-time",
    }),
    defineField({
      name: "applyUrl",
      title: "URL to Apply or Email",
      type: "string", // URL or email
    }),
    defineField({
      name: "workplaceType",
      title: "Workplace type",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "Remote" },
          { title: "Onsite", value: "Onsite" },
          { title: "Hybrid", value: "Hybrid" },
        ],
      },
      initialValue: "Remote",
    }),
    defineField({
      name: "longDescription",
      title: "Long description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "isReactjsOnly",
      title: "Is ReactJS Only",
      type: "boolean",
    }),
    defineField({
      name: "salary",
      title: "💰 Salary",
      type: "object",
      fields: [
        defineField({
          name: "minimum",
          title: "Minimum Salary",
          type: "string",
        }),
        defineField({
          name: "maximum",
          title: "Maximum Salary",
          type: "string",
        }),
        defineField({
          name: "currency",
          title: "Currency, e.g USD, EUR, etc",
          type: "string",
          options: {
            list: ["USD", "EUR", "GBP"],
          },
          initialValue: "USD",
        }),
      ],
    }),
    defineField({
      name: "company",
      title: "🏢 Company",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
        }),
        defineField({
          name: "website",
          title: "Website",
          type: "url",
        }),
        defineField({
          name: "logo",
          title: "Logo",
          type: "image",
        }),
        defineField({
          name: "isHiringAgency",
          title: "Is Hiring Agency",
          type: "boolean",
        }),
        defineField({
          name: "recruiterName",
          title: "Recruiter Name",
          type: "string",
        }),
        defineField({
          name: "recruiterEmail",
          title: "Recruiter Email",
          type: "email",
        }),
      ],
    }),
    defineField({
      name: "orderId",
      title: "Order Id",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "publishedAt",
      type: "datetime",
      initialValue: () => (new Date()).toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      options: {
        list: ['4 day workweek', '401(k)', '401k matching', 'Async', 'Company retreats', 'Competitive salary', 'Coworking budget', 'Dental insurance', 'Distributed team', 'Equity compensation', 'Free gym membership', 'Home office budget', 'Learning budget', 'Medical insurance', 'Mental wellness budget', 'No monitoring system', 'No politics at work', 'No whiteboard interview', 'Paid time off', 'Pay in crypto', 'Profit sharing', 'Pseudonymous', 'Stock options', 'Unlimited vacation', 'Vision insurance', 'We hire old (and young)'],
      },
      of: [{ type: "string" }],
    }),
    // Deprecated fields
    defineField({
      name: "jobType",
      title: "Job Type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Remote", value: "Remote" },
          { title: "OnSite", value: "Onsite" },
          { title: "Hybrid", value: "Hybrid" },
        ],
      },
      initialValue: ["remote"],
      deprecated: { reason: "Use workplaceType instead" },
    }),
    defineField({
      name: "jobHook",
      title: "Job Hook",
      type: "array",
      of: [{ type: "block" }],
      deprecated: { reason: "Use benefits instead" },
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      deprecated: {
        reason: "Use company.name instead",
      },
    }),
    defineField({
      name: "currency",
      title: "Currency, e.g USD, EUR, etc",
      type: "string",
      deprecated: {
        reason: "Use salary.currency instead",
      },
    }),
    defineField({
      name: "salaryMax",
      title: "Maximum Salary",
      type: "number",
      deprecated: {
        reason: "Use salary.salaryMax instead",
      },
    }),
    defineField({
      name: "salaryMin",
      title: "Minimum Salary",
      type: "number",
      deprecated: {
        reason: "Use salary.minSalary instead",
      },
    }),
  ],
})

export default JobPost
