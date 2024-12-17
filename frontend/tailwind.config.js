/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3b3b',
          600: '#ed1c1c',
          700: '#c80f0f',
          800: '#a50f0f',
          900: '#891414',
          950: '#4b0404',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          hover: '#f1f5f9',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          hover: '#334155',
        },
      },
      boxShadow: {
        'glow': '0 0 15px -3px rgba(255, 59, 59, 0.1)',
        'glow-lg': '0 0 25px -5px rgba(255, 59, 59, 0.2)',
        'dark-glow': '0 0 15px -3px rgba(255, 59, 59, 0.15)',
        'dark-glow-lg': '0 0 25px -5px rgba(255, 59, 59, 0.25)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          to: {
            'background-position': '200% center',
          },
        },
      },
    },
  },
  plugins: [],
}
