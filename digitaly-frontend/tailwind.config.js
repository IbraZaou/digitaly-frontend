/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'button-gradient-blue-start': '#001233',
        'button-gradient-blue-end': '#003699',
        'h2-color': '#001233'
      },
    },
  },
  plugins: [],
}

