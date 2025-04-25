export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Client Location',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tour',
      title: 'Related Tour',
      type: 'reference',
      to: [{type: 'tour'}],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial on the homepage',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'rating',
      media: 'image',
    },
    prepare({title, subtitle, media}: any) {
      return {
        title,
        subtitle: `${subtitle} stars`,
        media,
      }
    },
  },
}