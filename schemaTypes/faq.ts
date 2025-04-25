export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
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
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Before You Travel', value: 'Before You Travel'},
          {title: 'During Your Trip', value: 'During Your Trip'},
          {title: 'Tour Specifics', value: 'Tour Specifics'},
          {title: 'Practical Information', value: 'Practical Information'},
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 100,
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
}