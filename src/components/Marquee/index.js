"use client"

import { cn } from "@/lib/helpers"
import { wrap } from "@/lib/maths"
import { useLenis } from "@studio-freight/react-lenis"
import Tempus from "@studio-freight/tempus"
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { useIntersection, useWindowSize } from "react-use"
import useMeasure from "react-use-measure"

const Marquee = ({
  children,
  className,
  baseVelocity = -4,
  watchVelocity = false,
  changeDirection = false,
}) => {
  const [baseXPos, setBaseXPos] = useState(0)
  const { width: windowWidth } = useWindowSize()
  const [innerRef, bounds] = useMeasure()
  const currentVelocity = useRef(0)
  const directionFactor = useRef(1)
  const ref = useRef(null)
  const intersection = useIntersection(ref, { threshold: 0 })

  const repetitions = useMemo(
    () => (windowWidth && bounds.width ? Math.ceil(windowWidth / bounds.width) + 1 : 1),
    [bounds, windowWidth],
  )

  useLenis(({ velocity }) => {
    if (changeDirection) {
      if (velocity > 0) {
        directionFactor.current = 1
      } else if (velocity < 0) {
        directionFactor.current = -1
      }
    }

    if (watchVelocity) {
      currentVelocity.current = velocity
    }
  })

  function onFrame(time, deltaTime) {
    const v = watchVelocity ? (currentVelocity.current * baseVelocity * 0.1) / deltaTime : 0
    let moveby = directionFactor.current * baseVelocity * (deltaTime / 1000)
    setBaseXPos((baseXPos) => baseXPos + moveby + v)
  }

  const xPos = useMemo(() => {
    let bottom = -100 / (repetitions + 1)
    return `${wrap(0, bottom, baseXPos)}%`
  }, [baseXPos])

  useEffect(() => {
    if (intersection?.isIntersecting) Tempus.add(onFrame, 0)
    return () => Tempus.remove(onFrame)
  }, [intersection])

  return (
    <div ref={ref} className={cn("overflow-hidden whitespace-nowrap flex flex-nowrap", className)}>
      <div
        className="whitespace-nowrap flex flex-nowrap leading-none "
        style={{ transform: `translate3d(${xPos}, 0, 0)` }}
      >
        <div ref={innerRef}>{children}</div>
        {[...Array(repetitions)].map((a, i) => (
          <div key={`marquee-part-${i}`}>{children}</div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
