export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook URL', type: 'url'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
        {name: 'twitter', title: 'Twitter URL', type: 'url'},
        {name: 'youtube', title: 'YouTube URL', type: 'url'},
        {name: 'tripadvisor', title: 'TripAdvisor URL', type: 'url'},
      ],
    },
    {
      name: 'heroSection',
      title: 'Homepage Hero Section',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'subheading', title: 'Subheading', type: 'string'},
        {
          name: 'slideshow',
          title: 'Slideshow Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                },
                {
                  name: 'caption',
                  title: 'Caption',
                  type: 'string',
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.min(1),
        },
      ],
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'subheading', title: 'Subheading', type: 'string'},
        {name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]},
        {
          name: 'image',
          title: 'Main Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'values',
          title: 'Our Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Title', type: 'string'},
                {name: 'description', title: 'Description', type: 'text'},
              ],
            },
          ],
        },
        {
          name: 'teamMembers',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'name', title: 'Name', type: 'string'},
                {name: 'position', title: 'Position', type: 'string'},
                {name: 'bio', title: 'Biography', type: 'text'},
                {
                  name: 'photo',
                  title: 'Photo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title: `Site Settings: ${title}`,
      }
    },
  },
}