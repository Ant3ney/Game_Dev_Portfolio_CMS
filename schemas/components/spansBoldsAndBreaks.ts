export default {
  name: 'spansBoldsAndBreaks',
  title: 'Spans, Bolds, and Breaks',
  type: 'document',
  fields: [
    {
      title: 'Display',
      name: 'display',
      type: 'string',
    },
    {
      title: 'Spans, Bolds, and Breaks',
      name: 'spansBoldsAndBreaks',
      type: 'array',
      of: [
        {
          name: 'bold',
          title: 'Bold',
          type: 'string',
        },
        {
          name: 'break',
          title: 'Break',
          type: 'boolean',
        },
        {
          name: 'spanText',
          title: 'Span',
          type: 'string',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'display',
    },
    prepare(selection: any) {
      return {
        title: `"${selection.title ? selection.title : 'No title'}" - Spans, Bolds, and Breaks`,
      }
    },
  },
}
