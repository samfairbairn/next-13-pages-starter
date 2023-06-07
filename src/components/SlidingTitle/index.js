"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

const SlidingTitle = ({ children }) => {
  const ref = useRef(null)

  const animateIn = () => {
    gsap.to(ref.current, {
      y: "0%",
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    })
  }

  const animateOut = () => {
    gsap.to(ref.current, {
      y: "100%",
      duration: 1,
      ease: "power3.in",
    })
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      onEnter: () => animateIn(),
      onLeaveBack: () => animateOut(),
    })
  }, [])
  return (
    <div className="relative overflow-hidden type-title-s text-purple" style={[]}>
      <div ref={ref} className="translate-y-full h-full">
        {children}
      </div>
    </div>
  )
}

export default SlidingTitle
