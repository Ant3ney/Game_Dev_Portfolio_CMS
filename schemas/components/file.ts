/* File Schema */

export default {
  title: 'File',
  name: 'fileDocument',
  type: 'document',
  fields: [
    {
      title: 'Display',
      name: 'display',
      type: 'string',
    },
    {
      title: 'File',
      name: 'file',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'display',
    },
    prepare({title}: any) {
      return {
        title: `${title} (File)`,
      }
    },
  },
}
