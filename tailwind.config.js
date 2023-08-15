/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "logo-teal": "#6ac3ba",
        "logo-pink": "#f067a0",
        secondary: "#999",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
