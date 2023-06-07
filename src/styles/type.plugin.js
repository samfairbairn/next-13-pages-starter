const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addUtilities, theme }) {
  const typeTitle = {
    fontFamily: theme("fontFamily.inter"),
    letterSpacing: theme("letterSpacing.wide"),
    fontWeight: theme("fontWeight.bold"),
    lineHeight: theme("lineHeight.tight"),
  }

  const typeBody = {
    fontFamily: theme("fontFamily.inter"),
    fontWeight: theme("fontWeight.normal"),
    lineHeight: theme("lineHeight.normal"),
    letterSpacing: theme("letterSpacing.wide"),
  }

  addUtilities({
    ".type-title": {
      ...typeTitle,
      fontSize: theme("fontSize.5xl"),
    },
    ".type-title-s": {
      ...typeTitle,
      fontSize: theme("fontSize.4xl"),
    },
    ".type-body": {
      ...typeBody,
      fontSize: theme("fontSize.xl"),
    },
  })
})
