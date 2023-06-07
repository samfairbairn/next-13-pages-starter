"use client"

import { Link } from "@/components"
import { cn } from "@/lib/helpers"
import { useStore } from "@/lib/store"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { shallow } from "zustand/shallow"

const Menu = () => {
  const [navIsOpened, setNavIsOpened] = useStore(
    ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
    shallow,
  )

  const pathname = usePathname()

  useEffect(() => {
    setNavIsOpened(false)
  }, [pathname])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-screen h-screen-d flex flex-col items-center justify-center",
        "bg-purple-dark z-40 pointer-events-none -translate-y-full transition-transform ease-out-quart duration-500",
        "type-title-s text-white",
        navIsOpened && "pointer-events-auto translate-y-0",
      )}
    >
      <Link className="my-2" activeClassName="cursor-default" href="/">
        {({ isActive }) => (
          <span className="flex items-center">
            <span className={cn("mr-4", isActive ? "opacity-100" : "opacity-0")}>☞</span>home
          </span>
        )}
      </Link>
      <Link className="my-2" activeClassName="cursor-default" href="/about">
        {({ isActive }) => (
          <span className="flex items-center">
            <span className={cn("mr-4", isActive ? "opacity-100" : "opacity-0")}>☞</span>about
          </span>
        )}
      </Link>
    </div>
  )
}

export default Menu
