module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: '#2bd3d6',
        secondColor: '#ff5656',
        lightGray: '#918f8f',
        psudoElemColor: 'rgba(255, 255, 255, 0.5)', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}