const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      red: colors.rose,
      yellow: colors.amber,
      cream: '#fff0ad',
    },
    gridTemplateColumns: {
      'fill-40': 'repeat(auto-fill, 15rem)',
    },
    extend: {},
  },
  variants: {
    extend: {
      width: ['hover, group-hover'],
      display: ['group-hover']
    },
  },
  plugins: [],
}
