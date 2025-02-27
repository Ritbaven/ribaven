/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'earth': "url('./assets/earth-sunrise.jpg')",
        'pacifica': "url('./assets/pacifica.png')",
      }
    },
  },
  plugins: [],
}

