import React from 'react'

import { rem } from '../styles/tools'

import Link from './Link'
import Space from './Space'
import { Headline, Paragraph } from '../styles/typography'

const Post = ({ as: Component, slug, title, date, excerpt, ...props }) => (
  <Component {...props}>
    <Link to={slug}>
      <Headline as="h2">{title}</Headline>
    </Link>
    <Paragraph as="small" css={{ fontSize: `${rem(14)} !important` }}>
      {date}
    </Paragraph>
    <Space y={20} />
    <Paragraph>
      {excerpt}
      <Space y={20} />
      <Link to={slug}>Keep Reading →</Link>
    </Paragraph>
  </Component>
)

export default Post
