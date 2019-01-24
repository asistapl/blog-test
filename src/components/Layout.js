import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'

import globalStyles from '../styles/globalStyles'
import { fontPreloads, fontStyleSheets } from '../styles/fonts'
import { rem } from '../styles/tools'

import Container from './Container'
import { Headline } from '../styles/typography'

const Navbar = ({ ...props }) => (
  <div
    css={{ padding: `${rem(30)} 0`, color: '#fff', backgroundColor: '#000' }}
    {...props}
  >
    <Container css={{ display: 'flex', alignItems: 'center' }}>
      <Headline light as={Link} to="/">
        Logo
      </Headline>
      <nav css={{ marginLeft: 'auto' }}>
        <ul css={{ display: 'grid', gridAutoFlow: 'column', gridGap: rem(40) }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Page 2</Link>
          </li>
          <li>
            <Link to="/404/">404</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </div>
)

const Footer = ({ ...props }) => (
  <footer
    css={{ padding: `${rem(100)} 0`, color: '#fff', backgroundColor: '#000' }}
    {...props}
  >
    <Container css={{ display: 'flex' }}>
      <Link to="/">Logo</Link>
      <span css={{ marginLeft: 'auto' }}>© {new Date().getFullYear()}</span>
    </Container>
  </footer>
)

const Layout = ({ children }) => (
  <div css={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Helmet
      link={[
        ...fontPreloads,
        ...fontStyleSheets,
        {
          type: 'text/plain',
          rel: 'author',
          href: '/humans.txt',
        },
      ]}
    />
    <Global styles={globalStyles} />

    <Navbar />
    <main css={{ flexGrow: 1 }}>{children}</main>
    <Footer />
  </div>
)

export default Layout
