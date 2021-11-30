const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/my-portfolio-v2/'
    }
} : {}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    base: '/my-portfolio-v2/'
  },
  head: {
    title: 'World Wide Well',
    htmlAttrs: {
      lang: 'ja',
      class: 'has-navbar-fixed-top'
    },
    bodyAttrs: {
      class: 'body'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma',
    '~/assets/css/common'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollto'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
