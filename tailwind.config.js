/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#008CA3",
          200: "#004651",
          300: "#E0E0E0",
          400: "#f7f9fa",
          500: "#f8c954",
        }
      },
      screens: {
        ipad: "800px"
      }
    },
  },
  plugins: [],
}

