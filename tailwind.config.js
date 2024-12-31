/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e293b',
        'secondary': '#334155',
        'accent': '#4ade80',
        'text': '#f8fafc'
      },
      fontFamily: {
        'sans': ['Chakra Petch', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 