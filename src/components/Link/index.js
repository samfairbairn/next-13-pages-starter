import { cn } from "@/lib/helpers"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const Link = ({ href, children, className, activeClassName, scroll, shallow, ...props }) => {
  const pathname = usePathname()
  const isProtocol = useMemo(() => href?.startsWith("mailto:") || href?.startsWith("tel:"), [href])
  const isAnchor = useMemo(() => href?.startsWith("#"), [href])
  const isExternal = useMemo(() => href?.startsWith("http"), [href])
  const isActive = useMemo(() => pathname === href, [pathname, href])

  if (typeof href !== "string") {
    return <button {...props}>{children}</button>
  }

  if (isProtocol || isExternal) {
    return (
      <a {...props} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      passHref={isAnchor}
      shallow={shallow}
      scroll={scroll}
      className={cn(className, isActive ? activeClassName : null)}
      {...props}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {typeof children === "function" ? children({ isActive }) : children}
    </NextLink>
  )
}

export default Link
