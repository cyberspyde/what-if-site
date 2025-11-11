/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#7C3AED',
        'brand-secondary': '#8B5CF6',
        'brand-accent': '#A78BFA',
        'brand-background': '#DBEAFE',
        'brand-surface': '#BFDBFE',
        'brand-card': '#93C5FD',
        'brand-dark': '#312E81',
        'brand-light': '#312E81',
        'brand-muted': '#4F46E5',
        'brand-gradient-start': '#7C3AED',
        'brand-gradient-end': '#8B5CF6',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slow-pulse': 'slow-pulse 4s infinite ease-in-out',
        'draw-line': 'draw-line 1s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.7' },
        },
        'draw-line': {
          'from': { 'stroke-dashoffset': '1000' },
          'to': { 'stroke-dashoffset': '0' },
        },
      },
    },
  },
  plugins: [],
};
