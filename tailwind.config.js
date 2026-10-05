/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        pixel: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        shadow: 'var(--shadow-color)',
        navy: {
          DEFAULT: '#0a0f1f',
          alt: '#0d1428',
          card: '#0d1428',
          dark: '#060913',
          light: '#131b33',
        },
        orange: {
          DEFAULT: '#ff6a2b',
          soft: 'rgba(255, 106, 43, 0.12)',
          border: 'rgba(255, 106, 43, 0.38)',
        },
      }
    },
  },
  plugins: [],
}
