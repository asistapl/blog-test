import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  let tags = entry.getIn(['data', 'tags'])

  // Make sure tags filed exist and make sure it's an array
  // because Preview component requires an array
  tags = tags ? Array.from(tags) : tags

  return (
    <Fragment>
      <BlogPostTemplate
        title={entry.getIn(['data', 'title'])}
        date={widgetFor('date')}
        description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
        tags={tags}
      />
    </Fragment>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
