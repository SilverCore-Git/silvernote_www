// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [],
  
  // Source directory
  srcDir: 'src/',
  
  // CSS
  css: ['@/style.css', 'bootstrap-icons/font/bootstrap-icons.css'],
  
  // Build configuration
  build: {
    transpile: ['gsap']
  },

  // Tailwind CSS configuration
  tailwindcss: {
    exposeConfig: true,
    inlineConfig: {
      theme: {
        extend: {}
      }
    }
  },

  // Vite configuration
  vite: {
    ssr: {
      external: ['gsap']
    }
  },

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Silvernote est une application de prise de notes moderne, rapide et sécurisée. Organisez vos idées, dossiers et tags, sur tous vos appareils.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'SilverCore' },
        { name: 'publisher', content: 'SilverCore' },
        { name: 'language', content: 'fr' },
        { name: 'rating', content: 'general' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.silvernote.fr/' }
      ]
    }
  },


})
