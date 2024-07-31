const JobPost = {
    name: "jobPost",
    title: "Job Post",
    type: "document",
    fields: [
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
        },
        {
            name: "companyName",
            title: "Company Name",
            type: "string",
        },
        {
            name: "location",
            title: "Location [city,country]",
            type: "string",
        },
        {
            name: "branch",
            title: "Branch E.g ecommerce, fintech, etc",
            type: "string",
        },
        {
            name: "contractType",
            title: "Contract Type e.g Full-time, Part-time, etc",
            type: "string",
            initialValue: "full-time",
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => (new Date()).toISOString(),
            // initialValue: () => new Date().toISOString().split('T')[0],
        },
        {
            name: "salaryMin",
            title: "Minimum Salary yearly",
            type: "number",
            initialValue: 0,
        },
        {
            name: "salaryMax",
            title: "Maximum Salary yearly",
            type: "number",
            initialValue: 0,
        },
        {
            name: "currency",
            title: "Currency, e.g USD, EUR, etc",
            type: "string",
        },
        {
            name: "applyUrl",
            title: "URL to Apply",
            type: "url",
            required: true
        },
        {
            name: "jobType",
            title: "Job Type",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Remote", value: "remote" },
                    { title: "On Site", value: "on-site" },
                    { title: "Hybrid", value: "hybrid" },
                ],
            },
            initialValue: ["remote"],
        },
        {
            name: "shortDescription",
            title: "Short description",
            type: "string",
        },
        {
            name: "longDescription",
            title: "Long description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "aboutRole",
            title: "About the Role [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "requirements",
            title: "Requirements and Qualifications [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "benefits",
            title: "Benefits and Perks [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "Responsibilities",
            title: "Responsibilities [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "hiringProcess",
            title: "Hiring Process [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "whyJoinUs",
            title: "Why Join Us [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "aboutCompany",
            title: "About the company [deprecated]",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
}

export default JobPost
