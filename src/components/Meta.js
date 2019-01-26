import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'

import globalStyles from '../styles/globalStyles'
import { fontPreloads, fontStyleSheets } from '../styles/fonts'

const Meta = () => (
  <Fragment>
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
  </Fragment>
)

export default Meta
