// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/eslint"],

  googleFonts: {
    overwriting: true,
    families: {
      'Rajdhani': {
        wght: [400, 500, 600, 700, 800],
      },
      'VT323': {
        wght: [400, 500, 600, 700, 800],
      },
    },
    display: 'swap',
  },

})