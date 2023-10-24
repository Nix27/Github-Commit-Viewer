/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary-gray': '#363636',
        'darker-gray': '#282828',
        'dark': '#2E2E2E',
        'transparent-dark': 'rgba(24,24,24,0.4)',
        'primary-orange': '#EFA56F'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      '2xl': "1700px"
    }
  },
  plugins: [],
}

