/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        display: ["'Space Grotesk'", 'sans-serif'],
      },
      colors: {
        bg: '#0D1B2A',
        surface: '#162B3E',
        border: '#1E3A52',
        sand: '#C9A96E',
        'sand-light': '#E8D5A3',
        coral: '#E8735A',
        pearl: '#F0EBE1',
        sky: '#4A9EBF',
        ocean: '#061421',
        primary: '#F5ECD7',
        secondary: '#8BA5B8',
        tertiary: '#3D5A73',
        'shell-pink': '#E8C4B8',
        'coral-bright': '#FF6B47',
        'coral-soft': '#D4856A',
        'sea-foam': '#A8D5C2',
        'deep-teal': '#2A6B7C',
        'pearl-pink': '#F2DDD6',
        'driftwood': '#8B7355',
      }
    },
  },
  plugins: [],
}
