export default {
  name: 'accommodationOption',
  title: 'Accommodation Options',
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
      name: 'costPerDay',
      title: 'Cost Per Day',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'costPerDay',

    },
    prepare({title, subtitle}: any) {
      return {
        title,
        subtitle: `$${subtitle} per day`
      }
    },
  },
}