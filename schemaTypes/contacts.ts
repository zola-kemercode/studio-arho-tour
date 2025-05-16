export default {
    name: 'contacts',
    title: 'Contact Page',
    type: 'document',
    fields: [
      {
        name: 'heroSection',
        title: 'Hero Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
          },
          {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
          },
        ],
      },
      {
        name: 'contactInformation',
        title: 'Contact Information',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'icon',
                title: 'Icon',
                type: 'string',
                options: {
                  list: [
                    { title: 'Map Pin', value: 'MapPin' },
                    { title: 'Phone', value: 'Phone' },
                    { title: 'Mail', value: 'Mail' },
                    { title: 'Clock', value: 'Clock' },
                  ],
                },
                validation: (Rule: any) => Rule.required(),
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule: any) => Rule.required(),
              },
              {
                name: 'details',
                title: 'Details',
                type: 'array',
                of: [{ type: 'string' }],
                validation: (Rule: any) => Rule.required(),
              },
            ],
          },
        ],
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'ctaSection',
        title: 'CTA Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'heroSection.heading',
      },
      prepare({ title }: any) {
        return {
          title: title || 'Contact Page',
        };
      },
    },
  };