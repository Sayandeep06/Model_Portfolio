/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f2',
          100: '#ffede8',
          200: '#ffdcd2',
          300: '#FFCDB2', // Your first color
          400: '#ffbea2',
          500: '#ffae92',
          600: '#FFB4A2', // Your second color
          700: '#ff9482',
          800: '#ff8472',
          900: '#ff7462',
        },
        rose: {
          50: '#fdf2f3',
          100: '#fbe6e7',
          200: '#f5d0d3',
          300: '#E5989B', // Your third color
          400: '#e08588',
          500: '#db7275',
          600: '#B5838C', // Your fourth color
          700: '#a27580',
          800: '#8f6773',
          900: '#7c5966',
        },
        // Adding a neutral palette based on the B5838C for text and backgrounds
        neutral: {
          50: '#faf6f7',
          100: '#f5eff0',
          200: '#e8dfe1',
          300: '#d9cfd1',
          400: '#c5b5b8',
          500: '#b5a1a4',
          600: '#997f83',
          700: '#7d6569',
          800: '#614d50',
          900: '#453638',
        },
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'], // Playful main headings
        'daruma': ['Darumadrop One', 'cursive'], // Cute bubble-like font
        'dancing': ['Dancing Script', 'cursive'], // Flowing script for accents
        'comfort': ['Comfortaa', 'cursive'], // Cute rounded font for body
        'josefin': ['Josefin Sans', 'sans-serif'], // Elegant thin font for details
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 