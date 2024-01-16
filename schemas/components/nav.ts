/* Nav Schema */

export default {
  title: 'Nav',
  name: 'nav',
  type: 'document',
  fields: [
    {
      title: 'Display',
      name: 'display',
      type: 'string',
    },
    // This is the name that gets displayed on the nav bar
    {
      title: 'Override Name',
      name: 'overrideName',
      type: 'string',
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'actionButton'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'display',
    },
    prepare({title}: any) {
      return {
        title: `${title} (Nav)`,
      }
    },
  },
}
