export default {
  name: 'booking',
  title: 'Bookings',
  type: 'document',
  fields: [
    {
      name: 'bookingId',
      title: 'Booking ID',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tour',
      title: 'Tour Package',
      type: 'reference',
      to: [{ type: 'tour' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customerPhone',
      title: 'Customer Phone',
      type: 'string',
    },
    {
      name: 'numberOfTravelers',
      title: 'Number of Travelers',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Failed', value: 'failed' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'stripePaymentId',
      title: 'Stripe Payment ID',
      type: 'string',
    },
    {
      name: 'stripeSessionId',
      title: 'Stripe Session ID',
      type: 'string',
    },
    {
      name: 'specialRequirements',
      title: 'Special Requirements',
      type: 'text',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'bookingId',
    },
  },
};