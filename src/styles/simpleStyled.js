import React, { forwardRef } from 'react'

const simpleStyled = Element => userStyles =>
  forwardRef(({ style, ...props }, ref) => (
    <Element
      ref={ref}
      style={{
        ...(typeof userStyles === 'function' ? userStyles(props) : userStyles),
        ...style,
      }}
      {...props}
    />
  ))

export default simpleStyled
