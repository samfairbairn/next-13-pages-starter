/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-quad": `cubic-bezier(0.11, 0, 0.5, 0)`,
        "out-quad": `cubic-bezier(0.5, 1, 0.89, 1)`,
        "in-out-quad": `cubic-bezier(0.45, 0, 0.55, 1)`,
        "in-cubic": `cubic-bezier(0.32, 0, 0.67, 0)`,
        "out-cubic": `cubic-bezier(0.33, 1, 0.68, 1)`,
        "in-out-cubic": `cubic-bezier(0.65, 0, 0.35, 1)`,
        "in-quart": `cubic-bezier(0.5, 0, 0.75, 0)`,
        "out-quart": `cubic-bezier(0.25, 1, 0.5, 1)`,
        "in-out-quart": `cubic-bezier(0.76, 0, 0.24, 1)`,
        "in-expo": `cubic-bezier(0.7, 0, 0.84, 0)`,
        "out-expo": `cubic-bezier(0.16, 1, 0.3, 1)`,
        "in-out-expo": `cubic-bezier(0.87, 0, 0.13, 1)`,
        "out-back": `cubic-bezier(0.34, 1.56, 0.64, 1)`,
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      /* example app colors */
      green: {
        light: colors.lime["200"],
        DEFAULT: colors.lime["400"],
        dark: colors.lime["600"],
      },
      blue: {
        light: colors.sky["200"],
        DEFAULT: colors.sky["400"],
        dark: colors.sky["600"],
      },
      purple: {
        light: colors.violet["200"],
        DEFAULT: colors.violet["400"],
        dark: colors.violet["600"],
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3.5rem",
      "5xl": "5rem",
    },
  },
  plugins: [
    require("./src/styles/type.plugin"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".h-screen-s": {
          height: ["100vh /* fallback for Opera, IE and etc. */", "100svh"],
        },
        ".h-screen-d": {
          height: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
        },
      })
    }),
  ],
}
