"use client"

import { gsap } from "gsap"
import { ReactNode, useEffect, useRef } from "react"
import { useWindowSize } from "react-use"

const Parallax = ({ children, className, speed = 1, id = "parallax", top }) => {
  const trigger = useRef()
  const target = useRef()
  const timeline = useRef()
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const y = windowWidth * speed * 0.1
    const mm = gsap.matchMedia()

    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          id,
          trigger: top ? document.body : trigger.current,
          scrub: true,
          start: top ? "top top" : "top bottom",
          end: top ? "+=100%" : "bottom top",
        },
      })
      .fromTo(target.current, { y: top ? 0 : -y }, { y: y, ease: "none" })

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { reduceMotion } = context.conditions

        if (reduceMotion) {
          timeline?.current?.from(target.current, { y: 0 })
          timeline?.current?.kill()
        }
      },
    )

    return () => {
      timeline?.current?.kill()
    }
  }, [id, speed, top, windowWidth])

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  )
}

export default Parallax
