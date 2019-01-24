import { useState, useRef, useEffect } from 'react'
import debounce from 'lodash.debounce'

import { passive } from '../utils'

const useScrolledBelow = userValue => {
  const [matches, setMatches] = useState(false)
  const value = useRef(
    typeof userValue === 'function' ? userValue() : userValue
  )

  const update = () => {
    if (window.pageYOffset >= value.current) {
      !matches && setMatches(true)
    } else {
      matches && setMatches(false)
    }
  }

  useEffect(update, [])

  useEffect(() => {
    const handleResize = debounce(() => {
      value.current = typeof userValue === 'function' ? userValue() : userValue
      update()
    }, 300)

    window.addEventListener('scroll', update, passive)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', handleResize)
    }
  })

  return matches
}

export default useScrolledBelow
