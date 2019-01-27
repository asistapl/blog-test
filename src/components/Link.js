import React from 'react'
import { Link as GatsbyReachRouterLink } from 'gatsby'
import { OutboundLink as GoogleAnalyticsOutboundLink } from 'gatsby-plugin-google-analytics'

// <Link to="" />
// <Link out href="https://asista.pl" />
// <Link noindex href="https://asista.pl" />
// <Link partial activeStyle={{...}} to="/blog/" />
// <Link partial activeClassName="..." to="/blog/" />

const Link = ({
  out = false,
  noindex = false,
  partial = false,
  activeStyle,
  activeClassName,
  getProps: userGetProps,
  ...props
}) => {
  const Component = props.to
    ? GatsbyReachRouterLink
    : GoogleAnalyticsOutboundLink
  const target = out && { target: '_blank' }
  const rel = (out || noindex) && {
    rel: `${out ? 'noopener noreferrer' : ''} ${noindex ? 'noindex' : ''}`,
  }
  const getProps = props.to && {
    getProps: args => {
      let _props = {}

      if (args.isCurrent || (partial && args.isPartiallyCurrent)) {
        if (activeStyle) {
          _props.style = { ...props.style, ...activeStyle }
        }
        if (activeClassName) {
          _props.className = `${props.className || ''} ${activeClassName}`
        }
      }

      if (userGetProps) {
        _props = { ..._props, ...userGetProps(args) }
      }

      return _props
    },
  }

  return <Component {...target} {...rel} {...getProps} {...props} />
}

export default Link
