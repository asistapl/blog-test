import React from 'react'
import Observer from 'react-intersection-observer'
import simpleStyled from '../styles/simpleStyled'

const observed = Component => ({
  rootMargin = '-20%',
  triggerOnce = true,
  ...rest
}) => (
  <Observer rootMargin={rootMargin} triggerOnce={triggerOnce}>
    {({ inView, ref }) => <Component ref={ref} inView={inView} {...rest} />}
  </Observer>
)

export const FadeInWrapper = simpleStyled('div')(
  ({ inView, duration = 1000, delay = 0 }) => ({
    opacity: inView ? 1 : 0,
    transitionProperty: 'opacity',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  })
)

export const SlideInWrapper = simpleStyled('div')(
  ({ inView, duration = 1000, delay = 0 }) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(80px)',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  })
)

export const SlideLeftWrapper = simpleStyled('div')(
  ({ inView, translate = 100, duration = 1000, delay = 0 }) => ({
    opacity: inView ? 1 : 0,
    transform: `translate(${inView ? '0' : `${translate}px`})`,
    willChange: 'opacity, transform',
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.3, 0.8, 0.2, 1)',
  })
)

export const FadeIn = observed(FadeInWrapper)
export const SlideIn = observed(SlideInWrapper)
export const SlideLeft = observed(SlideLeftWrapper)
