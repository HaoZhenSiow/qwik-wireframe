/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        gte650: '650px',
        gte1000: '1000px',
        gte1200: '1200px',
      },
      transitionProperty: {
        py: 'padding-block',
        fs: 'font-size'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        comforter: [
          '"Comforter", cursive'
        ]
      }
    },
  },
  plugins: [],
};
