module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'noedisplay': ['Noe Display', 'sans-serif'],
        'gilroybold': ['Gilroy-Bold', 'sans-serif'],
        'gilroylight': ['Gilroy-Light', 'sans-serif']
      },
      backgroundImage:{
        'autumn': "url('/src/img/background-autumn.jpg')",
        'lake': "url('/src/img/background-lake.jpg')"
      }
    },
  },
  plugins: [],
}
