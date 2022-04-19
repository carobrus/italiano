module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/images/cinque-terre.jpg')",
      },
      colors: {
        'primary-red': '#CD212A',
        'secondary-red': '#90171D', // 30
        'tertiary-red': '#A41A22', // 20
        'primary-green': '#008C45',
        'secondary-green': '#006230', // 30
        'primary-dark': '#2c2c2c',
      },
      maxWidth: {
        'custom': '1280px',
      }
    },
  },
  plugins: [],
}
