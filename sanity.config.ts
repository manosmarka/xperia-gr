import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity-schemas'

export default defineConfig({
  name: 'default',
  title: 'xperia-gr',

  projectId: '7aynmatb',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: 'online-workshop',
        title: 'New Online Workshop',
        schemaType: 'workshop',
        value: {
          format: 'online',
          difficulty: 'beginner',
          title: 'Workshop: ',
        },
      },
      {
        id: 'daily-news',
        title: 'Daily AI News',
        schemaType: 'news',
        value: () => ({
          headline: `AI Update - ${new Date().toLocaleDateString()}`,
          date: new Date().toISOString(),
          tags: ['AI', 'Update'],
        }),
      },
    ],
  },
})
