module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          1000:'#171717'
        }
      },
      zIndex: {
        '100': '100',
       },
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
