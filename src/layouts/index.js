import React from 'react'
import { Link } from 'gatsby'

import theme from '../styles/theme'
import { rem } from '../styles/tools'

import Meta from '../components/Meta'
import Container from '../components/Container'
import { Headline, activeLinkStyles } from '../styles/typography'

const Navbar = ({ ...props }) => (
  <div
    css={{
      position: 'sticky',
      zIndex: 1,
      top: 0,
      padding: `${rem(30)} 0`,
      color: theme.colors.white,
      backgroundColor: theme.colors.black,
    }}
    {...props}
  >
    <Container css={{ display: 'flex', alignItems: 'center' }}>
      <Headline light as={Link} to="/">
        Logo
      </Headline>
      <nav css={{ marginLeft: 'auto' }}>
        <ul css={{ display: 'grid', gridAutoFlow: 'column', gridGap: rem(40) }}>
          <li>
            <Link to="/" activeStyle={activeLinkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyles}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog/"
              activeStyle={activeLinkStyles}
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { style: activeLinkStyles } : null
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link to="/tags/" activeStyle={activeLinkStyles}>
              Tags
            </Link>
          </li>
          <li>
            <Link to="/404/" activeStyle={activeLinkStyles}>
              404
            </Link>
          </li>
          <li>
            <Link to="/404dev/" activeStyle={activeLinkStyles}>
              404 dev
            </Link>
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
  <div css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Meta />
    <Navbar />
    <main css={{ flexGrow: 1 }}>{children}</main>
    <Footer />
  </div>
)

export default Layout
