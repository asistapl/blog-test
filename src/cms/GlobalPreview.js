import React /* , { useRef, useEffect } */ from 'react'
import Helmet from 'react-helmet'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

import Meta from '../components/Meta'

// VERSION WITH HOOKS DOESN'T WORK IN PREVIEW FILES

// const GlobalPreview = ({ children }) => {
//   const iframeHead = useRef(
//     () => document.getElementsByTagName('iframe')[0].contentDocument.head
//   )
//   const cache = useRef(() => createCache({ container: iframeHead.current }))

//   useEffect(() => {
//     const linkTags = Helmet.peek().linkTags
//     const linkElements = linkTags.map(linkObject => {
//       const element = document.createElement('link')

//       Object.entries(linkObject).forEach(([key, val]) => {
//         element[key] = val
//       })

//       return element
//     })

//     linkElements.forEach(linkElement =>
//       iframeHead.current.appendChild(linkElement)
//     )
//   }, [])

//   return (
//     <CacheProvider value={cache.current}>
//       <Meta />
//       {children}
//     </CacheProvider>
//   )
// }

class GlobalPreview extends React.Component {
  constructor() {
    super()

    const iframe = document.getElementsByTagName('iframe')[0]
    this.iframeHead = iframe.contentDocument.head

    // Tell emotion to add style elements to iframe's head by
    // creating custom cache and using CacheProvider in render()
    this.cache = createCache({ container: this.iframeHead })
  }

  componentDidMount() {
    // Link tags added to head by Helmet element used in wrapped component
    const linkObjects = Helmet.peek().linkTags

    // Create DOM elements from objects
    const linkElements = linkObjects.map(linkObject => {
      const element = document.createElement('link')

      Object.entries(linkObject).forEach(([key, val]) => {
        element[key] = val
      })

      return element
    })

    // Add link elements to iframe's head
    linkElements.forEach(linkElement =>
      this.iframeHead.appendChild(linkElement)
    )
  }

  render() {
    return (
      <CacheProvider value={this.cache}>
        <Meta />
        {this.props.children}
      </CacheProvider>
    )
  }
}

export default GlobalPreview

export const withGlobalPreview = Component => props => (
  <GlobalPreview>
    <Component {...props} />
  </GlobalPreview>
)
