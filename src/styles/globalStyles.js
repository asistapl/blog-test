import { rgba } from 'polished'

import theme from './theme'
import { globalSelection } from './tools'
import { fontFaces } from './fonts'

export default [
  ...fontFaces,
  {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    ...globalSelection(rgba(theme.colors.primary, 0.99), '#fff'),

    html: {
      fontWeight: 400,
      fontSize: 16,
      fontFamily: '"proxima-nova", sans-serif',
      textSizeAdjust: '100%',
    },

    'body, figure, h1, h2, h3, h4, h5, h6, p, ol, ul, blockquote': {
      margin: 0,
      padding: 0,
      fontWeight: 'normal',
    },

    li: {
      listStyle: 'none',
      // https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
      '::before': {
        content: '"\\200B"', // zero-width space
        position: 'absolute',
      },
    },

    a: {
      textDecoration: 'none',
      color: 'inherit',
    },

    button: {
      margin: 0,
      padding: 0,
      font: 'inherit',
      color: 'inherit',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: 'transparent',
    },

    img: {
      display: 'block',
      maxWidth: '100%',
    },
  },
]
