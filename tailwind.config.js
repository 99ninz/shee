/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#FFF9E5",
          DEFAULT: "#FFD700",
          pastel: "#FFE89E"
        },
        white: "#FFFFFF"
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.20)"
      },
      backdropBlur: {
        glass: '12px'
      }
    },
  },
  plugins: [],
}