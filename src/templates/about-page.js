import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import { Content, HTMLContent } from '../components/Content'
import { Headline, postStyles } from '../styles/typography'

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent: PageContent = Content,
}) => (
  <Container as="section" narrow>
    <Space y={100} />
    <Headline as="h2">{title}</Headline>
    <Space y={60} />
    <PageContent content={content} css={postStyles} />
    <Space y={100} />
  </Container>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO title="About" />
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
