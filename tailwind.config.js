module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'merienda' : 'Merienda',
        'cinzel':'"Cinzel Decorative"'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
