import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { rem } from '../../styles/tools'

import SEO from '../../components/SEO'
import Layout from '../../layouts/index'
import Container from '../../components/Container'
import Space from '../../components/Space'
import Post from '../../components/Post'
import { Headline } from '../../styles/typography'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <SEO title="Blog" />
        <Container as="section" narrow>
          <Space y={100} />
          <Headline as="h1">Latest Stories</Headline>
          <Space y={60} />
          <ul css={{ display: 'grid', gridGap: rem(60) }}>
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
          <Space y={100} />
        </Container>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
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
