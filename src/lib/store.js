import { create } from "zustand"

export const useStore = create((set) => ({
  navIsOpened: false,
  setNavIsOpened: (value) => set({ navIsOpened: value }),
}))
