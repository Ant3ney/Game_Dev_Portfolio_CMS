/* Action Button Schema */

export default {
  title: 'Action Button',
  name: 'actionButton',
  type: 'document',
  fields: [
    {
      title: 'Display',
      name: 'display',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'onClick',
      title: 'On Click',
      type: 'string',
      options: {
        list: [
          {title: 'Link', value: 'link'},
          {title: 'Custom Action', value: 'customAction'},
          {title: 'Page Change', value: 'pageChange'},
          {title: 'Scroll to Anchor', value: 'scrollToAnchor'},
          {title: 'Download File', name: 'downloadFile'},
        ],
      },
      initialValue: 'link',
    },
    {
      name: 'anchor',
      title: 'Section ID',
      type: 'string',
      hidden: ({parent}: any) => {
        if (!parent || !parent.onClick) return true
        if (parent.onClick === 'scrollToAnchor') return false
        return true
      },
    },
    {
      name: 'file',
      title: 'File',
      type: 'reference',
      to: {type: 'fileDocument'},
      hidden: ({parent}: any) => {
        if (!parent || !parent.onClick) return true
        if (parent.onClick === 'downloadFile') return false
        return true
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      hidden: ({parent}: any) => {
        if (!parent || !parent.onClick) return true
        if (parent.onClick === 'link') return false
        return true
      },
    },
    {
      name: 'customAction',
      title: 'Action code',
      type: 'string',
      hidden: ({parent}: any) => {
        if (!parent || !parent.onClick) return true
        if (parent.onClick === 'customAction') return false
        return true
      },
    },
    {
      name: 'pageChange',
      title: 'Change Page To',
      type: 'reference',
      to: {type: 'page'},
      hidden: ({parent}: any) => {
        if (!parent || !parent.onClick) return true
        if (parent.onClick === 'pageChange') return false
        return true
      },
    },
    {
      name: 'useImage',
      title: 'Use Image',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: {type: 'imageDocument'},
      hidden: ({parent}: any) => {
        if (!parent || !parent.useImage) return true
        if (parent.useImage) return false
        return true
      },
    },
    {
      name: 'useColor',
      title: 'Use Color',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'customBackgroundColor',
      title: 'Custom Background Color',
      type: 'string',
      hidden: ({parent}: any) => {
        if (!parent || !parent.useColor) return true
        if (parent.useColor) return false
        return true
      },
    },
    {
      name: 'changeNav',
      title: 'Change Nav',
      type: 'reference',
      to: {type: 'nav'},
    },
  ],
  preview: {
    select: {
      title: 'display',
    },
    prepare({title}: any) {
      return {
        title: `${title} (Action Button)`,
      }
    },
  },
}
