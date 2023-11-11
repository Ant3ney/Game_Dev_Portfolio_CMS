/* Pivotal Content Schema */

export default {
  title: 'Pivotal Content',
  name: 'pivotalContent',
  type: 'document',
  fields: [
    {
      title: 'section_id_for_scroll',
      name: 'section_id_for_scroll',
      type: 'string',
    },
    {
      title: 'Margin and Padding',
      name: 'marginAndPadding',
      type: 'reference',
      to: [{type: 'marginAndPadding'}],
    },
    {
      title: 'Display',
      name: 'display',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'display',
    },
    prepare({title}: any) {
      return {
        title: `${title} (Pivotal Content)`,
      }
    },
  },
}
