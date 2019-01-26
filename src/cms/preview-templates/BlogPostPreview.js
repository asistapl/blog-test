import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Fragment>
    <BlogPostTemplate
      title={entry.getIn(['data', 'title'])}
      date={widgetFor('date')}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
      tags={entry.getIn(['data', 'tags'])}
    />
  </Fragment>
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
