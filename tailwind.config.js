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
          400: '#98A2B3',
        },
        pry: {
          blue: {
            light: '#009DE0',
            dark: '#354B9E',
          },
          gray: {
            border: '#F0F0F0',
          },
        },
        sec: {
          main: '#141522',
        },
      },
    },
  },
  plugins: [],
};
