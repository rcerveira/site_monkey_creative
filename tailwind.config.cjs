module.exports = {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFDE00',
        'background-light': '#FFFFFF',
        'background-dark': '#0f0f0f',
        'surface-light': '#F3F4F6',
        'surface-dark': '#1E1E1E',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        hard: '4px 4px 0px 0px rgba(0,0,0,1)',
        'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'hard-white': '4px 4px 0px 0px rgba(255,255,255,1)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-sm': 'float-sm 3s ease-in-out infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scrolling-bg': 'scrolling-bg 40s linear infinite',
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        slip: 'slip 0.6s ease-in-out',
        'slide-out': 'slide-out 1s ease-in forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'scrolling-bg': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slip: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-20px) rotate(-5deg)' },
          '40%': { transform: 'translateX(20px) rotate(5deg)' },
          '60%': { transform: 'translateX(-10px) rotate(-2deg)' },
          '80%': { transform: 'translateX(10px) rotate(1deg)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateX(-120vw) rotate(-720deg)', opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
