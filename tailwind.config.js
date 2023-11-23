/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('/src/img/main-min.jpg')"
      }
    },
  },
  plugins: [],
}

