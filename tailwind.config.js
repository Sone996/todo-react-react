module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reactBlue: '#282c34',
        lightBlue: '#666666',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
