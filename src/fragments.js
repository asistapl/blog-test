import { graphql } from 'gatsby'

export const containerWide = graphql`
  fragment containerWide on File {
    childImageSharp {
      fluid(maxWidth: 1480, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageWide = graphql`
  fragment pageWide on File {
    childImageSharp {
      fluid(maxWidth: 2500, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageWide_noBase64 = graphql`
  fragment pageWide_noBase64 on File {
    childImageSharp {
      fluid(maxWidth: 2500, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`
