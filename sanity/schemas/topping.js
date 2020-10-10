export default {
    // Computer Name
    name: 'topping',
    // Visible title
    title: 'Toppings',
    type: 'document',
    icon: () => '🧀',
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'Name of the topping',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'Name of the topping',
            options: {
                layout: 'switch'
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({ name, vegetarian }) => ({
            title: `${name} ${vegetarian ? '🌱' : ''}`,
        })
    }
}