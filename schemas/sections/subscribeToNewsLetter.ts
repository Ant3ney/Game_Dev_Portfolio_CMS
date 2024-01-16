/* Subscribe To News Letter Schema */

export default {
  title: 'Subscribe To News Letter',
  name: 'subscribeToNewsLetter',
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
    {
      name: 'pseudoButton',
      title: 'Pseudo Button',
      type: 'reference',
      to: [{type: 'pseudoButton'}],
    },
  ],
  preview: {
    select: {
      title: 'title.display',
    },
    prepare({title}: any) {
      return {
        title: `${title} (Subscribe To News Letter)`,
      }
    },
  },
}
