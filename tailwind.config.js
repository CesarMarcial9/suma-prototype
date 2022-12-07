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
        "primary": "#dd5a57",
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
