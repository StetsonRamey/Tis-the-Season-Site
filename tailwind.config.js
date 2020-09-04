const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["2020-rehang.html"],
  theme: {
    extend: {
      colors: {
        'logo-teal': '#6ac3ba',
        'logo-pink': '#f067a0',
        'secondary': '#999',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
