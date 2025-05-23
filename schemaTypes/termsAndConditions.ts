export default {
  name: 'termsAndConditions',
  title: 'Terms and Conditions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'lastUpdated',
    },
    prepare({ title, subtitle }: any) {
      return {
        title,
        subtitle: new Date(subtitle).toLocaleDateString(),
      };
    },
  },
};