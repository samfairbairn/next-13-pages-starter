"use client"

import { cn } from "@/lib/helpers"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

const GSAPBlock = ({ className, left }) => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: 0 },
      {
        x: left ? "-100%" : "100%",
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "top top",
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      },
    )
  }, [])
  return <div ref={ref} className={cn("w-full h-[4vh]", className)}></div>
}

export default GSAPBlock
