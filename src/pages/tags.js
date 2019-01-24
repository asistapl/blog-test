import React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

import { rem } from '../styles/tools'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import { Headline, Paragraph } from '../styles/typography'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags" />
    <Container as="section" narrow>
      <Space y={100} />
      <Headline as="h1">Tags</Headline>
      <Space y={50} />
      <ul
        css={{
          display: 'inline-grid',
          gridAutoFlow: 'column',
          gridGap: rem(20),
        }}
      >
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Paragraph as={Link} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Paragraph>
          </li>
        ))}
      </ul>
      <Space y={100} />
    </Container>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
