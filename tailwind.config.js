/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#DD5A57',
          '50': '#FCF0F0',
          '100': '#F8DFDF',
          '200': '#F2BEBD',
          '300': '#EB9D9B',
          '400': '#E47B79',
          '500': '#DD5A57',
          '600': '#D22E2A',
          '700': '#A32421',
          '800': '#741A18',
          '900': '#460F0E'
        },
        "secondary": "#00b4d0",
        "terciary": "#373e4a"
      },
      fontFamily: {
        "main": ["Anton", "sans-serif"],
        "body": ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
