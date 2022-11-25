/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryColor : '#4397A4',
        footerbg : '#486A6F'
      },
      backgroundImage : {
        'hero' : 'url(../public/background.png)'
      }
    },
  },
  plugins: [],
}
