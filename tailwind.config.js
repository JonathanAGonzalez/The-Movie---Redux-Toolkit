const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'], //font lato
    },
    colors: {
      'special-gray': '#f5F0F0',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
