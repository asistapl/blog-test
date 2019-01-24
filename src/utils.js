let supportsPassiveListener = false
const noop = () => {}
try {
  const opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line
    get() {
      supportsPassiveListener = true
    },
  })
  window.addEventListener('testPassive', noop, opts)
  window.removeEventListener('testPassive', noop, opts)
} catch (e) {}

export const passive = supportsPassiveListener ? { passive: true } : false

export const isBrowser = typeof window !== 'undefined'
