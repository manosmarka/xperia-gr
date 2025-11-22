import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workshop',
  title: 'Workshop / Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
    }),
    defineField({
      name: 'eventNameEl',
      title: 'Event Name (Greek)',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'summaryEl',
      title: 'Short Summary (Greek)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'startDateTime',
      title: 'Start Date/Time',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
            {title: 'Kids', value: 'kids'},
            {title: 'Starter', value: 'starter'},
            {title: 'Pro', value: 'pro'},
        ]
      }
    }),
    defineField({
      name: 'syllabus',
      title: 'Syllabus',
      type: 'file',
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
    }),
  ],
})
