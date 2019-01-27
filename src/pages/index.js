import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import { Headline, Paragraph } from '../styles/typography'

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Space y={50} />
      <Headline as="h1">Hi people</Headline>
      <Space y={20} />
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
      <Space y={20} />
      <div style={{ maxWidth: 300 }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <Space y={50} />
    </Container>
  </Layout>
)

export default IndexPage
