import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ lang, title, description, keywords, meta }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaKeywords = keywords || data.site.siteMetadata.keywords

      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          titleTemplate={`%s • ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            metaKeywords.length > 0
              ? {
                  name: 'keywords',
                  content: metaKeywords.join(', '),
                }
              : {},

            // Facebook
            {
              property: 'og:site_name',
              content: data.site.siteMetadata.siteName,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              name: 'og:locale',
              content: lang,
            },
            {
              property: 'og:url',
              content: data.site.siteMetadata.siteUrl,
            },
            {
              name: 'og:image',
              content: data.facebookImage.childImageSharp.fixed.src,
            },
            {
              property: 'og:type',
              content: 'website',
            },

            // Twitter
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
            {
              name: 'twitter:url',
              content: data.site.siteMetadata.siteUrl,
            },
            {
              name: 'twitter:site',
              content: data.site.siteMetadata.twitterSite,
            },
            {
              name: 'twitter:creator',
              content: data.site.siteMetadata.twitterCreator,
            },
            {
              name: 'twitter:image',
              content: data.twitterImage.childImageSharp.fixed.src,
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },

            ...meta,
          ]}
        />
      )
    }}
  />
)

SEO.defaultProps = {
  lang: 'en',
  keywords: [],
  meta: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        siteName
        twitterCreator
        twitterSite
      }
    }
    facebookImage: file(relativePath: { eq: "share-image.jpg" }) {
      childImageSharp {
        fixed(width: 1200, height: 630, quality: 80, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitterImage: file(relativePath: { eq: "share-image.jpg" }) {
      childImageSharp {
        fixed(width: 1024, height: 512, quality: 80, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default SEO
