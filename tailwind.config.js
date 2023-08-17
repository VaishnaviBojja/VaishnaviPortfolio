/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '520px',
      // => @media (min-width: 640px) { ... }

      'md': '798px',
      // => @media (min-width: 768px) { ... }

      'lg': '998px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1080px',
      // => @media (min-width: 1280px) { ... }

      
    },
    extend: {
      keyframes: {
        heartBeat:{
          '0%': {transform: 'scale(1);'},
          '14%': {transform: 'scale(1.3);'},
          '28%': {transform: 'scale(1);'},
          '42%': {transform: 'scale(1.3);'},
          '70%': {transform: 'scale(1);'},
        },
        
        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-3deg)'
          },
          '50%': {
              transform: 'rotate(3deg)'
          },
      }

        
      },
      animation: {
        heartBeat: 'heartBeat 1s infinite',
          wiggle: 'wiggle 1s ease-in-out infinite'

      },
    },
  },
  plugins: [
    
  ],
}

