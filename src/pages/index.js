import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import Image from '../components/Image'
import { Headline, Paragraph } from '../styles/typography'

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Space y={50} />
      <Headline as="h1">Hi people</Headline>
      <Space y={20} />
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Paragraph as={Link} to="/page-2/">
        Go to page 2
      </Paragraph>
      <Space y={50} />
    </Container>
  </Layout>
)

export default IndexPage
