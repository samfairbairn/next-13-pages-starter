import { cn } from "@/lib/helpers"

import BurgerButton from "./BurgerButton"

const Header = () => {
  return (
    <header className={cn("fixed top-0 w-full h-20 flex items-center z-50")}>
      <BurgerButton />
    </header>
  )
}

export default Header
