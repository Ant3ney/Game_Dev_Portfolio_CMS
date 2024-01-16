/* Home Nav Schema */

export default {
  title: 'Home Nav',
  name: 'homeNav',
  type: 'document',
  fields: [
    {
      title: 'Home Nav',
      name: 'homeNav',
      type: 'reference',
      to: [{type: 'nav'}],
    },
    {
      title: 'Short Name',
      name: 'shortName',
      type: 'string',
    },
    {
      title: 'Right Nav',
      name: 'rightNav',
      type: 'reference',
      to: [{type: 'nav'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Home Nav`,
      }
    },
  },
}
