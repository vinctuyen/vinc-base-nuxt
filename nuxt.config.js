export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.TITLE,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/style.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/vee-validate.js", "~/plugins/i18n.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "cookie-universal-nuxt",
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
    babel: { compact: true },
    transpile: ["vee-validate/dist/rules"],
  },
  axios: {
    // baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },
  router: {
    base: "/",
    middleware: "i18n",
    routeNameSplitter: "/",
    extendRoutes(routes) {
      routes.push({
        path: "/",
        redirect: {
          name: "",
        },
      });
    },
  },
  // env: {
  //   baseUrl: process.env.BASE_URL || "http://localhost:3000",
  //   apiUrl: process.env.API_URL,
  // },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL,
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
};
