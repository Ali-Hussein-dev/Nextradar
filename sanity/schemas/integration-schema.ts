const IntegrationSchema = {
    name: 'integration',
    title: 'Integration',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'object',
            fields: [{ name: 'id', type: 'number', title: 'cateogry ID' },
            { name: 'name', type: 'string', title: 'Category name' },]
            // 'reference' is a type that allows us to reference another document
            // to: { type: 'string' },
        },
        {
            name: 'logoUrl',
            title: 'Logo URL',
            type: 'url',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            initialValue: 'https://',
        },
        {
            name: 'paid',
            title: 'Is Paid?',
            type: 'boolean',
            intialValue: false,
        },
        {
            name: 'sponsored',
            title: 'Is Sponsored?',
            type: 'boolean',
            intialValue: false,
        },
    ],
}

export default IntegrationSchema