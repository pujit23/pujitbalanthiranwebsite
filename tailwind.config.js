/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0e27',
          light: '#151932',
          dark: '#050812',
        },
        orange: {
          DEFAULT: '#ff6b35',
          light: '#ff8c5a',
          dark: '#e55a2b',
        },
        pink: {
          DEFAULT: '#ff6b9d',
          light: '#ff8db8',
          dark: '#e55a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
