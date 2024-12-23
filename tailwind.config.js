/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        squarepeg: ['Square Peg', 'cursive'],
      },
    },
  },
  plugins: [],
}

