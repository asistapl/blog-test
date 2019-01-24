import theme from './theme'

export const globalSelection = (bg, fg) => ({
  '::-moz-selection': {
    backgroundColor: bg,
    color: fg,
  },
  '::selection': {
    backgroundColor: bg,
    color: fg,
  },
})

export const em = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}em` : val

export const rem = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}rem` : val

export const media = Object.keys(theme.breakpoints).reduce(
  (acc, key) => {
    acc[key] = `@media (min-width: ${em(theme.breakpoints[key])})`
    acc.max[key] = `@media (max-width: ${em(theme.breakpoints[key] - 1)})`
    return acc
  },
  { max: {} }
)

export const min = width => `@media (min-width: ${em(width)})`

export const max = width => `@media (max-width: ${em(width)})`

export const getBreakpointRaw = key =>
  theme.breakpoints[key] || parseInt(key, 10)

export const getBreakpoint = key => min(getBreakpointRaw(key))

export const supportsHover = `@media (hover: hover)`

export const supportsGrid = `@supports(grid-area: auto)`

export const isRetina = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches
  }
  return false
}

export const isTouchDevice = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(hover: none)').matches
  }
  return false
}

export const disableContainerArea = {
  pointerEvents: 'none',
  '> *': { pointerEvents: 'all' },
}
