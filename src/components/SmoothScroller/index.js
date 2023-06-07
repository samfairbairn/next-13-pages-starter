"use client"

import { useLenis } from "@studio-freight/react-lenis"
import Tempus from "@studio-freight/tempus"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Router from "next/router"
import { useEffect } from "react"
import { useIsomorphicLayoutEffect } from "react-use"

import { useStore } from "../../lib/store"

if (typeof window !== "undefined") {
  window.scrollTo(0, 0)
  window.history.scrollRestoration = "manual"
}

const SmoothScroller = () => {
  const lenis = useLenis(ScrollTrigger.update)
  useEffect(ScrollTrigger.refresh, [lenis])

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.defaults()

    // merge rafs
    gsap.ticker.lagSmoothing(0)
    gsap.ticker.remove(gsap.updateRoot)
    Tempus.add((time) => {
      gsap.updateRoot(time / 1000)
    }, 0)

    // reset scroll position
    window.scrollTo(0, 0)
    window.history.scrollRestoration = "manual"
  }, [])

  const navIsOpened = useStore(({ navIsOpened }) => navIsOpened)

  useEffect(() => {
    if (navIsOpened) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, navIsOpened])

  useEffect(() => {
    function onHashChangeStart(url) {
      url = "#" + url.split("#").pop()
      lenis.scrollTo(url)
    }

    Router.events.on("hashChangeStart", onHashChangeStart)

    return () => {
      Router.events.off("hashChangeStart", onHashChangeStart)
    }
  }, [lenis])

  return <></>
}

export default SmoothScroller
