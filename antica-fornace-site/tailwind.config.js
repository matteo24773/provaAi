/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00", // Orange (Dragon Ball color)
        secondary: "#1565C0", // Blue (like Vegeta's outfit)
        accent: "#FFD600", // Yellow/gold (like Dragon Balls)
        bgLight: "#FFF9C4", // Light yellow background
        bgDark: "#333333", // Dark gray
        dbOrange: "#FF6B00", // Dragon Ball orange
        dbYellow: "#FFD600", // Dragon Ball yellow
        dbRed: "#D50000", // Red for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        dragonball: ['"Bangers"', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'power-up': 'powerUp 4s ease-in-out infinite',
        'flip-card': 'flipCard 1s ease-out forwards',
        'dragonball-glow': 'dragonBallGlow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        powerUp: {
          '0%': { boxShadow: '0 0 5px 0px #FF6B00' },
          '50%': { boxShadow: '0 0 25px 5px #FF6B00' },
          '100%': { boxShadow: '0 0 5px 0px #FF6B00' },
        },
        flipCard: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        dragonBallGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px #FFD600)' },
          '50%': { filter: 'drop-shadow(0 0 10px #FFD600)' },
        }
      },
    },
  },
  plugins: [],
}

