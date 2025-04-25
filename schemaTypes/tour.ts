export default {
  name: 'tour',
  title: 'Tours',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the tour (e.g., "7 days, 6 nights", "10-12 days")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Starting Price (USD)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'maxGroupSize',
      title: 'Maximum Group Size',
      type: 'number',
      validation: (Rule: any) => Rule.min(1),
    },
    {
      name: 'tourHighlights',
      title: 'Tour Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Key highlights of this tour to be displayed in the overview',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'importantInformation',
      title: 'Important Information',
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
              name: 'information',
              title: 'Information',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      description: 'Critical information travelers should know before booking',
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'destinations',
      title: 'Destinations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'destination'}],
        },
      ],
    },
    {
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(1),
            },
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
            {
              name: 'accommodation',
              title: 'Accommodation',
              type: 'string',
            },
            {
              name: 'meals',
              title: 'Meals Included',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                list: [
                  {title: 'Breakfast', value: 'breakfast'},
                  {title: 'Lunch', value: 'lunch'},
                  {title: 'Dinner', value: 'dinner'},
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'included',
      title: 'What\'s Included',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'notIncluded',
      title: 'What\'s Not Included',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'packingList',
      title: 'Packing List',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Essential items travelers should bring for this tour',
    },
    {
      name: 'policies',
      title: 'Tour Policies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Policy Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Policy Description',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      description: 'Cancellation policy, payment terms, etc.',
    },
    {
      name: 'tourFaqs',
      title: 'Tour-specific FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured Tour',
      type: 'boolean',
      description: 'Show this tour on the homepage',
      initialValue: false,
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}: any) {
      return {
        title,
        subtitle: `${subtitle} days`,
        media,
      }
    },
  },
}