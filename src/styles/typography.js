import styled from '@emotion/styled'

import theme from './theme'
import { rem, media } from './tools'

export const headline = {
  fontWeight: 700,
  fontSize: rem(24),
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

export const postStyles = {
  'h1, h2, h3, h4, h5, h6': {
    marginBottom: rem(20),
    ...headline,
    '&:not(:first-child)': {
      marginTop: rem(50),
    },
  },
  h1: { fontSize: rem(24) },
  h2: { fontSize: rem(20) },
  'h3, h4, h5, h6': { fontSize: rem(18) },
  'p, li': paragraph,
  a: {
    textDecoration: 'underline',
  },
  'ul li': {
    listStyle: 'inside disc',
  },
  'ol li': {
    listStyle: 'inside decimal-leading-zero',
  },
  'ul, ol': {
    marginTop: rem(30),
    marginBottom: rem(30),
  },
}

export const activeLinkStyles = {
  textDecoration: 'underline',
}

export const Headline = styled.span(
  headline,
  ({ light }) => light && { color: theme.colors.white }
)

export const Paragraph = styled.p(paragraph)
