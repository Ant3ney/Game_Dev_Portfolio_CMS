/* Page Schema */

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'pageDisplayName',
      title: 'Page Display name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageDisplayName',
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, '').slice(0, 200),
      },
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Page builder',
      of: [{type: 'subscribeToNewsLetter'}],
    },
  ],
  preview: {
    select: {
      title: 'pageDisplayName',
    },
    prepare({title}: any) {
      return {
        title: `${title} (Page)`,
      }
    },
  },
}
