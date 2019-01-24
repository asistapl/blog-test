import React from 'react'
import { Link, graphql } from 'gatsby'

import { rem } from '../styles/tools'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import Post from '../components/Post'
import { Paragraph } from '../styles/typography'

class TagPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <SEO title={tag} />
        <Container as="section" narrow>
          <Space y={100} />
          <Paragraph as="h3">{tagHeader}</Paragraph>
          <Space y={50} />
          <ul css={{ display: 'grid', gridGap: rem(50) }}>
            {posts.map(({ node: post }) => (
              <Post
                as="li"
                key={post.id}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
              />
            ))}
          </ul>
          <Space y={50} />
          <Paragraph>
            <Link to="/tags/">Browse all tags</Link>
          </Paragraph>
          <Space y={100} />
        </Container>
      </Layout>
    )
  }
}

export default TagPage

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
