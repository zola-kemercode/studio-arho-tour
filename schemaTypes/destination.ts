export default {
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'practicalInformation',
      title: 'Practical Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'string',
    },
    {
      name: 'lowestPoint',
      title: 'Lowest Point',
      type: 'string',
      description: 'Lowest elevation point (e.g., "2,355 meters")',
    },
    {
      name: 'averageTemperature',
      title: 'Average Temperature',
      type: 'string',
      description: 'Temperature range (e.g., "15-25°C summer, 5-15°C winter")',
    },
    {
      name: 'recommendedDuration',
      title: 'Recommended Duration',
      type: 'string',
      description: 'Recommended time to visit (e.g., "3-5 days")',
    },
    {
      name: 'featured',
      title: 'Featured Destination',
      type: 'boolean',
      description: 'Show this destination on the homepage',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}