import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },
  css: ['./app/assets/main.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxt/eslint'],

  googleFonts: {
    overwriting: true,
    families: {
      Rajdhani: {
        wght: [400, 500, 600, 700, 800],
      },
      VT323: {
        wght: [400, 500, 600, 700, 800],
      },
    },
    display: 'swap',
  },
})
