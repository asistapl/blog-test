import styled from '@emotion/styled'
import { getBreakpoint, getBreakpointRaw } from '../styles/tools'

const Space = styled.span(({ inline, xy, x, y }) => {
  let xyObj = {}
  let xObj = {}
  let yObj = {}

  if (xy) {
    if (typeof xy === 'object') {
      xyObj = Object.entries(xy)
        .sort(([a], [b]) => getBreakpointRaw(a) - getBreakpointRaw(b))
        .reduce((acc, [key, val]) => {
          acc[getBreakpoint(key)] = {
            width: val,
            height: val,
          }
          return acc
        }, {})
    } else {
      xyObj = { width: xy, height: xy }
    }
  }

  if (x) {
    if (typeof x === 'object') {
      xObj = Object.entries(x)
        .sort(([a], [b]) => getBreakpointRaw(a) - getBreakpointRaw(b))
        .reduce((acc, [key, val]) => {
          acc[getBreakpoint(key)] = { width: val }
          return acc
        }, {})
    } else {
      xObj = { width: x }
    }
  }

  if (y) {
    if (typeof y === 'object') {
      yObj = Object.entries(y)
        .sort(([a], [b]) => getBreakpointRaw(a) - getBreakpointRaw(b))
        .reduce((acc, [key, val]) => {
          acc[getBreakpoint(key)] = { height: val }
          return acc
        }, {})
    } else {
      yObj = { height: y }
    }
  }

  return {
    display: inline ? 'inline-block' : 'block',
    ...xyObj,
    ...xObj,
    ...yObj,
  }
})

export default Space
