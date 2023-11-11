// src/deskStructure.js (.ts)
/* 
export const structure = (S: any) =>
  S.document().schemaType('config').documentId('globalConfig').views([S.view.form()])
 */
export const structure = (S: any) => {
  return S.list()
    .title('Base')
    .items([
      /* S.listItem()
        .title('Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')), */
      S.listItem()
        .title('Navigation')
        .child(
          S.list()
            .title('Navigation')
            .items([
              /* S.listItem().title('Persistant Nav').child(S.documentTypeList('persistantNav')),
              S.listItem().title('Main Nav Menu').child(S.documentTypeList('mainNavMenu')), */
              S.listItem()
                .title('Home Nav')
                .child(S.document().schemaType('homeNav').documentId('homeNav')),
              S.listItem().title('Navs').child(S.documentTypeList('nav')),
            ]),
        ),
      S.listItem()
        .title('Site Builder')
        .child(
          S.list()
            .title('Site Builder')
            .items([
              S.listItem().title('Pages').child(S.documentTypeList('page')),
              /* S.listItem().title('Standalone Text').child(S.documentTypeList('standaloneText')),
              S.listItem()
                .title('Spans, Bolds, and Breaks')
                .child(S.documentTypeList('spansBoldsAndBreaks')), */
            ]),
        ),
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem().title('Images').child(S.documentTypeList('imageDocument')),
              S.listItem().title('Standalone Text').child(S.documentTypeList('standaloneText')),
              S.listItem()
                .title('Spans, Bolds, and Breaks')
                .child(S.documentTypeList('spansBoldsAndBreaks')),
            ]),
        ),
    ])
}
