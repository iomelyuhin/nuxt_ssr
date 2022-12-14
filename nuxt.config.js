const BASE_URL = process.env.NODE_ENV !== 'production' ? "https://site.com" : "/"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/__variables.scss",
    "~/assets/scss/_colors.scss",
    "~/assets/scss/_fonts.scss",
    "~/assets/scss/_media.scss",
    "~/assets/scss/base.scss",
    "~/assets/fonts/stylesheet.css",
  ],

  styleResources: {
    scss: ["~/assets/scss/*.scss"],
  },

  components: false,

  modern: true,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/style-resources",
    "@nuxtjs/i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: BASE_URL,
    credentials: false,
    debug: false,
    proxy: process.env.NODE_ENV !== 'production',
  },
  proxy: {
    "/api/": `https://site.com`,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  i18n: {
    // https://i18n.nuxtjs.org/basic-usage
    vueI18nLoader: true,
    strategy: "prefix_and_default",
    defaultLocale: "en",
    lazy: true,
    langDir: "i18n",
    vueI18n: {
      fallbackLocale: "en",
    },
    locales: [
      {
        code: "ru",
        name: "??????????????",
        file: "ru.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
    silentTranslationWarn: true,
    silentFallbackWarn: true,
  },
}
