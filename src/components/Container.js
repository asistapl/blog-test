import styled from '@emotion/styled'

import theme from '../styles/theme'
import { media, rem } from '../styles/tools'

const Container = styled.div([
  {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: theme.gap,
    paddingLeft: theme.gap,

    [media.tablet]: {
      paddingRight: rem(30),
      paddingLeft: rem(30),
    },

    [media.laptop]: {
      paddingRight: rem(60),
      paddingLeft: rem(60),
    },
  },
  ({ narrow }) => ({
    maxWidth: narrow
      ? theme.maxTextContainerWidth
      : theme.maxPageContainerWidth,
  }),
])

export default Container
