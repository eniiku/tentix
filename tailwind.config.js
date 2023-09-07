/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        gray: {
          200: '#EAECFO',
          400: '#98A2B3',
          500: '#667085',
          700: '#344054',
        },
        pry: {
          black: '#303030',
          yellow: '#FFD143',
          blue: {
            light: '#009DE0',
            dark: '#354B9E',
            alt: '#369FFF',
          },
          border: {
            100: '#F0F0F0',
            200: '#DDE2E4',
          },
        },
        sec: {
          main: '#141522',
          gray: '#F6F6F6',
          gray4: '#BDBDBD',
          gray6: '#A3AED0',
          darkGrey: '#1B2559',
        },
      },
    },
  },
  plugins: [],
};
