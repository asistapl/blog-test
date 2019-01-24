import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../layouts/index'
import Container from '../components/Container'
import Space from '../components/Space'
import { Headline, Paragraph } from '../styles/typography'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <Space y={50} />
      <Headline as="h1">Hi from the second page</Headline>
      <Space y={20} />
      <Paragraph>Welcome to page 2</Paragraph>
      <Paragraph as={Link} to="/">
        Go back to the homepage
      </Paragraph>
      <Space y={50} />
    </Container>
  </Layout>
)

export default SecondPage
