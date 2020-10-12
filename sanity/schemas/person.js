export default {
    // Computer Name
    name: 'person',
    // Visible title
    title: 'SliceMasters',
    type: 'document',
    icon: () => '👨🏽‍🍳',
    fields: [
        {
            name: 'name',
            title: 'Persons Name',
            type: 'string',
            description: 'Name of the slicemaster',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the slicemaster',
        },
    ],
    preview: {
        select: {
            name: 'name',
            media: 'image',
        },
        prepare: ({ name, media }) => {
            return {
                media,
                name,
            }
        }
    }
}