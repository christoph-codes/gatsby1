export default {
    // Computer Name
    name: 'pizza',
    // Visible title
    title: 'Pizzas',
    type: 'document',
    icon: () => '🍕',
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image of Pizza',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000)
            // TODO: Add custom input component
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'topping'}] }],
            description: 'What toppings should go on this pizza',
            // TODO: Add custom input component
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({ title, media, ...toppings }) => {
            // Filter undefined toppings out
            const tops = Object.value(toppings).filter(Boolean);
            return {
                title,
                media,
                subtitle: Object.values(toppings).join(', ')
            }
        }
    }
}