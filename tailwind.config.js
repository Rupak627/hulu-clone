/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
screens: {
  "3xl": "2160px",
      },  
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
