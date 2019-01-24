import React from 'react'
import Observer from 'react-intersection-observer'

const WhenVisible = ({ children, className, style, ...rest }) => (
  <Observer rootMargin="-100px" triggerOnce {...rest}>
    {({ inView, ref }) => (
      <div ref={ref} className={className} style={style}>
        {children(inView)}
      </div>
    )}
  </Observer>
)

export default WhenVisible
