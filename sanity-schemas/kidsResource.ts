import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'kidsResource',
  title: 'AI for Kids Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
            {title: '5-8', value: '5-8'},
            {title: '9-12', value: '9-12'},
            {title: '13+', value: '13+'},
        ]
      }
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'safetyNote',
      title: 'Safety Note',
      type: 'string',
    }),
  ],
})
