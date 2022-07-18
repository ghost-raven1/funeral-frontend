export default {
  target: 'static',

  head: {
    title: 'Ритуальные услуги',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  plugins: [
    { src: '@plugins/injectComponents.js' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: ['./assets/scss/resources.scss']
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-material-design-icons-iconfont'
  ],

  axios: {
    baseURL: process.env.BASE_URL
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
    babel: {
      compact: false
    }
  }
}
