// src/deskStructure.js (.ts)
export const structure = (S: any) => {
  return S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Navigation')
        .child(
          S.list()
            .title('Navigation')
            .items([
              S.listItem().title('Main Nav Menu').child(S.documentTypeList('mainNavMenu')),
              S.listItem().title('Nav Menus').child(S.documentTypeList('navMenu')),
            ]),
        ),
      S.listItem().title('Footer').child(S.document().schemaType('footer').documentId('footer')),
      S.listItem().title('Pages').child(S.documentTypeList('page')),
      S.listItem()
        .title('Saved Data')
        .child(
          S.list()
            .title('Saved Data')
            .items([
              S.listItem().title('Images').child(S.documentTypeList('imageStorage')),
              S.listItem().title('Events').child(S.documentTypeList('event')),
              S.listItem().title('Cards').child(S.documentTypeList('card').title('Cards')),
            ]),
        ),
    ])
}
