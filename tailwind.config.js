/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'background': {
        DEFAULT: "#000000",
        dark: "#000000",
        light: "#ffffff"
      },
      'text': {
        DEFAULT: "#ffffff",
        light: "#0000000",
        dark: "#ffffff"
      },
      'text-light': {
        DEFAULT: "#ffffff7E",
        light: "#0000007E",
        dark: "#ffffff7E",
      },
      '': {},
    },
    extend: {},
  },
  plugins: [],
}