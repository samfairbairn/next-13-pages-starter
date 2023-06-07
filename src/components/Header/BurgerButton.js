"use client"

import { cn } from "@/lib/helpers"
import { useStore } from "@/lib/store"
import { shallow } from "zustand/shallow"

import styles from "./burgerButton.module.css"

const BurgerButton = () => {
  const [navIsOpened, setNavIsOpened] = useStore(
    ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
    shallow,
  )

  return (
    <div
      tabIndex="0"
      role="button"
      className={cn(
        styles["burger-menu"],
        `relative flex items-center justify-center ml-6 cursor-pointer `,
        navIsOpened ? styles["is-open"] : null,
      )}
      onKeyUp={() => setNavIsOpened(!navIsOpened)}
      onClick={() => setNavIsOpened(!navIsOpened)}
    >
      <div className={styles.bars}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  )
}

export default BurgerButton
