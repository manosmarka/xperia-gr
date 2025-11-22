import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'AI News Snippet',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'headlineEl',
      title: 'Headline (Greek)',
      type: 'string',
    }),
    defineField({
      name: 'sourceName',
      title: 'Source Name',
      type: 'string',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'summaryEl',
      title: 'Summary (Greek)',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
})
