import styled from '@emotion/styled'

import theme from './theme'
import { rem, media } from './tools'

export const headline = {
  fontWeight: 700,
  fontSize: rem(24),
  color: theme.colors.black,
}

export const paragraph = {
  fontWeight: 400,
  fontSize: rem(16),
  lineHeight: 1.6,
  color: theme.colors.grey_500,
  [media.laptop]: {
    fontSize: 18,
    lineHeight: 1.9,
  },
}

export const Headline = styled.span(
  headline,
  ({ light }) => light && { color: theme.colors.white }
)

export const Paragraph = styled.p(paragraph)
