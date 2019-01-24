import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import { rem } from '../styles/tools'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import { Content, HTMLContent } from '../components/Content'
import { Headline, Paragraph, postStyles } from '../styles/typography'

export const BlogPostTemplate = ({
  content,
  contentComponent: PostContent = Content,
  description,
  date,
  tags,
  title,
}) => (
  <Container as="section" narrow>
    <Space y={100} />
    <Headline as="h1">{title}</Headline>
    <Paragraph as="small" css={{ fontSize: `${rem(14)} !important` }}>
      {date}
    </Paragraph>
    <Space y={20} />
    <Paragraph>{description}</Paragraph>
    <Space y={50} />
    <PostContent content={content} css={postStyles} />
    <Space y={50} />
    {tags && tags.length && (
      <div>
        <Headline as="h4">Tags</Headline>
        <Space y={20} />
        <ul
          css={{
            display: 'inline-grid',
            gridAutoFlow: 'column',
            gridGap: rem(20),
          }}
        >
          {tags.map(tag => (
            <li key={`${tag}tag`}>
              <Paragraph as={Link} to={`/tags/${kebabCase(tag)}/`}>
                {tag}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    )}
    <Space y={100} />
  </Container>
)

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const BlogPost = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  </Layout>
)

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
