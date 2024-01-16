/* Standalone text Schema */

export default {
  title: 'Standalone Text',
  name: 'standaloneText',
  type: 'document',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Preview',
      name: 'preview',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'preview',
    },
    prepare({title}: any) {
      return {
        title: `${title ? `${title} -` : ''} (Standalone Text)`,
      }
    },
  },
}
