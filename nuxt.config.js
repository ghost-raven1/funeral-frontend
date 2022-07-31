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
    { src: '@plugins/injectComponents.js' },
    { src: '@plugins/vee-validate.js' },
    { src: '@plugins/maska.js' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images',
    'nuxt-compress'
  ],

  optimizedImages: {
    optimizeImages: false
  },

  styleResources: {
    scss: ['./assets/scss/resources.scss']
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-material-design-icons-iconfont',
    "vue-toastification/nuxt",
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '89787737',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ],
    [
      "nuxt-social-meta",
      {
        url: "https://ritual70.netlify.app/",
        title: "Центр Ритуальных Услуг",
        site_name: "Центр Ритуальных Услуг",
        description: "Интернет-каталог товаров ритуальных услуг",
        img: "static/icon.png",
        img_size: { width: "80", height: "80" },
        locale: "ru_RU",
        twitter: "@ritual",
        twitter_card: "static/icon.png",
        theme_color: "#FFFFFF"
      }
    ],
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192
        },
        brotli: {
          threshold: 8192
        }
      }
    ]
  ],

  axios: {
    baseURL: 'https://ritual-70-frontend.onrender.com/api/'
  },

  pwa: {
    manifest: {
      lang: 'ru',
      icon: false,
      // display: 'browser',
      display: 'standalone',
      workbox: {},
      meta: {
        name: 'Ritual Shop',
        short_name: 'Ritual',
        author: 'ghost1',
        description: '',
        nativeUI: true
      }
    }
  },

  build: {
    productionSourceMap: false,
    productionGzip: true,
    transpile: ["vee-validate/dist/rules"],
    productionGzipExtensions: ['js', 'css', 'svg'],
    extend(config) {
      config.node = { fs: 'empty' };
    },
    babel: {
      compact: false
    }
  }
}
