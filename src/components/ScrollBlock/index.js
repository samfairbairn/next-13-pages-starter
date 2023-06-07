"use client"

import { useLenis } from "@studio-freight/react-lenis"
import { useState } from "react"
import { useWindowSize } from "react-use"
import useMeasure from "react-use-measure"

import { clamp, truncate } from "../../lib/maths"

const ScrollBlock = () => {
  const [inView, setInView] = useState(0)
  const [progress, setProgress] = useState(0)
  const [ref, bounds] = useMeasure()
  const { height: windowHeight, width: windowWidth } = useWindowSize()

  useLenis(
    ({ scroll }) => {
      const top = bounds.top - scroll
      const inView = top + bounds.height > 0 && top < windowHeight
      setInView(inView)
      if (inView) {
        setProgress(
          clamp(
            truncate((scroll + windowHeight - bounds.top) / (bounds.height + windowHeight), 3),
            0,
            1,
          ),
        )
      }
    },
    [bounds, inView, windowHeight, windowWidth],
  )

  return (
    <div ref={ref} className="flex flex-col items-center justify-center w-full h-full type-body">
      <span>in view progress</span>
      <span>{progress}</span>
    </div>
  )
}

export default ScrollBlock
