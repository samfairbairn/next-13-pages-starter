// import { Cursor, CustomHead, Scrollbar } from '@studio-freight/compono'
import { Header, Menu } from "@/components"
import { cn } from "@/lib/helpers"
import { Lenis, useLenis } from "@studio-freight/react-lenis"
import Router from "next/router"
import { useEffect } from "react"

export function Layout({
  seo = { title: "", description: "", image: "", keywords: "" },
  children,
  theme = "light",
  className,
}) {
  const lenis = useLenis()

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

  return (
    <>
      {/* <CustomHead {...seo} /> */}
      <div className={cn(className)}>
        {/* <Cursor />
          <Scrollbar /> */}
        <Header />
        <Lenis root>{children}</Lenis>
        <Menu />
      </div>
    </>
  )
}
