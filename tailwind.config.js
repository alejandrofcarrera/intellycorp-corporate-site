// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0a0f14',
        primary: '#FFCF9D',
        secondary: '#5a189a',
        pearl: '#f2e8dc',
        hover: '#ffcf9d',
        highlight: '#90ee90',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};