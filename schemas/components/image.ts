export default {
  name: 'imageDocument',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'reference',
      to: [{type: 'spansBoldsAndBreaks'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'reference',
      to: [{type: 'standaloneText'}],
    },
  ],
}
