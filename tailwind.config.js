/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", './pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['Pixel', 'sans-serif'],
        'DMsans': ['Dmsans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

