const fontPreloadHeaders = [
  // proxima-nova 700
  'Link: <https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n7&v=3>; rel=preload; as=font; crossorigin',
  // proxima-nova 400
  'Link: <https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n4&v=3>; rel=preload; as=font; crossorigin',
  // Typekit stylesheet
  'Link: <https://use.typekit.net/kwu3otz.css>; rel=preload; as=style',
]

const fontPreloads = [
  // {
  //   // proxima-nova 400
  //   rel: 'preload',
  //   as: 'font',
  //   type: 'font/woff2',
  //   crossorigin: 'crossorigin',
  //   href:
  //     'https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n4&v=3',
  // },
]

const fontStyleSheets = [
  {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/kwu3otz.css',
  },
]

const fontFaces = [
  // {
  //   '@font-face': {
  //     fontFamily: 'proxima-nova',
  //     fontStyle: 'normal',
  //     fontWeight: 400,
  //     src: `url("${proximaNova_woff2}") format("woff2"),
  //           url("${proximaNova_woff}") format("woff")`,
  //   },
  // },
]

module.exports = {
  fontPreloadHeaders,
  fontPreloads,
  fontStyleSheets,
  fontFaces,
}
