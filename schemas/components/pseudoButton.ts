/* Pseudo Button Schema */

export default {
  title: 'Pseudo Button',
  name: 'pseudoButton',
  type: 'document',
  fields: [
    {
      title: 'display',
      name: 'display',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'display',
    },
    prepare({title}: any) {
      return {
        title: `${title ? title : ''} (Pseudo Button)`,
      }
    },
  },
}
