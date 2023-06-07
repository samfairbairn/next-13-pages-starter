import { cn } from "@/lib/helpers"
import { useStore } from "@/lib/store"
import "@/styles/globals.css"
import { useLenis } from "@studio-freight/react-lenis"
import Tempus from "@studio-freight/tempus"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Inter } from "next/font/google"
import { useEffect } from "react"

if (typeof window !== "undefined") {
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
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function App({ Component, pageProps }) {
  const lenis = useLenis(ScrollTrigger.update)
  useEffect(() => ScrollTrigger.refresh(), [lenis])

  const navIsOpened = useStore(({ navIsOpened }) => navIsOpened)

  useEffect(() => {
    if (navIsOpened) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, navIsOpened])

  return (
    <main className={cn(inter.variable)}>
      <Component {...pageProps} />
    </main>
  )
}
