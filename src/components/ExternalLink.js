import React from 'react'

const ExternalLink = ({ children, noindex, ...props }) => (
  <a
    target="_blank"
    rel={`noopener noreferrer ${noindex ? 'noindex' : ''}`}
    {...props}
  >
    {children}
  </a>
)

export default ExternalLink
