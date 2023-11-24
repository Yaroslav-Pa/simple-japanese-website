/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('/src/img/main-min.jpg')"
      },
      gridTemplateColumns: {
        'two200': 'repeat(2, minmax(200px,250px))',
        'three300': 'repeat(3, minmax(200px,300px))',
      }
    },
  },
  plugins: [],
}

