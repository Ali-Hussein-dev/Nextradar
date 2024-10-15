import { defineField, defineType } from 'sanity'

const CompanySchema = defineType({
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'url',
            title: "Website",
            type: 'url',
        }),
        defineField({
            name: 'recruiter',
            title: "Recruiter name",
            type: 'string',
        }),
        defineField({
            name: 'recruiterEmail',
            title: "Recruiter email",
            type: 'email',
        }),
        defineField({
            name: 'logo',
            title: 'Logo url',
            type: 'url',
        }),
        defineField({
            name: 'isAgency',
            title: 'Is an agency?',
            type: 'boolean',
        }),
        defineField({
            name: 'branch',
            title: 'Branch',
            type: 'string',
        }),
    ],
})


export default CompanySchema