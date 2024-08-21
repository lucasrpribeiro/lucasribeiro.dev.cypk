module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './modules/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],

  theme: {
    colors: {
      white: '#fff',
      background: {
        300: '#1e181e',
        500: '#191a1e'
      },
      primary: {
        200: "#f4908b",
        300: "#ea6f69",
        500: "#e8615a",
        600: "#9c3230",
        700: "#5e2122",
        800: "#451717",
        900: "#3c181a"
      },
      secondary: {
        500: "#2be4ea",
        900: "#295459",
        500: "#fed33f"
      }
    }
  },
  plugins: [],
}