import { useRef, useEffect } from 'react'
import { TimelineMax } from '../lib/gsap'

export const useTimeline = (options = {}) => {
  const tl = useRef(new TimelineMax(options))

  useEffect(() => () => tl.current && tl.current.kill(), [])

  return tl.current
}

export const useControlledTimeline = (options, playProp) => {
  const tl = useTimeline(options)

  useEffect(
    () => {
      tl.paused(!playProp)
    },
    [playProp]
  )

  return tl
}
