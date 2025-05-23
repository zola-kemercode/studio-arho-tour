export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
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
    {
      name: 'dataCollectionPractices',
      title: 'Data Collection Practices',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cookiePolicy',
      title: 'Cookie Policy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'thirdPartyServices',
      title: 'Third Party Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'serviceName',
            title: 'Service Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'purpose',
            title: 'Purpose',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'dataCollected',
            title: 'Data Collected',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule: any) => Rule.required(),
          },
        ],
      }],
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