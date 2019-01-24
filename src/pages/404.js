import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import { Headline, Paragraph } from '../styles/typography'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Space y={50} />
      <Headline as="h1">NOT FOUND</Headline>
      <Space y={20} />
      <Paragraph>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Paragraph>
      <Paragraph as={Link} to="/">
        Go back to the homepage
      </Paragraph>
      <Space y={50} />
    </Container>
  </Layout>
)

export default NotFoundPage
